import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Heart, MessageCircle, Send } from "lucide-react-native";

const posts = [
  {
    id: 1,
    user: "usuario1",
    imageUrl: "https://via.placeholder.com/400",
    likes: 120,
    caption: "Una hermosa vista",
    comments: [],
  },
  {
    id: 2,
    user: "usuario2",
    imageUrl: "https://via.placeholder.com/400",
    likes: 84,
    caption: "Disfrutando del día",
    comments: [],
  },
  // Puedes añadir más posts aquí
];

export default function InstagramFeedScreen() {
  const [feedPosts, setFeedPosts] = useState(posts);

  const handleLike = (postId) => {
    setFeedPosts(
      feedPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setFeedPosts(
      feedPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {feedPosts.map((post) => (
        <ThemedView key={post.id} style={styles.postContainer}>
          <View style={styles.postHeader}>
            <ThemedText type="defaultSemiBold">{post.user}</ThemedText>
          </View>
          <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          <View style={styles.postActions}>
            <TouchableOpacity onPress={() => handleLike(post.id)}>
              <Heart size={24} color="#000" style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MessageCircle size={24} color="#000" style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Send size={24} color="#000" style={styles.actionIcon} />
            </TouchableOpacity>
          </View>
          <ThemedText type="defaultSemiBold" style={styles.likes}>
            {post.likes} likes
          </ThemedText>
          <ThemedText type="default" style={styles.caption}>
            <ThemedText type="defaultSemiBold">{post.user}</ThemedText>{" "}
            {post.caption}
          </ThemedText>
          {post.comments.map((comment, index) => (
            <ThemedText key={index} type="default" style={styles.comment}>
              {comment}
            </ThemedText>
          ))}
          <View style={styles.commentInput}>
            <TextInput
              placeholder="Add a comment..."
              style={styles.input}
              onSubmitEditing={(event) =>
                handleComment(post.id, event.nativeEvent.text)
              }
            />
          </View>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    padding: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postActions: {
    flexDirection: "row",
    padding: 10,
  },
  actionIcon: {
    marginRight: 15,
  },
  likes: {
    padding: 10,
  },
  caption: {
    padding: 10,
  },
  comment: {
    padding: 5,
    paddingLeft: 10,
  },
  commentInput: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  input: {
    height: 40,
  },
});
