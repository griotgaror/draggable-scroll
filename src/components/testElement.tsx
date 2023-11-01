import styled from "styled-components";

const _TestElement = styled('div')`
    background: #1F273A;
    border-radius: 5px;
    height: 320px;
    width: 280px;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const _Label = styled('label')`
    background: #252E47;
    padding: 10px;
    border-radius: 5px;
`;

interface TestElementProps {
    text: string;
}

export default function TestElement(props: TestElementProps) {
    return (
        <_TestElement>
            <_Label>
                {props.text}
            </_Label>
        </_TestElement>
    )
}