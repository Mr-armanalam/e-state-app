import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const Property = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  )
}

export default Property