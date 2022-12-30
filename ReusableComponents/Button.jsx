import { View, Text,TouchableOpacity } from 'react-native'

import React from 'react'
import { colors } from '../appcolors'

const Button = ({title}) => {
  return (
    <TouchableOpacity
    style={[{backgroundColor:colors.secondary,paddingVertical:10,marginHorizontal:30}]}
    >
        <Text style={{textAlign:'center',color:'white',fontWeight:"600",fontSize:16}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button