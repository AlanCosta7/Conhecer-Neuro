import { api } from './autosave';
import {
  addDoc, watchDocs, loadDocs, removeDoc, updateDoc,
} from '../shared/helper';

export const autosaverPlugin = async ({ dispatch, commit }, payload) => {
  // commit('UPDATE_CONTENT', api.load())
  const newdata = payload.content.data;
  const id = payload.id; // eslint-disable-line
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

export const addIntro = async ({ commit }, payload) => {
  commit('');
  const storiesRef = await addDoc('intro', payload);
  return storiesRef.id;
};

export const watchIntro = async ({ commit }) => {
  const unsubscribe = await watchDocs('intro', (docs) => {
    commit('setIntro', docs);
  });
  commit('setIntroWatcher', unsubscribe);
};

export const unwatchIntro = async ({ state, commit }) => {
  if (state.introWatcher) {
    state.introWatcher();
    commit('setIntroWatcher', null);
  }
};

export const loadIntro = async ({ commit }) => {
  const intro = loadDocs('intro');
  commit('setIntro', intro);
  return intro;
};

export const removeIntro = async ({ commit }, { id }) => {
  commit('setIntro', '');
  await removeDoc('pressReleases', id);
};

export const updateIntro = async ({ commit }, { id, newdata }) => { // eslint-disable-line
  await updateDoc('intro', id, newdata);
};

export const addhipoxia = async ({ commit }, payload) => {
  commit('');
  const storiesRef = await addDoc('hipoxia', payload);
  return storiesRef.id;
};

export const watchHipoxia = async ({ commit }) => {
  const unsubscribe = await watchDocs('hipoxia', (docs) => {
    commit('setHipoxia', docs);
  });
  commit('setHipoxiaWatcher', unsubscribe);
};

export const unwatchHipoxia = async ({ state, commit }) => {
  if (state.hipoxiaWatcher) {
    state.hipoxiaWatcher();
    commit('setHipoxiaWatcher', null);
  }
};

export const loadHipoxia = async ({ commit }) => {
  const hipoxia = loadDocs('hipoxia');
  commit('setHipoxia', hipoxia);
  return hipoxia;
};

export const removeHipoxia = async ({ commit }, { id }) => {
  commit('setHipoxia', '');
  await removeDoc('hipoxia', id);
};

export const updateHipoxia = async ({ commit }, { id, newdata }) => { // eslint-disable-line
  await updateDoc('hipoxia', id, newdata);
};

export const addMalnutricao = async ({ commit }, payload) => {
  commit('');
  const storiesRef = await addDoc('malnutricao', payload);
  return storiesRef.id;
};

export const watchMalnutricao = async ({ commit }) => {
  const unsubscribe = await watchDocs('malnutricao', (docs) => {
    commit('setMalnutricao', docs);
  });
  commit('setMalnutricaoWatcher', unsubscribe);
};

export const unwatchMalnutricao = async ({ state, commit }) => {
  if (state.MalnutricaoWatcher) {
    state.MalnutricaoWatcher();
    commit('setMalnutricaoWatcher', null);
  }
};

export const loadMalnutricao = async ({ commit }) => {
  const malnutricao = loadDocs('malnutricao');
  commit('setMalnutricao', malnutricao);
  return malnutricao;
};

export const removeMalnutricao = async ({ commit }, { id }) => {
  commit('setMalnutricao', '');
  await removeDoc('malnutricao', id);
};

export const updateMalnutricao = async ({ commit }, { id, newdata }) => { // eslint-disable-line
  await updateDoc('malnutricao', id, newdata);
};

export const addAlcool = async ({ commit }, payload) => {
  commit('');
  const storiesRef = await addDoc('alcool', payload);
  return storiesRef.id;
};

export const watchAlcool = async ({ commit }) => {
  const unsubscribe = await watchDocs('alcool', (docs) => {
    commit('setAlcool', docs);
  });
  commit('setAlcoolWatcher', unsubscribe);
};

export const unwatchAlcool = async ({ state, commit }) => {
  if (state.AlcoolWatcher) {
    state.AlcoolWatcher();
    commit('setAlcoolWatcher', null);
  }
};

export const loadAlcool = async ({ commit }) => {
  const alcool = loadDocs('alcool');
  commit('setAlcool', alcool);
  return alcool;
};

export const removeAlcool = async ({ commit }, { id }) => {
  commit('setAlcool', '');
  await removeDoc('alcool', id);
};

export const updateAlcool = async ({ commit }, { id, newdata }) => { // eslint-disable-line
  await updateDoc('alcool', id, newdata);
};
