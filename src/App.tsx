import styled from 'styled-components';
import ContainerWithHeading from './components/containerWithHeading';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
  height: 100dvh;
  width: 100vw;
  background: linear-gradient(#0380CA 0%, #040D3A 100%);
  display: grid;
  padding: 15px;
  gap: 15px;
`;

export default function App() {
  return (
    <_App>
        <GlobalStyle />
        <ContainerWithHeading 
            title='Bereich 1'
            childrenCount={8}
        />
        <ContainerWithHeading 
            title='Bereich 2'
            childrenCount={10}
        />
        <ContainerWithHeading 
            title='Bereich 3'
            childrenCount={20}
        />
        <ContainerWithHeading 
            title='Bereich 4'
            childrenCount={20}
        />
    </_App>
  );
}