class ProductManager{
    constructor() {
        this.products = [];
        

    }

getProducts = () => {
    return this.products;

}

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: []
    }

    if (this.products.length === 0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length - 1].id+1
    }

    this.products.push(product)
}

getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if (productIndex === -1){
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log("El producto se agrego correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const menejadorProductos = new ProductManager ();
menejadorProductos.addProduct ('Autito', 'Madera', 3000, 'Sin imagen', 'ab100', 30);
menejadorProductos.addProduct ('Avion', 'Madera', 3500, 'Sin imagen', 'ab101', 25);
menejadorProductos.addProduct ('Tren', 'Madera', 4000, 'Sin imagen', 'ab102', 20);

menejadorProductos.getProductById(1);
menejadorProductos.getProductById(2);
menejadorProductos.getProductById(3);

console.log(menejadorProductos.getProducts());





