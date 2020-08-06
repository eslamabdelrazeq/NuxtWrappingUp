import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            products: [],
            token: null
        },
        mutations: {
            setProducts(state, products) {
                state.products = products;
            },
            addProduct(state, product) {
                state.products.push(product);
            },
            editProduct(state, product) {
                const index = state.products.findIndex(d => d.id == product.id);
                state.products[index] = product;
            },
            setToken(state, token) {
                state.token = token;
            }
        },
        actions: {
            nuxtServerInit(vueContext, context) {
                return context.app.$axios.$get("/nuxtwrappingup.json")
                    .then(data => {
                        const products = [];
                        for (const key in data) {
                            products.push({...data[key], id: key });
                        }
                        vueContext.commit("setProducts", products)
                    })
                    .catch(e => {
                        context.error(e)
                    });
            },
            setProducts(vuexContext, products) {
                vuexContext.commit("setProducts", products);
            },
            addProduct(vuexContext, product) {
                return this.$axios.$post("/nuxtwrappingup.json?auth=" + vuexContext.state.token, product)
                    .then(data => {
                        vuexContext.commit("addProduct", {...product, id: data.name });
                    })
                    .catch(e => vuexContext.error(e));
            },
            editProduct(vuexContext, product) {
                return this.$axios
                    .$put('/nuxtwrappingup/' + product.id + ".json?auth=" + vuexContext.state.token, product)
                    .then((res) => {
                        vuexContext.commit("editProduct", product);
                    })
                    .catch((e) => console.log(e))
            },
            login(vuexContext, authObj) {
                return this.$axios
                    .$post(process.env.authSigninUrl + process.env.fbAPIKey, authObj)
                    .then((data) => {
                        console.log(data);
                        vuexContext.commit("setToken", data.idToken);
                        this.$axios.$post('http://localhost:3000/api/track-data', { data: 'Authenticated!' })
                        return data;
                    })
                    .catch((e) => {
                        console.log(e)
                        this.$toast.error('error').goAway(1500)
                    })
            },
            signUp(vuexContext, authObj) {
                return this.$axios
                    .$post(process.env.authSignupUrl + process.env.fbAPIKey, authObj)
                    .catch((e) => {
                        console.log(e)
                        this.$toast.error('error').goAway(1500)
                    })
            }
        },
        getters: {
            loadedProducts(state) {
                return state.products;
            },
            isAuthenticated(state) {
                return state.token != null;
            },
        }
    });

}
export default createStore;