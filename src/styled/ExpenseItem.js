import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
    background-color: #4b4b4b;

    h2 {
        color: #3a3a3a;
        font-size: 1rem;
        flex: 1;
        margin: 0 1rem;
        color: white;
    }

    @media (min-width: 580px) {
        h2 {
            font-size: 1.25rem;
        }
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    flex-flow: column-reverse;

    @media (min-width: 580px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
    }
`;

export const ItemPrice = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;

    @media (min-width: 580px) {
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;
    }
`;

export const ItemDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`;

export const Month = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
`;

export const Year = styled.div`
    font-size: 0.75rem;
`;

export const Day = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;
