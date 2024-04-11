export type Dataform = {
    latitude : number,
    longitude : number,
    member : MemberDTO
  }

type MemberDTO = {
    gender : number,
    id : string,
    img : string,
    nickname : string,
    no : number,
    temperature : number,
    cnt : number,
    walkingStyle : string
  }
  
  