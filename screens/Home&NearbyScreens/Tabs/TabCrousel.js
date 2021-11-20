
import React, { createRef, forwardRef, useEffect, useRef, useState } from 'react';
import {
 StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Animated, measureLayout,
 Image, nativeEvent, useNativeDriver, contentOffset, findNodeHandle, container, interpolate
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const images = {
 Hairstyle:
  'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 women:
  'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 Faacial:
  'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 Trimming:
  'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 Saving:
  'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 Eye:
  'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map((i) => ({
 key: i,
 title: i,
 image: images[i],
 ref: createRef()
}));

const Tab = forwardRef(({ item }, ref) => {
 return <View ref={ref}>
  <Text style={{ color: 'white', fontSize: 90 / data.length }}>{item.title}</Text>
 </View>
})

const Indicator = ({ measures, scrollX }) => {
 const inputRange = data.map((_, i) => i * width)

 const IndicatorWidth = scrollX.interpolate({
  inputRange, outputRange: measures.map(measure => measure.width)
 })
 const translateX = scrollX.interpolate({
  inputRange, outputRange: measures.map(measure => measure.x)
 })

 return <Animated.View
  style={{
   position: 'absolute', height: 3, width: IndicatorWidth, left: measures[0].x,
   backgroundColor: 'white', bottom: -10, transform: [{translateX}]
  }}
 />
}

const Tabs = ({ data, scrollX }) => {
 const [measures, setMeasures] = useState([]);
 const containerRef = useRef();
 useEffect(() => {
  let m = []
  data.forEach(item => {
   item.ref.current.measureLayout(
    containerRef.current, (x, y, width, height) => {
     m.push({
      x, y, width, height
     });

     if (m.length === data.length) {
      setMeasures(m);
     }
    })
  });

 }, [])
 return <View style={{ position: 'absolute', top: 100, width }}>
  <View ref={containerRef}
   style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row', backgroundColor: "#212327" }}>
   {data.map((item) => {
    return <Tab key={item.key} item={item} ref={item.ref} />
   })}
  </View>
  {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}
 </View>
}

export default function TabCrousel() {
 const scrollX = useRef(new Animated.Value(0)).current;

 return (
  <View style={styles.container}>
   <StatusBar hidden />
   <Animated.FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    onScroll={Animated.event(
     [{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false }
    )}
    bounces={false}
    keyExtractor={item => item.key}
    renderItem={({ item }) => {
     return <View style={{ width, height }}>
      <Image source={{ uri: item.image }}
       style={{ flex: 1 }} />
     </View>
    }}
   />
   <Tabs scrollX={scrollX} data={data} />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});