const VocalResult = require("../models/vocalResult");

const vocalResultCtrl = {}; 

vocalResultCtrl.getVocalResults = async (req, res, next) => {
    const vocalResults = await VocalResult.find();
    res.json(vocalResults);
}

vocalResultCtrl.createVocalResult = async (req, res, next) => {
    const vocalResult = new VocalResult({
        team1: req.body.team1,
        team2: req.body.team2,
        CardsRed1: req.body.CardsRed,
        CardsRed2: req.body.CardsRed,
        CardsYellow1: req.body.CardsYellow,
        CardsYellow2: req.body.CardsYellow,
        goals1: req.body.goals1,
        goals2: req.body.goals2,
        changes1: req.body.changes1,
        changes2: req.body.changes2,
        observation: req.body.observation,


    });
    await vocalResult.save();
    res.json({ status: "VocalResult created"});
};

vocalResultCtrl.getVocalResult = async (req, res, next) => {
    const { id } = req.params;
    const vocalResult = await VocalResult.findById(id);
    res.json(vocalResult);
  };
  
  vocalResultCtrl.editVocalResult = async (req, res, next) => {
    const { id } = req.params;
    await VocalResult.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "VocalResult Updated" });
  };
  
  vocalResultCtrl.deleteVocalResult = async (req, res, next) => {
    await VocalResult.findByIdAndRemove(req.params.id);
    res.json({ status: "VocalResult Deleted" });
  };
  
  module.exports = vocalResultCtrl;