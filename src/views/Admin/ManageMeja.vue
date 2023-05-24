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
                        <li><a class="nav-link scrollto active" href="/Admin">Home</a></li>
                        <li><a class="nav-link scrollto" href="/Admin#about">About</a></li>
                        <li><a class="nav-link scrollto" href="/AdminMenu">Menu</a></li>
                        <li><a class="nav-link scrollto" href="/AdminUser">User</a></li>
                        <li><a class="nav-link scrollto" href="/AdminMeja">Meja</a></li>
                        <li><a class="nav-link scrollto" href="/Admin#contact">Contact</a></li>
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
                        <p>Check Available Tables</p>
                    </div>

                    <section id="why-us" class="why-us">
                        <div class="container" data-aos="fade-up">

                            <button class="btn btn-outline-light mb-4" data-bs-toggle="modal" data-bs-target="#addtable"><i
                                    class="bi bi-plus-circle-fill"></i></button> 
                            

                            <div class="row">

                                <div class="col-lg-4"  @click="getdetail(meja)" data-bs-toggle="modal"
                            data-bs-target="#editmeja"  v-for="meja in datameja" :key="meja.id_meja">
                                    <div class="box" data-aos="zoom-in" data-aos-delay="100">
                                        <span>Nomor meja {{ meja.nomor_meja }} </span>
                                        <p>Status {{ meja.status }} </p>
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

        <!-- ADD TABLE -->
        <div class="modal fade" id="addtable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD TABLE</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="addmeja">
                        <div class="modal-body">
                            <label for="nomor">Nomor Meja: </label>
                            <input type="number" class="form-control" v-model="meja.nomor_meja" required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END ADD TABLE -->

         <!-- EDIT MEJA -->
         <div class="modal fade" id="editmeja" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">TABLE EDIT</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="editmeja">
                            <div class="modal-body">
                                <label for="nomor">Nomor Meja: </label>
                                <input type="number" class="form-control" v-model="detailmeja.nomor_meja" required>

                                <label for="status">Status: </label>
                                <select class="form-control" v-model="detailmeja.status" id="status">
                                    <option value="kosong">Kosong</option>
                                    <option value="digunakan">Di Pakai</option>
                                </select>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" @click="removemeja()">Remove</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT MEJA -->

         


    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            datameja: {},
            meja: {},
            detailmeja:{
                nomor_meja: '',
                id_meja: '',
                status: ''
            }
        }
    },
    mounted() {
        this.getmeja()
    },
    methods: {
        getmeja() {
            axios.get('http://localhost:8000/api/getmeja')
                .then(
                    ({ data }) => {
                        this.datameja = data
                    }
                )
        },
        getdetail(meja) {
            axios.get('http://localhost:8000/api/getmeja/' + meja.id_meja)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmeja.nomor_meja = response.data[0].nomor_meja
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.status = response.data[0].status

                    }
                )
        },
        addmeja() {
            axios.post('http://localhost:8000/api/createmeja', this.meja)
                .then(
                    (response) => {
                        console.log(response)
                        alert('Sukes')
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        if(error.response || error.response.status === 422){
                            alert('Meja sudah ada')
                        }
                    }
                )

        },
        editmeja() {
            axios.put('http://localhost:8000/api/updatemeja/' + this.detailmeja.id_meja, this.detailmeja)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update Meja',
                            icon: 'success'
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
                            title: 'Failed Update Meja',
                            icon: 'success'
                        })
                    }
                )
        },
        removemeja() {
            swal({
                title: 'Are you sure?',
                icon: 'warning',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete('http://localhost:8000/api/deletemeja/' + this.detailmeja.id_meja)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Succes remove table',
                                        icon: 'success'
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
                                        title: 'Failed remove table',
                                        icon: 'error'
                                    })
                                }
                            )
                    }
                }
            )
        },
    }
}
</script>