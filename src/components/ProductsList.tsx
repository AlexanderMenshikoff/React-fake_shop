import axios from "axios";
import { IProductsList } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "./ProductItem";

export function ProductsList() {
  const [products, setProducts] = useState<IProductsList[]>([]);
  const [showProducts, setShowProducts] = useState(12);

  async function getData() {
    const response = await axios.get<IProductsList[]>(
      `https://fakestoreapi.com/products?offset=0&limit=${showProducts}`
    );
    setProducts(response.data);
  }

  useEffect(() => {
    getData();
  }, [showProducts]);

  console.log(products);
  console.log(showProducts);

  return (
    <>
      <div className="flex flex-wrap items-center gap-[60px] max-w-[1200px] ml-auto mr-auto pt-[350px] ">
        {products.map((el) => (
          // <Link to="/about">
          <ProductItem product={el} />
          // </Link>
        ))}
      </div>

      {showProducts <= products.length ? (
        <div className="flex justify-center">
          <button
            className="ml-auto mr-auto mt-[60px] mb-[40px] border-2 py-[10px] px-[20px] text-white bg-black"
            onClick={() => {
              setShowProducts((prev) => prev + 12);
            }}
          >
            Show more
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
