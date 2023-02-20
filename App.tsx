import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, Alert }  from "react-native";

export default function App() {

  const handleTextInput = (value:string) => {
    console.log(value);
  }

  const handleOnPress = () => {
    Alert.alert("你点击了按钮！");
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={[styles.logo,{resizeMode:'cover'}]} source={require("./logo.png")}></Image>
        <Text style={styles.text}>嘉日单词</Text>
        <View style={styles.loginTab}>
          <Text style={{fontWeight:'600',fontSize:24}}>账号登陆</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.inputStyle} placeholder="请输入账号" onChangeText={handleTextInput}/>
          <TextInput style={styles.inputStyle} placeholder="请输入密码"/>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="登陆" onPress={handleOnPress}></Button>
        </View>
        <View style={styles.otherLoginView}>
          <Text style={styles.otherLogin}>其他方式登陆</Text>
          <View style={{flexDirection: "row"}}>
            <Image style={styles.otherLoginImage} source={require("./assets/wechat.png")}></Image>
            <Image style={styles.otherLoginImage} source={require("./assets/phone.png")}></Image>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: "15%",
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: "grey"
  },
  text: {
    fontSize: 20,
  },
  loginTab: {
    marginTop:30,
  },
  inputArea: {
    padding: 20,
  },
  inputStyle: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "grey",
    margin: 20,
    fontSize: 18,
  },
  buttonStyle: {
    width: 100,
    paddingTop:30,
  },
  otherLogin: {
    fontSize: 20,
  },
  otherLoginView: {
    top: "15%",
  },
  otherLoginImage: {
    width:45,
    height:45,
    marginTop:10,
    marginLeft:6,
    marginRight:12,
    resizeMode:'contain',
    alignItems: "center",
  }
});
