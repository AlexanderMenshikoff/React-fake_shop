import axios from "axios";
import { IProductsList } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchingInput } from "./SearchingInput";

export function ProductsList() {
  const [products, setProducts] = useState<IProductsList[]>([]);
  const [showProducts, setShowProducts] = useState(12);
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const response = await axios.get<IProductsList[]>(
      "https://fakestoreapi.com/products"
    );

    setProducts(response.data);
  }

  const paginationProducts = products.slice(0, showProducts);

  useEffect(() => {
    getData();
  }, [showProducts]);

  console.log(products);
  console.log(showProducts);
  console.log(paginationProducts);

  return (
    <>
      <SearchingInput inputValue={inputValue} setInputValue={setInputValue} />
      <div className="flex flex-wrap items-center gap-[60px] max-w-[1200px] ml-auto mr-auto pt-[100px]">
        {inputValue
          ? products.map((el) =>
              el.title.toLowerCase().includes(inputValue.toLowerCase()) ? (
                <ProductItem product={el} />
              ) : (
                ""
              )
            )
          : paginationProducts.map((el) =>
              el.title.toLowerCase().includes(inputValue.toLowerCase()) ? (
                <ProductItem product={el} />
              ) : (
                ""
              )
            )}
      </div>

      {inputValue ? (
        ""
      ) : showProducts <= products.length ? (
        <div className="flex justify-center">
          <button
            className="ml-auto mr-auto mt-[60px] mb-[40px] border-2 py-[10px] px-[20px] rounded-[10px] text-white bg-black"
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
