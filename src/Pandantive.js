import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import TopBar from './TopBar.js';
import ProductList from './ProductList.js';
import Select from 'react-select';
import Footer from './Footer.js';

const astroSigns = [{ value: "Aries", label: "Berbec" }, { value: "Taurus", label: "Taur" }, { value: "Gemini", label: "Gemeni" }, { value: "Cancer", label: "Rac" }, { value: "Leo", label: "Leu" }, { value: "Virgo", label: "Fecioară" }, { value: "Libra", label: "Balanță" }, { value: "Scorpio", label: "Scorpion" }, { value: "Sagittarius", label: "Săgetător" }, { value: "Capricorn", label: "Capricorn" }, { value: "Aquarius", label: "Vărsător" }, { value: "Pisces", label: "Pești" }, { value: "All", label: "Toate zodiile" }];
const products = [
]

export default function Pandantive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('name');
  const [selectedOption, setSelectedOption] = useState(astroSigns[12]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const [originalProducts] = useState([...products])
  let filteredProducts = [...originalProducts];

  switch (filterOption) {
    case 'high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  filteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  filteredProducts = filteredProducts.filter(product => product.signs.includes(selectedOption.value))
  return (
    <>
      <TopBar />
      <Header isActive='pandantive' />
      <main class="main-product">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <input type="text" class="search-input" placeholder="Caută după nume" onChange={handleSearch} />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <select class="filter-select" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
              <option value="name">Alfabetic după nume</option>
              <option value="high">Cel mai mare preț</option>
              <option value="low">Cel mai mic preț</option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <label htmlFor="select-component">Select Astrology Sign:</label>
            <Select className="filter-signs" options={astroSigns} onChange={handleChange} value={selectedOption} defaultValue={[astroSigns[12].value, astroSigns[12].label]} id="select-component" />
          </div>
        </div>
      </main>
      <ProductList products={filteredProducts} />
      <Footer />
    </>
  );
}