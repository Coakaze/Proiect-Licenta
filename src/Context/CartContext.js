import { createContext } from "react";
import { useReducer, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "../firebase";
import { setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import Loader from 'react-spinners/CircleLoader';

const setCart = (state, { items, amount }) => {
    return {
        ...state,
        items: items,
        amount: amount,
    };
};

const cartState = (state, action) => {
    if (action.type === "SET_CART") {
        return setCart(state, action);
    }
    if (action.type === 'ADD_ITEM') {
        let itemExist = false;
        for (let element of state.items) {
            if (element.id === action.menuItem.id) {
                element.amount += action.menuItem.amount;
                state.amount += action.menuItem.price * action.menuItem.amount;
                itemExist = true;
                break;
            }
        }
        if (!itemExist) {
            state.items = state.items.concat(action.menuItem);
            state.amount += action.menuItem.price * action.menuItem.amount;
        }

        state.items.forEach(element => {
            console.log('img1:');
            console.log(element.img1);
            setDoc(doc(db, `users/${action.userId}/cart`, element.id), {
                amount: element.amount,
                price: element.price,
                name: element.name,
                dim: element.dim,
                img1: element.img1
            });
        })

        return {
            items: state.items,
            amount: state.amount
        }
    }
    if (action.type === 'DELETE_ITEM') {
        const itemToDelete = state.items.findIndex((obj) => obj.id === action.itemId);
        state.amount -= state.items[itemToDelete].price * state.items[itemToDelete].amount;
        state.items.splice(itemToDelete, 1);
        const deleteProducts = async () => {
            await deleteDoc(doc(db, `users/${action.userId}/cart`, action.itemId));
        }
        deleteProducts();

        return {
            items: state.items,
            amount: state.amount
        }
    }
    if (action.type === 'DELETE_CART') {
        const deleteProducts = () => {
            state.items.forEach(async (product) => {
                await deleteDoc(doc(db, `users/${action.userId}/cart`, product.id));
            })
        }
        deleteProducts();
        return {
            items: [],
            amount: 0
        }
    }
    //return emptyCartState;
}

function removeEmptyObject(arr) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === 'empty');

    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }

    return arr;
}

export const CartContext = createContext();

export const CartProvider = props => {
    const emptyCartState = {
        items: [],
        amount: 0,
    };
    const { currentUser } = useAuth();
    const [braceletProducts, setBraceletProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const productCollectionRef = collection(db, `users/${currentUser.uid}/cart`);

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productCollectionRef);
            setBraceletProducts(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setLoading(false);
        };
        getProducts();
    }, []);

    const [cart, dispatch] = useReducer(cartState, emptyCartState);

    useEffect(() => {
        let amount = 0;
        const cartProducts = removeEmptyObject(braceletProducts);
        cartProducts.forEach((element) => {
            amount += element.price * element.amount;
        });
        dispatch({ type: "SET_CART", items: cartProducts, amount });

    }, [braceletProducts]);

    const addItemToCart = (item) => {
        dispatch({ type: "ADD_ITEM", menuItem: item, userId: currentUser.uid });
    };

    const deleteItemFromCart = (id) => {
        dispatch({ type: "DELETE_ITEM", itemId: id, userId: currentUser.uid });
    };

    const deleteEntireCart = () => {
        dispatch({ type: "DELETE_CART", userId: currentUser.uid });
    };

    const cartContext = {
        items: cart.items,
        amount: cart.amount,
        addItem: addItemToCart,
        deleteItem: deleteItemFromCart,
        deleteCart: deleteEntireCart,
    };
    // if (cartContext.items.length && loading === true) {
    //     setLoading(false);
    // }
    return (
        <CartContext.Provider value={cartContext}>
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
                    props.children
                )
            }

        </CartContext.Provider>
    );
}
