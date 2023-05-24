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
                          <p>Profit Transaction</p>
                      </div>
  
                      <div class="row mt-3">
                        <div class="col">
                            <input type="date" class="form-control" v-model="cari_tgl">
                        </div>
                        <div class="col">
                            <input type="month" class="form-control" v-model="cari_bulan">
                        </div>
                        <div class="col">
                            <input type="submit" @click="getdate" class="btn btn-outline-primary">
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            Penghasilan
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" v-if="this.cari_bulan">Pendapatan bulan {{ cari_bulan }} Adalah Rp.{{
                                profitbulan }}</h5>
                            <p class="card-text" v-if="this.cari_tgl">Pendapatan Tanggal {{ cari_tgl }} Adalah Rp.{{
                                profithari }}</p>
                        </div>
                    </div>
  
                  </div>
                  
              </section><!-- End Menu Section -->
  
        </main><!-- End #main -->
  
        <!-- DETAIL -->
        <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- <table class="table table-hover table-striped">
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
                            <p>Total Harga: <b>{{ total }}</b></p> -->
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
// import Chart from 'chart.js/auto'
// import axios from 'axios'
// import { filter } from 'vue/types/umd';
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            cari_bulan: '',
            cari_tgl: '',
            profitbulan: '',
            profithari: '',
            datamenu: {}
        }
    },
    mounted() {
        this.getdate()
        
    },
    computed: {
    },
    methods: {
        getdate() {
            if (this.cari_bulan) {
                axios.get('http://localhost:8000/api/getmonth/' + this.cari_bulan)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profitbulan = data
                        }
                    )
            }

            if (this.cari_tgl) {
                axios.get('http://localhost:8000/api/getday/' + this.cari_tgl)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profithari = data
                        }
                    )
            }

            // if (this.cari_bulan && this.cari_tgl) {
            //     swal({
            //         icon: 'warning',
            //         title: 'Cari salah satu!',
            //         button: true
            //     })
            // }
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