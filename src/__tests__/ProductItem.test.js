import React from 'react';
import expect from 'expect';
import TestUtils from "react-dom/test-utils"
import ProductItem from '../app/components/product/ProductItem';
import productImage from "./images/svg/logo.svg";


/**
 * Setup the application tests
 */
function setup() {
    const props = {
        productImage: productImage,
        productTitle: "Product",
        productYear: "2017",
        productRegion: "Kenya",
        productVarietal: "Dusit",
        productAlcoholContent: "25",
        productPrice: "30"
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<ProductItem {...props}/>);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("ProductItem should", () => {

    it("render without crash", () => {
        const {output} = setup();
        expect(output.type).toBe("div");
    });

});