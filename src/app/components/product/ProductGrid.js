/**
 * @author lusinabrian on 19/09/17.
 * @notes: Product Grid to display Product items
 */

import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import MockProductApi from "./mockProductApi";


export default class ProductGrid extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <section className="grid">
                {
                    MockProductApi.getAllProducts().then(product => {
                        return (
                            <ProductItem productImage={product.img} productTitle={product.name}
                                         productYear={1000 + Math.floor(Math.random() * 1000)}
                                         productRegion={product.region}
                                         productVarietal={product.varietal}
                                         productAlcoholContent={product.alcohol}
                                         productPrice={product.price}/>
                        )
                    })
                }
            </section>
        );
    }
}

// ProductGrid.propTypes = {
//     myProps: PropTypes.string.isRequired
// };
