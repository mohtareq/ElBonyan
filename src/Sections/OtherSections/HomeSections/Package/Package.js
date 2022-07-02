import IntroPackage from './FirstPackage/FirstPackage';
import SecondPackage from './SecondPackage/SecondPackage';

import { All, Intro } from './PackageStyle';

const Package = () => {

    return(
        <All>
            <Intro>
            <IntroPackage />
            <SecondPackage />
            </Intro>      
        </All>
    );
}

export default Package;