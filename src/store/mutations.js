// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

export const productMutations = {
  addProduct: (state, payload) => {
    // console.log(normalize(payload, productSchema))

    // state = {
    //   ...state,
    //   products: {
    //     ...state.products,
    //     result: [...state.products.result, payload.id],
    //     entities: {
    //       ...state.products.entities,
    //       products: {
    //         ...state.products.entities.products,
    //         [payload.id]: payload
    //       }
    //     }
    //   }
    // }
    // console.log('old state', state.products, state.manufacturers.filter(x => x.id === payload.manufacturer)[0])

    payload = {...payload, manufacturer: state.manufacturers.filter(x => x.id === payload.manufacturer)[0]}

    // console.log('payload', payload, payload.manufacturer)

    state.products = [...state.products, payload]
    // console.log(state.products)
    // state.products[payload.id].manufacturer = state.manufacturers[state.products[payload.id].manufacturer]
    // state.products.entities.products[payload.id].manufacturer = state.products.entities.manufacturer[state.products.entities.products[payload.id].manufacturer]
    // console.debug('new state', state.products)
    // state.products.result = [...state.products.result, payload.id]
  },
  updateProduct: (state, payload) => {
    state.products = state.products.map(p => {
      if (p.id === payload.id) {
        payload = {...payload, manufacturer: state.manufacturers.filter(x => x.id === payload.manufacturer)[0]}
        return payload
      }
      return p
    })
  },
  removeProduct: (state, payload) => {
    const index = state.products.findIndex(p => p.id === payload)
    // console.debug('removing', index, state.products.slice(0, state.products.indexOf(state.products.filter(p => p.id === payload))), state.products.slice(state.products.indexOf(state.products.filter(p => p.id === payload)) + 1))
    state.products.splice(index, 1)
    // state.products = state.products.filter(p => p.id !== payload)
    // state.products = [
    //   ...state.products.slice(0, index),
    //   ...state.products.slice(index + 1)
    // ]
    console.log(state.products)
    //   state.products.map(p => {
    //   if (p.id !== payload) {
    //     console.log(p)
    //     return p
    //   }
    // })
  }
}

export const cartMutations = {
  addToCart: (state, payload) => state.cart.push(payload),
  removeFromCart: (state, payload) => {
    const index = state.cart.findIndex(p => p.id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  }
}
