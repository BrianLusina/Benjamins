/**
 * @author lusinabrian on 19/09/17.
 * @notes: Product Grid item
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";
import productImg from "../../../images/png/1.png";

export default class ProductGrid extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <section className="grid">
                <ProductItem productImage={productImg} productTitle="Chryseai"
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
