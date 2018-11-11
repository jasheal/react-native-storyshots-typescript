import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import { storiesOf } from "@storybook/react-native";

storiesOf("Button", module)
  .add("hello", () => (
    <Button
      text="Hello"
      color={"#333"}
      onPress={() => console.log("un-favorited!")}
    />
  ))
  .add("world", () => (
    <Button
      text="World"
      color={"#333"}
      onPress={() => console.log("favorited!")}
    />
  ));