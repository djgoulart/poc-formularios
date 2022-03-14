import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color:  ${({ theme }) => theme.colors.success};
    height: 45px ;
    min-width: 200px ;
    text-align: center ;
    justify-content: center ;
    align-items: center ;
    border-radius: 5px ;
    margin: 5px 0px ;
    padding: 0px 15px;

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.shape};
`;
