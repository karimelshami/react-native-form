import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import Counter from "./../../componants/Counter";
import { styles } from "./MainContainer.style";
import DateTimePicker from "../../componants/DateAndTimePicker";
import { setFormInput } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const onInputChange = (value, type) => {
    dispatch(
      setFormInput({
        [type]: value,
      })
    );
  };

  const form = useSelector((state) => state.common.form);

  const onFormSubmit = () => {};
  const {
    title,
    category,
    name,
    description,
    intialPrice,
    price,
    quantity,
    discount,
  } = form;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => onInputChange(value, "title")}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => onInputChange(value, "category")}
        value={category}
        placeholder="Category"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => onInputChange(value, "name")}
        value={name}
        placeholder="Name"
      />
      <View style={styles.row}>
        <Text style={styles.label}>Avaialble Quantity :</Text>
        <Counter
          value={quantity}
          onChange={(value) => onInputChange(value, "quantity")}
        />
      </View>
      <Text style={styles.label}> Description</Text>
      <TextInput
        style={styles.textArea}
        onChangeText={(value) => onInputChange(value, "description")}
        value={description}
        placeholder=""
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.centeredRow}>
        <View>
          <Text style={styles.numberInputLabel}>Intial price</Text>
          <TextInput
            style={styles.numberInput}
            onChangeText={(value) => onInputChange(value, "intialPrice")}
            value={intialPrice}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.numberInputLabel}>Discount</Text>
          <Counter
            value={discount}
            onChange={(value) => onInputChange(value, "discount")}
          />
        </View>
        <View>
          <Text style={styles.numberInputLabel}>Price after discount</Text>
          <TextInput
            style={styles.numberInput}
            onChangeText={(value) => onInputChange(value, "price")}
            value={price}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.centeredRow}>
        <DateTimePicker /> To
        <DateTimePicker />
      </View>
      <Button title="Submit" onPress={onFormSubmit} />
    </View>
  );
};

export default MainContainer;
