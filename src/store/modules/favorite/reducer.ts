import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { 
  ICharacter,
  IFavorite,
  IFavoriteState
} from '../../../types'

const initialState = {
  favorite: []
}

const Favorite = createSlice({
  name: 'favoriteData',
  initialState,
  reducers: {
    addFavorite: ( state: IFavorite, action: PayloadAction<ICharacter>) => {
      state.favorite = [...state.favorite, action.payload]
    }
  }
})

export const { addFavorite } = Favorite.actions;

export const favoriteStateData = (state: IFavoriteState) => state.favorite.favorite;

export default Favorite.reducer;