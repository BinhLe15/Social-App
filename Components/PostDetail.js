import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const PostDetail = ({ likesCounted, commentsCounted, sharesCounted, }) => {

    const [likes, setLikes] = useState(likesCounted);
    const [comments, setComments] = useState(commentsCounted);
    const [shares, setShares] = useState(sharesCounted);

    const [liked, setLiked] = useState(false);

    const increaseLikes = () => {
        if (liked) {
            setLikes(likes - 1); // Decrease like count if already liked
        } else {
            setLikes(likes + 1); // Increase like count if not liked
        }
        setLiked(!liked); // Toggle liked state
    };

    const increaseComments = () => {
        setComments(comments + 1);
    };

    const increaseShares = () => {
        setShares(shares + 1);
    };

    const likeIconColor = liked ? 'blue' : 'black';
    const likeTextColor = liked ? 'blue' : 'black';

    return (
        <View style={styles.container}>
            <View style={styles.interact}>
                <View style={styles.interactText}>
                    <Text>{likes} Like{likes !== 0 ? 's' : ''}</Text>
                    <Text>{comments} Comment{comments !== 0 ? 's' : ''}</Text>
                    <Text>{shares} Share{shares !== 0 ? 's' : ''}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.postReact}>

                    <TouchableOpacity style={styles.interactButton} onPress={increaseLikes}>
                        <AntDesign name="like2" size={27} color={likeIconColor} />
                        <Text style={[styles.textButton, { color: likeTextColor }]}>Likes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.interactButton} onPress={increaseComments}>
                        <Ionicons name="chatbox-outline" size={27} color="black" />
                        <Text style={[styles.textButton]}>Comments</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.interactButton} onPress={increaseShares}>
                        <MaterialCommunityIcons name="share-outline" size={27} color="black" />
                        <Text style={[styles.textButton]}>Shares</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginTop: 10,
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avt: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 15,
    },
    userName: {
        fontSize: 20,
        fontWeight: 700,
    },
    caption: {
        marginBottom: 5,
        fontSize: 17,
    },
    contentImg: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 10,
    },
    interactText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // interactButton: {

    // },
    postReact: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
    },

    interactButton: {
        // backgroundColor: 'white',
        flexDirection: 'row',
    },

    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 10, // Adjust the vertical margin as needed
    },

    likedButton: {
        // Liked button styles
        // backgroundColor: 'blue',
        color: 'blue'
    },
    unlikedButton: {
        // Unliked button styles
        backgroundColor: 'gray',
    },
    textButton: {
        margin: 5,
        fontSize: 16, 
        fontWeight: 600,
    },
});

export default PostDetail;