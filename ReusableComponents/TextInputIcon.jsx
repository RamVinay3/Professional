import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {colors} from '../appcolors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TextInputIcon = ({Iconname,style,text,settext,name,...otherProps}) => {
  // console.log(colors)
  if(Iconname){
    return (
      <View
      style={[{
          
          backgroundColor:colors.fieldcolor,
          flexDirection:'row',
          paddingHorizontal:20,
  
          borderRadius:10,
          // borderColor:'red',
          // borderWidth:1,
          justifyContent:'space-between',
          paddingVertical:10
  
      },style]}
      >
        <TextInput 
        {...otherProps} 
        cursorColor={colors.secondary}
        placeholderTextColor={colors.secondary}
        
        value={text}
  
        onChangeText={(newText) => {
         
          settext(newText);
        }}
        ></TextInput>
        
        <MaterialCommunityIcons name={Iconname} size={25}/>
      </View>
    )
  }
  else{
    return (
      <View
      style={[{
          
          backgroundColor:colors.fieldcolor,
          flexDirection:'row',
          paddingHorizontal:20,
  
          borderRadius:10,
          // borderColor:'red',
          // borderWidth:1,
          justifyContent:'space-between',
          paddingVertical:10
  
      },style]}
      >
        <TextInput 
        {...otherProps} 
        cursorColor={colors.secondary}
        placeholderTextColor={colors.secondary}
        
        value={text}
  
        onChangeText={(newText) => {
         
          settext(newText);
        }}
        ></TextInput>
        
       
      </View>
    )

  }
  
}

export default TextInputIcon