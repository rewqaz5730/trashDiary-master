import { atom, DefaultValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage'

const _localStorageEffect = key => ({setSelf, onSet}) => {
  AsyncStorage.getItem(key).then(savedValue => {
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  })

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      AsyncStorage.removeItem(key);
    } else {
      AsyncStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};

const historyState = atom({
  key: 'historyState',
  default: [],
  effects_UNSTABLE: [
    _localStorageEffect('historyState'),
  ]
});

const communityState = atom({
  key: 'communityState',
  default: [],
  effects_UNSTABLE: [
    _localStorageEffect('communityState'),
  ]
});

const scoreState = atom({
  key: 'scoreState',
  default: 0,
  effects_UNSTABLE: [
    _localStorageEffect('scoreState'),
  ]
})

export {
  historyState,
  communityState,
  scoreState,
}