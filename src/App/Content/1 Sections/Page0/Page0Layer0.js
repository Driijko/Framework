// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";
import Link from "../../2 Elements/Links/Link";

// COMPONENT ////////////////////////////////////////////////////
function Page0Layer0({width, tabIndex, enter, triggerExit}) {
    return (
        <Layer type="basic" >
            <Link 
                linkType={{
                    type: "section",
                    "triggerExit": triggerExit,
                    linkTo: "/test"
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "green",
                        "red",
                    ],
                }}
                width={width}
                spatial={[0, 0, 20, 10]}
                focus={tabIndex === 1}
                enterSelect={tabIndex === 1 && enter}
            >
                LINK 1
            </Link>
            <Link 
                linkType={{
                    type: "section",
                    "triggerExit": triggerExit,
                    linkTo: "/test"
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "green",
                        "red",
                    ],
                }}
                width={width}
                spatial={[0, 11, 20, 10]}
                focus={tabIndex === 2}
                enterSelect={tabIndex === 2 && enter}
            >
                LINK 2  
            </Link>
        </Layer>
    );
};

export default Page0Layer0;