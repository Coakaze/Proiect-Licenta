import { RouterProvider } from 'react-router-dom';
import { CartProvider } from '../../Context/CartContext';
import { useAuth } from '../../Context/AuthContext';

const CartWrapper = (props) => {
    let { currentUser } = useAuth();
    return (
        <>
            {currentUser && <CartProvider>
                <RouterProvider router={props.route}></RouterProvider>
            </CartProvider>}
            {!currentUser && <RouterProvider router={props.route}></RouterProvider>}
        </>

    );
}

export default CartWrapper;