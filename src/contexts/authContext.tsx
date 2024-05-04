import { createContext, useState } from "react";
import { AuthContextProps, TokenProps } from "./authContext.types";

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: any) {
  const [authToken, setAuthToken] = useState<TokenProps>({
    id: "",
    token: "",
  });

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
