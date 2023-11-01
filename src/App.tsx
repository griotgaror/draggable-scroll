import styled from 'styled-components';
import ScrollContainer from './components/scrollContainer';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
  height: 100dvh;
  width: 100vw;
  background: linear-gradient(#0380CA 0%, #040D3A 100%);
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export default function App() {
  return (
    <_App>
        <GlobalStyle />
        <ScrollContainer />
    </_App>
  );
}