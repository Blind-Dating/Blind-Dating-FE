import { IMessage } from '@stomp/stompjs';
import { atom } from 'recoil';

export const chatsSettingBtnState = atom<boolean>({
  key: 'chatsSettingBtnState',
  default: false,
});

export const chatDataState = atom<(Record<string, number> | IMessage)[]>({
  key: 'chatDataState',
  default: [],
});
