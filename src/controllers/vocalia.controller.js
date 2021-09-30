const Vocalia = require("../models/vocalia");

const vocaliaCtrl = {}; 

vocaliaCtrl.getVocalias = async (req, res, next) => {
    const vocalias = await Vocalia.find();
    res.json(vocalias);
}

vocaliaCtrl.createVocalia = async (req, res, next) => {
    const vocalia = new Vocalia({
        nameOfPlayer: req.body.nameOfPlayer,
        numberOfTShirt: req.body.numberOfTShirt,
        changes: req.body.changes,

    });
    await vocalia.save();
    res.json({ status: "Vocalia created"});
};

vocaliaCtrl.getVocalia = async (req, res, next) => {
    const { id } = req.params;
    const vocalia = await Vocalia.findById(id);
    res.json(vocalia);
  };
  
  vocaliaCtrl.editVocalia = async (req, res, next) => {
    const { id } = req.params;
    await Vocalia.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Vocalia Updated" });
  };
  
  vocaliaCtrl.deleteVocalia = async (req, res, next) => {
    await Vocalia.findByIdAndRemove(req.params.id);
    res.json({ status: "Vocalia Deleted" });
  };
  
  module.exports = vocaliaCtrl;