import React, {useContext, useState} from "react"

const Context = React.createContext() 

function ContextProvider({children}) {
    const [hovered, setHovered] = useState(false)

    return (
        <Context.Provider value={hovered}>
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};