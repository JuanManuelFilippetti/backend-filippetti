// Definir la clase productManager

class ProductManager{
    constructor() {
        this.products = [];
        // Defino el constructor "products"
        // Va a tener un arreglo vacio => para que el listado del producto me aparezca vacío

    }
//}

// Debe contar con un metodo que retorne nuestro arreglo de productos
getProducts = () => {
    return this.products;

}

// Para poder almacenar los productos en nuestro arreglo, debemos pasarle cuertos parametros

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] // Nos pedia el elemento "products" con array vacio
    }

    if (this.products.length === 0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length - 1].id+1
    }

    // Pusheamos el producto
    this.products.push(product)
}

// Debe contar con el metodo getProductById, el cual recibe como parametro el Id del producto

getProductById = (idProduct) =>{
    cosnt productIndex = this.product.findIndex(product => product.id === idProduct);

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
}

const menejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('Regla', 'Transparente', 80, 'Sin imagen', 'ab154', 36);
manejadorProductos.addProduct ('Lapiz', 'Transparente', 100, 'Sin imagen', 'ab155', 30);
manejadorProductos.addProduct ('Birome', 'Transparente', 200, 'Sin imagen', 'ab156', 15);

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);

console.log(manejadorProductos.getProducts());





