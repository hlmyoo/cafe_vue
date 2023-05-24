<template>
  <div>
      <!-- ======= Top Bar ======= -->
      <div id="topbar" class="d-flex align-items-center fixed-top">
          <div class="container d-flex justify-content-center justify-content-md-between">



              <div class="languages d-none d-md-flex align-items-center">

              </div>
          </div>
      </div>

      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top d-flex align-items-cente">
          <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

              <h1 class="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>
              <!-- Uncomment below if you prefer to use an image logo -->
              <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

              <nav id="navbar" class="navbar order-last order-lg-0">
                  <ul>
                    <li><a class="nav-link scrollto active" href="/kasir">Home</a></li>
          <li><a class="nav-link scrollto" href="/kasir#about">About</a></li>
          <li><a class="nav-link scrollto" href="/kasirtransaksi">Transaction</a></li>
          <li><a class="nav-link scrollto" href="/ongoing">On Going</a></li>
          <li><a class="nav-link scrollto" href="/history">History</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                  </ul>
                  <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
              <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

          </div>
      </header><!-- End Header -->


      <main id="main">


         <!-- ======= Why Us Section ======= -->
    
    <section id="menu" class="menu section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Menu</h2>
                        <p>Check Our Taste Menu</p>
                    </div>

                    <section id="why-us" class="why-us">
                        <div class="container" data-aos="fade-up">

                           
                            

                                    <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                            <div class="row">

                              <div class="col-lg-6 menu-item filter-specialty "  v-for="m in filter_menu" :key="m.id_menu"  >
           
            
            <img :src="'http://localhost/Cafe_VueLaravel/Cafe_Backend/public/images/'+ m.foto" 
            class="menu-img" style="width: 80px;"  alt="">
             <div class="menu-content">
              <a href="#">{{ m.nama }}</a><span>${{ m.harga }} <button class="btn btn-outline-light"
                                                            data-bs-toggle="modal" @click="getdetail(m)"
                                                            data-bs-target="#addmenu"><i
                                                                class="bi bi-cart-plus-fill"></i></button> </span>
            </div>
            <div class="menu-ingredients">
             {{ m.deskripsi }}
            </div>
          </div>


                   </div>
                            </div>

                        </div>
                    </section><!-- End Why Us Section -->


                </div>
                
            </section><!-- End Menu Section -->

      </main><!-- End #main -->

      <!-- ======= Footer ======= -->
      <footer id="footer">
          <div class="footer-top">
              <div class="container">
                  <div class="row">

                      <div class="col-lg-3 col-md-6">
                          <div class="footer-info">
                              <h3>Restaurantly</h3>
                              <p>
                                  A108 Adam Street <br>
                                  NY 535022, USA<br><br>
                                  <strong>Phone:</strong> +1 5589 55488 55<br>
                                  <strong>Email:</strong> info@example.com<br>
                              </p>
                              <div class="social-links mt-3">
                                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-2 col-md-6 footer-links">
                          <h4>Useful Links</h4>
                          <ul>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                          </ul>
                      </div>

                      <div class="col-lg-3 col-md-6 footer-links">
                          <h4>Our Services</h4>
                          <ul>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                          </ul>
                      </div>

                      <div class="col-lg-4 col-md-6 footer-newsletter">
                          <h4>Our Newsletter</h4>
                          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                          <form action="" method="post">
                              <input type="email" name="email"><input type="submit" value="Subscribe">
                          </form>

                      </div>

                  </div>
              </div>
          </div>

          <div class="container">
              <div class="copyright">
                  &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
                  <!-- All the links in the footer should remain intact. -->
                  <!-- You can delete the links only if you purchased the pro version. -->
                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ -->
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
          </div>
      </footer><!-- End Footer -->

      <div class="modal fade" id="addmenu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">ADD MENU</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="addtocart">
                            <div class="modal-body">
                                <label for="nama">Nama:</label>
                                <input type="text" class="form-control" v-model="detailmenu.nama">
                                <input type="hidden" v-model="detailmenu.id_menu">

                                <label for="jumlah">Jumlah:</label>
                                <input type="number" class="form-control" v-model="jumlah" required>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add to cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

   

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
        menu: {},
            datamenu: {},
            detailmenu: {
                nama: '',
                id_menu: ''
            },
            jumlah: '',
            foto: '',
            image: '',
            carimenu: ''
        }
    },
    mounted() {
        this.getmenu()
        this.getdetail()
        this.getcart()
    },
    computed: {
        filter_menu() {
            let filter_data = this.datamenu
            if (this.carimenu) {
                filter_data = filter_data.filter(menu => menu.nama.toString().toLowerCase().includes(this.carimenu.toLowerCase()))
            }
            return filter_data
        }
    },
    methods: {
      
        getmenu() {
            axios.get('http://localhost:8000/api/getmenu')
                .then(
                    ({ data }) => {
                        this.datamenu = data
                    }
                )
        },
        getdetail(m) {
            axios.get('http://localhost:8000/api/getmenu/' + m.id_menu)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmenu.id_menu = response.data[0].id_menu
                        this.detailmenu.nama = response.data[0].nama
                        // this.image = response.data[0].foto
                        this.detailmenu.jenis = response.data[0].jenis
                        this.detailmenu.harga = response.data[0].harga
                        this.detailmenu.deskripsi = response.data[0].deskripsi
                    }
                )
        },
        addtocart() {
            let datamenu = {
                id_menu: this.detailmenu.id_menu,
                total_pesanan: this.jumlah
            }

            axios.post('http://localhost:8000/api/tambahpesanan', datamenu)
                .then(
                    (response) => {
                        console.log(response)
                       alert('sukses')
                       setTimeout(() => {
                         location.href = '/kasirtransaksi'
                       }, 1100);
                    }
                )
        }

    }
}
</script>
     
