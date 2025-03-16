import { Redirect } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TaskManagementScreen from "../screens/TaskManagementScreen";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
  Schedule: undefined;
  TaskManagement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
