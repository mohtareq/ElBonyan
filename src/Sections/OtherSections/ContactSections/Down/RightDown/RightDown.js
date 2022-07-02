import { All, Right} from './RightDownStyle'
import { Wrapper, Status } from "@googlemaps/react-wrapper";



const RightDown = () => {
    
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    return(
        <All>
            <Right>
                <Wrapper apiKey={''} render={render}>
                    
                </Wrapper>
            </Right>  
        </All>

    );
}

export default RightDown;