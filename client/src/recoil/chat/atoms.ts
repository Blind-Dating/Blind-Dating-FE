import { atom } from 'recoil';

export const chatsSettingBtnState = atom<boolean>({
  key: 'chatsSettingBtnState',
  default: false,
});
