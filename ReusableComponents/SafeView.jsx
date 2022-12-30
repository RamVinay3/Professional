import { View, Text } from 'react-native'
import React from 'react'

const SafeView = ({children}) => {
  return (
    <View style={{paddingTop:40}}>
      {children}
    </View>
  )
}

export default SafeView