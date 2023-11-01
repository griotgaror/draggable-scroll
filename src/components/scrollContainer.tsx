import React from 'react';
import styled from "styled-components";

const _ScrollContainer = styled('section')`
    display: flex;
    gap: 15px;
    overflow-x: scroll;
    width: 100%;
    padding: 15px 0px;

    &:hover {
        cursor: grabbing;
    }
`;

const Element = styled('span')`
    background: #38B8C7;
    border-radius: 5px;
    height: 320px;
    width: 280px;
    flex: none;
`;

type MouseEv = React.MouseEvent<HTMLDivElement>;

interface DraggableState {
    isDragging: boolean;
    startX: number;
    startY: number;
    scrollLeft: number;
    scrollTop: number;
}

export default function ScrollContainer() {
    const containerRef = React.useRef< HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const [ state, setState ] = React.useState<DraggableState>({
        isDragging: false,
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    })

    const handleMouseDown = function(e: MouseEv){
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            isDragging: true,
            startX: e.clientX,
            // startY: e.clientY,
            scrollLeft: containerRef.current?.scrollLeft as number,
            // scrollTop: containerRef.current?.scrollTop as number
        }));
    };

    const handleMouseMove = function(e: MouseEv){
        if (!state.isDragging) return;
    
        // const deltaX = e.clientX - state.startX;
        // const deltaY = e.clientY - state.startY;

        const clientX = e.clientX;
        
        const dragSpeed = 250;
        const container = containerRef.current as HTMLDivElement;

        if (clientX < state.startX) {
            container.scrollLeft = state.scrollLeft + dragSpeed;
        }

        if (clientX > state.startX) {
            container.scrollLeft = state.scrollLeft - dragSpeed;
        }
        
        // container.scrollTop = state.scrollTop - deltaY;
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
            scrollTop: containerRef.current?.scrollTop || 0,
        });
    };

    return (
        <_ScrollContainer
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            onMouseLeave={stopDragging}
            onScroll={handleScroll}
        >
            {Array(20).fill('Test').map((_, i) => (
                <Element key={i} />
            ))}
        </_ScrollContainer>
    )
}