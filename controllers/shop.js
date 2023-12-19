const Product = require("../models/Prodcut")

exports.getAddProducts =  (req,res)=>{
    res.render('shop/add-product',{
        path:req.path
    })
}
exports.postAddProducts = async (req,res)=>{
    const title = req.body.title
    const price = req.body.price
    try{
        const product = new Product(title,price)
        await product.save()
        console.log('created user');
        res.redirect('/')
    }catch(e){
        console.log('err =>', e);
    }
}