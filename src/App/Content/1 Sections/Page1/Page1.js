// IMPORTS //////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../Page";
import Gutter from "../Gutter";
import Page1Layer0 from "./Page1Layer0";
import Page1Layer1 from "./Page1Layer1";

function Page1() {
    return (
        <Page maxFocusableElements={0}>
            <Page1Layer0 />
            <Gutter />
            <Page1Layer1 />
        </Page>
    );
};

export default Page1;