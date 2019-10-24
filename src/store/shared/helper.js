import { $firestore } from 'boot/firebase';

export function mapQuerySnapshot(querySnapshot) {
  return querySnapshot.docs.map((doc) => {
    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      data: doc.data(),
    };
  });
}

export function mapDocumentSnapshot(docSnapshot) {
  if (!docSnapshot.exists) {
    console.warn('documento não encontrado:', docSnapshot);
    return null;
  }

  return {
    id: docSnapshot.id,
    data: docSnapshot.data(),
  };
}

export async function loadDocs(pid, collectionName) {
  const projectRef = $firestore.collection('projects').doc(pid);
  const docsRef = projectRef.collection(collectionName);

  const docs = await docsRef.get();
  if (!docs.exists) {
    return [];
  }

  return docs.then(mapQuerySnapshot);
}

export async function watchDocs(pid, collectionName, callback) {
  const docsRef = $firestore
    .collection('projects')
    .doc(pid)
    .collection(collectionName);

  return docsRef.onSnapshot((querySnapshot) => {
    const docs = mapQuerySnapshot(querySnapshot);
    callback(docs);
  });
}

export async function addDoc(collectionName, docData) {
  const docRef = await $firestore
    .collection(collectionName)
    .add(docData);

  // console.log(docData)
  console.info('Doc adicionado:', docRef);
  return docRef;
}

export async function addDocJor(pid, collectionName, docData, jid) {
  const docRef = await $firestore
    .collection('projects')
    .doc(pid)
    .collection(collectionName)
    .doc(jid)
    .set(docData);

  console.info('Doc adicionado:', docRef);
  return docRef;
}

export async function removeDoc(pid, collectionName, docId) {
  await $firestore
    .collection('projects')
    .doc(pid)
    .collection(collectionName)
    .doc(docId)
    .delete();

  console.info('Doc removido:', docId);
}

export async function updateDoc(pid, collectionName, docId, docData) {
  const documentRef = $firestore
    .collection('projects')
    .doc(pid)
    .collection(collectionName)
    .doc(docId);

  await documentRef.update(docData);
  console.info('Doc atualizado:', collectionName);

  return documentRef;
}
