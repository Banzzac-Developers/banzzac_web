import { Data } from "@models/common";

export type Friend = {
  id: null;
  friendId: null;
  dogImg: string;
  dogName: string;
  block: number;
  mstatusMesaage: string;
  mnickname: string;
  mimg: string;
};

export interface FriendData extends Data {
  data: Friend[];
}
