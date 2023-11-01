import styled from 'styled-components';
import ContainerWithHeading from './components/containerWithHeading';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
  width: 100vw;
  background: #1A1F2D;
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
            childrenCount={5}
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
            childrenCount={8}
        />
    </_App>
  );
}