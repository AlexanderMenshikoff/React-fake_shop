import axios from "axios";
import { IProductsList } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

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
          <div
            className="w-[30%] h-[432px] text-center cursor-pointer flex items-end"
            key={el.id}
          >
            <div className="ml-auto mr-auto whitespace-nowrap overflow-hidden text-ellipsis">
              <img
                className="ml-auto mr-auto max-h-[360px] mb-[30px]"
                src={el.image}
                alt={el.title}
                // onMouseEnter={(e) => (e.currentTarget.src = el.images[1])}
                // onMouseLeave={(e) => (e.currentTarget.src = el.images[0])}
              />

              <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                {el.title}
              </p>
              <p className=" ">{el.price}$</p>
            </div>
          </div>
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
