import styled from "styled-components";

const _TestElement = styled('div')`
    background: #38B8C7;
    border-radius: 5px;
    height: 320px;
    width: 280px;
    flex: none;
`;

interface TestElementProps {
    text: string;
}

export default function TestElement(props: TestElementProps) {
    return (
        <_TestElement>
            {props.text}
        </_TestElement>
    )
}