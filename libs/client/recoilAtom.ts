import { atom } from "recoil";

export const uiStateAtom = atom({
  key: "uiState",
  default: 0,
});

/* uiState
0 : Loading
1 : Start (Avatar / template)
2 : Template
3 : Main (Camera / Recording)
4 : Record Loading / Export
*/

export const camStateAtom = atom({
  key: "camState",
  default: 0,
});

/* camState
0 : full
1 : face
2 : bust
*/
