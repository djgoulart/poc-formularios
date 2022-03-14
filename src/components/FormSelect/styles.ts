import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Content = styled(Picker)`
    border-color: ${({ theme }) => theme.colors.inputBorder};
    border-width: 1px;
    border-style: solid;
    margin-bottom: 8px;
`;
