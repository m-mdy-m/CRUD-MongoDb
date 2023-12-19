const Product = require("../models/Prodcut");

exports.getDashboard = async (req, res) => {
  const product = await Product.fetch();
  res.render("admin/dashboard", {
    path: req.path,
    prods: product,
  });
};

exports.deleteProd = async (req, res) => {
  const id = req.params.prodId;
  await Product.deleteById(id);
  console.log("DESTROYED PRODUCT ");
  res.redirect("/dashboard");
};

exports.getEdit = async (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return;
  }
  const id = req.params.prodId;
  try {
    const product = await Product.findById(id);
    res.render("shop/add-product", {
      path: req.path,
      editing: editMode,
      product,
    });
  } catch (err) {
    console.log("err edit =>", err);
  }
};

exports.postEdit = async (req, res) => {
  const id = req.body.prodId;
  const title = req.body.title;
  const price = req.body.price;
  try{
    const UpProduct = new Product(title,price,id)
    await UpProduct.save()
    return res.redirect('/')
  }catch(err ){
    console.log(err);
  }
};
