import styled from "styled-components";

export const RoomCard = styled.article`
  background-color: #1d1d1d;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;

  &:hover {
    filter: brightness(1.125) saturate(1.5);
  }
`

export const RoomTitle = styled.h3<{selected?: boolean}>`
  font-weight: bold;
  background-color: ${props => props.selected ? '#E9454E' : '#5B4897'};
  padding: 0.75rem 0.75rem 0.5rem;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  
  span {
    margin-left: 1rem;
  }
`

export const RoomContent = styled.div`
  padding: 0.5rem 0.75rem 0.75rem;
`
