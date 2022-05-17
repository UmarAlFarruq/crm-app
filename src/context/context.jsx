import { createContext, useState } from "react";

export const GlobalObj = createContext();

const StateProvider = ({ children }) => {
    const [state, setState] = useState({
        modal: false,
        modalData: null,
    })
    return (
        <GlobalObj.Provider value={[state, setState]} >
            {children}
        </GlobalObj.Provider>
    )
}
export default StateProvider;