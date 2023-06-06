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
menejadorProductos.addProduct ('Regla', 'Transparente', 80, 'Sin imagen', 'ab154', 36);
menejadorProductos.addProduct ('Lapiz', 'Transparente', 100, 'Sin imagen', 'ab155', 30);
menejadorProductos.addProduct ('Birome', 'Transparente', 200, 'Sin imagen', 'ab156', 15);

menejadorProductos.getProductById(1);
menejadorProductos.getProductById(2);
menejadorProductos.getProductById(3);

console.log(menejadorProductos.getProducts());





