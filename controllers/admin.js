const Product = require("../models/Prodcut");

exports.getDashboard = async (req,res)=>{
    const product = await Product.fetch()
    res.render('admin/dashboard',{
        path:req.path,
        prods: product
    });
}