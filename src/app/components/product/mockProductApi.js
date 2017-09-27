/**
 * @author lusinabrian on 27/09/17.
 * @notes: Mock Product API
 * This file mocks a web API by working with the hard-coded data below.
 * It uses setTimeout to simulate the delay of an AJAX call.
 * */

import productImg1 from "../../../images/png/1.png";
import productImg2 from "../../../images/png/2.png";
import productImg3 from "../../../images/png/4.png";
import productImg4 from "../../../images/png/5.png";
import productImg5 from "../../../images/png/6.png";
import productImg6 from "../../../images/png/7.png";
import productImg7 from "../../../images/png/8.png";
import productImg8 from "../../../images/png/9.png";
import productImg9 from "../../../images/png/10.png";
import delay from "./delay";

let productNames = ["Meiomi Pinot Noir", "Vale", "Shade", "Marlet Shade", "Apalta", "Astralis", "Hills", "5 Cousins", "Bodega", "Quintessa"];
let productVarietals = ["Pinot Noir", "Carbarnet Sauvignon", "Sangiovense", "Chardonay", "Merlot", "Bordeaux", "Touriga Nacional", "Ristling", "Malbec", "Syreh Shiraz", "Malbec", "Nebbiolo"];
let productRegions = ["Argentina", "Carlifornia", "Touriga", "Milan", "Paris", "South Africa", "Mexico", "Australia"];

let randomProducts = [
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg1
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg2
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg3
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg4
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg5
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg6
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg7
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg8
    },
    {
        name: productNames[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 100),
        alcohol: Math.round(Math.random() * 1000) / 10,
        varietal: productVarietals[Math.floor(Math.random() * 10)],
        region: productRegions[Math.floor(Math.random() * 10)],
        img: productImg9
    },
];


class MockProductApi {

    /**
     * Generates items for the product grid, Ideally, this should come from a backend service
     * Returns a promise that should be resolved
     * */
    static getAllProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], randomProducts));
            }, delay);
        });
    }

}


export default MockProductApi;
