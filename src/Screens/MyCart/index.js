import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useSelector } from 'react-redux'

const MyCart = () => {

  const Cart = useSelector(state => state.cart)

  return (
    <SafeAreaView style={styles.headerView}>

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Smartphones & Laptops</Text>
      </View>

      <FlatList data={Cart} renderItem={({ item, index }) => {
        return (
          <View style={styles.FlatListMainView}>
            <Image source={{ uri: item.image }} style={styles.productImage} />

            <View style={styles.itemDetailsView}>
              <Text style={styles.productTitleText}>{item.title.substring(0, 25) + " ..."}</Text>
              <Text style={styles.productBrandText}>{item.brand}</Text>
              <Text style={styles.productPriceText}>{item.price + "$"}</Text>

              <View style={styles.buttonsView}>
                
                {item.quantity !== 0 ? null : (<TouchableOpacity style={styles.quantityView}>
                  <Text style={styles.addToCartText}>-</Text>
                </TouchableOpacity>)}

                {item.quantity !== 0 ? null : (<Text style={styles.quantityText}>{"0"}</Text>)}

                {item.quantity !== 0 ? null : (
                  <TouchableOpacity style={styles.quantityView}>
                    <Text style={styles.addToCartText}>+</Text>
                  </TouchableOpacity>)}
              </View>

            </View>

          </View>
        )
      }} />

    </SafeAreaView>
  )

}

export default MyCart 