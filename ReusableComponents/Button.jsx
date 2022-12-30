import { View, Text,TouchableOpacity } from 'react-native'

import React from 'react'
import { colors } from '../appcolors'

const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity
    style={[{backgroundColor:colors.secondary,paddingVertical:15,borderRadius:10,marginVertical:10}]}
    onPress={onPress}
    >
        <Text style={{textAlign:'center',color:'white',fontWeight:"600",fontSize:16}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button