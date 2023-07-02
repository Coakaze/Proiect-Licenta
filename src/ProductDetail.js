import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.js';
import TopBar from './TopBar.js';
import Footer from './Footer.js';
import Loader from 'react-spinners/CircleLoader';
import { db, storage } from './firebase.js';
import { getDoc, doc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import { CartContext } from './Context/CartContext.js';

function ProductDetail() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [imgURL, setImgURL] = useState();
    const globalState = useContext(CartContext);
    const params = useParams();
    const docRef = doc(db, "bratari", `${params.id}`);
    //const imageListRef = ref(storage, `product-images/${}`);


    useEffect(() => {
        const getProductDetails = async () => {
            const data = await getDoc(docRef);
            if (data.data() === undefined) {
                console.log('no found');
                navigate('/eroare');
            }
            const mappedProduct = data.data();
            mappedProduct.id = data.id;
            const imageListRef = ref(storage, `product-images-details-edit/${data.data().img1}`);
            const url = await getDownloadURL(imageListRef);
            setImgURL(url);
            setProduct(mappedProduct);
            setLoading(false);
        };
        getProductDetails();
    }, []);
    console.log()
    const addToCart = (amount) => {
        amount = 1;
        const item = {
            id: product.id,
            amount: 1,
            name: product.name,
            price: product.price,
            dim: product.dim,
            img1: imgURL,
            description: product.description
        }
        globalState.addItem(item);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading ? (
                <div className="Loader">
                    <Loader
                        size={50}
                        color={"#123abc"}
                        loading={loading}
                    />
                </div>
            ) : (
                <>
                    <TopBar />
                    <Header />
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-start">
                                <div className="col-md-5">
                                    <img className="card-img-top product-detail-image" src={imgURL} alt="..." />
                                    {/* <ImageCropper src={imgURL} cropWidth={400} cropHeight={800} /> */}
                                </div>
                                <div className="col-md-7">
                                    <h1 style={{ fontSize: '2.3rem', letterSpacing: '2px' }} class="fw-bolder">{product.name}</h1>
                                    <div className="fs-5 mt-2">
                                        <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>{product.price} Lei</span>
                                    </div>
                                    <button onClick={addToCart} className="btn btn-dark btn-lg flex-shrink-0 mt-5 mb-5" type="button">
                                        <span style={{ fontSize: '1.1rem', letterSpacing: '2px' }}>Adauga in cos</span>
                                    </button>
                                    <h2 className='mb-2' style={{ fontSize: '1.5rem' }}>Descriere</h2>
                                    <hr />
                                    <p className='mt-1' style={{ fontSize: '1rem', lineHeight: '30px' }}>{product.description}</p>
                                    <p className='mt-4'><span style={{ fontWeight: '500' }}>Zodii:</span> {product.signs}</p>
                                    {(product.dim > 0) && <p><span style={{ fontWeight: '500' }}>Dimensiune:</span> {product.dim}mm</p>}
                                    {/* <div className="d-flex">
                                        <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: '3rem' }} />
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                            <i className="bi-cart-fill me-1"></i>
                                            Add to cart
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            )
            }
        </>
    );
}
export default ProductDetail;