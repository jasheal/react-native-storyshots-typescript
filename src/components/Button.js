import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ color, onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    alignSelf: "center",
    marginTop: 10
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;