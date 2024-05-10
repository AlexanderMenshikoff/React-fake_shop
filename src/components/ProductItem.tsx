import { IProduct, IProductsList } from "../interfaces/interfaces";

export function ProductItem(props: IProduct) {
  return (
    <div
      className="w-[30%] h-[432px] text-center cursor-pointer flex items-end"
      key={props.product.id}
    >
      <div className="ml-auto mr-auto whitespace-nowrap overflow-hidden text-ellipsis">
        <img
          className="ml-auto mr-auto max-h-[360px] mb-[30px]"
          src={props.product.image}
          alt={props.product.title}
          // onMouseEnter={(e) => (e.currentTarget.src = el.images[1])}
          // onMouseLeave={(e) => (e.currentTarget.src = el.images[0])}
        />

        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {props.product.title}
        </p>
        <p className=" ">{props.product.price}$</p>
      </div>
    </div>
  );
}
