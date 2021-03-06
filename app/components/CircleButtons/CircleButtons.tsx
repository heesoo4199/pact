import React from 'react';
import { View, ViewStyle } from 'react-native';
import CircleButton from '../CircleButton/CircleButton';
import styles from './styles';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
}

const CircleButtons: React.FC<Props> = ({ onPress, style }) => (
  <View style={[styles.container, style]}>
    <CircleButton text="S" onPress={onPress} highlight />
    <CircleButton text="M" onPress={onPress} />
    <CircleButton text="T" onPress={onPress} highlight />
    <CircleButton text="W" onPress={onPress} />
    <CircleButton text="T" onPress={onPress} />
    <CircleButton text="F" onPress={onPress} />
    <CircleButton text="S" onPress={onPress} />
  </View>
);

export default CircleButtons;
