import { View, Text } from 'react-native'
import {React,useState} from 'react'
import SafeView from '../ReusableComponents/SafeView'
import Icons from '../svg/Icons.svg'
import TextInputIcon from '../ReusableComponents/TextInputIcon'
import Button from '../ReusableComponents/Button'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const Login = () => {
    const [text, settext] = useState("")
    const [password, setPassword] = useState("")
  return (
   <KeyboardAwareScrollView style={{backgroundColor:'yellow',height:'100%'}} >
    <SafeView >
    <View
    style={{marginHorizontal:20}}
    >
        <Icons
        // height={300}
        // width={200}
        style={{marginTop:'50%',marginBottom:'10%',alignSelf:'center'}}
        />
        <TextInputIcon
        placeholder="Enter your email"
        text={text}
        settext={settext}

        />
        <TextInputIcon
        placeholder="Enter password"
        settext={setPassword}
        text={password}
        />
        <Button
        title="Login"
        onPress={()=>{console.log("logged in")}}
        
        />
    </View>
   </SafeView>
   </KeyboardAwareScrollView>
  )
}

export default Login