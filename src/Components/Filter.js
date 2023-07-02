import { useState } from "react";
import ProductList from "../ProductList";
import MultiRangeSlider from "multi-range-slider-react";
import Select from 'react-select';


export default function Filter(props) {
    const [value, setValue] = useState([0, 100]);

    const handleChangeSlider = (newValue) => {
        setValue(newValue);
    };
    return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <input type="text" class="search-input" placeholder="Caută după nume" />
                    <hr class="hr-primary"></hr>
                    <label htmlFor="select-component" class="mt-5">Alege zodia:</label>
                    <Select className="filter-signs" options={props.astroSigns} id="select-component" />
                    <hr class="hr-primary mt-5"></hr>
                    <MultiRangeSlider style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                        ruler='false'
                        min={0}
                        max={props.maxPrice}
                        minValue={0}
                        maxValue={props.maxPrice}
                        value={props.value}
                        onChange={handleChangeSlider}
                    />
                </div>
                <div class="col-8">
                    <ProductList products={props.filteredProducts} className="product-list" />
                </div>
            </div>
        </div>
    );
}