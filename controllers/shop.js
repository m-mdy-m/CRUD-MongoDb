exports.getAddProducts =  (req,res)=>{
    res.render('shop/add-product',{
        path:req.path
    })
}