namespace A7 {

    export interface Product {
        name: string;
        price: number;
    }

    export interface AssocProd {
        [key: string]: Product[];
    }

    export let products: AssocProd = {
        "trees": [
            { name: "Nordmanntanne", price: 30 },
            { name: "Fichte", price: 25 },
            { name: "Blautanne", price: 30 }
        ],
        "stands": [
            { name: "Runder Staender Klassisch gruen", price: 38 },
            { name: "Metallstaender silber", price: 46 }
        ],
        "baubles": [
            { name: "Glaskugel Rot", price: 0.49 },
            { name: "Glaskugel Gold", price: 0.99 },
            { name: "Glaskugel Silber", price: 0.99 }
        ],
        "figures": [
            { name: "Strohstern", price: 0.89 },
            { name: "Holzfigur", price: 2.30 }
        ],
        "lights": [
            { name: "Rot Echtwachs", price: 0.79 },
            { name: "Weiß Echtwachs", price: 0.89 },
            { name: "Weiß Elektrisch", price: 1.99 },
            { name: "Lichterkette", price: 24.99 }
        ],
        "shipping": [
            { name: "DHL", price: 5.99 },
            { name: "Hermes", price: 5.99 },
            { name: "Express", price: 8.99 }
        ]
    };

} //namespace zu  