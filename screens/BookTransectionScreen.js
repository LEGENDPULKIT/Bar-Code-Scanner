import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class BookTransectionScreen extends React.Component
{
    constructor()
    {
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal',
        }
    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            //status==="granted" is true when user has granted permission
            //status==="granted" is false when user has not granted permission
            hasCameraPermissions:status==="granted",
            buttonState:'clicked',
            scanned:false,
        })

    }
    handleBarCodeScanned=async({type,data})=>
    {
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal',
        })
    }
    //write BOOK ISSUE AND RETURN
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions
        const scanned=this.state.scanned
        const buttonState=this.state.buttonState
        if(buttonState==="clicked" && hasCameraPermissions)
        {
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined:this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}/>
            )
        }
        else if(buttonState==="normal")
        {

        
        return(
                <View style={styles.container}>
                    <Text style={styles.displayText}>{hasCameraPermissions===true?this.state.scannedData:"Request Camera Permission"}</Text>
                    <TouchableOpacity style={styles.scanButton}
                    onPress={this.getCameraPermissions}>
                        <Text stye={styles.buttonText}>SCAN QR CODE</Text>
                    </TouchableOpacity>

                </View>
        )
    }
}

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underline',
    },
    scanButton:{
        backgroundColor:'#2196F3',
        margin:10,
        padding:10,
    },
    buttonText:{
        fontSize:20,
    },
})