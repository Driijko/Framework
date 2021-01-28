// IMPORTS ///////////////////////////////////////////////////////
// Import components ----------------------------------------------
import InteractiveElement from "../InteractiveElement";
import SiteLink from "./LinkTypes/SiteLink";
import LinkStyle0 from "./LinkStyles/LinkStyle0";

// COMPONENT //////////////////////////////////////////////////////
function Link({
    linkType, linkStyle, spatial, width, focus, enterSelect
}) {


    // STYLE //////////////////////////////////////////////////////////
    let linkStyleElement;

    if (linkStyle.number === 0) {
        linkStyleElement = (
            <LinkStyle0
                spatial={spatial}
                colors={linkStyle.colors}
                width={width}
            >LINK</LinkStyle0>
        );
    }
    // TYPE ////////////////////////////////////////////////////
    let linkTypeElement;

    if (linkType.type === "site") {
        linkTypeElement = (
            <SiteLink 
                triggerExit={linkType.triggerExit}
                linkTo={linkType.linkTo}
            />
        );
    };

    // RENDER //////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
        >
            {linkStyleElement}
            {linkTypeElement}
        </InteractiveElement>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default Link;