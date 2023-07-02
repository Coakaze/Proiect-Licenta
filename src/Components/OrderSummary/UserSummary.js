import Loader from 'react-spinners/CircleLoader';
import { useState, useEffect, useContext } from "react"
import '../../App.css';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../firebase"
import { CartContext } from '../../Context/CartContext';

function createCurrentDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today
}

function UserSummary(props) {
    const { currentUser } = useAuth();
    const globalState = useContext(CartContext);
    const navigate = useNavigate();
    const q = collection(db, 'users');
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    useEffect(() => {
        if (!currentUser) {
            navigate('/acasa');
        }
    })

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(q);
            const data2 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const finalData = data2.filter((doc) => doc.id === currentUser.uid);
            setUserData(finalData);
            setFirstName(finalData[0].firstName);
            setLastName(finalData[0].lastName);
            setPhoneNumber(finalData[0].phone);
            setAddress(finalData[0].address);
            setPostalCode(finalData[0].postalCode);
        }
        getProducts();
    }, [])

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleInvalidInput = (event) => {

        const inputValue = event.target.value;
        if (!/^\d{10}$/.test(inputValue)) {
            event.target.setCustomValidity('Introduceti un numar de telefon valid.');
        }
        else {
            event.target.setCustomValidity('');
        }
    }

    const handleKeyPressNumber = (event) => {
        if (
            (event.which < 48 || event.which > 57) &&
            (event.which !== 8 && event.which !== 46)
        ) {
            event.preventDefault();
        }
    };

    const handleKeyPressCharacters = (event) => {
        if (
            (event.which >= 48 && event.which <= 57) &&
            (event.which !== 8 && event.which !== 46)
        ) {
            event.preventDefault();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const docRef = await addDoc(collection(db, "orders"), {
            userId: currentUser.uid,
            email: currentUser.email,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            address: address,
            postalCode: postalCode,
            totalAmount: globalState.amount,
            orderDate: createCurrentDate()
        });
        await setDoc(doc(db, `orders/${docRef.id}/products`, 'empty'), {});
        props.cartData.forEach((product) => {
            setDoc(doc(db, `orders/${docRef.id}/products`, product.id), {
                name: product.name,
                amount: product.amount,
                price: product.price * product.amount
            });
        })
        globalState.deleteCart();
        navigate('/comanda-finalizata');
    };

    if (userData && loading === true) {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }

    return (
        <>
            {
                loading ? (
                    <div className="Loader" >
                        <Loader
                            size={50}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                ) : (
                    <form className="mb-4" onSubmit={handleSubmit}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Adresa si datele dumneavoastra</h3>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Email:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="ic:outline-email" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input style={{ height: "33.5px", fontSize: "0.9rem" }}
                                        type="text"
                                        className="form-control forbidden-input"
                                        id="#acasa1"
                                        placeholder={userData[0].email}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Nume:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="material-symbols:person" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input onChange={handleLastNameChange} style={{ height: "34px", fontSize: "0.9rem" }}
                                        type="text"
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Numele'}
                                        value={lastName}
                                        required
                                        onInvalid={(e) => { e.target.setCustomValidity('Introduceti numele.'); }}
                                        onInput={(e) => { e.target.setCustomValidity(''); }}
                                        onKeyDown={handleKeyPressCharacters}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Prenume:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="material-symbols:person" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input onChange={handleFirstNameChange} style={{ height: "34px", fontSize: "0.9rem" }}
                                        type="text"
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Prenumele'}
                                        value={firstName}
                                        required
                                        onInvalid={(e) => { e.target.setCustomValidity('Introduceti prenumele.'); }}
                                        onInput={(e) => { e.target.setCustomValidity(''); }}
                                        onKeyDown={handleKeyPressCharacters}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Telefon:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="material-symbols:phone-enabled" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input onChange={handlePhoneNumberChange} style={{ height: "34px", fontSize: "0.9rem" }}
                                        type="text"
                                        pattern="\d{10}"
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Telefon'}
                                        value={phoneNumber}
                                        required
                                        onInvalid={handleInvalidInput}
                                        onKeyDown={handleKeyPressNumber}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Adresa:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="mdi:address-marker-outline" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input onChange={handleAddressChange} style={{ height: "34px", fontSize: "0.9rem" }}
                                        type="text"
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Adresa'}
                                        value={address}
                                        required
                                        onInvalid={(e) => { e.target.setCustomValidity('Introduceti adresa.'); }}
                                        onInput={(e) => { e.target.setCustomValidity(''); }}
                                        onKeyDown={handleKeyPressCharacters}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label">Cod Postal:</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><iconify-icon icon="ph:house" width="20" height="20"></iconify-icon></div>
                                    </div>
                                    <input onChange={handlePostalCodeChange} style={{ height: "34px", fontSize: "0.9rem" }}
                                        type="text"
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Cod postal'}
                                        value={postalCode}
                                        required
                                        onInvalid={(e) => { e.target.setCustomValidity('Introduceti codul postal.'); }}
                                        onInput={(e) => { e.target.setCustomValidity(''); }}
                                        onKeyDown={handleKeyPressNumber}
                                    />
                                </div>
                            </div>
                        </div>
                        {!props.createOrder &&
                            <button style={{ width: "200px" }} type="submit" className="btn-order m-3 float-md-end btn-primary">Plaseaza Comanda!</button>
                        }
                    </form>
                )


            }
        </>

    )
}

export default UserSummary;