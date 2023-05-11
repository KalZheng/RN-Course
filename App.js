import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.key !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 4,
  }

});

