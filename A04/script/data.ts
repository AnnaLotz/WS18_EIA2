namespace A4 {

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
            { name: "Grün rund", price: 38 },
            { name: "Metall", price: 46 }
        ],
        "baubles": [
            { name: "Glaskugel Rot", price: 0.5 },
            { name: "Glaskugel Gold", price: 1 },
            { name: "Glaskugel Silber", price: 1 }
        ],
        "figures": [
            { name: "Strohstere", price: 0.8 },
            { name: "Holzfigur", price: 2.5 }
        ],
        "lights": [
            { name: "Rot Echtwachs", price: 2 },
            { name: "Weiß Echtwachs", price: 1.50 },
            { name: "Weiß Elektrisch", price: 3 },
            { name: "Lichterkette", price: 20 }
        ]
    };

} //namespace zu