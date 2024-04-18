import { create } from "zustand";

const useLoginAuth = create((set) => {
  const LocalDatas = JSON.parse(localStorage.getItem("token"));

  return {
    token: LocalDatas,
    setToken: (newToken) => set({ token: newToken }),
  };
});

export default useLoginAuth;