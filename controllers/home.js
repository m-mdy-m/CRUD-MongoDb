const Product = require("../models/Prodcut");

exports.getHome = async (req, res) => {
  const product = await Product.fetch();
  res.render("home.ejs", {
    path: req.path,
    prods: product,
  });
};
