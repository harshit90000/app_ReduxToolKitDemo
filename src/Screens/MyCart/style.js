import { StyleSheet } from 'react-native';
import { darkGrey, lightGrey, solidBlack, solidGreen, solidGrey, solidWhite, solidYellow } from '../../asset/constants/color'

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

})

export default styles;