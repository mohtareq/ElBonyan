import { Intro } from './OpinionStyle';
import IntroOpionion from './FirstOpinion/FirstOpinion';
import SecondOpionion from './SecondOpinion/SecondOpinion';


const Opinion = () => {

    return(
        <Intro>
            <IntroOpionion />
            <SecondOpionion />
        </Intro>
    );
}

export default Opinion;