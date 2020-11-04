import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles} from './dateAndTimePicker.style'
import DateTimePicker from "@react-native-community/datetimepicker";
const DateAndTimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Image
            style={styles.icon}
            source={{ uri: "https://i.ibb.co/sFfXVXH/Calendar.png" }}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateAndTimePicker;
