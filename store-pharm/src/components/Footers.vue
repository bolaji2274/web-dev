<template>
  <div>
    <div class="footer">
        <div class="container">
           <div class="row">
            <div class="text-content">
                <div class="colum1">
                    <h3>My Account</h3>
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
      content: [
        { title: "My Account", l1: 'My Account', l2: 'Order History', l3: 'Wish List', l4: 'Newsletter', l5: 'Contact Us'},
        { title: "Information",l1: 'About Us',l2: 'Delivery Information', l3: 'Privacy Policy', l4: 'Terms & Conditions', l5: 'Returns'},
        { title: "Customlink", l1: 'Career', l2: 'About Us', l3: 'Policy', l4: 'Newsletter', l5: 'Contact Us'},
        { title: "Etras", l1: 'Brands', l2: 'Gift Certificates', l3: 'Specials', l4: 'Newsletter', l5: 'Site Map'},
        { title: "Contacts", l1: '600, Big market Site', l2: 'Designs', l3: 'custom Boltascusta avenue apt.', l4: 'Mesa,California', l5: 'info@customdesign.com (+234) 123-456-789'}
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  /* margin-top: 30px;     */
  max-width: 70%;
  margin: 10 auto;
  border: 2px solid springgreen;
}

.container {

}

/* .row {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: none;
}

.footer {
  background-color: #24262b;
  padding: 70px 0;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 30px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  columns: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgb(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50px;
  color: #ffff;
  transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
} */

/* responsive */
</style>

