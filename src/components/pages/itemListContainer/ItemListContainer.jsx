import { useState } from "react";
import { useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../products";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(arrayEntendible);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
      </>
    );
  }

  const funcionParaAgregar = () => {
    const productsCollection = collection(db, "products");
    //addDoc(productsCollection,{price:})
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };
  return (
    <div>
      <h2> </h2>

      <ItemList items={items} />
    </div>
  );
};
