import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { deliveryItemsArr } from "../data/data";
import { DeliveryItem, IDeliveryItem } from "../components/DeliveryItem";

export function DeliveryPage() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap items-center gap-[60px] max-w-[1200px] ml-auto mr-auto pt-[180px]">
        {deliveryItemsArr.map((el: IDeliveryItem) => {
          return (
            <DeliveryItem
              img={el.img}
              mainText={el.mainText}
              subText={el.subText}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
