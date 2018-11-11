import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

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
  ))
  .add("stuff", () => (
    <Button
      text="Stuff"
      color={"#333"}
      onPress={() => console.log("favorited!")}
    />
  ))
  .add("universe", () => (
    <Button
      text="Universe"
      color={"#333"}
      onPress={() => console.log("favorited!")}
    />
  ));