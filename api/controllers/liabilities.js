const AssetsSchema = require("../models/AssetsModel");

exports.addAssets = async (req, res) => {
  const { title, amount, description, date, imageUrl } = req.body;

  const assets = AssetsSchema({
    title,
    amount,
    description,
    date,
    imageUrl,
  });

  try {
    //validations
    if (!title || !description || !date || !imageUrl) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await assets.save();
    res.status(200).json({ message: "Assets Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(assets);
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await AssetsSchema.find().sort({ createdAt: -1 });
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteAssets = async (req, res) => {
  const { id } = req.params;
  AssetsSchema.findByIdAndDelete(id)
    .then((assets) => {
      res.status(200).json({ message: "Assets Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server API Error" });
    });
};
