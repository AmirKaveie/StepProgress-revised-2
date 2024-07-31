import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBarContainer}>
    <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
  </View>
);

const Step1 = ({ navigation, route }) => {
  const { stepIndex, totalSteps } = route.params;
  const progress = (stepIndex + 1) / totalSteps;

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Text style={styles.title}>Step 1: Personal Information</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step2', { stepIndex: stepIndex + 1, totalSteps })}
      />
    </View>
  );
};

const Step2 = ({ navigation, route }) => {
  const { stepIndex, totalSteps } = route.params;
  const progress = (stepIndex + 1) / totalSteps;

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Text style={styles.title}>Step 2: Address Information</Text>
      <Button
        title="Previous"
        onPress={() => navigation.navigate('Step1', { stepIndex: stepIndex - 1, totalSteps })}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step3', { stepIndex: stepIndex + 1, totalSteps })}
      />
    </View>
  );
};

const Step3 = ({ navigation, route }) => {
  const { stepIndex, totalSteps } = route.params;
  const progress = (stepIndex + 1) / totalSteps;

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Text style={styles.title}>Step 3: Contact Information</Text>
      <Button
        title="Previous"
        onPress={() => navigation.navigate('Step2', { stepIndex: stepIndex - 1, totalSteps })}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step4', { stepIndex: stepIndex + 1, totalSteps })}
      />
    </View>
  );
};

const Step4 = ({ navigation, route }) => {
  const { stepIndex, totalSteps } = route.params;
  const progress = (stepIndex + 1) / totalSteps;

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Text style={styles.title}>Step 4: Review & Submit</Text>
      <Button
        title="Previous"
        onPress={() => navigation.navigate('Step3', { stepIndex: stepIndex - 1, totalSteps })}
      />
      <Button
        title="Submit"
        onPress={() => alert('Form submitted!')}
      />
    </View>
  );
};

const App = () => {
  const totalSteps = 4;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Step1"
          component={Step1}
          initialParams={{ stepIndex: 0, totalSteps }}
          options={{ headerTitle: 'Step 1' }}
        />
        <Stack.Screen
          name="Step2"
          component={Step2}
          initialParams={{ stepIndex: 1, totalSteps }}
          options={{ headerTitle: 'Step 2' }}
        />
        <Stack.Screen
          name="Step3"
          component={Step3}
          initialParams={{ stepIndex: 2, totalSteps }}
          options={{ headerTitle: 'Step 3' }}
        />
        <Stack.Screen
          name="Step4"
          component={Step4}
          initialParams={{ stepIndex: 3, totalSteps }}
          options={{ headerTitle: 'Step 4' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  progressBarContainer: {
    height: 10,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b5998',
    borderRadius: 5,
  },
});

export default App;
