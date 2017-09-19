import React from 'react';

/**
 * ProductCompareWrapper stateless component
 */
const ProductCompareWrapper = () => {
    return (
        <section className="compare">
            <button className="action action--close">
                <i className="fa fa-remove"></i>
                <span className="action__text action__text--invisible">Close comparison overlay</span>
            </button>
        </section>
    );
};


export default ProductCompareWrapper;