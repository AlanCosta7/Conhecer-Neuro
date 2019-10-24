export const UPDATE_CONTENT = (state, payload) => {
  state.content = payload;
};

export const SET_SAVE_STATUS = (state, payload) => {
  state.saveStatus = payload;
};

export const setIntro = (state, payload) => {
  state.intro = payload;
};

export const setIntroWatcher = (state, payload) => {
  state.introWatcher = payload;
};

export const setHipoxia = (state, payload) => {
  state.hipoxia = payload;
};

export const setHipoxiaWatcher = (state, payload) => {
  state.hipoxiaWatcher = payload;
};

export const setMalnutricao = (state, payload) => {
  state.malnutricao = payload;
};

export const setMalnutricaoWatcher = (state, payload) => {
  state.malnutricaoWatcher = payload;
};

export const setAlcool = (state, payload) => {
  state.alcool = payload;
};

export const setAlcoolWatcher = (state, payload) => {
  state.alcoolWatcher = payload;
};
