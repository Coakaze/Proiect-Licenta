import TopBar from "../../TopBar";
import Header from "../../Header";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useAuth } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import CartContent from "./CartContent";

export default function Cart() {
    const globalState = useContext(CartContext);
    const emptyCart = globalState.items.length === 0;
    const { currentUser } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (!currentUser) {
            navigate('/acasa');
        }
    })
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <div className="container">
                {!emptyCart && <h1 style={{ fontSize: "30px" }} className="mt-5 mb-4">Cosul Dumneavoastra</h1>}
                {emptyCart && <h1 style={{ fontSize: "30px" }} className="text-center mt-5 mb-4">Cosul dumneavoastra este gol</h1>}
            </div>

            {!emptyCart && <CartContent emptyCart={emptyCart}></CartContent>}
            <Footer></Footer>
        </>
    )
}