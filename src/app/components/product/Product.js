import React from 'react';
import PropTypes from 'prop-types';

/**
 * Product stateless component
 * View for a single Product item
 */
const Product = ({
                     productImage, productTitle, productYear, productRegion,
                     productVarietal, productAlcoholContent, productPrice
                 }) => {
    return (
        <div className="product">
            <div className="product__info">
                <img className="product__image" src={productImage} alt={productTitle}/>
                <h3 className="product__title">{productTitle}</h3>
                <span className="product__year extra highlight">{productYear}</span>
                <span className="product__region extra highlight">{productRegion}</span>
                <span className="product__varietal extra highlight">{productVarietal}</span>
                <span className="product__alcohol extra highlight">{productAlcoholContent}%</span>
                <span className="product__price highlight">${productPrice}</span>
                <button className="action action--button action--buy">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="action__text">Add to cart</span></button>
            </div>
            <label className="action action--compare-add">
                <input className="check-hidden" type="checkbox"/>
                <i className="fa fa-plus"></i>
                <i className="fa fa-check"></i>
                <span className="action__text action__text--invisible">Add to compare</span>
            </label>
        </div>
    );
};

/**
 * Prop validation
 */
Product.propTypes = {
    productImage: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productYear: PropTypes.string.isRequired,
    productRegion: PropTypes.string.isRequired,
    productVarietal: PropTypes.string.isRequired,
    productAlcoholContent: PropTypes.number.isRequired,
    productPrice: PropTypes.number.isRequired
};

export default Product;