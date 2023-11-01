import styled from 'styled-components';
import ContainerWithHeading from './components/containerWithHeading';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
  width: 100vw;
  min-height: 100dvh;
  background: #1A1F2D;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
`;

export default function App() {
  return (
    <_App>
        <GlobalStyle />
        <ContainerWithHeading 
            title='Bereich 1'
            childrenCount={5}
        />
        <ContainerWithHeading 
            title='Bereich 2'
            childrenCount={20}
        />
    </_App>
  );
}