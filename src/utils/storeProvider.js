var store = undefined

export default{
    
    init(configureStore){
        // console.log('storeProvider----', store)
        store = configureStore();
    },
   
    getStore(){
        return store
    }
}

