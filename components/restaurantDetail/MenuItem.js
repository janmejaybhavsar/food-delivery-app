import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

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
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",
    },
})
        
export default function MenuItem({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue},
    })
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)
    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
        <View style={styles.menuItemStyle}>
            <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
            fillColor="green"
            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
        </View>
        <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20}} />
    </View>
    ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 55,
          height: 55,
          borderRadius: 8,
        }}
      />
    </View>
  );
