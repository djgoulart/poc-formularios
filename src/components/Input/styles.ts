import styled from 'styled-components/native';

export const Container = styled.TextInput`
    background-color:  ${({ theme }) => theme.colors.inputBackground};
    width: 100% ;
    padding: 6px 18px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;

    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 5px ;

    margin-bottom: 8px;
`;
