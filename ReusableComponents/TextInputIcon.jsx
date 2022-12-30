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
        marginVertical:10,
        borderRadius:10,
        
        justifyContent:'space-between',
        paddingVertical:20

  
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
          marginVertical:10,
          borderRadius:10,
          
          justifyContent:'space-between',
          paddingVertical:20
  
      },style]}
      >
        <TextInput 
        {...otherProps} 
        cursorColor={colors.secondary}
        placeholderTextColor={"grey"}
        
        value={text}
        style={{flex:1,fontSize:14,fontWeight:"600"}}
        onChangeText={(newText) => {
         
          settext(newText);
        }}
        // onPressIn={()=>{console.log('vinay')}}
        ></TextInput>
        
       
      </View>
    )

  }
  
}

export default TextInputIcon