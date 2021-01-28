// IMPORTS ////////////////////////////////////////////////////////////
import {useState, useEffect, Children, cloneElement} from "react";

// COMPONENT //////////////////////////////////////////////////////////
function InteractiveElement({children, focus, enterSelect}) {

    // HIGHLIGHTING ////////////////////////////////////////////////////////
    const [highlight, setHighlight] = useState(null);

    // Focus -----------------------------------------------------------
    useEffect(()=> {
        if (focus) {
            setHighlight(true);
        }
        else if (highlight) {
            setHighlight(false);
        };
    },[focus]);

    // Mouse Handlers --------------------------------------------------
    function handleMouseEnter() {
        setHighlight(true);
    };

    function handleMouseLeave() {
        setHighlight(false);
    };

    // SELECTION ////////////////////////////////////////////////////////////
    const [selected, setSelected] = useState(false);

    // Mouse Handler ------------------------------------------
    function handleClick() {
        setSelected(true);
    };

    // User presses 'enter' key --------------------------------
    useEffect(()=> {
        if (enterSelect) {
            setSelected(true);
        };
    }, [enterSelect]);

    // INTERACTIVITY /////////////////////////////////////////////////////
    const [interactivity, setInteractivity] = useState("able");

    useEffect(()=> {
        if (interactivity !== "dormant") {
            if (selected) {
                setInteractivity("selected");
            }
            else if (highlight) {
                setInteractivity("highlight");
            }
            else {
                setInteractivity("able");              
            };
        }
    }, [highlight, selected]);

    // PROPS ////////////////////////////////////////////////////////////
    // Children.forEach(children, (child, index) => {
    //     if (index === 0) {
    //         layers.push(
    //             cloneElement(child, {
    //                 tabIndex: tabIndex,
    //                 enterSelect: enter,
    //                 "triggerExit": triggerExit,
    //             })
    //         );
    //     }
    //     else {
    //         layers.push(child);
    //     };
    // });
    // const child = cloneElement(children, {
    //     interactivity: interactivity,
    //     onClick: handleClick,
    //     onMouseEnter: handleMouseEnter,
    //     onMouseLeave: handleMouseLeave,
    // });

    // console.log(child);

    const modifiedChildren = Children.map(children, (child, index)=> {
        if (index === 0) {
            return cloneElement(child, {
                interactivity: interactivity,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
            });
        }
        else {
            return cloneElement(child, {
                interactivity: interactivity,
            });
        };
    });


    // RENDER //////////////////////////////////////////////////////////////
    return (
        modifiedChildren
    );
};

export default InteractiveElement;