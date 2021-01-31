// IMPORTS //////////////////////////////////////////////
import NewPage from "../NewPage";
import Gutter from "../Gutter";
import Page3Layer0 from "./Page3Layer0";
import Page3Layer1 from "./Page3Layer1";
import NewLayer from "../NewLayer";


// COMPONENT ////////////////////////////////////////////
function Page3() {

    // RENDER //////////////////////////////////////////////////
    return (
        <NewPage layerNum={2}>
            <NewLayer 
                type="basic" 
                focus={{
                    layerNum: 1,
                    focusableElements: 3,
                }}
            >
                <Page3Layer0 />
            </NewLayer>
            <Gutter />
            <NewLayer
                type="basic"
                focus={{
                    layerNum: 2,
                    focusableElements: 3,
                }}
            >
                <Page3Layer1 />
            </NewLayer>
        </NewPage>
    );
};

export default Page3;