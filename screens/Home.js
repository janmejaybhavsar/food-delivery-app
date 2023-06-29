import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY = "ujWZSnIyrQkLRuszmKI8Z_Kov4tLdJ_mnH_CJCIPkEUFN00CCZk4kMP57pp2_jQAIQOC0LoyVfEufl2I2q5eUSfFUeqh7Za47yAlrgwfT_U2-m7XlYRV1lLaDwWaZHYx";
export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = React.useState("San Francisco");
    const [activeTab, setActiveTab] = React.useState("Delivery");
    const getRestaurantsFromYelp = () => {
        //For Web https://cors-anywhere.herokuapp.com/
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
       return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))).catch((error) => console.log(error));
    };
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
            <View style={{backgroundColor:"white", padding:15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}
