// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries ----------------------------------------------------
import {useEffect} from "react";

export default function SiteLink({
    children, interactivity, linkTo, triggerExit,
}) {
    
    useEffect(()=> {
        if (interactivity === "selected") {
            triggerExit(linkTo);
        };
    },[interactivity]);

    // RENDER /////////////////////////////////////////////////////////////////////////////

    return (
        <>
        </>
    );   
};