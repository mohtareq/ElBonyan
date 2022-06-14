import Head from "../../Main/Header/Header";
import WorkImgs from "../../Sections/WorksSections/WorksImages";
import { WorksContainer } from "./WorksStyle";


const Works = () => {

    return(
        <WorksContainer>
            <Head title={"أعمالنا"} />
            <WorkImgs />
        </WorksContainer>
    );
}

export default Works;