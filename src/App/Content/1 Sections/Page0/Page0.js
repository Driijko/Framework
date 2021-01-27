// IMPORTS //////////////////////////////////////////////////////////
// Import components -----------------------------------------------
import Page from "../Page";
import Gutter from "../Gutter";
import Page0Layer0 from "./Page0Layer0";
import Page0Layer1 from "./Page0Layer1";

export default function Page0(props) {
    return (
        <Page maxFocusableElements={0}>
            <Page0Layer0 />
            {/* <Gutter /> */}
            <Page0Layer1 />
        </Page>
    );
};