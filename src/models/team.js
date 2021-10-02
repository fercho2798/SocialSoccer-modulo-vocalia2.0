const mongoose = require("mongoose");
const { Schema } = mongoose;


const teamSchema = new Schema(
    {
        nameofteam: { type: String, required: true },
        phone: { type: String, required: true },
        representativename: { type: String, required: true },
        identificationcard: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("team", teamSchema);
