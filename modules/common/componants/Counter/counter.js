import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./counter.style";
const Counter = (props) => {
  const { onChange, value, extendStyle, specialCharacter } = props;
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    onChange(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    if (count === 0) return;
    onChange(count - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        value={value}
        style={styles.button}
        onPress={onDecrement}
      >
        <Text style={styles.signs}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        {value}
        {specialCharacter}
      </Text>
      <TouchableOpacity
        value={value}
        style={styles.button}
        onPress={onIncrement}
      >
        <Text style={styles.signs}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;
