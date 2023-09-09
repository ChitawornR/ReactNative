import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, {useState}from 'react'

const dummy = [
    { id: 1, title: 'Button' },
    { id: 2, title: 'Card' },
    { id: 3, title: 'Input' },
    { id: 4, title: 'Avatar' },
    { id: 5, title: 'CheckBox' },
    { id: 6, title: 'Header' },
    { id: 7, title: 'Icon' },
    { id: 8, title: 'Lists' },
    { id: 9, title: 'Rating' },
    { id: 10, title: 'Pricing' },
    { id: 11, title: 'Avatar' },
    { id: 12, title: 'CheckBox' },
    { id: 13, title: 'Header' },
    { id: 14, title: 'Icon' },
    { id: 15, title: 'Lists' },
];
const FlatList_HeaderFooter = () => {

    const[listItem,setListItem] = useState(dummy);

    const emptyListMessage = ({item})=>{
        return(
            <Text
             style={styles.emptyListStyle}
             onPress={()=>getItem(item)}
            >
                No Data Found
            </Text>
        )
    }

    const ItemView = ({item})=>{
        return(
            //FlatList Item
            <View >
                <Text 
                 style={styles.itemStyle}
                 onPress={()=>getItem(item)}
                 >
                    {item.id}.{item.title.toUpperCase()}
                 </Text>
            </View>
        );
    };

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
    }

    const listHeader = ()=>{
        //View to set in header
        return(
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    Reac Native Component
                </Text>
            </View>
        )
    }

    const listFooter = ()=>{
        //View to set in header
        return(
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        )
    }

    const getItem = (item)=>{
        //Function for click on item
        alert('Id: '+ item.id +' Value: '+item.title);
    }

    

  return (
    <SafeAreaView style={{flex:1}}>
        <View>
            <FlatList
             data={listItem}
             ItemSeparatorComponent={ItemSeparatorView}
             renderItem={ItemView}
             keyExtractor={(item) => item.id.toString()}
             ListEmptyComponent={emptyListMessage}
             ListHeaderComponent={listHeader}
             ListFooterComponent={listFooter}
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatList_HeaderFooter

const styles = StyleSheet.create({
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    headerFooterStyle: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
});
    