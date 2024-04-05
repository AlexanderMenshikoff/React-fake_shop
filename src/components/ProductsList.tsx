import axios from "axios";
import { IProductsList } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

export function ProductsList() {
  const [products, setProducts] = useState<IProductsList[]>([]);

  async function getData() {
    const response = await axios.get<IProductsList[]>(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=21"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center gap-[60px] max-w-[1200px] ml-auto mr-auto">
        {products.map((el) => (
          <div className="w-[30%] text-center " key={el.id}>
            <img
              className="w-4/4 ml-auto mr-auto"
              src={el.images[0]}
              alt={el.title}
            />
            <div className=" ml-auto mr-auto">{el.title}</div>
            <div className=" ml-auto mr-auto">{el.price}$</div>
          </div>
        ))}
      </div>
    </>
  );
}
