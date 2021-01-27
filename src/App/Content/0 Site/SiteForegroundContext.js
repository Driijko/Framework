import {createContext, useState} from "react";

const SiteForegroundContext = createContext();

function SiteForegroundContextProvider({children}) {
    const [foregroundAnimate, setForegroundAnimate] = useState(true);

    function triggerForegroundAnimate() {
        setForegroundAnimate(true);
    };

    return (
        <SiteForegroundContext.Provider 
            value={{
                foregroundAnimate,
                triggerForegroundAnimate,
            }}
        >
            {children}
        </SiteForegroundContext.Provider>
    );
};

export default SiteForegroundContext;
export {SiteForegroundContextProvider};