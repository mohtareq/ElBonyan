import IntroPackage from './FirstPackage/FirstPackage';
import SecondPackage from './SecondPackage/SecondPackage';

import { Intro } from './PackageStyle';

const Package = () => {

    return(
        <Intro>
            <IntroPackage />
            <SecondPackage />
        </Intro>
    );
}

export default Package;