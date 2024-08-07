import React, { useState, createContext, useContext } from "react";

export type User = {
    name: string,
    age: number,
}

export const UserContext = createContext({user: {name: "", age: 0}, setUser: (user: User) => {}});

export const UserProvider = ({children}: {children: React.ReactElement}) => {
    const [user, setUser] = useState<User>({name: "No name", age: 0});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}