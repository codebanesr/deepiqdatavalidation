const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
=======
    Rule: { type: String, required: true },
    Tests: { type: String, required: true },
    Score : {type:String, required: true }
});

// We dont export productSchema rather we export a model of productSchema,what that means is that we are actually exporting an instance of productSchema

module.exports = mongoose.model('Product', productSchema);


>>>>>>> c0d96c82387eafe26b5e2eba6e6d1e084c759efd
