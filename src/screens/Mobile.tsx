/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import cartImage from '../image/card.png';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

function Mobile({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartInfo = useSelector(state => state.cartInfo.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: response} = await axios.get(
        'https://veli.store/_next/data/4HOftUV_YQDtD0v90i-3C/ka/category/teqnika/mobilurebi-aqsesuarebi/mobiluri-telefonebi/60.json?type=teqnika&type=mobilurebi-aqsesuarebi&type=mobiluri-telefonebi&type=60',
      );
      setData(response.pageProps.data.products);
    } catch (error) {
      Alert.alert('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = mobileInfo => {
    Alert.alert('Product has been added to your cart');
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        image: mobileInfo.image,
        headline: mobileInfo.headline,
        price: mobileInfo.stock.price,
        startingPrice: mobileInfo.stock.start_price,
      },
    });
  };

  if (loading) {
    return (
      <View style={css.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        <View style={css.container}>
          {data.map((mobile, index) => {
            return (
              <View key={index} style={css.box}>
                <View style={css.imageContainer}>
                  <Image style={css.image} source={{uri: mobile.image}} />
                </View>
                <View style={css.mobileInfo}>
                  {mobile.stock.price === mobile.stock.start_price ? (
                    <View>
                      <Text style={css.price}>
                        {mobile.stock.start_price.toFixed(2)} ₾
                      </Text>
                    </View>
                  ) : (
                    <View style={css.startingPrice}>
                      <Text style={css.priceText}>
                        {mobile.stock.price.toFixed(2)} ₾
                      </Text>
                      <Text style={css.startingPriceText}>
                        {mobile.stock.start_price.toFixed(2)} ₾
                      </Text>
                    </View>
                  )}
                  <Text numberOfLines={2} style={css.headline}>
                    {mobile.headline}
                  </Text>
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
      <TouchableOpacity
        style={css.cart}
        onPress={() => navigation.navigate('Cart')}>
        <View style={css.cartImage}>
          <Image source={cartImage} />
          <Text style={css.cartName}>My Cart</Text>
          {cartInfo && (
            <View style={css.productCountCircle}>
              <Text style={css.productCountText}>{cartInfo.length}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  },
  mobileInfo: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    gap: 10,
  },
  box: {
    width: '50%',
    padding: 23.5,
    borderWidth: 0.4,
    borderColor: '#ccbfbf',
  },
  price: {
    marginTop: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
  },
  startingPriceText: {
    textDecorationLine: 'line-through',
  },
  startingPrice: {
    marginTop: 28,
    flex: 1,
    flexDirection: 'row',
  },
  headline: {
    color: 'black',
    fontWeight: '400',
    flex: 1,
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
    padding: 13.2,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  cartImage: {
    alignItems: 'center',
  },
  cartName: {color: 'white', textAlign: 'center'},
  productCountCircle: {
    position: 'absolute',
    top: -5,
    right: 170,
    backgroundColor: '#FF8469',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCountText: {
    color: 'white',
  },
});

export default Mobile;
