// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";
import Link from "../../2 Elements/Links/Link";

// COMPONENT ////////////////////////////////////////////////////
function Page0Layer0({width, tabIndex, enter, triggerExit}) {
    return (
        <Layer>
            <Link 
                linkType={{
                    type: "site",
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
            />
            <Link 
                linkType={{
                    type: "site",
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
            />
        </Layer>
    );
};

export default Page0Layer0;