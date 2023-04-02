import { ScoreCardFormat } from "./scoreCardFormat";

export class CourseDataFormat {
    courseName: string;
    address: string|null;
    difficulty: string;
    holePars: string[];
    holeDistances: string[];

    

    constructor(couseName:string, address: string, difficulty: string, holePars: string[], holeDistances: string[], round: ScoreCardFormat){
        this.courseName = couseName;
        this.address = address;
        this.difficulty = difficulty;
        this.holePars = holePars;
        this.holeDistances = holeDistances;
        
    }
}