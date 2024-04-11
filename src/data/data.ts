import { IDeliveryItem } from "../components/DeliveryItem";
import twoArrowsImg from "../img/arrows3_5110.jpg";
import searchingImg from "../img/arrows_5506.jpg";
import backImg from "../img/arrows4.jpg";
import errorImg from "../img/error.jpg";
import mailImg from "../img/pochta.jpg";

export const deliveryItemsArr: IDeliveryItem[] = [
  {
    img: twoArrowsImg,
    mainText: "Delivery",
    subText:
      "Delivery of goods is carried out by Post. After sending the goods, you will receive a track number in the Russian Post application, with which you can track the movement of your parcel to your address",
  },
  {
    img: searchingImg,
    mainText: "Important",
    subText:
      "Delivery and processing times are indicated in the product description. The average delivery and processing time is 15 business days unless a different period is indicated in the description (excluding holidays and weekends). Technical support is available on weekdays from 10:00 to 18:00",
  },
  {
    img: backImg,
    mainText: "Return",
    subText:
      "Products with a discount of more than 20% and purchased as part of unique promotions cannot be returned. For other cases, write to E-mail technical support. Claims will not be accepted after 14 days from receipt",
  },
  {
    img: errorImg,
    mainText: "Problems with payment",
    subText:
      "If for some reason the payment does not go through, please write to our e-mail, technical support will help you place your order and choose the most convenient payment method for you",
  },
  {
    img: mailImg,
    mainText: "Picking up goods from the post office",
    subText:
      "In order not to miss your parcel, you definitely need to install the Russian Post application for your convenience. This way you can track the status of your parcel in a timely manner. If for some reason you do not have time to pick up the parcel, we will write to you at the email address specified during checkout and decide what to do next. Please note - in case of return, we do not refund money for postage and purchase of goods from the post office",
  },
];
