import { All, Intro } from './OpinionStyle';
import IntroOpionion from './FirstOpinion/FirstOpinion';
import SecondOpionion from './SecondOpinion/SecondOpinion';


const Opinion = () => {

    return(
        <All>
            <Intro>
            <IntroOpionion />
            <SecondOpionion />
            </Intro>      
        </All>
    );
}

export default Opinion;