import { initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvE8NyH023yzc0isFwFnhBbj2eAE-dJdA",
  authDomain: "coffee-delivery-e5e5d.firebaseapp.com",
  projectId: "coffee-delivery-e5e5d",
  storageBucket: "coffee-delivery-e5e5d.appspot.com",
  messagingSenderId: "367402853493",
  appId: "1:367402853493:web:7f8aa651d0131a4037043c"
};

// conexão com o banco
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// recuperar dados do banco
async function getProducts(db: Firestore){
  const productsCol = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return productsList;
}

export function App() {
  return (
    <h1>inicio</h1>
  )
}
