import axios from "axios";
import { IProductsList } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

export function ProductsList() {
  const [products, setProducts] = useState<IProductsList[]>([]);
  const [showProducts, setShowProducts] = useState(12);

  async function getData() {
    const response = await axios.get<IProductsList[]>(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=${showProducts}`
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
      <div className="flex flex-wrap items-center gap-[60px] max-w-[1200px] ml-auto mr-auto">
        {products.map((el) =>
          el.id <= 51 ? (
            <div className="w-[30%] text-center cursor-pointer" key={el.id}>
              <img
                className="ml-auto mr-auto"
                src={el.images[0]}
                alt={el.title}
                onMouseEnter={(e) => (e.currentTarget.src = el.images[1])}
                onMouseLeave={(e) => (e.currentTarget.src = el.images[0])}
              />
              <div className=" ml-auto mr-auto">{el.title}</div>
              <div className=" ml-auto mr-auto">{el.price}$</div>
            </div>
          ) : (
            <div className="w-[30%] text-center " key={el.id}>
              <img
                className=" ml-auto mr-auto"
                src={el.category.image}
                alt={el.title}
              />
              <div className=" ml-auto mr-auto ">{el.title}</div>
              <div className=" ml-auto mr-auto">{el.price}$</div>
            </div>
          )
        )}
      </div>
      {showProducts <= products.length ? (
        <div className="flex justify-center">
          <button
            className="ml-auto mr-auto mt-[40px] mb-[40px] border-2 rounded-[25px] py-[10px] px-[20px]"
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
