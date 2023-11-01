import styled from "styled-components";

const _ElementWrapper = styled('div')`
    margin: 10px;
`;

const _TestElement = styled('div')`
    border-radius: 5px;
    height: 320px;
    width: 280px;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &.bgMain {
        background: #1A1F2D;
    }

    &.bgSecond {
        background: #1F273A;
    }
`;

const _Label = styled('label')`
    background: #252E47;
    padding: 10px;
    border-radius: 5px;
`;

interface TestElementProps {
    text: string;
    className?: string;
}

export default function TestElement(props: TestElementProps) {
    return (
        <_ElementWrapper>
            <_TestElement className={props.className}>
                <_Label>
                    {props.text}
                </_Label>
            </_TestElement>
        </_ElementWrapper>
    )
}