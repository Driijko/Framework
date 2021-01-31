// IMPORTS //////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../Page";
import Gutter from "../Gutter";
import Page2Layer0 from "./Page2Layer0";
import Page2Layer1 from "./Page2Layer1";

function Page2(props) {
    return (
        <Page maxFocusableElements={1}>     
            <Page2Layer0 />
            <Gutter />
            <Page2Layer1 />
        </Page>
    );
};

export default Page2;