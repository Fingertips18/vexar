import { createContext, useContext, useState, useEffect } from "react";

import { UserService } from "../services/user-service";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    UserService.currentUser()
      .then((res) => {
        if (res) {
          setIsSignedIn(true);
          setUser(res);
        } else {
          setIsSignedIn(false);
          setUser(null);
        }
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
