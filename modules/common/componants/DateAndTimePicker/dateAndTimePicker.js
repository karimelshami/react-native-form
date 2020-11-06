import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./dateAndTimePicker.style";
import DateTimePicker from "@react-native-community/datetimepicker";
const DateAndTimePicker = (props) => {
  const { value, onChange } = props;
  const [show, setShow] = useState(false);

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Image
            style={styles.icon}
            source={{ uri: "https://i.ibb.co/sFfXVXH/Calendar.png" }}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(value)}
          mode={"date"}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


export default DateAndTimePicker;
