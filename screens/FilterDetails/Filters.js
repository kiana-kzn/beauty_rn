import React, { useCallback, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import SelectableChips from 'react-native-chip/SelectableChips';
import RangeSlider from 'rn-range-slider';
import StarRating from '../BaberProfiles&Services/StarRating';
import Label from './Label';
import Notch from './Notch';
import Rail from './Rail';
import Thumb from './Thumb';
import RailSelected from './RailSelected';

export default Filters = () => {

  const [checked, setChecked] = useState('first');
  const [checkBox, setCheckBox] = useState('first');
  const [isSelected, setIsSelected] = useState({ color: 'white' });
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const [priceStyle, setPriceStyle] = useState(false)

  const changeColor = () => {
    if (!priceStyle) {
      setPriceStyle({ priceStyle: true, backgroundColor: 'red', backgroundColor2: 'black' });
    } else {
      setPriceStyle({ priceStyle: false, backgroundColor: 'black', backgroundColor2: 'red' });
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.services}>Services</Text>
      <View style={{ flexDirection: 'row', marginTop: 17, justifyContent: 'space-evenly', marginLeft: 16 }}>
        <SelectableChips initialChips={["Hairstyle", "Makeup", "Hair Coloring", "Spa", "Facial Makeup", "Trim & Saving"]} onChangeChips={(chips) => console.log(chips)}
          alertRequired={false} chipStyle={{ backgroundColor: '#323446', borderColor: '#323446' }} chipStyleSelected={{ backgroundColor: '#CCA76A', }}
          valueStyle={{ fontSize: 14, color: '#FFF' }} valueStyleSelected={{ color: '#000' }} />
      </View>
      <Text style={styles.headings}>Rating</Text>
      <View style={{ marginLeft: -147, marginTop: 13 }} >
        <StarRating style={{}} />
      </View>
      <Text style={styles.headings}>Gender</Text>
      <View style={styles.gender}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            uncheckedColor='#999999'
            color='#E4B343'
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.genderText}> Man</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="second"
            uncheckedColor='#999999'
            color='#E4B343'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.genderText}> Woman</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="second"
            uncheckedColor='#999999'
            color='#E4B343'
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text style={styles.genderText}> Other</Text>
        </View>
      </View>
      <Text style={styles.headings}>Distance</Text>
      <RangeSlider
        style={styles.slider}
        min={0}
        max={10}
        step={0.1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View style={styles.horizontalContainer}>
        <Text style={styles.valueText}>{low} km</Text>
        <Text style={styles.valueText}>{high} km</Text>
      </View>

      <Text style={styles.headings}>Sort by</Text>
      <TouchableOpacity onPress={() => setCheckBox('first')}>
        <View style={styles.sort}>
          <Text style={checkBox === 'first' ? styles.textSelected : styles.text}>Most Popular</Text>
          <Checkbox
            color='#E4B343'
            uncheckedColor='#999999'
            status={checkBox === 'first' ? 'checked' : 'unchecked'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheckBox('second')}>
        <View style={styles.sorted}>
          <Text style={checkBox === 'second' ? styles.textSelected : styles.text}>Cost Low to High</Text>
          <Checkbox
            uncheckedColor='#999999'
            color='#E4B343'
            status={checkBox === 'second' ? 'checked' : 'unchecked'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCheckBox('third')}>
        <View style={styles.sorted}>
          <Text style={checkBox === 'third' ? styles.textSelected : styles.text}>Cost High to Low</Text>
          <Checkbox
            uncheckedColor='#999999'
            color='#E4B343'
            status={checkBox === 'third' ? 'checked' : 'unchecked'}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.headings}>Price</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setIsSelected('first')}>
          <View style={isSelected === 'first' ? styles.priceSelected : styles.price}>
            <Text style={isSelected === 'first' ? { color: 'black' } : { color: 'white' }}>$</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSelected('second')} >
          <View style={isSelected === 'second' ? styles.priceSelected : styles.price}>
            <Text style={isSelected === 'second' ? { color: 'black' } : { color: 'white' }}>$$</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSelected('third')}>
          <View style={isSelected === 'third' ? styles.priceSelected : styles.price} >
            <Text style={isSelected === 'third' ? { color: 'black' } : { color: 'white' }}>$$$</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.book}>
        <Text style={styles.bookText}>Book now</Text>
      </TouchableOpacity>
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212327',
    flex: 1
  },
  services: {
    color: '#CCA76A',
    fontSize: 16,
    marginTop: 23,
    marginLeft: 16
  },
  serviceView: {
    marginLeft: 16
  },
  gender: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 11,
    marginLeft: 16,
    marginRight: 47
  },
  genderText: {
    color: 'white',
    fontSize: 16
  },
  headings: {
    color: '#CCA76A',
    fontSize: 16,
    marginTop: 28,
    marginLeft: 16
  },
  sort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
    marginRight: 16,
    marginLeft: 13
  },
  sorted: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginRight: 16,
    marginLeft: 13
  },
  price: {
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    height: 32,
    width: 108,
    borderRadius: 50,
    backgroundColor: '#323446',
    marginTop: 11
  },
  priceSelected: {
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    height: 32,
    width: 108,
    borderRadius: 50,
    backgroundColor: '#CCA76A',
    marginTop: 11
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  slider: {
    marginTop: 11,
    marginLeft: 16,
    marginRight: 16,
  },
  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  valueText: {
    color: '#707070',
    fontSize: 14,
  },
  text: {
    color: 'white',
    fontSize: 14
  },
  textSelected: {
    color: '#E4B343',
    fontSize: 14
  },
  book: {
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 45,
    backgroundColor: '#CCA76A',
    height: 45,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  bookText: {
    textAlign: 'center',
    fontSize: 16
  }
})