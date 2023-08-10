import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Flatlist } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../components';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View
        style={styles.container}
      >
        <Text style={styles.userName}>Hello Andrew</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.searchInput}>
          <TextInput 
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome