import { debounce } from 'lodash';
import { LocalStorage } from 'quasar';

const storageKey = 'content';

export const api = {
  load() {
    const json = LocalStorage.getItem(storageKey) || JSON.stringify('');
    return JSON.parse(json);
  },
  save: debounce((content, callback) => {
    LocalStorage.set(storageKey, JSON.stringify(content));
    callback();
  }, 1000),
};
