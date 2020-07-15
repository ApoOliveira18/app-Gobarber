import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
flex:1;
justify-content:center;
padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
position: relative;
`;

export const Title = styled.Text`
 font-size: 20px;
 color: #f4ede8;
 font-family: 'RobotoSlab-Medium';
 margin: 8px 0;
`;

export const BackButton = styled.TouchableOpacity`
 margin-top: 60px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
 margin-top: 8px;
`;

export const UserAvatar = styled.Image`
 width: 148px;
 height: 148px;
 border-radius: 98px;

 align-self: center;
`;







