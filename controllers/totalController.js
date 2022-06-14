const { OrderConsolidation } = require("../models/model");

const OrderConsolidationController = {
  addToTotal: async (req, res) => {
    try {
      const newData = new OrderConsolidation(req.body);
      const save = await newData.save();
      res.status(200).json(save);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllOrder : async (req, res) => {
    try {
      const allOrder = await OrderConsolidation.find();
      res.status(200).json(allOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteOrder: async (req, res) => {
    try {
      await OrderConsolidation.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully !");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = OrderConsolidationController;
