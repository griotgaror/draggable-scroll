import React from 'react';
import styled from "styled-components";

const _DraggableScrollContainer = styled('section')`
    display: flex;
    overflow: scroll;
    width: 100%;
    scrollbar-color: transparent transparent;

    &:hover {
        cursor: grabbing;
    }

    &.is-dragging > * {
        pointer-events: none;
    }

`;

type MouseEv = React.MouseEvent<HTMLDivElement>;

interface DraggableState {
    startDragging: boolean;
    isDragging: boolean
    startX: number;
    scrollLeft: number;
}

interface DraggableScrollContainerProps {
    children: React.ReactNode;
}

export default function DraggableScrollContainer(props: DraggableScrollContainerProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [ dragableContainer, setDragableContainer ] = React.useState<DraggableState>({
        startDragging: false,
        startX: 0,
        scrollLeft: 0,
        isDragging: false,
    })

    const handleMouseDown = function(e: MouseEv){
        e.preventDefault();
        setDragableContainer((prevState) => ({
            ...prevState,
            startDragging: true,
            startX: e.clientX,
            scrollLeft: containerRef.current?.scrollLeft as number,
        }));
    };

    const handleMouseMove = function(e: MouseEv){
        if (!dragableContainer.startDragging) return;

        setDragableContainer({
            ...dragableContainer,
            isDragging: true,
        })
        
        const container = containerRef.current as HTMLDivElement;
        const deltaX = e.clientX - dragableContainer.startX;

        container.scrollLeft = dragableContainer.scrollLeft - deltaX;
    };

    const stopDragging = function() {
        setDragableContainer({
            ...dragableContainer,
            startDragging: false,
            isDragging: false,
        })
    };

    const handleScroll = () => {
        setDragableContainer({
            ...dragableContainer,
            scrollLeft: containerRef.current?.scrollLeft || 0,
        });
    };

    return (
        <_DraggableScrollContainer
            className={dragableContainer.isDragging ? 'is-dragging': ''}
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