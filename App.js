import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  FlatList,
  Button 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setAddModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if(goalTitle === '') return;
    setCourseGoals([...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setAddModal(false);
  };

  const removeGoalHandler = (id) => {
    setCourseGoals(CurrentGoals => {
      return CurrentGoals.filter((goal) => goal.key !== id);
    });
  }

  const cancelAddGoalhandler = () => {
    setAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button style={styles.addButton} title='Add new Goal' onPress={() => {setAddModal(true)}}/>
      <GoalInput displayed={isAddModal} onCancel={cancelAddGoalhandler} onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1
  },
  addButton: {
    marginVertical: 50
  }
});
