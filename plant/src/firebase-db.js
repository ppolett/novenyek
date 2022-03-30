import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCWdQ6Z4AKFdaFqUZLI5YwNDRVS7K0WYOw",
    authDomain: "noveny-20f15.firebaseapp.com",
    projectId: "noveny-20f15",
    storageBucket: "noveny-20f15.appspot.com",
    messagingSenderId: "932902947239",
    appId: "1:932902947239:web:400f8d8fcfd41e191e0e82",
    measurementId: "G-F8LF15R5YS"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/**
 * @param {String} collectionName - KollekciĂł neve
 * @param {Object} data - FeltĂśltendĹ adat
 */
export async function create(collectionName, data) {
    const collectionObj = collection(db, collectionName);
    await addDoc(collectionObj, data);

}

/**
 * @param {String} collectionName - KollekciĂł neve
 * @param {String} docId - LekĂŠrendĹ dokumentum
 */
export async function read(collectionName, docId) {
    const collectionObj = collection(db,collectionName);
    const data = await collectionObj.doc(docId).get();
    return data.exists ? data.data() : null;
}

/**
 * @param {String} collectionName - KollekciĂł neve
 * @param {Object} data - FeltĂśltendĹ adat
 * @param {String} docId - MĂłdosĂ­tandĂł dokumentum
 */
export async function update(collectionName, docId, data) {
    const docObj = doc(db,collectionName,docId);
    await updateDoc(docObj,data);
}

/**
 * @param {String} collectionName - KollekciĂł neve
 * @param {String} docId - TĂśrlendĹ dokumentum
 */
export async function deletedoc(collectionName, docId) {
    await deleteDoc(doc(db,collectionName,docId));
}

/**
 * @param {String} collectionName - KollekciĂł neve
 */
export async function useLoadDocs(collectionName){
    const collectionObj = collection(db,collectionName);
    const snapshot = await getDocs(collectionObj);
    const data  = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
    return data;
}