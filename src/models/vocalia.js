const mongoose = require("mongoose");
const { Schema } = mongoose;

var cards = {
    values: ['TARJETA_ROJA', 'TARJETA_AMARILLA','NINGUNA' ],
    message: '{VALUE} no es un rol permitido'
  };

const vocaliaSchema = new Schema(
  {
    nameOfPlayer: {type: String},
    numberOfTShirt: {type: Number},
    changes: {type: Number},
    card: {
        type: String,
        required: true,
        default: 'NINGUNA',
        enum: cards
    },
  },
{
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Vocalia", vocaliaSchema);