import React from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { useAuth } from './Context/AuthContext';
import './App.css';

function ProductCard({ product }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`/detalii-produs/${product.id}`);
  };
  const globalState = useContext(CartContext);

  const addToCart = (amount) => {
    amount = 1;
    const item = {
      id: product.id,
      amount: 1,
      name: product.name,
      price: product.price,
      dim: product.dim,
      img1: product.imageUrl,
      description: product.description
    }
    console.log(item);
    globalState.addItem(item);
  }

  return (
    // <div className="card" style={{ width: '10rem' }}>
    //   <img style={{ height: '10rem', objectFit: 'cover' }} src={require(`./assets/img/bratari/${product.img1}`)} className="card-img-top" alt="product" />
    //   <div className="card-body">
    //     <p style={{ fontSize: "0.8rem" }} className="card-title">{product.name}</p>
    //     <p style={{ fontSize: "0.7rem" }} className="card-text">{product.dim} mm</p>
    //     <p style={{ fontSize: "0.7rem" }} className="card-text">{product.price} RON</p>
    //     <button onClick={addToCart} style={{ height: "5%", width: "100%" }} type="button" class="btn btn-primary btn-sm">Adauga in cos!</button>
    //   </div>
    // </div>
    <div className="wsk-cp-product">
      <div className="wsk-cp-img">
        <img src={product.imageUrl} alt="Product" className="img-responsive" />
      </div>
      <div className="wsk-cp-text">
        <div onClick={handleClickProduct} className="category">
          <span>Detalii</span>
        </div>
        <div className="title-product">
          <h3>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h3>
        </div>
        <div id="description-product" className="description-prod">
          <p>{product.name}</p>
        </div>
        <div className="card-footer">
          <div className="wcf-left"><span className="price">{product.price} Lei</span></div>
          {/* <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div> */}
          {currentUser && <div className="wcf-right">
            <a onClick={addToCart} className="buy-btn"><iconify-icon icon="material-symbols:add-shopping-cart"></iconify-icon></a>
          </div>}
          {!currentUser && <div className="wcf-right">
            <a className="buy-btn"><iconify-icon className="tooltip" icon="material-symbols:add-shopping-cart"><span className="tooltiptext">Aaaa</span></iconify-icon></a>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
