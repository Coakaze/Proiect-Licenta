import { Button } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './CartButton.css';

const CartButton = () => {
    const globalState = useContext(CartContext);
    const noItems = globalState.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);
    return (
        // <Button variant="warning">
        //     <span>Your Cart </span>
        //     <Badge className="ms-2" bg="danger">{noItems}</Badge>
        // </Button>
        <Link to="/cart">
            <div className="icon"><iconify-icon icon="ph:shopping-cart-simple-light" width="25" height="25"></iconify-icon>
                <span className='badge badge-warning' id='lblCartCount'> {noItems} </span>
            </div>
        </Link>


    );
}

export default CartButton;