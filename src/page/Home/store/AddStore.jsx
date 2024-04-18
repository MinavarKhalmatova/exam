import { create } from "zustand";

const useBaskeetFavorite = create((set) => {
  // Попытка извлечь сохраненные значения корзины и избранных товаров из localStorage
  const storedBasket = JSON.parse(localStorage.getItem("basket"));
  const storedFavorite = JSON.parse(localStorage.getItem("favorite"));

  // Инициализация состояний корзины и избранных товаров, используя сохраненные значения или пустые массивы по умолчанию
  const initialState = {
    basket: storedBasket || [],
    favorite: storedFavorite || [],
    setBasket: (bas) => {
      set({ basket: bas });
      localStorage.setItem("basket", JSON.stringify(bas));
    },
    setFavorite: (fav) => {
      set({ favorite: fav });
      localStorage.setItem("favorite", JSON.stringify(fav));
    },
  };

  return initialState;
});

export default useBaskeetFavorite;
