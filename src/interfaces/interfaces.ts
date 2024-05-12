export interface IProductsList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IDeliveryItem {
  img: string;
  mainText: string;
  subText: string;
}

export interface IFakeLogo {
  template: string;
}

export interface IProduct {
  product: IProductsList;
}

export interface ISearchingInput {
  [x: string]: any;
  inputValue: string;
}
