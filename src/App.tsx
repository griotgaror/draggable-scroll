import styled from 'styled-components';
import DraggableScrollContainer from './components/draggableScrollContainer';
import Heading from './components/heading';
import TestElement from './components/testElement';
import { GlobalStyle } from './style/global';

const _App = styled('div')`
  width: 100vw;
  min-height: 100dvh;
  background: #1A1F2D;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export default function App() {
  const createTestElements = function(count: number) {
    const elements = [];

    for(let i = 0; i < count; i++) {
        elements.push(<TestElement
            key={i}
            className='bgSecond'
            text={`C-${i}`} 
        />)
    }

    return elements;
  }

  return (
    <_App>
        <GlobalStyle />
        
        <Heading title='Bereich 1' />
        <DraggableScrollContainer>
          {createTestElements(5)}
        </DraggableScrollContainer>

        <Heading title='Bereich 2' />
        <DraggableScrollContainer>
          {createTestElements(20)}
        </DraggableScrollContainer>
        
    </_App>
  );
}