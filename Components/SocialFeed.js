import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Button, ScrollView, } from 'react-native';
import PostDetail from './PostDetail';

const SocialApp = ({ avt, userName, caption, contentImg, countLike, countComment, countShare }) => {

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            style={styles.avatarImage}
            source={avt}
          />
          <Text style={styles.textName}>{userName}</Text>
        </View>
        <View style={styles.postView}>
          <Text style={styles.textStatus}>{caption}</Text>
          <Image
            style={styles.postImage}
            source={contentImg}
          />
        </View>

        <PostDetail
          likesCounted={countLike}
          commentsCounted={countComment}
          sharesCounted={countShare}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#edf5f2',
    alignItems: 'center',
  },

  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  postContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '95%',
    margin: 10,
    borderRadius: 10,
  },

  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },

  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  textStatus: {
    fontSize: 16,
    paddingBottom: 10,
  },

  postView: {
    paddingTop: 10,
  },

})

export default SocialApp;