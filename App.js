import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import {BlogProvider} from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions:{
      title: 'RN blog'
    }
  })

  // This line below we will write a little bit different.
  //export default createAppContainer(navigator);

  // Different approach

  const App= createAppContainer(navigator);

  export default ()=>{


    return <BlogProvider><App/></BlogProvider>;
  }