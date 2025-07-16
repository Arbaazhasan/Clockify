import { createContext, useState } from "react";
import App from "../../App";

export const Context = createContext();

const AppWrapper = () => {
    const [currentTab, setCurrentTab] = useState([false, true, false]);

    return (
        <Context.Provider value={{ currentTab, setCurrentTab }}>
            <App />
        </Context.Provider>
    )
};


export default AppWrapper;