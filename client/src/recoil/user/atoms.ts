import { atom } from 'recoil';

export const userState = atom<Record<string, string | number>>({
  key: 'userState',
  default: { token: '', nickname: '', id: 0 },
});
