import LeftUp from './LeftUpper/LeftUpper';
import RightUp from './RightUpper/RightUpper';
import { All } from './UpperStyle'


const UpperSection = () => {

    return(
        <All>
            <RightUp />
            <LeftUp />
        </All>
    );
}

export default UpperSection;