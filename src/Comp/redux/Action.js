export const myAction = (payload) => {

    return {
        type: "ADD",
        payload: payload
    };

}


export const incrementQuantity = (id) => {

    return {
        type: "INCREMENT_QUANTITY",
        payload: id
    }

}


export const decrementQuantity = (id) => {

    return {
        type: "DECREMENT_QUANTITY",
        payload: id
    }

}
export const removeProduct = (id) => {

    return {
        type: "REMOVE_PRODUCT",
        payload: id
    }

}