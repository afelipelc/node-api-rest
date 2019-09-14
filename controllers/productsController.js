const Product = require('../models/Product');

const multer = require('multer');

const multerConfig = require('../utils/multerConfig');

// set multer config and model field
const upload = multer(multerConfig).single('image');

// file upload
exports.fileUpload = (req, res, next) => {
  upload(req, res, function(error) {
    if (error) {
      res.json({ message: error });
    }
    return next();
  });
};

// add product
exports.add = async (req, res) => {
  const product = new Product(req.body);

  try {
    if(req.file && req.file.filename) {
      product.image = req.file.filename;
    }
    await product.save();

    res.json({ message: 'New product added' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get product
exports.products = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    next();
  }
};


// get product by :id
exports.show = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
    res.json({
      message: 'Product doesn\'t exists'
    });
    next();
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your info'
    });
    next();
  }
};

// put: update product
exports.update = async (req, res, next) => {
  try {
    // generate new product
    let newProduct = req.body;

    // if new image
    if(req.file && req.file.filename) {
      newProduct.image = req.file.filename;
    } else {
      const product = await Product.findById(req.params.id);
      newProduct.image = product.image;
    }


    const productUpdated = await Product.findOneAndUpdate(
      { _id: req.params.id },
      newProduct,
      { new: true } // return updated
    );

    res.json({ message: 'Product updated success' });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};

// delete: product
exports.delete = async (req, res, next) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: 'Product was deleted'
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};

