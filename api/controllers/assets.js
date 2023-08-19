const LiabilitiesSchema = require("../models/LiabilitieseModel");


exports.addliabilities = async (req, res) => {
    const {title, amount, date, imageUrl}  = req.body

    const assets = LiabilitiesSchema({
      title,
      amount,
      imageUrl,
      date,
    });

    try {
        //validations
        if (!title || !date || !imageUrl) {
          return res.status(400).json({ message: "All fields are required!" });
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await assets.save()
        res.status(200).json({message: 'liabilities Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(assets)
}

exports.getliabilities = async (req, res) =>{
    try {
        const assets = await liabilitiesSchema.find().sort({createdAt: -1})
        res.status(200).json(assets)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteliabilities = async (req, res) =>{
    const {id} = req.params;
    liabilitiesSchema.findByIdAndDelete(id)
        .then((assets) =>{
            res.status(200).json({message: 'liabilities Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}