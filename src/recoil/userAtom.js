import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const tempUserAtom = atom({
  key: "tempUser",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const sidebarState = atom({
  key: "sidebarState",
  default: true, // default state is not collapsed
});

export const upgrageState = atom({
  key: "upgrageState",
  default: true, // default state is not collapsed
});
