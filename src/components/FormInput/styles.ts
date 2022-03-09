import styled from 'styled-components/native';

export const Container = styled.TextInput`
    background-color:  ${({ theme }) => theme.colors.inputBackground};
    min-width: 200px ;
    justify-content: center;
    align-items: center;
    display: flex ;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    height: 30px ;
    border-radius: 7px ;
    margin: 5px 0px ;
    padding: 0px 15px;
`;
