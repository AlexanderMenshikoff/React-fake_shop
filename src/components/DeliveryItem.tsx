import { IDeliveryItem } from "../interfaces/interfaces";

export function DeliveryItem(props: IDeliveryItem) {
  return (
    <div className="w-[30%] text-center border-2 border-stone-950 border-solid min-h-[570px]">
      <img className="mr-auto ml-auto py-[35px]" src={props.img} alt="" />
      <p className="pb-[30px]">{props.mainText}</p>
      <p className="pb-[50px] px-[35px]">{props.subText}</p>
    </div>
  );
}
