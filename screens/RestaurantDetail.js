import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
      title: "Tandoori Chicken",
      description: "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
      title: "Chilaquiles",
      description: "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image: "https://www.isabeleats.com/wp-content/uploads/2023/03/chilaquiles-rojos-small-11.jpg",
  },
  {
      title: "Chicken Caesar Salad",
      description: "One can never go wrong with a chicken caesar salad.",
      price: "$21.50",
      image: "https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg",
  },
  {
      title: "Quesadilla",
      description: "Chicken Quesadilla with cheese and sauce. ",
      price: "$13.50",
      image: "https://www.cookingclassy.com/wp-content/uploads/2019/07/quesadillas-21.jpg",
  },
]

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItem restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
    </View>
  )
}