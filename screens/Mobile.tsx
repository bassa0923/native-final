/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import FitImage from 'react-native-fit-image';
import cartImage from '../image/card.png';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import {
  setImage,
  setHeadline,
  setPrice,
  setStartingPrice,
} from '../redux/actions';

function Mobile({navigation}) {
  const [data, setData] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  // const {image, headline, price, startingPrice} = useSelector(
  //   state => state.userReducer,
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: response} = await axios.get(
      'https://veli.store/_next/data/fdMYoHvQkb3JgXO6OYObC/ka/category/teqnika/mobilurebi-aqsesuarebi/mobiluri-telefonebi/60.json?type=teqnika&type=mobilurebi-aqsesuarebi&type=mobiluri-telefonebi&type=60',
    );
    setData(response.pageProps.data.products);
  };

  const addToCart = mobileInfo => {
    console.log(mobileInfo.image);
    dispatch(setImage(mobileInfo.image));
    dispatch(setHeadline(mobileInfo.headline));
    dispatch(setPrice(mobileInfo.stock.price));
    dispatch(setStartingPrice(mobileInfo.stock.start_price));
    console.log(mobileInfo.image);
    console.log(mobileInfo.headline);
    console.log(mobileInfo.stock.price);
    console.log(mobileInfo.stock.start_price);
  };

  return (
    <View>
      <ScrollView>
        <View style={css.container}>
          {data.map((mobile, index) => {
            return (
              <View key={index} style={css.box}>
                <FitImage
                  style={css.image}
                  source={{
                    uri: mobile.image,
                  }}
                />
                <View>
                  <Text style={css.price}>{mobile.stock.price}.00 ₾</Text>
                  {/* <Text>{mobile.stock.start_price}</Text> */}
                  <Text style={css.headline}>{mobile.headline}</Text>
                </View>
                <TouchableOpacity
                  style={css.button}
                  onPress={() => addToCart(mobile)}>
                  <View style={css.buttonDesign}>
                    <Text style={css.buttonText}>add product</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={css.cart}>
        <View style={css.cartImage}>
          <Image source={cartImage}></Image>
          <Text style={css.cartName}>My Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 80,
    paddingLeft: 12,
  },
  box: {
    width: '50%',
    padding: 23.5,
    borderWidth: 0.4,
    borderColor: '#ccbfbf',
  },
  image: {
    borderRadius: 20,
  },
  price: {
    marginTop: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  headline: {
    color: 'black',
    fontWeight: '400',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  buttonDesign: {
    backgroundColor: '#b4D984',
    borderRadius: 18,
    justifyContent: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    color: 'black',
    fontWeight: '600',
  },

  cart: {
    width: '100%',
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 13,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  cartImage: {
    alignItems: 'center',
  },
  cartName: {color: 'white', textAlign: 'center'},
});

export default Mobile;
