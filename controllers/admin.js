const Product = require("../models/Prodcut");

exports.getDashboard = async (req,res)=>{
    const product = await Product.fetch()
    res.render('admin/dashboard',{
        path:req.path,
        prods: product
    });
}

exports.deleteProd = async (req,res)=>{
    const id = req.params.prodId
    await Product.deleteById(id)
    console.log("DESTROYED PRODUCT ");
    res.redirect('/dashboard')
}