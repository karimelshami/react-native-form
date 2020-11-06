import React, { useState, useEffect } from "react";
import { Text, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./imagePicker.style";

const CustomImagePicker = (props) => {
  const { onChange, value } = props;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      onChange(result.uri);
    }
  };

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity onPress={pickImage}>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: "https://i.ibb.co/zHWSmtv/upload.png" }}
        />
      </TouchableOpacity>
      <Text style={styles.label}>Upload image</Text>
      {value && (
        <Image source={{ uri: value }} style={styles.image} />
      )}
    </View>
  );
};
export default CustomImagePicker;
