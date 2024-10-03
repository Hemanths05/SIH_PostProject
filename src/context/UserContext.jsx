import { useState } from "react";
import { createContext, useContext } from "react";


const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        email: "",
        password: "",
        accountType: null,
        isLoggedIn: false,
    });
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUserProvider() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserProvider must be used within a UserProvider. This Error will be thrown if you try to use the useUserProvider hook outside of the UserProvider component");
    }
    return context;
}

