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
                        <li><a class="nav-link scrollto active" href="/manager">Home</a></li>
          <li><a class="nav-link scrollto" href="/manager#about">About</a></li>
          <li><a class="nav-link scrollto" href="/alltransaksi">AllTransaction</a></li>
          <li><a class="nav-link scrollto" href="/filtertransaksi">FilterTransaction</a></li>
          <li><a class="nav-link scrollto" href="/profitpage">ProfitPage</a></li>
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
                          <h2>Restaurantly</h2>
                          <p>Filter Transaction</p>
                      </div>
  
                      <div class="row mt-2">
                        <div class="col">
                            <input type="text" class="form-control" v-model="cari_kasir" autocomplete="off"
                                placeholder="Cari nama kasir...">
                        </div>
                        <div class="col">
                            <input type="date" class="form-control" v-model="tgl_transaksi"
                                placeholder="Cari tgl transaksi...">
                        </div>
                    </div>

                    <div class="card mt-4" v-for="t in filterdata" :key="t.id_history">
                        <div class="card-header">
                            Transaksi pada tanggal {{ t.tgl_transaksi }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Pelanggan atas nama {{ t.nama_pelanggan }}</h5>
                            <p class="card-text">Di layani oleh kasir {{ t.nama }}</p>
                            <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#detail"
                                @click="getfunction(t)">See detail</a>
                        </div>
                    </div>
  
  
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
  
          <!-- DETAIL -->
          <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover table-striped">
                                <thead class="bg-light text dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Menu</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(t, nomor) in detail" :key="nomor">
                                        <td>{{ nomor + 1 }}</td>
                                        <td>{{ t.nama }}</td>
                                        <td>{{ t.total_pesanan }}</td>
                                        <td>{{ t.total_harga }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Total Harga: <b>{{ total }}</b></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL -->
  
  
    </div>
  </template>
  
  <script>
 import axios from 'axios';
import swal from 'sweetalert'
// import axios from 'axios'
// import { filter } from 'vue/types/umd';
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            cari_kasir: '',
            tgl_transaksi: '',
            datatransaksi: {},
            detail: {},
            total: '',
            role: ''
        }
    },
    mounted() {
        this.gethistory()
        
    },
    computed: {
        filterdata() {
            let filterdata = this.datatransaksi
            if (this.cari_kasir) {
                filterdata = filterdata.filter(t => t.nama_user.toLowerCase().toString().includes(this.cari_kasir.toLowerCase()))
            }
            if (this.tgl_transaksi) {
                filterdata = filterdata.filter(t => t.tgl_pesan.includes(this.tgl_transaksi))
            }

            if (!this.cari_kasir && !this.tgl_transaksi) {
                filterdata = false
            }
            return filterdata
        }
    },
    methods: {
        getfunction(history) {
            this.gettotal(history)
            this.getdetail(history)
        },
        gettotal(history) {
            axios.get('http://localhost:8000/api/gethasilharga/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.total = data
                    }
                )
        },
        getdetail(history) {
            axios.get('http://localhost:8000/api/gethistory/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail = data
                    }
                )
        },
        gethistory() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.datatransaksi = data
                    }
                )
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
                            icon: 'success',
                            button: false
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