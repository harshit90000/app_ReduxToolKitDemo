import { StyleSheet } from 'react-native';
import { darkGrey, lightGrey, lightOrange, solidBlack, solidGreen, solidWhite, solidYellow } from '../../asset/constants/color'

const styles = StyleSheet.create({
    headerView: {
        flex: 1
    },

    headerStyle: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: solidWhite,
        // elevation: 1
    },
    
    headerText: {
        color: solidBlack,
        fontSize: 17,
        marginLeft: 20,
        fontWeight: "700"
    },

    FlatListMainView: {
        width: "94%",
        height: 120,
        borderRadius: 10,
        backgroundColor: solidWhite,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: "row",
        // elevation: 1
    },

    productImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
        resizeMode: "stretch",
        // flexBasis:170,
    },

    productTitleText: {
        fontSize: 16,
        color: solidBlack,
        fontWeight: "600"
    },

    productBrandText: {
        fontSize: 16,
        color: darkGrey,
        fontWeight: "400"
    },

    productPriceText: {
        fontSize: 16,
        color: solidGreen,
        fontWeight: "600"
    },

    itemDetailsView: {
        padding: 10
    },

    buttonsView: {
        flexDirection: "row",
        alignItems: "center"
    },

    addToCartView: {
        backgroundColor: solidYellow,
        borderRadius: 8,
        height: 27,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    addToCartText: {
        color: solidBlack,
        fontWeight: "400",
        fontSize: 14
    },

    quantityView: {
        backgroundColor: lightGrey,
        borderRadius: 8,
        height: 27,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    quantityText: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 16,
        fontWeight: "600"
    },

    footerView: {
        width: "100%",
        height: 60,
        backgroundColor: solidWhite,
        // position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        bottom: 0
    },

    footerInsideView: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    addedItemsText: {
        fontSize: 16,
        fontWeight: "700",
        color: solidBlack,
    },

    viewCartView: {
        width: "70%",
        height: 35,
        backgroundColor: solidYellow,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    viewCartText: {
        color: solidBlack,
        fontSize: 16,
    },

})

export default styles;