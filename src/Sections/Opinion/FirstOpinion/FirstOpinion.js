import { All, Info, Title, Arraws, Arraw} from "./FirstOpinionStyle";


const IntroOpionion = () => {

    return(
        <All>
            <Info>
                <Title>أراء العملاء</Title>
            </Info>
            <Arraws>
                <Arraw xmlns="http://www.w3.org/2000/svg" id='back-opi' fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                </Arraw>
                <Arraw xmlns="http://www.w3.org/2000/svg" id='next-opi' fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
                </Arraw>
            </Arraws>
        </All>
    );
}

export default IntroOpionion;