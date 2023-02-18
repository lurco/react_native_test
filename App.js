import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
    const [num, setNum] = useState("#333");

    return (
        <View style={styles.container}>
            <Text style={{color: '#fff'}}>{tekst}</Text>

            <TextInput
                placeholder={'Siema'}
                onChangeText={(s) => setNum(s)}
            />

            <Button title={'Test'}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: num,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
