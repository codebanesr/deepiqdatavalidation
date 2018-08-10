const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Rule: { type: String, required: true },
    Tests: { type: String, required: true },
    Score : {type:String, required: true }
});

module.exports = mongoose.model('Product', productSchema);


