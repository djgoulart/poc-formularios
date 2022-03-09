import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color:  ${({ theme }) => theme.colors.primary}; 
    height: 30px ;
    min-width: 200px ;
    text-align: center ;
    justify-content: center ;
    align-items: center ;
    border-radius: 7px ;
    margin: 5px 0px ;
    padding: 0px 15px;
    
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.shape};
`;