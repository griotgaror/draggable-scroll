import styled from "styled-components";
import DraggableScrollContainer from "./draggableScrollContainer";
import Heading from "./heading";
import TestElement from "./testElement";

const _ContainerWithHeading = styled('div')`
    display: grid;
    width: 100%;
    height: 100%;
`;

interface ContainerWithHeadingProps {
    title: string;
    childrenCount: number
}

export default function ContainerWithHeading(props: ContainerWithHeadingProps) {
    const createTestElements = function(count: number) {
        const elements = [];

        for(let i = 0; i < count; i++) {
            elements.push(<TestElement text={`Container-${i}`} />)
        }

        return elements;
    }

    return (
        <_ContainerWithHeading>
            <Heading
                title={props.title}
            />
            <DraggableScrollContainer>
                {createTestElements(props.childrenCount)}
            </DraggableScrollContainer>
        </_ContainerWithHeading>
    )
}