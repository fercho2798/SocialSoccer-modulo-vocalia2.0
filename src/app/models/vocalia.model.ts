export class Vocalia {
    constructor(_id = "", card = "", nameOfPlayer = "", numberOfTShirt = 0, changes = 0) {
        this._id = _id;
        this.card = card;
        this.nameOfPlayer = nameOfPlayer;
        this.numberOfTShirt = numberOfTShirt;
        this.changes = changes;
    }

    _id:string;
    card:string;
    nameOfPlayer:string;
    numberOfTShirt:number;
    changes:number;
}