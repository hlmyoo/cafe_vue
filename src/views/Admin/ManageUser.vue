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
                          <p>Check Our Member</p>
                      </div>
  
                      <section id="why-us" class="why-us">
                          <div class="container" data-aos="fade-up">
  
                              <!-- Team Start -->
           
                    <button style="border-radius: 10px;" class="btn btn-outline-light mb-4" data-bs-toggle="modal"
                        data-bs-target="#adduser"><i class="bi bi-person-plus"></i></button>
                    <table class="table table-hover ">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-light">
                            <tr v-for="(user, number) in datauser" :key="number">
                                <td>{{ number + 1 }}</td>
                                <td>{{ user.nama_user }}</td>
                                <td>{{ user.username }}</td>
                                <td>
                                    <span v-if="user.gender == 'L'">Laki-laki</span>
                                    <span v-else>Perempuan</span>
                                </td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#edituser" @click="getdetail(user)"><i
                                                class="bi bi-gear-fill"></i></button>
                                        <button type="button" class="btn btn-outline-info"><i
                                                class="bi bi-eye-fill"></i></button>
                                        <button type="button" class="btn btn-outline-danger" @click="deleteuser(user)"><i
                                                class="bi bi-trash-fill"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               
            <!-- Team End -->
  
                             
  
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
  
       <!-- ADD USER -->
       <div class="modal fade" id="adduser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD TABLE</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="adduser">
                        <div class="modal-body">
                            
                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="user.nama_user" required autocomplete="off"
                                placeholder="Masukkan nama...">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="user.username" required autocomplete="off"
                                placeholder="Masukkan email...">

                            <label for="gender">Gender</label>
                            <select id="gender" class="form-control" required v-model="user.gender">
                                <option value="L" style="background-color:blue; color:white;">Laki-Laki</option>
                                <option value="P" style="background-color:pink; color:white;">Perempuan</option>
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="user.password" required
                                placeholder="Masukkan password...">

                            <label for="role">Role:</label>
                            <select v-model="user.role" id="role" class="form-control" required>
                                <option value="kasir">kasir</option>
                                <option value="admin">admin</option>
                                <option value="manajer">manajer</option>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END ADD USER -->
  
      <!-- MODAL EDIT USER -->
      <div class="modal fade" id="edituser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="edituser">
                        <div class="modal-body">

                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="edit.nama_user" required autocomplete="off">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="edit.username" required autocomplete="off">

                            <label for="gender">Gender:</label>
                            <select class="form-control" v-model="edit.gender" required id="gender">
                                <option value="L" style="background-color: lightblue; color:black;">Laki-laki</option>
                                <option value="P" style="background-color: pink; color:black;">Perempuan</option>
                                
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="edit.password" required>

                            <label for="Role">Role:</label>
                            <select class="form-control" v-model="edit.role" required id="Role">
                                <option value="admin">Admin</option>
                                <option value="kasir">Kasir</option>
                                <option value="manajer">Manager</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL EDIT USER -->
  
    </div>
  </template>
  
  <script>

  import axios from 'axios'
  import swal from 'sweetalert'

export default {
    data() {
        return {
            datauser: {},
            user: {},
            edit: {},
        }
    },
    mounted() {
        this.getuser()
    },
    methods: {
        getuser() {
            axios.get('http://localhost:8000/api/getuser')
                .then(
                    ({ data }) => {
                        this.datauser = data
                    }
                )
        },
        adduser() {
            axios.post('http://localhost:8000/api/createuser', this.user)
                .then(
                    (response) => {
                        console.log(response)
                        alert('Sukes')
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                

        },
        getdetail(user) {
            axios.get('http://localhost:8000/api/getuser/' + user.id_user)
                .then(
                    (response) => {
                        // console.log(data)
                        this.edit = response
                        this.edit.id_user = response.data[0].id_user
                        this.edit.nama_user = response.data[0].nama_user
                        this.edit.username = response.data[0].username
                        this.edit.password = response.data[0].password
                        this.edit.gender = response.data[0].gender
                        this.edit.role = response.data[0].role
                        // this.nama = response.data[0].nama
                    }
                )
        },
        save() {
            swal({
                icon: 'warning',
                title: 'You sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.post('http://localhost:8000/api/createuser', this.user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success',
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    if (error.response || error.response.status === 422) {
                                        swal({
                                            icon: 'error',
                                            title: 'Email is already taken',
                                            button: true
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        },
        edituser() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.put('http://localhost:8000/api/updateuser/' + this.edit.id_user, this.edit)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'success',
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
                                        icon: 'error',
                                        title: 'Failed Update User',
                                        buttons: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        deleteuser(user) {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete('http://localhost:8000/api/deleteuser/' + user.id_user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Success',
                                        icon: 'success',
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (err) => {
                                    console.log(err)
                                    swal({
                                        icon: 'error',
                                        title: 'Failed delete user '
                                    })
                                }
                            )
                    } else {
                        swal({
                            icon: 'success',
                            title: 'Your data is safe',
                            button: true
                        })
                    }
                }
            )
        },
    }
}
  </script>