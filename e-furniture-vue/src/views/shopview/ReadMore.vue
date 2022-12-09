<template>
  <div>
    <div class="container">
      <h1>Trendy collection</h1>
      <div class="row">
        <div class="p-3 border bg-light">
          <div class="row g-2">
            <div class="col-3" v-for="shop in shops" :key="shop">
              <div class="p-3 bg-light colum-1">
                    <div class="text-content">
                        <p>{{shop.desc}}</p>
                        <p class="price">{{shop.price}}</p>
                    </div>
              </div>
            </div>
            <div class="col-3">
              <div class="p-3 bg-light">
                
              </div>
            </div>
            <div class="col-3">
              <div class="p-3 bg-light">

              </div>
            </div>
            <div class="col-3">
              <div class="p-3 bg-light">

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
            shops : [
                {image: '../../images/p1_600x.webp', desc: 'Alex Study Chair', price : '$ 208.00'},
                {image: '../../images/p8_600x.webp', desc: 'Brommstick chair', price : '$ 178.00'},
                {image: '../../images/p10_600x.webp', desc: 'Amet Kairfort', price : '$ 756.00'},
                {image: '../../images/p14_600x.webp', desc: 'Fuastick chair', price : '$ 178.00'},
            ]
        }
    },
};
</script>

<style scoped>
.row{
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    width: 100%;
    height: 80%;
}
.colum-1{
    background-image: url('../../images/p1_600x.webp');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 250px;
    height: 390px;
    background-position: center top;
    border: 10px solid #6f5948;
    border-color: #e3e1e0;
    position: relative;
}
.text-content{
    text-align: center;
    position: absolute;
    color: #6f5948;
    left: 90px;
    bottom: -6px;
}
.text-content p{
    font-size: 12px;
    font-weight: bold;
    margin-top: 20%;
}
.text-content p.price{
    font-weight: bold;
}
</style>
