import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './MainContainer.style'
const MainContainer = () => {
  const [value, onChangeText] = useState('')

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="title"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="category"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="name"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="description"
        multiline={true}
        numberOfLines={4}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="intial price"
        keyboardType="numeric"
      />
    </View>
  )
}

export default MainContainer
