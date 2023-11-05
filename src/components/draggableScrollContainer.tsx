import React from 'react';
import styled from "styled-components";

const DraggableScrollContainerWrapper = styled('section')`
    display: grid;
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
    const [ dragState, setDragState ] = React.useState<DraggableState>({
        startDragging: false,
        startX: 0,
        scrollLeft: 0,
        isDragging: false,
    })

    const handleMouseDown = function(e: MouseEv){
        e.preventDefault();
        setDragState((prevState) => ({
            ...prevState,
            startDragging: true,
            startX: e.clientX,
            scrollLeft: containerRef.current?.scrollLeft as number,
        }));
    };

    const handleMouseMove = function(e: MouseEv){
        if (!dragState.startDragging) return;

        setDragState({
            ...dragState,
            isDragging: true,
        })
        
        const container = containerRef.current as HTMLDivElement;
        const deltaX = e.clientX - dragState.startX;

        container.scrollLeft = dragState.scrollLeft - deltaX;
    };

    const stopDragging = function() {
        setDragState({
            ...dragState,
            startDragging: false,
            isDragging: false,
        })
    };

    const handleScroll = () => {
        setDragState({
            ...dragState,
            scrollLeft: containerRef.current?.scrollLeft || 0,
        });
    };

    return (
        <DraggableScrollContainerWrapper
            className={dragState.isDragging ? 'is-dragging': ''}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            onMouseLeave={stopDragging}
            onScroll={handleScroll}
        >
            {props.children}
        </DraggableScrollContainerWrapper>
    )
}