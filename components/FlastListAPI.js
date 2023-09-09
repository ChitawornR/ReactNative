import { View, Text,StyleSheet, SafeAreaView,ActivityIndicator,FlatList } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { RefreshControl } from 'react-native-web';

const FlastListAPI = () => {

    const[Refreshing,setRefreshing] = useState(true);
    const[dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    //Service to get the data from the sever to render
    const getData = async()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((responseJson)=>{
            setDataSource(responseJson)
            setRefreshing(false)
        }).catch((error)=>{
            console.error(error);
        });
    }

    const ItemSeparatorView = ()=>{
        return(
            //FlatList Item SeparatorView
            <View
             style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'gray',
             }}
            />
        )
    };

    const onRefresh = ()=>{
        //Clear old data of the list
        setDataSource([]);
        //Call the sevice to get the latest data
        getData();
    };

    const getItem = (item)=>{
        //Function for click on an item
        alert('Id : '+item.id+' Title : '+item.title)
    };

    const itemView = ({item})=>{
        return(
            <Text
            style={styles.itemStyle}
             onPress={()=> getItem(item)}
            >
                {item.title}
            </Text>
        )
    };

  return (
    <SafeAreaView style={{flex:1,}}>
        <View style={styles.container}>
            {Refreshing? <ActivityIndicator/> : null}
            <FlatList
             data={dataSource}
             keyExtractor={(inedx) => indexedDB.toString()}
             ItemSeparatorComponent={ItemSeparatorView} 
             renderItem={itemView}
             refreshControl={
                <RefreshControl
                 refreshing = {Refreshing}
                 onRefresh = {onRefresh}
                />
             }
            />
        </View>
    </SafeAreaView>
  )
}

export default FlastListAPI

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
    },
    itemStyle: {
        fontSize: 20,
        padding: 10,
    },
});
