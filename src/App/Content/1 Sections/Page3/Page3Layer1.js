// IMPORTS //////////////////////////////////////////////////
// Import components -----------------------------------------
import TextHeader0 from "../../2 Elements/Text/TextHeaders/TextHeader0";
import Link from "../../2 Elements/Links/Link";

function Page3Layer1({
    width, height, tabIndex, enterKey, triggerExit
}) {
    return (
        <>
            <TextHeader0
                spatial={[0, 0, 20, 5]}
                level={1}
                width={width}
            >
                <h1>LAYER 1</h1>
            </TextHeader0>
            <Link
                width={width}
                spatial={[0, 5, 20, 3]}
                linkType={{
                    type: "section",
                    "triggerExit": triggerExit,
                    linkTo: "/",
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "blue",
                        "red"
                    ],
                }}
                focus={tabIndex === 1}
                enterSelect={enterKey && tabIndex === 1}
            >
                LINK 1
            </Link>
            <Link
                width={width}
                spatial={[0, 8, 20, 3]}
                linkType={{
                    type: "section",
                    "triggerExit": triggerExit,
                    linkTo: "/",
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "blue",
                        "red"
                    ],
                }}
                focus={tabIndex === 2}
                enterSelect={enterKey && tabIndex === 2}
            >
                LINK 2
            </Link>
            <Link
                width={width}
                spatial={[0, 11, 20, 3]}
                linkType={{
                    type: "section",
                    "triggerExit": triggerExit,
                    linkTo: "/",
                }}
                linkStyle={{
                    number: 0,
                    colors: [
                        "orange",
                        "blue",
                        "red"
                    ],
                }}
                focus={tabIndex === 3}
                enterSelect={enterKey && tabIndex === 3}
            >
                LINK 3
            </Link>
        </>
    );
};

// EXPORTS /////////////////////////////////////////////////////
export default Page3Layer1;