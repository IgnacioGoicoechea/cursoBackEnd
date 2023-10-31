import fs from "fs";

class ProductManager {
    constructor(path, file) {

        this.currentId = 0;
        this.products = [];
        this.file = file;
    }

    async addProduct(product) {
        this.currentId = this.currentId + 1;
        product.id = this.currentId;
        this.products.push(product);
        await fs.promises.writeFile(this.file, JSON.stringify(this.products, null, 2));
        const data = await fs.promises.readFile(this.file, "utf8");
        const products = JSON.parse(data);
    }

    async getProducts() {
        const data = await fs.promises.readFile(this.file, "utf8");
        return JSON.parse(data);
    }

    async getProductById(id) {
        const producto = await this.products();
        return producto.find((products) => products.id === id);
    }

    async updateProduct(id, updatedProduct) {
        const producto = await this.products();
        const index = products.findIndex((product) => product.id === id);

        if (index !== -1) {
            producto[index] = { ...updatedProduct, id };
            await fs.promises.writeFile(this.file, JSON.stringify(producto, null, 2));
        }
    }

    async deleteProduct(id) {
        const products = await this.products();
        const updatedProducts = products.filter((product) => product.id !== id);
        await fs.promises.writeFile(this.file, JSON.stringify(updatedProducts, null, 2));
    }
}

// Ejemplo de uso:
const productManager = new ProductManager("path_to_directory", "products.json");
productManager.addProduct({ name: "Product 1", price: 10.99 });
productManager.addProduct({ name: "Product 2", price: 13.99 });
productManager.addProduct({ name: "Product 3", price: 12.99 });
productManager.addProduct({ name: "Product 4", price: 102.99 });
productManager.addProduct({ name: "Product 5", price: 1047.99 });

productManager.deleteProduct(2);
productManager.updateProduct(1, { name: "Updated Product 1", price: 99.99 });

console.log(productManager.getProducts());