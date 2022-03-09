import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100% ;
    justify-content: center;
    align-items: center;
    display: flex ;
`;
