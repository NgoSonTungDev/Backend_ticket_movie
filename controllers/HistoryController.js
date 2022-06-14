const { Users, Orderhistory } = require("../models/model");

const OrderhistoryController = {
  addToOrderhistory: async (req, res) => {
    try {
      const newOrderhistory = new Orderhistory(req.body);
      const save = await newOrderhistory.save();
      if (req.body.AccountUSer) {
        const idUser = Users.findById(req.body.AccountUSer);
        await idUser.updateOne({ $push: { history: save._id } });
      }
      res.status(200).json(save);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  DeleteFromOrderhistory: async (req, res) => {
    try {
        await Users.updateMany(
          {history: req.params.id },
          {$pull:{history: req.params.id}}
       );
        await Orderhistory.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete successfully!")
      } catch (error) {
        res.status(500).json(error);
      }
  },
};

module.exports = OrderhistoryController;