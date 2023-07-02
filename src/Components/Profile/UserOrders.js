import Header from "../../Header";
import TopBar from "../../TopBar";
import Footer from "../../Footer";
import Loader from 'react-spinners/CircleLoader';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../Context/AuthContext";

function UserOrders() {
    const titleRef = useRef(null);
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState();
    const [orderProducts, setOrderProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(currentUser.uid);
    const q = collection(db, 'orders');
    useEffect(() => {
        const getOrders = async () => {
            const data = await getDocs(q);
            const data2 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const filteredData = data2.filter((doc) => doc.userId === currentUser.uid);
            const tempOrderProducts = [];
            for (const data of filteredData) {
                const orderProductsRef = collection(db, `orders/${data.id}/products`);
                const dataProducts = await getDocs(orderProductsRef);
                const dataProducts2 = dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filteredProducts = dataProducts2.filter((product) => product.id !== "empty");
                tempOrderProducts.push(filteredProducts);
            }
            setOrderProducts(tempOrderProducts);
            setUserData(filteredData);
            setLoading(false);
        };
        getOrders();
    }, [])
    console.log(orderProducts);
    console.log(userData);

    return (
        <>
            <TopBar></TopBar>
            <Header isProfile={true}></Header>
            {
                loading ? (
                    <div className="Loader">
                        <Loader
                            size={50}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                ) : (
                    <div style={{ pointerEvents: "none" }} className="container mb-4">
                        {userData.length ? (
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Istoric comenzi</h3>
                        ) : (
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "40px" }}>Nu exista comenzi anterioare.</h3>
                        )}

                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {userData && userData.map((order, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Comanda cu nr. {order.id}</h5>
                                            <p className="card-text">Data plasare comanda: {order.orderDate}</p>
                                            <p className="card-text">Adresa de livrare: {order.address}</p>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Nume Produs</th>
                                                        <th scope="col">Cantitate</th>
                                                        <th scope="col">Pret</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderProducts[index] && orderProducts[index].map((product, i) => (
                                                        <tr key={i}>
                                                            <td>{product.name}</td>
                                                            <td>{product.amount}</td>
                                                            <td>{product.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <p className="card-text">Totalul comenzii: {order.totalAmount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }


            <Footer></Footer>
        </>
    )
}

export default UserOrders;