/**
 * @author lusinabrian on 19/09/17.
 * @notes: Product Grid item
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";
import productImg1 from "../../../images/png/1.png";
import productImg2 from "../../../images/png/2.png";
import productImg3 from "../../../images/png/4.png";
import productImg4 from "../../../images/png/5.png";
import productImg5 from "../../../images/png/6.png";
import productImg6 from "../../../images/png/7.png";
import productImg7 from "../../../images/png/8.png";
import productImg8 from "../../../images/png/9.png";
import productImg9 from "../../../images/png/10.png";

export default class ProductGrid extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this._generateItems = this._generateItems.bind(this);
    }

    /**
     * Generates items for the product grid, Ideally, this should come from a backend service
     * */
    _generateItems() {
        let randomProducts = {
            name: "Meiomi Pinot Noir",
            price: 19.95,
            alcohol: Math.random() + 100,
            varietal: "",
            img: ""
        };


    }

    render() {
        return (
            <section className="grid">
                <ProductItem productImage={productImg1} productTitle="Chryseai"
                             productYear="2000" productRegion="Duoro"
                             productVarietal="Touriga" productAlcoholContent={13}
                             productPrice={50}/>
            </section>
        );
    }
}

// ProductGrid.propTypes = {
//     myProps: PropTypes.string.isRequired
// };
