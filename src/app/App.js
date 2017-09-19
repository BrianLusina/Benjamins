import React, {Component} from 'react';
import ProductGrid from "./components/product/ProductGrid";
import Header from "./components/common/Header";
import CompareBasket from "./components/compare/CompareBasket"
import ProductCompareWrapper from "./components/compare/ProductCompareWrapper"

class App extends Component {
    render() {
        return (
            <div>
                <CompareBasket/>
                <div className="view">
                    <Header/>
                    <ProductGrid/>
                </div>
                <ProductCompareWrapper/>
            </div>
        );
    }
}

export default App;
