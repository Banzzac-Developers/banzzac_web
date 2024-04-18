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

export const defaultProfile = {
  no: 0,
  gender: 1,
  age: 0,
  cnt: 0,
  isGrant: 0,
  quantity: 0,
  id: "",
  pwd: "",
  img: "",
  walkingStyleStr: "",
  nickname: "",
  phone: "",
  statusMessage: null,
  date: "",
  walkingStyle: [],
  temperature: 0,
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

export const defaultPet = {
  id: "",
  name: "",
  img: "",
  gender: "",
  neutrification: "",
  size: "",
  kind: "",
  personality: "",
  activity: "",
  age: 0,
  weight: 0,
  personalityArr: [],
};
