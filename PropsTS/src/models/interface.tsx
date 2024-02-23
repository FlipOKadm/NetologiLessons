export interface IProduct {
  listing_id: number;
  url?: string;
  MainImage?: {
    url_570xN?: string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

export interface IFilms {
  id:number;
  name:string;
  rating:number;
  price:number;
  type:string;
  image:string;
  description: string;
}


export interface ILike {
  like: number;
  onLike: () => void;
}