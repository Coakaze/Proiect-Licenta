import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import TopBar from './TopBar.js';
import ProductList from './ProductList.js';
import Select from 'react-select';
import Footer from './Footer.js';
// import MultiRangeSlider from "multi-range-slider-react";
import Loader from 'react-spinners/CircleLoader';
import { db, storage } from './firebase.js';
import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import useMounted from './hooks/useMounted.js';

const astroSigns = [{ value: "Aries", label: "Berbec" }, { value: "Taurus", label: "Taur" }, { value: "Gemini", label: "Gemeni" }, { value: "Cancer", label: "Rac" }, { value: "Leo", label: "Leu" }, { value: "Virgo", label: "Fecioară" }, { value: "Libra", label: "Balanță" }, { value: "Scorpio", label: "Scorpion" }, { value: "Sagittarius", label: "Săgetător" }, { value: "Capricorn", label: "Capricorn" }, { value: "Aquarius", label: "Vărsător" }, { value: "Pisces", label: "Pești" }];
// const products = [
//   {
//     id: 1,
//     name: "Bratara Ametist 6mm",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "Bratara1.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 2,
//     name: "Bratara Cuart Roz 8mm",
//     descriere: "Cuart Roz sfere. Bratara este realizata pe elastic.",
//     img1: "Bratara2.jpeg",
//     price: "60",
//     signs: "All,Aries",
//     dim: 8
//   },
//   {
//     id: 3,
//     name: "Bratara Malachit 8mm",
//     descriere: "Bratara din cipsuri realizata pe elastic.",
//     img1: "Bratara3.jpeg",
//     price: "35",
//     signs: "All,Taurus",
//     dim: 8
//   },
//   {
//     id: 4,
//     name: "Bratara Turcoaz 8mm cu pandantiv",
//     img1: "Bratara4.jpeg",
//     price: "50",
//     signs: "All,Libra",
//     dim: 8
//   },
//   {
//     id: 5,
//     name: "Bratara Piatra Soarelui Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "soarechips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 6,
//     name: "Bratara Sodalit Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "sodalitchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 7,
//     name: "Bratara Unakit Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "unakitchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 8,
//     name: "Bratara Coral Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "coralchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 9,
//     name: "Bratara Onix Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "onixchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 10,
//     name: "Bratara Ochi de Tigru Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "tigruchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 11,
//     name: "Bratara Carneol Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "carneolchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 12,
//     name: "Bratara Selenit Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "selenitchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 13,
//     name: "Bratara Piatra Lunii Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "lunachips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 14,
//     name: "Bratara Aventurin Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "aventurinchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   },
//   {
//     id: 15,
//     name: "Bratara Turcoaz Chipsuri",
//     price: "40",
//     signs: "All,Aries",
//     dim: 6,
//     img1: "turcoazchips.jpeg",
//     img2: "aventurin.jpeg",
//     img3: "carneol.jpeg",
//   }
// ];

function mapImageToProducts(imageMap, productList) {
  const updatedProducts = [];

  productList.forEach((product) => {
    const imageUrl = imageMap.get(product.img1);
    const updatedProduct = { ...product, imageUrl };
    updatedProducts.push(updatedProduct);
  });

  return updatedProducts;
}

export default function ProduseShop() {
  const [mapImageUrls, setMapImageUrls] = useState(new Map());
  const [searchTerm, setSearchTerm] = useState('');
  // const [filterOption, setFilterOption] = useState('name');
  // const [selectedOption, setSelectedOption] = useState(astroSigns[0]);
  const [braceletProducts, setBraceletProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const productCollectionRef = collection(db, "bratari");
  const imageListRef = ref(storage, "product-images-details-edit/");
  const mounted = useMounted();
  //const maxPrice = Math.max(...braceletProducts.map(product => product.price));

  const [loading, setLoading] = useState(true);

  //const [value, setValue] = useState([0, 100]);

  // const handleChangeSlider = (newValue) => {
  //   setValue(newValue);
  // };
  useEffect(() => {
    const fetchImages = async () => {
      const response = await listAll(imageListRef);
      const imageUrlsMap = new Map();
      for (const item of response.items) {
        const imagePathName = item._location.path_.split("/");
        const url = await getDownloadURL(item);
        imageUrlsMap.set(imagePathName[1], url);
      }
      if (mounted.current) {
        setMapImageUrls(imageUrlsMap);
      }
    };

    const fetchProducts = async () => {
      const data = await getDocs(productCollectionRef);
      const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (mounted.current) {
        setBraceletProducts(products);
      }
    };

    fetchImages();
    fetchProducts();

  }, []);

  useEffect(() => {
    if (mapImageUrls.size > 0 && braceletProducts.length > 0) {
      const updatedProducts = mapImageToProducts(mapImageUrls, braceletProducts);
      setFinalProducts(updatedProducts);
      setLoading(false);
    }
  }, [mapImageUrls, braceletProducts]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await getDocs(productCollectionRef);
  //     setBraceletProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     setRetrieveProducts(true);
  //   }
  //   getProducts();
  // }, [])

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  let filteredProducts = [...finalProducts];

  // switch (filterOption) {
  //   case 'high':
  //     filteredProducts.sort((a, b) => b.price - a.price);
  //     break;
  //   case 'low':
  //     filteredProducts.sort((a, b) => a.price - b.price);
  //     break;
  //   case 'name':
  //     filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  //     break;
  //   default:
  //     break;
  // }

  filteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  console.log(filteredProducts);
  // filteredProducts = filteredProducts.filter(product => product.signs.includes(selectedOption.value))
  // filteredProducts = filteredProducts.filter(product => product.price >= value.minValue && product.price <= value.maxValue)
  // console.log(filteredProducts);

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
          <Header isActive='produse' />
          <div style={{ marginTop: "70px" }}>
            <div className='checkbox-products'>
              <div>
                <input type="checkbox" id="optiona" name="option" />
                <label for="optiona">BRATARI
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 90 90"></path>
                    <path d="M 90 10 L 10 90"></path>
                  </svg>
                </label>
              </div>

              <div>
                <input type="checkbox" id="optionb" name="option" />
                <label for="optionb">PANDANTIVE
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 90 90"></path>
                    <path d="M 90 10 L 10 90"></path>
                  </svg>
                </label>
              </div>
            </div>

            <main className="main-product m-auto" style={{ width: "80%" }}>
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <label htmlFor="select-component">Cauta dupa nume:</label>
                  <input placeholder="Nume" type="text" className="form-control mb-3" onChange={handleSearch} />
                  <label htmlFor="select-component" className="mt-3">Cauta dupa zodie:</label>
                  <Select placeholder="Toate zodiile" className="filter-signs" options={astroSigns} id="select-component" />
                </div>
                <div className="col-md-9 col-sm-12">
                  <ProductList products={filteredProducts} className="product-list" />
                </div>
              </div>
            </main>
          </div>
          <Footer className="mt-10" />
        </>
      )
      }
    </>
  );
}