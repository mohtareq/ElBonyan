import { WorksContainer } from "./WorksStyle";
import Head from "../../../Sections/MainSections/Header/Header";
import WorkImgs from "../../../Sections/OtherSections/WorksSections/WorksImages";

const Works = () => {

    return(
        <WorksContainer>
            <Head title={"أعمالنا"} />
            <WorkImgs />
        </WorksContainer>
    );
}

export default Works;