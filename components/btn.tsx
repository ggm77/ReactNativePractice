import React, {useState}from "react";
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
} from "react-native";

var p1 = require("practice/assets/images/cat.gif");
var p2 = require("practice/assets/images/cat2.gif");

function Btn(){
    const[value, changeValue] = useState(true);
    return(
        <View style = {styles.container}>
            <Text style = {styles.mainText}>
                {value? "cat1":"cat2"}
            </Text>
            <Image 
                style = {styles.mainImage}
                source = {value? p1:p2}
            />
            <Button 
                title = "Change Cat"
                onPress={() => {changeValue(!value)}}
            />
            <Text>Third practice</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainImage: {
        width: 500,
        height: 500,
    },
    mainText: {
        fontSize: 30,
        color: "rgb(205,0,0)",
    },
    container: {
        alignItems: "center"
    }
});

export default Btn;