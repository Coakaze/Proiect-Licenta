import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ReactComponent as PlusSVG } from "../../assets/img/cartImages/plus.svg";
import { ReactComponent as MinusSVG } from "../../assets/img/cartImages/minus.svg";

const CartItem = (props) => {
    const globalState = useContext(CartContext);
    const navigate = useNavigate();
    const { name, price, img1, dim, amount } = props.desc;
    const [productAmount, setProductAmount] = useState(props.desc.amount);
    const handleDeleteButton = () => {
        globalState.deleteItem(props.desc.id);
    }
    const handleClickImage = () => {
        navigate(`/detalii-produs/${props.desc.id}`);
    };
    const addToAmount = () => {
        const item = {
            id: props.desc.id,
            amount: 1,
            name: props.desc.name,
            price: props.desc.price,
            dim: props.desc.dim,
            img1: props.desc.img1,
            description: props.desc.description
        }
        globalState.addItem(item);
    }
    const removeFromAmount = () => {
        if (props.desc.amount === 1) {
            globalState.deleteItem(props.desc.id);
        }
        else {
            const item = {
                id: props.desc.id,
                amount: -1,
                name: props.desc.name,
                price: props.desc.price,
                dim: props.desc.dim,
                img1: props.desc.img1,
                description: props.desc.description
            }
            globalState.addItem(item);
        }

    }
    return (
        <div style={{ boxShadow: "none" }} className="card mb-3">
            <div class="item">
                <div class="buttons">
                    <span onClick={handleDeleteButton} class="delete-btn"></span>
                    <span class="like-btn"></span>
                </div>

                <div onClick={handleClickImage} class="cart-image image">
                    <img id="cart-item-image" style={{ height: "80px", width: "80" }} src={props.desc.img1} alt="" />
                </div>

                <div class="description2">
                    <span>{name}</span>
                    <span>{dim}mm</span>
                </div>

                <div class="quantity">
                    <button onClick={addToAmount} class="plus-btn2" type="button" name="button">
                        <i style={{ color: "#616060" }} class="fas fa-plus"></i>
                    </button>
                    {/* <input type="text" name="name" value={props.desc.amount} /> */}
                    <span>{props.desc.amount}</span>
                    <button onClick={removeFromAmount} class="minus-btn2" type="button" name="button">
                        <i style={{ color: "#616060" }} class="fas fa-minus"></i>
                    </button>
                </div>

                <div class="total-price">{props.desc.price * props.desc.amount} Lei</div>
            </div>

        </div>

    );
}

export default CartItem;