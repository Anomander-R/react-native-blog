import React, {useContext} from 'react'
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.textView}>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost}/>
      <FlatList 
        data={data}
        keyExtractor={(blogPost => blogPost.title)}
        renderItem={({item})=>{
          return<Text>{item.title}</Text>
        }}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  textView: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default IndexScreen;