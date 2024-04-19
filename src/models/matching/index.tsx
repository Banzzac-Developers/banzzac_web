import { Pet, Profile } from "@models/profile"
import { Data } from ".."

export type MatchingCondition = {
    no:number,
	memberId:string,
	walkingStyle:string[]
	walkingStyleStr:string,
	ageRangeStart :number,
	ageRangeEnd : number,
	gender:number,
	size:string,
	dogNatureStr:string,
	dogNature:string [],
	amountOfActivity : string,
	wantMatching:boolean,
}


export const defaultCondition = {
    no: 0,
	memberId : "",
	walkingStyle:[],
	walkingStyleStr:"",
	ageRangeStart :0,
	ageRangeEnd : 0,
	gender:0,
	size:"",
	dogNatureStr:"",
	dogNature:[],
	amountOfActivity : "",
	wantMatching:true,
}

export type Matching = {
    memberDTO : Profile,
    dogDTO : Pet[],
}

export interface MatchingData extends Data {
    data : Matching[]
}