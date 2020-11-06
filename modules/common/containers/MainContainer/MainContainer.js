import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import Counter from "./../../componants/Counter";
import { styles } from "./MainContainer.style";
import DateTimePicker from "../../componants/DateAndTimePicker";
import ImagePicker from "../../componants/ImagePicker";
import { setFormInput, submitForm } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.common.form);

  const onInputChange = (value, type) => {
    let obj = { [type]: value };
    if (type === "discount") {
      obj = {
        [type]: value,
        price: intialPrice - intialPrice * (value / 100),
      };
    }
    if (type === "intialPrice") {
      obj = {
        ...obj,
        price: value,
      };
    }
    dispatch(setFormInput(obj));
  };

  const onFormSubmit = () => {
    let body = { ...form, discount: form.discount / 100 };
    dispatch(submitForm(body)); // this action doesn't do anything, i was just put here to show how a form is submitted
  };
  const {
    title,
    category,
    name,
    description,
    intialPrice,
    price,
    quantity,
    discount,
    image,
    availability_end,
    availability_start,
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
      <View>
        <ImagePicker
          onChange={(value) => onInputChange(value, "image")}
          value={image}
        />
      </View>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Avaialble Quantity</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Counter
            style={{ justifyContent: "flex-end" }}
            value={quantity}
            onChange={(value) => onInputChange(value, "quantity")}
          />
        </View>
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
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
            specialCharacter={"%"}
          />
        </View>
        <View>
          <Text style={styles.numberInputLabel}>Price after discount</Text>
          <TextInput
            style={styles.numberInput}
            onChangeText={(value) => onInputChange(value, "price")}
            value={price}
            keyboardType="numeric"
            disabled
          />
        </View>
      </View>
      <View style={styles.centeredRow}>
        <DateTimePicker
          onChange={(value) => onInputChange(value, "availability_start")}
          value={availability_start}
        />
        <Text style={styles.label}>To</Text>
        <DateTimePicker
          onChange={(value) => onInputChange(value, "availability_end")}
          value={availability_end}
        />
      </View>
      <Button title="Submit" onPress={onFormSubmit} />
    </View>
  );
};

export default MainContainer;
