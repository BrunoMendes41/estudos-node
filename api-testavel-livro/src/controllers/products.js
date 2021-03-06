const Product = require('../models/product');

class ProductsController {
  constructor(product = Product){
    this.Product = product;
  }

  get(req, res) {
    return this.Product.find({})
      .then(products => res.send(products));
  }
}

module.exports = ProductsController;
