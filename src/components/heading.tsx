import styled from 'styled-components';

const _Heading = styled('span')`
    font-size: 25px;
    font-weight: 600px;
    margin-bottom: 15px;
`;

interface HeadingProps {
    title: string;
}

export default function Heading(props: HeadingProps) {
    return (
        <_Heading>
            {props.title}
        </_Heading>
    )
}