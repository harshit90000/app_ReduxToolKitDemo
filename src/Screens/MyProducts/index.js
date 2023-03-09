import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart } from '../../redux/MyCartSlice';

const MyProducts = () => {

  // const DATA =
  //   [
  //     {
  //       "id": 1,
  //       "title": "iPhone X",
  //       "price": 899,
  //       "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  //       "category": "smartphones",
  //       "image": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //       "rating": 4.44,
  //       "brand": "Apple",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 2,
  //       "title": "iPhone 9",
  //       "price": 549,
  //       "description": "An apple mobile which is nothing like apple",
  //       "category": "smartphones",
  //       "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //       "rating": 4.69,
  //       "brand": "Apple",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 3,
  //       "title": "Samsung Universe 9",
  //       "price": 1249,
  //       "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
  //       "category": "smartphones",
  //       "image": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  //       "rating": 4.09,
  //       "brand": "Samsung",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 4,
  //       "title": "OPPO F19",
  //       "price": 280,
  //       "description": "OPPO F19 is officially announced on April 2021.",
  //       "category": "smartphones",
  //       "image": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  //       "rating": 4.3,
  //       "brand": "Oppo",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 5,
  //       "title": "Huawei P30",
  //       "price": 499,
  //       "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //       "category": "smartphones",
  //       "image": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  //       "rating": 4.08,
  //       "brand": "Huawei",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 6,
  //       "title": "MacBook Pro",
  //       "price": 2749,
  //       "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
  //       "category": "laptops",
  //       "image": "https://i.dummyjson.com/data/products/6/thumbnail.png",
  //       "rating": 4.57,
  //       "brand": "Apple",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 7,
  //       "title": "Samsung Galaxy Book",
  //       "price": 1499,
  //       "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  //       "category": "laptops",
  //       "image": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  //       "rating": 4.20,
  //       "brand": "Samsung",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 8,
  //       "title": "Microsoft Surface Laptop 4",
  //       "price": 1899,
  //       "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
  //       "category": "laptops",
  //       "image": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  //       "rating": 4.57,
  //       "brand": "Microsoft",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 9,
  //       "title": "Infinix INBOOK",
  //       "price": 1299,
  //       "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  //       "category": "laptops",
  //       "image": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  //       "rating": 4.54,
  //       "brand": "Infinix",
  //       "quantity": 0
  //     },
  //     {
  //       "id": 10,
  //       "title": "HP Pavilion 15-DK1056WM",
  //       "price": 1090,
  //       "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
  //       "price": 1999,
  //       "category": "laptops",
  //       "image": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  //       "rating": 4.57,
  //       "brand": "HP",
  //       "quantity": 0
  //     },
  //   ];

  const Products = useSelector(state => state.product)
  const Cart = useSelector(state => state.cart)
  console.log("Added Products", Products);
  console.log("Added Products to Cart", Cart);

  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.headerView}>
      
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Smartphones & Laptops</Text>
      </View>

      <FlatList data={Products} renderItem={({ item, index }) => {
        return (
          <View style={styles.FlatListMainView}>
            <Image source={{ uri: item.image }} style={styles.productImage} />

            <View style={styles.itemDetailsView}>
              <Text style={styles.productTitleText}>{item.title.substring(0, 25) + " ..."}</Text>
              <Text style={styles.productBrandText}>{item.brand}</Text>
              <Text style={styles.productPriceText}>{item.price + "$"}</Text>

              <View style={styles.buttonsView}>
                {item.quantity == 0 ? (<TouchableOpacity style={styles.addToCartView} onPress={() => {dispatch(addProductToMyCart(item))}}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>) : null}

                {item.quantity == 0 ? null : (<TouchableOpacity style={styles.quantityView}>
                  <Text style={styles.addToCartText}>-</Text>
                </TouchableOpacity>)}

                {item.quantity == 0 ? null : (<Text style={styles.quantityText}>{"0"}</Text>)}

                {item.quantity == 0 ? null : (
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

export default MyProducts