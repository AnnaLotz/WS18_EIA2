namespace A4 {
    
    interface Product {
        name: string;
        price: number;
    }
    export let trees: Product[] = [
        { name: "Nordmanntanne", price: 30 },
        { name: "Fichte", price: 25 },
        { name: "Blautanne", price: 30 }
    ];

    export let ornaments: Product[] = [
        { name: "Glaskugel Rot", price: 0.5 },
        { name: "Glaskugel Gold", price: 1 },
        { name: "Glaskugel Silber", price: 1 },
        { name: "Strohstere", price: 0.8 },
        { name: "Holzfigur", price: 2.5 }
    ];

    export let candles: Product[] = [
        { name: "Rot Echtwachs", price: 2 },
        { name: "Weiß Echtwachs", price: 1.50 },
        { name: "Weiß Elektrisch", price: 3 },
        { name: "Lichterkette", price: 20 }
    ];
} //namespace zu