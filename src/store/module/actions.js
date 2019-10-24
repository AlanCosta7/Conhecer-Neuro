import { api } from './autosave';
import { addDoc } from '../shared/helper';

export const autosaverPlugin = async ({ dispatch, commit }, payload) => {
  commit('UPDATE_CONTENT', api.load());
  console.log(payload);
  const newdata = payload.content.data;
  const { id } = payload.content;
  const isNew = !id;

  commit('SET_SAVE_STATUS', 'Salvando texto...');
  api.save(payload.content, () => {
    commit('SET_SAVE_STATUS', 'Todas as alterações foram salvas');

    if (isNew) {
      dispatch(payload.add, { newdata });
    } else {
      dispatch(payload.update, { id, newdata });
    }
  });
};


export const addHI = async ({ newdata }) => {
  const storiesRef = await addDoc('hi', newdata);
  return storiesRef.id;
};

export const addIntro = async ({ newdata }) => {
  const storiesRef = await addDoc('intro', newdata);
  return storiesRef.id;
};

export const addAlcool = async ({ newdata }) => {
  const storiesRef = await addDoc('alcool', newdata);
  return storiesRef.id;
};

export const addMalnutri = async ({ newdata }) => {
  const storiesRef = await addDoc('malnutricao', newdata);
  return storiesRef.id;
};
