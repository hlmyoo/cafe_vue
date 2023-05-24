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
               <p>History Of Restaurantly</p>
           </div>

           <section id="why-us" class="why-us">
               <div class="container" data-aos="fade-up">
                      
               <!-- Service Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-light fw-normal mb-5">Our History</h5>
                        <!-- <h1 class="mb-5">Explore Our Services</h1> -->
                    </div>
                    <div class="card mb-3" v-for="history in data_history" :key="history.id_history">
                        <div class="card-header">
                            {{ history.tgl_transaksi }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Nama Pelanggan: <b>{{ history.nama_pelanggan }}</b></h5>
                            <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                            <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal"
                                @click="getdetailhistory(history)" data-bs-target="#detailhistory">Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Service End -->
               
                       

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
      <!-- DETAIL HISTORY -->
      <div class="modal fade" id="detailhistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Nama pelanggan: <b>{{ detail.nama_pelanggan }}</b> -->
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(history, nomor) in detail" :key="history.id_history">
                                        <td>{{ nomor + 1 }}</td>
                                        <td>{{ history.nama }}</td>
                                        <td>{{ history.total_pesanan }}</td>
                                        <td>{{ history.total_harga }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL HISTORY -->
</div>

    

   
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            data_history: {},
            detail: {}
        }
    },
    mounted() {
        this.gethistory()
    },
    methods: {
        gethistory() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.data_history = data
                    }
                )
        },
        getdetailhistory(history) {
            axios.get('http://localhost:8000/api/gethistory/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        // this.detail.nama_pelanggan = response.data.nama_pelanggan
                        this.detail = data
                    }
                )
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin LogOut?',
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