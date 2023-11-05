import React from 'react';
import styled from "styled-components";

const _ElementWrapper = styled('div')`
    margin: 10px;
`;

const _TestElement = styled('div')`
    border-radius: 5px;
    height: 280px;
    width: 230px;
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

    &:hover {
        &, * {
            cursor: pointer;
        }
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
    const ref = React.useRef<HTMLDivElement | null>(null);

    const handleOnClick = function() {
        window.alert(ref.current?.innerText);
    }

    return (
        <_ElementWrapper ref={ref} onClick={handleOnClick}>
            <_TestElement className={props.className}>
                <_Label>
                    {props.text}
                </_Label>
            </_TestElement>
        </_ElementWrapper>
    )
}