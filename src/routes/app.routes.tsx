import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentsCreated from '../pages/AppointmentsCreated';



const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    {/*Rotas */}
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentsCreated" component={AppointmentsCreated} />

    <App.Screen name="Profile" component={Profile} />

  </App.Navigator>
);

export default AppRoutes;
