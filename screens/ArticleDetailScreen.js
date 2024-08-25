import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.text}>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a', 
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e1dd', 
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#e0e1dd', 
  },
});

export default ArticleDetailScreen;
