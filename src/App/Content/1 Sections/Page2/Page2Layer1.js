// IMPORTS //////////////////////////////////////////////////////////
// Import components ------------------------------------------------
import Layer from "../Layer";
import Link from "../../2 Elements/Links/Link";

// COMPONENT /////////////////////////////////////////////////////////
function Page2Layer1({width, height, tabIndex, enter, triggerExit}) {
    return (
        <Layer type="basic" >
            <Link
                linkType={{
                    type: "external",
                    href: "https://css-tricks.com/",
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "blue",
                        "magenta"
                    ],
                }}
                spatial={[0, 0, 20, 5]}
                width={width}
                focus={tabIndex === 1}
                enterSelect={tabIndex === 1 && enter}
            >
                External Link
            </Link>
        </Layer>
    );
};

// EXPORTS //////////////////////////////////////////////////////////////
export default Page2Layer1;