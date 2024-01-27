import { ReactNode, createContext, } from "react";
import axios from "axios";

type ContextProps = {
  children: ReactNode;
}

export let authorContext = createContext<any>(null);

export default function AuthorContextProvider({ children }: ContextProps) {
const getAuthor = async (id: number) => {
  try {
    return await axios.get(
      `https://api.slingacademy.com/v1/sample-data/users/${id}`
    );
  } catch (error:any) {
    return error.message
  }
    
};

  return (
    <authorContext.Provider value={{getAuthor}}>
      {children}
    </authorContext.Provider>
  );
}

