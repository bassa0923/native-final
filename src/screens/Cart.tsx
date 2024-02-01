/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

function Cart({cartInfo}) {
  const [totalAmount, setTotalAmount] = useState(0);

  const countTotalAmount = () => {
    let amount = 0;
    cartInfo.products.map((product, index) => {
      amount = product.price + amount;
    });

    setTotalAmount(amount);
  };

  useEffect(() => {
    countTotalAmount();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={css.container}>
          {cartInfo.products.map((product, index) => {
            return (
              <View key={index} style={css.box}>
                <View style={css.imageContainermg}>
                  <Image
                    style={css.image}
                    source={{
                      uri: product.image,
                    }}
                  />
                </View>
                <View style={css.infoContainer}>
                  <Text style={css.headline}>{product.headline}</Text>
                  {product.price === product.startingPrice ? (
                    <View>
                      <Text style={css.price}>
                        {product.startingPrice.toFixed(2)} ₾
                      </Text>
                    </View>
                  ) : (
                    <View style={css.startingPrice}>
                      <Text style={css.priceText}>
                        {product.price.toFixed(2)} ₾
                      </Text>
                      <Text style={css.startingPriceText}>
                        {product.startingPrice.toFixed(2)} ₾
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}

          <View style={css.totalAmountContainer}>
            <Text style={css.totalAmountText}>Total Amount:</Text>
            <Text style={css.totalAmountPrice}>{totalAmount.toFixed(2)} ₾</Text>
          </View>
        </View>
        <TouchableOpacity style={css.button}>
          <View style={css.buttonDesign}>
            <Text style={css.buttonText}>Place an Order</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingRight: 12,
    paddingBottom: 20,
    paddingLeft: 12,
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    padding: 23.5,
    borderWidth: 0.4,
    borderColor: '#ccbfbf',
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
  infoContainer: {
    width: '75%',
    paddingLeft: 25,
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
    fontSize: 12,
    width: '80%',
  },
  totalAmountContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
  },
  totalAmountText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  totalAmountPrice: {
    flex: 1,
    textAlign: 'right',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  buttonDesign: {
    backgroundColor: '#b4D984',
    borderRadius: 18,
  },
  buttonText: {
    textAlign: 'center',
    padding: 12,
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
  },
});

const mapStateToProps = state => {
  return {
    cartInfo: state.cartInfo,
  };
};

export default connect(mapStateToProps)(Cart);
