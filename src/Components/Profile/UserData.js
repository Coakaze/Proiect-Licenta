import Loader from 'react-spinners/CircleLoader';
import { useState, useEffect } from "react"
import '../../App.css';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase"

function UserData(props) {
    const { currentUser } = useAuth();
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setDoc(doc(db, `users/${currentUser.uid}`), {
            email: currentUser.email,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            address: address,
            postalCode: postalCode
        });
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
                                        className="form-control"
                                        id="#acasa1"
                                        placeholder={'Telefon'}
                                        value={phoneNumber}

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

                                    />
                                </div>
                            </div>
                        </div>
                        {!props.createOrder && <div className="form-group row text-start">
                            <div className="col-sm-4">
                                <button id="purpleGradient" type="submit" className="btn btn-primary">Salveaza</button>
                            </div>
                        </div>}
                    </form>
                )


            }
        </>

    )
}

export default UserData;