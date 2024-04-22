import { Pet, Profile } from "@models/profile"
import { Data } from ".."

export type MatchingCondition = {
    no:number,
	memberId:string,
	walkingStyle:string[]
	ageRangeStart :number,
	ageRangeEnd : number,
	gender:number,
	size:string,
	dogNature:string [],
	amountOfActivity : string,
	wantMatching:boolean,
	memberDTO : Profile |null,
	dogDTOs:Pet |null
}


export const defaultCondition = {
    no: 0,
	memberId : "",
	walkingStyle:[],
	ageRangeStart :0,
	ageRangeEnd : 100,
	gender:1,
	size:"",
	dogNature:[],
	amountOfActivity : "",
	wantMatching:true,
	memberDTO : null,
	dogDTOs : null
}

export type Matching = {
    memberDTO : Profile,
    dogDTO : Pet[],
}

export interface MatchingData extends Data {
    data : Matching[]
}