const cities = [{
    "id": 1,
    "title": "Paula's Choice",
    "category": "Skin",
    "price": 50,
    "stock": 6,
    "image": "https://skinglam.netlify.app/img/productos/producto_paulas.webp",
    "description": "The best exofoliator for you face"
}, {
    "id": 2,
    "title": "SuperGoop",
    "category": "Skin",
    "price": 60,
    "stock": 5,
    "image": "https://skinglam.netlify.app/img/productos/producto_supergoop.webp",
    "description": "The best sunscreen you can find"
}, {
    "id": 3,
    "title": "Tatcha",
    "category": "Skin",
    "price": 80,
    "stock": 3,
    "image": "https://skinglam.netlify.app/img/productos/producto_tatcha.webp",
    "description": "The best moisturizer for you face"
}]




const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        console.log("Conneting to the backend...");

        let error = false;

        setTimeout(() => {
            if (error) reject("Usuario no autorizado");
            else resolve(cities);

        }, 3000);
    });
}

export default obtenerProductos;

