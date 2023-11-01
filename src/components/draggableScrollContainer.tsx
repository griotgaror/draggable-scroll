import React from 'react';
import styled from "styled-components";

const _DraggableScrollContainer = styled('section')`
    display: flex;
    overflow: scroll;
    width: 100%;
    scrollbar-color: transparent transparent;

    &:hover {
        &, * {
            cursor: grabbing;
        }
    }
`;

type MouseEv = React.MouseEvent<HTMLDivElement>;

interface DraggableState {
    isDragging: boolean;
    startX: number;
    scrollLeft: number;
}

interface DraggableScrollContainerProps {
    children: React.ReactNode;
}

export default function DraggableScrollContainer(props: DraggableScrollContainerProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [ state, setState ] = React.useState<DraggableState>({
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
    })

    const handleMouseDown = function(e: MouseEv){
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            isDragging: true,
            startX: e.clientX,
            scrollLeft: containerRef.current?.scrollLeft as number,
        }));
    };

    const handleMouseMove = function(e: MouseEv){
        if (!state.isDragging) return;
        
        const container = containerRef.current as HTMLDivElement;

        const deltaX = e.clientX - state.startX;

        container.scrollLeft = state.scrollLeft - deltaX;
    };

    const stopDragging = function() {
        setState({
            ...state,
            isDragging: false,
        })
    };

    const handleScroll = () => {
        setState({
            ...state,
            scrollLeft: containerRef.current?.scrollLeft || 0,
        });
    };

    return (
        <_DraggableScrollContainer
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            onMouseLeave={stopDragging}
            onScroll={handleScroll}
        >
            {props.children}
        </_DraggableScrollContainer>
    )
}