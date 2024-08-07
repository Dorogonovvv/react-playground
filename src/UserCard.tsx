import React, {useContext, useRef} from "react";

import { UserContext } from "./user-provider"; 

export const UserCard = () => {
    const {user, setUser} = useContext(UserContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeName = () => {
        if(inputRef.current) {
            setUser({
                name: inputRef.current.value,
                age: user.age,
            })
        }
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <hr />
            <input ref={inputRef} type="text" />
            <button onClick={onChangeName}>Change name</button>
        </div>
    )
};