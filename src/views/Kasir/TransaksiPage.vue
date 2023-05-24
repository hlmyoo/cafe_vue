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

   <!-- Service Start -->
   <main id="main">


<!-- ======= Why Us Section ======= -->

<section id="menu" class="menu section-bg">
       <div class="container" data-aos="fade-up">

           <div class="section-title">
               <h2>Menu</h2>
               <p>Check Our Transaction</p>
           </div>

           <section id="why-us" class="why-us">
               <div class="container" data-aos="fade-up">

                <a href="/kasirmenu"><button class="btn btn-outline-light mb-4 mt-4"><i
                                class="bi bi-cart-plus-fill"></i></button></a>

                    <table class="table table-hover ">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th>No</th>
                                <th>Menu</th>
                                <th>Jumlah</th>
                                <th>Total Harga</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(menu, nomor) in cart" :key="nomor" class="text-light">
                                <td>{{ nomor + 1 }}</td>
                                <td>{{ menu.nama }}</td>
                                <td>{{ menu.total_pesanan }}</td>
                                <td>{{ menu.total_harga }}</td>
                                <td><button class="btn btn-outline-danger" @click="hapus(menu)">Hapus</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-outline-light mt-3" data-bs-toggle="modal" data-bs-target="#checkout">Check
                        Out</button>
                   

                       

               </div>
           </section><!-- End Why Us Section -->


       </div>
       
   </section><!-- End Menu Section -->

</main><!-- End #main -->
            <!-- Service End -->

  

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
     <!-- NEW TRANSAKSI -->
     <div class="modal fade" id="checkout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Check Out</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="checkoutnow">
                            <div class="modal-body">

                                <label for="user">Kasir:</label>
                                <select required class="form-control" v-model="checkout.id_user" id="user">
                                    <option v-for="nama in kasir" :key="nama.id_user" :value="nama.id_user">{{ nama.nama_user }}
                                    </option>
                                </select>

                                <label for="meja">Meja</label>
                                <select required class="form-control" v-model="checkout.id_meja" id="meja">
                                    <option v-for="nomor in meja" :key="nomor.id_meja" :value="nomor.id_meja">{{
                                        nomor.nomor_meja }}</option>
                                </select>

                                <label for="nama">Pelanggan:</label>
                                <input type="text" class="form-control" v-model="checkout.nama_pelanggan" required
                                    autocomplete="off" placeholder="Masukkan nama pelanggan...">

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END NEW TRANSAKSI -->

</div>

    

   
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            cart: {},
            kasir: {},
            meja: {},
            checkout: {}
        }
    },
    mounted() {
        this.getcart()
        this.getkasir()
        this.getmeja()
    },
    methods: {
        getkasir() {
            axios.get('http://localhost:8000/api/getkasir')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.kasir = data
                    }
                )
        },
        getmeja() {
            axios.get('http://localhost:8000/api/getmejakosong')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.meja = data
                    }
                )
        },
        getcart() {
            axios.get('http://localhost:8000/api/getcart')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.cart = data
                    }
                )
        },
        checkoutnow() {
            swal({
                title: 'Are you sure?',
                icon: 'warning',
                dangerMode: true,
                buttons: true,
            }).then(
                (checkout) => {
                    if (checkout) {
                        axios.put('http://localhost:8000/api/checkout', this.checkout)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed Check Out',
                                        icon: 'error',
                                        button: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        hapus(menu) {
            axios.delete('http://localhost:8000/api/deletetransaksi/' + menu.id_transaksi)
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('role')
                        localStorage.removeItem('token')
                        swal({
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.href = '/'
                        }, 1200);
                    }
                }
            )
        }
    }
}
</script>