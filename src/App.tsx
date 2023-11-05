import styled from 'styled-components';
import DraggableScrollContainer from './components/draggableScrollContainer';
import Heading from './components/heading';
import TestElement from './components/testElement';
import { GlobalStyle } from './style/global';

const AppLayoutWrapper = styled('div')`
  width: 100vw;
  min-height: 100dvh;
  background: #1A1F2D;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Wrapper = styled('div')`
  display: flex;
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
    <AppLayoutWrapper>
        <GlobalStyle />
        
        <Heading title='Responsiv Test' />
        <DraggableScrollContainer>
          <Wrapper>
            {createTestElements(5)}
          </Wrapper>
        </DraggableScrollContainer>

        <Heading title='Long List' />
        <DraggableScrollContainer>
          <Wrapper>
            {createTestElements(20)}
          </Wrapper>
        </DraggableScrollContainer>

        <Heading title='Double List' />
        <DraggableScrollContainer>
          <Wrapper>
            {createTestElements(10)}
          </Wrapper>
          <Wrapper>
            {createTestElements(10)}
          </Wrapper>
        </DraggableScrollContainer>
        
    </AppLayoutWrapper>
  );
}