/* eslint-disable @typescript-eslint/ban-types */
export type AuthContextProps = {
  authToken: TokenProps;
  setAuthToken: Function;
};

export type TokenProps = {
  id: string;
  token: string;
};
