import { createContext, useContext } from "react";
import { useTipReducer } from "../components/reducers/Reducer";

const TipContext = createContext();

const TipProvider = ({ children }) => {
  const [state, dispatch] = useTipReducer();
  const { tipList } = state;
  return (
    <TipContext.Provider
      value={{
        tipList,
        dispatch,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
const useTips = () => {
  return useContext(TipContext);
};
export { TipProvider, useTips };
