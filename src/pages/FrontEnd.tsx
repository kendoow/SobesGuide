import { Footer, NavBar } from "../components";
import FrontendSection from "../components/FontendSection/FrontendSection";


const FrontEnd = () => {
    return (
        <>
        <NavBar url = {"/"} black = {false}/>
        <FrontendSection/>
        <Footer black={false} />
        </>
    )
}

export default FrontEnd;
