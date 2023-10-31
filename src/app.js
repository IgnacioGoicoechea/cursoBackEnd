import  express  from "express";
import {addProduct, getProducts, getProductById, updateProduct, deleteProduct} from "./productManager"


 const PORT = 8080
 const users = [
    { firstName: 'Carlos', lastName: 'Perren', age: 48, mail: 'cperren@gmail.com' },
    { firstName: 'ignacio', lastName: 'goicoechea', age: 26, mail: 'cperren@gmail.com' },
    { firstName: 'Cjuan', lastName: 'asd', age: 15, mail: 'cperren@gmail.com' }

]

 const app = express()
 app.use(express.urlencoded({ extended: true }))
 
 //endpoint
 app.get('/agregar', (req, res)=> {
res.send(addProduct)
 })
 
 app.get('/product', (req, res)=> {
    res.send(getProductById)
     })


  app.get('/productos', (req, res)=> {
    res.send(getProducts)
     })

app.get('/editar', (req, res)=> {
    res.send(updateProduct)
     })
app.get('/borrar', (req, res)=> {
    res.send(deleteProduct)
     })


 app.listen(PORT, () => {
    console.log(`servidor funcionando del backend del puerto ${PORT}`)
 })