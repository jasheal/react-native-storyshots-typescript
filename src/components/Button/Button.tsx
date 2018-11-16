import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  testID?: string;
}

const Button = ({ onPress, text, testID }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} testID={testID}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default Button;
