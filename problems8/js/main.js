import product from './ProductComponent'

const app=new Vue({
    el:'#app',
    template:`<h1>Основной блок.</h1>`,
    data:{
        id:1,
        name:'Tit'
    },
    components: {
        product
    },
    methods: {
        getId(){
            alert (111);
        }
    }
});

//export default app