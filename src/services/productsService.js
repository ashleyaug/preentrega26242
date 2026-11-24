import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/config";

const productsRef = collection(db, "products");


/*------------------------ TRAER PRODUCTOS ---------------------------*/

export const getProducts = async () => {
    try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
});

    return productsFormat;
 } catch (error) {
    console.error("Error al traer productos: ", error);
    throw error;
 }
};

/*------------------------ TRAER PRODUCTO POR ID ---------------------------*/

export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(productsRef, id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID: ", error);
    throw error;
  }
};

/*------------------------ ALTA DE PRODUCTO ---------------------------*/

export const createProduct = async (productData) => {
  try {
    //Usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;

  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
