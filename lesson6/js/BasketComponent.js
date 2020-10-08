
Vue.component('basket', {
    props:['basket', 'visibility','summbasket'],
    template:`<div class="basket" v-show="visibility">
                <div class="basket_up">
                    <div class="basket_close" @click="this.$parent.closeBasket"> X </div>
                </div>
                   <div class="basket_down">
                    <br><br>
                    <table align="center" border="1">
                        <tr>
                            <th width="200">Наименование</th>
                            <th width="100">Цена</th>
                            <th width="100">Количество</th>
                            <th width="100">Сумма</th>
                        </tr>
                        <basket-item v-for="item of basket" :key="item.id_product" :basket-item="item"></basket-item>
                        <tr><td colspan="3"><b>ИТОГО:</b></td><td align="center"><b>{{ summbasket }}</b></td></tr>
                    </table>
                </div>
</div>
`
});

Vue.component('basket-item', {
    props:['basketItem'],
    template:`
                            <tr align="center">
                            <td>{{basketItem.product_name}}</td>
                            <td>{{basketItem.price}}</td>
                            <td><button @click="$parent.$emit('remove', basketItem)">-</button>&nbsp;{{ basketItem.quantity }}&nbsp;
                            <button @click="$parent.$emit('add', basketItem)">+</button></td>
                            <td>{{basketItem.quantity*basketItem.price}}</td>
                        </tr>
    `
})