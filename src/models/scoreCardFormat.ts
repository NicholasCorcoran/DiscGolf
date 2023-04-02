export class ScoreCardFormat {
    playerName: string;
    scoresCard: string[];
    date: string;

    constructor( name: string, scoreCard: string[]){
        this.playerName = name;
        this.scoresCard = scoreCard;
        this.date = new Date().toISOString();
    }
}