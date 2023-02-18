import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';

import GlobalStyles from '../../styles/Global.style';
import RouterApp from './Routes';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const App = (): JSX.Element => (
    <Router>
        <Container>
            <GlobalStyles />
            <RouterApp />
        </Container>
    </Router>
)

export default App