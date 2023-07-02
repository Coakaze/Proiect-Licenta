import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

export default function CartContent(props) {
    const globalState = useContext(CartContext);
    const navigate = useNavigate();
    const cartList = globalState.items.map(item => <CartItem key={item.id} desc={item}></CartItem>);
    return (
        <>
            {<div style={{ width: "80%", margin: "auto" }}>
                <div className="row">
                    <div className="col-md-9">
                        <div class="shopping-cart">
                            {cartList}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ boxShadow: "none", pointerEvents: "none" }} className="card">
                            <div style={{ width: '80%' }} className="my-2 lh-base mx-auto" >
                                <div className="no-hover">
                                    <h2 style={{ fontSize: "20px", fontWeight: "bold" }} className="font-weight-bold mb-3">Sumar Comanda</h2>
                                </div>
                                <div style={{ fontWeight: "100" }} className="d-flex justify-content-between">
                                    <span>Cost produse:</span>
                                    <span>{globalState.amount} Lei</span>
                                </div>
                                <div style={{ fontWeight: "100" }} className="d-flex justify-content-between mb-2">
                                    <span>Cost livrare:</span>
                                    <span style={{ color: "#27c444", fontWeight: "700" }}>GRATUIT</span>
                                </div>
                                <hr />
                                <div style={{ fontWeight: "500" }} className="d-flex justify-content-between">
                                    <span style={{ fontSize: "1.2rem" }}>Total:</span>
                                    <span style={{ fontSize: "1.2rem" }}> {globalState.amount} Lei</span>
                                </div>

                            </div>
                            <button onClick={() => { navigate('/sumar-comanda'); }} style={{ pointerEvents: "auto" }} type="button" class="btn">Continua</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}