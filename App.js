import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import SocialApp from './Components/SocialFeed';
import Data from './Components/PostData';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Social Media Feed</Text>
      </View>
      {Data.map((value, index) => (
        <View style={styles.postDisplay} key={index}>
          <SocialApp
            avt={value.avt}
            userName={value.userName}
            caption={value.caption}
            contentImg={value.contentImg}
            countLike={value.countLike}
            countComment={value.countComment}
            countShare={value.countShare}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  header: {
    backgroundColor: '#3275a8',
    width: '100%',
    height: 100,
    marginTop: 30,
    position: 'fixed',
  },

  textHeader: {
    fontSize: 30,
    textAlign: 'center',
    padding: 30,
    color: 'white',
    fontWeight: '800',
  },
});
