import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const StarRating = () => {

  const [defaultRating, setDefaultRating] = useState(3)
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBar}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}
              >
                <Image
                  style={styles.starImg}
                  source={item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }
                  }
                />
              </TouchableOpacity>
            )
          })
        }

      </View>
    )
  }

  return (
    <View style={styles.container}>
        <CustomRatingBar />
        <Text style={styles.textStyle}></Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop: 10,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(255,255,255, 0.7)'
  },

  customRatingBar: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  starImg: {
    width: 18,
    height: 18,
    resizeMode: 'cover'
  }
});
export default StarRating;