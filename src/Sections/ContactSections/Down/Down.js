import { All } from './DownStyle'
import LeftDown from './LeftDown/LeftDown';
import RightDown from './RightDown/RightDown';


const DownSection = () => {

    return(
        <All>
            <RightDown />
            <LeftDown />
        </All>
    );
}

export default DownSection;