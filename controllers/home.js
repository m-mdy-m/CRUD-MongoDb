exports.getHome = (req,res)=>{
    res.render('home.ejs',{
        path:req.path
    })
}