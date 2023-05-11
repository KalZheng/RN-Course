import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.key !== id);
    });
  }

  function startAddGoalHandler() {
    console.log('here');
    setModalIsVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={itemData => {
            return (<GoalItem
              onDeleteItem={deleteGoalHandler}
              text={itemData.item.text}
              id={itemData.item.key}
            />);
          }}
          //this is not needed 
          // if the object, (in this case enteredGoalText) 
          // has key as indentifier, 
          // if it doesn't then use keyExtrator 
          // changing the value to it (key => id)
          keyExtrator={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  }

});

