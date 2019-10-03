const Order = require('../models/Order');

// add Order
exports.add = async (req, res) => {
  const order = new Order(req.body);

  try {
    await order.save();

    res.json({ message: 'New order added' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get orders
exports.orders = async (req, res) => {
  try {
    const order = await Order.find({})
      .populate('customer')
      .populate({
        path: 'products.product',
        model: 'Products'
      });
    res.json(order);
  } catch (error) {
    console.log(error);
    next();
  }
};

// get orders by customer
exports.by_customer = async (req, res) => {
  try {
    const order = await Order.find({customer: req.params.customer})
      .populate('customer')
      .populate({
        path: 'products.product',
        model: 'Products'
      });
    res.json(order);
  } catch (error) {
    console.log(error);
    next();
  }
};

// get order by :id
exports.show = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('customer')
      .populate({
        path: 'products.product',
        model: 'Products'
      });
    if (!order) {
      res.json({
        message: 'Order doesn\'t exists'
      });
      next();
    }

    res.json(order);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your info'
    });
    next();
  }
};

// put: update order
exports.update = async (req, res, next) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } // return updated
    )
    .populate('customer')
    .populate({
      path: 'products.product',
      model: 'Products'
    });
    res.json(order);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};

// delete: order
exports.delete = async (req, res, next) => {
  try {
    await Order.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: 'Order was deleted'
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};
