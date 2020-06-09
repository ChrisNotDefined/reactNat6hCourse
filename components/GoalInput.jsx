import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.displayed} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsRow}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderColor: "#BBB",
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonsRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: '40%'
  },
});

export default GoalInput;
