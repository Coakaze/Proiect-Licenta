import React from 'react';

function CartDisplay(props) {
    const { cartData } = props;
    let cartTotalPrice = 0;
    cartData.forEach((product) => {
        cartTotalPrice += product.amount * product.price;
    })
    return (
        <>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Sumar Comanda</h3>
            {cartData.map((product) => (
                <React.Fragment key={product.name}>
                    <div className="row mb-2">
                        <div className="col-6">{product.amount} x {product.name}</div>
                        <div className="col-6 text-end">{product.price * product.amount} Lei</div>
                    </div>
                    <hr className='orderSummaryHr' />
                </React.Fragment>
            ))}
            <div style={{ fontSize: "1.4rem", color: "black" }} className="float-end">Total: {cartTotalPrice} Lei</div>
        </>

    );
}

export default CartDisplay;