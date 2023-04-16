const mongoose  = require("mongoose")

const PaymentSchema = mongoose.Schema({
    userID  : {type : mongoose.Schema.Types.ObjectId , ref : "user" },
    totalAmount : {type : Number},
    items : [{type : String}]
    
})

const PaymentModel = mongoose.model("payment",PaymentSchema)

module.exports = {PaymentModel}