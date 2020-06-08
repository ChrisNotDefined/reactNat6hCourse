import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={{padding: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Your course goal" style={{width: '80%', padding: 10, margin: 5, borderColor: 'black', borderWidth: 1}}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
