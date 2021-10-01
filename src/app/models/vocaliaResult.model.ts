export class VocalResult {
  constructor(_id = "", team1 = "", team2 = "", CardsRed = 0, CardsYellow = 0, goals1 = 0,  goals2 = 0, changes1 = 0, changes2 = 0, observation='' ) {
      this._id = _id;
      this.team1 = team1;
      this.team2 = team2;
      this.CardsRed = CardsRed;
      this.CardsYellow = CardsYellow;
      this.goals1 = goals1;
      this.goals2 = goals2;
      this.changes1 = changes1;
      this.changes2 = changes2;
      this.observation = observation;

  }

  _id:string;
  team1:string;
  team2:string;
  CardsRed:number;
  CardsYellow:number;
  goals1:number;
  goals2: number;
  changes1: number;
  changes2: number;
  observation: string;

}
