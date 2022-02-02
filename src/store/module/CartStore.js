import create from 'zustand';

const useStore = create(set => ({
    cart: [],
    setCart: (payload) => set(state => ({
        cart: checkIsSelectedItemsInCart(state.cart, payload)
    })),
    removeItemCart: (payload) => set(state => ({
        cart: remoteItem(state.cart, payload)
    })),
    resetItem: () => set(() => ({
        cart: []
    }))
}))

const checkIsSelectedItemsInCart = (cart,payload)=>{
    let cartFilterd = cart.filter(c => c.id !== payload.id)

    return [payload, ...cartFilterd]
}

const remoteItem = (cart,payload) => {
    let dataFilter = cart.filter(c => c.id !== payload.id)

    return dataFilter
}

export default useStore