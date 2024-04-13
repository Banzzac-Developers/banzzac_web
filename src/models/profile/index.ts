import { Data } from "@models/common";

export type Profile = {
  no: number;
  gender: number;
  age: number;
  cnt: number;
  isGrant: number;
  quantity: number;
  id: string;
  pwd: string;
  img: string;
  walkingStyleStr: string;
  nickname: string;
  phone: string;
  statusMessage: string | null;
  date: string;
  walkingStyle: string[];
  temperature: number;
};

export interface ProfileData extends Data {
  data: Profile[];
}

export type Pet = {
  id: string;
  name: string;
  img: string;
  gender: string;
  neutrification: string;
  size: string;
  kind: string;
  personality: string;
  activity: string;
  age: number;
  weight: number;
  personalityArr: string[];
};

export interface PetData extends Data {
  data: Pet[];
}
