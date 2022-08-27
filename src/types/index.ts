export interface ICharacter {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

export interface IFavorite{
  favorite: ICharacter[]
}

export interface IFavoriteState{
  favorite: {
    favorite: ICharacter[]
  }
}