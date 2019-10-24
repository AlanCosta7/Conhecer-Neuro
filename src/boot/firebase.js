import firebase from 'firebase';
// import { LocalStorage } from 'quasar';

const firebaseConfig = {
  apiKey: 'AIzaSyA0vFivrLHmZR19B3ACbNrlVcCo-7C2x08',
  authDomain: 'conhecerneuro.firebaseapp.com',
  databaseURL: 'https://conhecerneuro.firebaseio.com',
  projectId: 'conhecerneuro',
  storageBucket: 'conhecerneuro.appspot.com',
  messagingSenderId: '98340401697',
  appId: '1:98340401697:web:828c08f97f0c107927e960',
};
// console.log({ firebaseConfig })

// initialize Firebase from settings
const $fbApp = firebase.initializeApp(firebaseConfig);
const $auth = $fbApp.auth();
// const $db = firebase.database()
const $firestore = firebase.firestore();
const $functions = firebase.functions();
const $storage = firebase.storage();
// $firestore.settings({ timestampsInSnapshots: true })

// Enable logging
// const isDev = !!process.env.DEV;
// firebase.database.enableLogging(isDev)
// firebase.firestore.setLogLevel(isDev ? 'debug' : 'silent')

export default ({ Vue }) => {
  Vue.prototype.$fbApp = $fbApp;
  Vue.prototype.$functions = $functions;
  Vue.prototype.$auth = $auth;

  // const localUser = JSON.parse(LocalStorage.getItem('user') || '{}');
  // store.commit('setCurrentUser', localUser);

  // watch user authentication state
  /*
  $auth.onAuthStateChanged((user) => {
    if (user) {
      const {
        uid, email, emailVerified, displayName, photoURL, providerData,
      } = user;
      const provider = providerData[0].providerId;
      const providerId = providerData && providerData.length > 0 ? provider : user.providerId;
      store.commit('', {
        uid, email, emailVerified, displayName, photoURL, nome: displayName, providerId,
      });
      store.dispatch('loadUserPlan');
    } else {
      store.commit('', null);
    }
  });
  */
};

export {
  firebase, $fbApp, $auth, $firestore, $functions, $storage,
};
