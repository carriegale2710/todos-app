import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

//defining types
interface UserDetailsContextType {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

//create context with  default value
export const UserDetailsContext = createContext<UserDetailsContextType>({
  userName: "",
  setUserName: () => {},
});

//context provider
const UserDetailsContextProvider = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState<string>("");
  return (
    <UserDetailsContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsContextProvider;

//NOTE - CUSTOM HOOK
export function useUserDetailsContext() {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error(
      "useUserDetailsContext must be used within a UserDetailsContextProvider"
    );
  }
  return context;
}
