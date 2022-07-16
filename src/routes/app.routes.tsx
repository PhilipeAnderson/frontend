import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen,  } = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { LoginToken } from '../screens/LoginToken';
import { Home } from '../screens/Home';
import { Confirm } from '../screens/Confirm';
import { Payment } from '../screens/Payment';
import { Contract } from '../screens/Contract';
import { ProfileInfluencer } from '../screens/ProfileInfluencer';
import { BudgetInfluencer } from '../screens/BudgetInfluencer';
import { ProfileUser } from '../screens/ProfileUser';
import { ProfileUserData } from '../screens/ProfileUserData';
import { Register } from '../screens/Register';

export const AppRoutes = () => {
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
        name="Login"
        component={ Login }
      />
      <Screen
        name="LoginToken"
        component={ LoginToken }
      />
      <Screen
        name="Home"
        component={ Home }
      />
      <Screen
        name="Confirm"
        component={ Confirm }
      />
      <Screen
        name="Payment"
        component={ Payment }
      />
      <Screen
        name="Contract"
        component={ Contract }
      />
      <Screen
        name="ProfileInfluencer"
        component={ ProfileInfluencer }
      />
      <Screen
        name="BudgetInfluencer"
        component={ BudgetInfluencer }
      />
      <Screen
        name="ProfileUser"
        component={ ProfileUser }
      />
      <Screen
        name="ProfileUserData"
        component={ ProfileUserData }
      />
      <Screen
        name="Register"
        component={ Register }
      />
    </Navigator>
  )
};