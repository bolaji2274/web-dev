<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="row">
          <h1 class="text-center head">PARMACY STORE</h1>
          <div class="col-sm-12 col-md-9 text-center b-g-image">
            <div class="row">
              <div class="col-md-3 tiles" v-for="shop,id in shops" :key="id">
                <div class="product-item">
                  <div class="product-menu">
                    <img :src="shop.img" style="width: 130px; height: 120px; "/>
                    <div class="product-details">
                      <div class="product-text">
                        <h4>{{ shop.name }}</h4>
                        <p class="price">$ {{ shop.price }}</p>
                      </div>
                      <div class="product-option">
                        <div class="form-group required">
                          <div class="input-group col-sm-12 col-xs-12">
                            <label
                              class="label-control col-sm-2 col-xs-2 detail"
                              >Qty</label
                            >
                            <button class="minus" @click="decrease(id)">-</button>
                            <input type="number detail" v-model.number="shop.counter" disabled/>
                            <button class="plus" @click="increase(id)">+</button>
                            <button
                              type="button"
                              class="addToCart col-sm-4 pull-right detail"
                            @click="addToCart(id)"> 
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
                     <div class="content2">
                        <div class="page-content">
                          <ul class="list-item">
                            <li v-for="shop,id in shops" :key="id">
                              <table v-if="shop.display">
                                <tbody>
                                  <tr>
                                        <td class="text-center"><a href="#"><img :src="shop.img" alt=""></a></td>
                                        <td class="text-left">{{shop.name}}</td>
                                        <td class="text-right" v-once>x{{shop.counter}}</td>
                                        <td class="text-right">${{shop.price * shop.counter}}</td>
                                        <td class="text-center">
                                          <button type="button" class="btn btn-danger btn-xs" @click="remove(id)">
                                            <i class="fa fa-times"></i>
                                          </button>
                                        </td>
                                  </tr> 
                                </tbody>
                              </table>
                            </li>
                            <li>
                              <div>
                                <table class="table table-bordered" v-if="display">
                                  <tbody>
                                    <tr>
                                      <td class="text-right">Sub-Total</td>
                                      <td class="text-right">$ {{total}}</td>
                                    </tr>
                                    <tr>
                                      <td class="text-right">
                                        <strong>Total</strong>
                                      </td>
                                      <td class="text-right">$ {{total}}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </li>
                          </ul>
                        </div>
                     </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        counter: 1,
        display: false,
        total: 0,
      shops: [
        { img: "image/adiyl.jpeg", name: "Addil", price: 25, counter: 0, display: false, totals: 0, PriceTotal: 0},
        { img: "image/bayer.jpeg", name: "Bayer", price: 32, counter: 0, display: false , totals: 0 , PriceTotal: 0},
        { img: "image/check.jpeg", name: "Capsonic", price: 45, counter: 0 , display: false, totals: 0 , PriceTotal: 0},
        { img: "image/chronfecle.jpeg", name: "Chlorafenac", price: 32, counter: 0, display: false  , totals: 0 , PriceTotal: 0},
        { img: "image/drug2.jpeg", name: "Septisini", price: 18, counter: 0, display: false , totals: 0 , PriceTotal: 0},
        { img: "image/drug3.jpeg", name: "Parasconic", price: 24, counter: 0 , display: false , totals: 0 , PriceTotal: 0},
        { img: "image/drug4.jpeg", name: "Sepdomatic", price: 26 , counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/drug5.jpeg", name: "Paracetamol", price: 20 , counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/equator.jpeg", name: "Sepronic", price: 35 , counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/gavinsco.jpeg", name: "Gavinsco", price: 23 , counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/hab.jpeg", name: "Terifac Herb", price: 19 , counter: 0, display: false, totals: 0 , PriceTotal: 0},
        { img: "image/paracetamol.jpeg", name: "Paracetamol", price: 28, counter: 0 , display: false , totals: 0, PriceTotal: 0},
        { img: "image/pil.jpeg", name: "Hanson Pill", price: 30, counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/prilose.jpeg", name: "Prillose Pill", price: 16 , counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/rayAid.jpeg", name: "Rite", price: 19, counter: 0, display: false , totals: 0, PriceTotal: 0},
        { img: "image/sinaspril.jpeg", name: "Pertfic Pill", price: 24, counter: 0, display: false, totals: 0 , PriceTotal: 0}
      ],
    }
  },
  methods: {
    increase(id) {
        this.shops[id].counter >= 15 ? alert("Maximum order is 15") : this.shops[id].counter++;
    },
    decrease(id) {
        this.shops[id].counter <= 0 ? (this.shops[id].counter = 0) : this.shops[id].counter--;
        this.check(id)
    },
    addToCart(id){
      if (this.shops[id].counter !== 0){
        this.shops[id].display = true;
      }else {
        this.shops[id].display = false;
      }
    },
    checkTotal(id){
       return this.total + this.shops[id].counter * this.shops[id].price;
    },
    check(id){
      if (this.shops[id].counter === 0){
        this.shops[id].display = false;
      }
    },
    remove(id){
      this.shops[id].counter = 0;
      this.addToCart(id);
     }
    // total(){
    //   let myTotal = 0
    //   for(let i = 0; i < this.shops.length; i++){
    //     if(this.shops[i].counter){
    //       let allTotalPrice = this.shops[i].counter * this.shops[i].price
    //       return myTotal = myTotal + allTotalPrice;
    //   }
    //   } 
    // }
  },
};
</script>

<style scoped>
.content {
  max-width: 85%;
  margin: 10px auto;
}
.tiles{
    height: 100%;
}
.head{
    color: #f3f3f3;
}
.product-text
.product-menu img{
    margin: 10% 0;
    padding: 10%;
}
.product-item {
  margin: 0 0px 12px;
  border: 1px solid #ebebeb;
  background-color: #ebebeb;
}
.product-details {
  margin: 10px 0 0;
  position: relative;
  width: 100%;
  min-height: 106px;
  background-color: #f7f7f7;
  padding: 6px 10px 8px;
  overflow: hidden;
  border-top: 1px solid #ebebeb;
}
.product-text {
  display: flex;
  justify-content: space-between;
  padding-top: 5%;
  font-size: 12px;
  color: #333333;
}
.product-text h4 {
  color: #333333;
  font-size: 12px;
}
.input-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  margin-left: 0px;
}
.input-group input {
  width: 30px;
  text-align: center;
  border: 1px solid #a18888;
  border: none;
}
.input-group .addToCart {
  font-size: inherit;
  text-transform: none;
  overflow: visible;
  margin-left: 5px;
  color: #fff;
  padding: 5px 10px;
  background-color: #01b6c1;
  border: none;
}
.input-group .detail {
  margin-right: 0px;
}
.minus,
.plus {
  padding: 0px;
  width: 20px;
  border: none;
}

                /* -------content2 style -----*/
.content2{
    /* height: 123vh; */
    font-size: 10px;
    background-color: #01b6c1;
    background-image: url('image/bag-image.jpg');
    color: #ebebeb;
}
.content2 *{
    font-size: 12px;
}
ul{
  margin-top: 10%;
  background-color: #f2f2f2;
  color: #333333;
}
ul li{
  list-style: none;
  margin-left: 0px;
  padding-left: 0%;
}
table{
  width: 100%;
  padding: 0px 0px;
}
tr td{
  margin: 10px 0;
  padding: 10px 5px;
}
tr td button{
  margin-right: 0;
}
tr td a img{
  width: 50px;
  height: 55px;
}
</style>
