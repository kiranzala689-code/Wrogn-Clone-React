const initialState = {
    cart: []
};

function myReducer(state = initialState, action) {

    if (action.type === "ADD") {

        const product = state.cart.find(
            item => item.id === action.payload.id
        );

        if (product) {

            return {
                ...state,

                cart: state.cart.map(item => {

                    if (item.id === action.payload.id) {

                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };

                    } else {

                        return item;

                    }

                })
            };

        } else {

            return {
                ...state,

                cart: [
                    ...state.cart,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            };

        }

    }

    else if (action.type === "INCREMENT_QUANTITY") {

        return {
            ...state,

            cart: state.cart.map(item => {

                if (item.id === action.payload) {

                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };

                } else {

                    return item;

                }

            })
        };

    }

    else if (action.type === "DECREMENT_QUANTITY") {

        return {
            ...state,

            cart: state.cart
                .map(item => {

                    if (item.id === action.payload) {

                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };

                    } else {

                        return item;

                    }

                })
                .filter(item => item.quantity > 0)
        };

    }

    else if (action.type === "REMOVE_PRODUCT") {

        return {
            ...state,

            cart: state.cart.filter(
                item => item.id !== action.payload
            )
        };

    }

    else {

        return state;

    }

}

export default myReducer;