import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc, getDocs, connectFirestoreEmulator } from "firebase/firestore";
import { firebaseConfig } from "../firebase.config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, "localhost", 8080);

export async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export { db };
