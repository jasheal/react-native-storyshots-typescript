import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

storiesOf("Button", module)
  .add("hello", () => (
    <Button
      text="Hello World"
      testID="TestButton1"
      onPress={() => console.log("un-favorited!")}
    />
  ))
  .add("world", () => (
    <Button
      text="World"
      onPress={() => console.log("favorited!")}
    />
  ))
  .add("stuff", () => (
    <Button
      text="Stuff"
      onPress={() => console.log("favorited!")}
    />
  ))
  .add("universe", () => (
    <Button
      text="Universe"
      onPress={() => console.log("favorited!")}
    />
  ));