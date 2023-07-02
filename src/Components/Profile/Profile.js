import TopBar from "../../TopBar"
import Header from "../../Header"
import Footer from "../../Footer"
import UserData from "./UserData";
import '../../App.css';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Profile() {
    return (
        <>
            <TopBar />
            <Header isProfile={true} />
            <>
                <div style={{ width: "70%" }} className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div style={{ width: "80%" }} className="d-flex justify-content-between">
                                <h1 style={{ fontSize: "1.8rem" }} className="text-left mb-4">Profilul tau!</h1>
                            </div>
                            <UserData createOrder={false}></UserData>
                        </div>
                    </div>
                </div>
            </>

            < Footer />
        </>
    )
}