import { View, Text,FlatList,Image,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'

const Newsss = () => {

    const[articles,setArticles] = useState()
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        try{
            const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-07-26&sortBy=publishedAt&apiKey=9e9d7b07ec2a48d59345a7b9b0f9ecdd')
            const data = await response.json();
            setArticles(data.articles)
            setLoading(false)
        }catch(error){
            console.error('Error fetching users: ',error)
            setLoading(false)
        }
    }

    const _renderItem = ({item})=>{
        let urlToImage = (item.urlToImage !== null)
        ? item.urlToImage
        : 'http://via.placeholder.com/150*150'

        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,margin:10}}>
                    <Image
                     source= {{uri : urlToImage}}
                     resizeMode = 'cover'
                     style={{flex:1,width:'100%',heigh: '100%'}}
                    />
                <View style={{flex:1,width:'100%',heigh: '100%'}}>
                    <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                    <Text style={{fontSize:10}}>{item.source.name}</Text>
                </View>
                </View>
                
            </View>
        )
    }

    const _onRefresh = ()=>{
        setLoading(true)
        getData()
    }

  return (
    <View>
      {
        loading?(
            <ActivityIndicator size='large' color='red'/>
        ):(
            <FlatList
                data={articles}
                keyExtractor={(index) => index.toString()}
                renderItem={_renderItem}
                refreshing={loading}
                onRefresh={_onRefresh}
            />
        )
      }
    </View>
  )
}

export default Newsss