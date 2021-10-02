const Team = require("../models/team");

const teamCtrl = {}; 

teamCtrl.getTeams = async (req, res, next) => {
    const teams = await Team.find();
    res.json(teams);
}

teamCtrl.createTeam = async (req, res, next) => {
    const team = new Team({
        nameofteam: req.body.nameofteam,
        phone: req.body.phone,
        representativename: req.body.representativename,
        identificationcard: req.body.identificationcard,
    });
    await team.save();
    res.json({ status: "Team created"});
};

teamCtrl.getTeam = async (req, res, next) => {
    const { id } = req.params;
    const team = await Team.findById(id);
    res.json(team);
  };
  
  teamCtrl.editTeam = async (req, res, next) => {
    const { id } = req.params;
    await Team.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Team Updated" });
  };
  
  teamCtrl.deleteTeam = async (req, res, next) => {
    await Team.findByIdAndRemove(req.params.id);
    res.json({ status: "Team Deleted" });
  };
  
  module.exports = teamCtrl;