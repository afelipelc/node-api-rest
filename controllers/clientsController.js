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


// get client by :id
exports.show = async (req, res, next) => {
  try {
    const client = await Clients.findById(req.params.id);
    if (!client) {
    res.json({
      message: 'Client doesn\'t exists'
    });
    next();
    }

    res.json(client);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your info'
    });
    next();
  }
};

// put: update client
exports.update = async (req, res, next) => {
  try {
    const client = await Clients.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } // return updated
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};

// delete: client
exports.delete = async (req, res, next) => {
  try {
    await Clients.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: 'Client was deleted'
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};
