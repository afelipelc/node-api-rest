const Clients = require('../models/Clients');

// add Client
exports.addClient = async (req, res) => {
  console.log(req.body);
  const client = new Clients(req.body);

  try {
    await client.save();

    res.json({ message: 'New client added' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get clients
exports.clients = async (req, res) => {
  try {
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};
