import { View, Text } from 'react-native'
import React from 'react'

const SafeView = ({children,style}) => {
  return (
    <View style={style} >
     
           {children}
      
      
    </View>
  )
}

export default SafeView