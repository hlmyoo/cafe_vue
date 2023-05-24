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
                        <p>Check Our Taste Menu</p>
                    </div>

                    <section id="why-us" class="why-us">
                        <div class="container" data-aos="fade-up">

                            <button class="btn btn-outline-light mb-4" data-bs-toggle="modal" data-bs-target="#addtable"><i
                                    class="bi bi-plus-circle-fill"></i></button>
                            

                                    <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                            <div class="row">

                              <div class="col-lg-6 menu-item filter-specialty "  v-for="m in datamenu" :key="m.id_menu"  >
           
            
            <img :src="'http://localhost/Cafe_VueLaravel/Cafe_Backend/public/images/'+ m.foto" 
            class="menu-img" style="width: 80px;"  alt="">
             <div class="menu-content">
              <a href="#">{{ m.nama }}</a><span>${{ m.harga }} <button class="btn btn-outline-light"
                data-bs-toggle="modal" @click="getdetail(m)"
                data-bs-target="#editmenu"><i
                class="bi bi-gear-fill"></i></button></span>
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

    <!-- ADD TABLE -->
    <div class="modal fade" id="addtable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD TABLE</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="addmenu">
                        <div class="modal-body">
                            <label for="nama">Nama Menu:</label>
                                <input type="text" class="form-control" v-model="menu.nama" required autocomplete="off"
                                    placeholder="Masukkan menu...">

                                <label for="jenis">Type: </label>
                                <select class="form-control" v-model="menu.jenis" id="jenis" required>
                                    <option value="makanan">Makanan</option>
                                    <option value="minuman">Minuman</option>
                                </select>

                                <label for="harga">Harga:</label>
                                <input type="number" class="form-control" v-model="menu.harga" required
                                    placeholder="Masukkan harga...">

                                <label for="foto">Foto:</label>
                                <input type="file" id="foto" class="form-control" @change="UploadFoto($event)" required>

                                <label for="nama">deskripsi:</label>
                                <input type="text" class="form-control" v-model="menu.deskripsi" required autocomplete="off"
                                    placeholder="Masukkan deskripsi...">

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

        <!-- EDIT MENU -->
        <div class="modal fade" id="editmenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">EDIT MENU</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="editmenu">
                            <div class="modal-body">
                                <div class="card" style="width: 18rem;">
                                    <img :src="'http://localhost/Cafe_VueLaravel/Cafe_Backend/public/images/' + image"
                                        class="card-img-top" alt="...">
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <label for="nama">Nama Menu:</label>
                                        <input type="text" class="form-control" v-model="detailmenu.nama" required>
                                    </div>

                                    <div class="col">
                                        <label for="harga">Harga:</label>
                                        <input type="number" class="form-control" v-model="detailmenu.harga" required>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="jenis">Type:</label>
                                        <select class="form-control" v-model="detailmenu.jenis" required id="jenis">
                                            <option value="makanan">Makanan</option>
                                            <option value="minuman">Minuman</option>
                                        </select>
                                    </div>
                                    

                                    <!-- <div class="col">
                                        <label for="foto">Foto:</label>
                                        <input type="file" @change="updatefoto($event)" class="form-control" required
                                            id="foto">
                                    </div> -->
                                </div>
                                    
                                <div class="col">
                                        <label for="harga">Deskripsi:</label>
                                        <input type="text" class="form-control" v-model="detailmenu.deskripsi" required>
                                    </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" @click="removemenu()">Remove</button>
                                <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                    data-bs-target="#editfoto">Update Photo</button>
                                <button type="submit" class="btn btn-primary">save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT MENU -->

            <!-- EDIT FOTO -->
            <div class="modal fade" id="editfoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">UPDATE PHOTO</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="savefoto">
                            <div class="modal-body">
                                <input type="file" class="form-control" @change="updatefoto($event)" id="foto" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT FOTO -->



  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
          datamenu: {},
          menu: {},
          detailmenu: {},
          foto: '',
            image: '',
            carimenu: ''
      }
  },
  mounted() {
      this.getmenu()
      this.getdetail()
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
                        this.image = response.data[0].foto
                        this.detailmenu.jenis = response.data[0].jenis
                        this.detailmenu.harga = response.data[0].harga
                        this.detailmenu.deskripsi = response.data[0].deskripsi
                        
                    }
                )
        },
      UploadFoto(e) {
            this.menu.foto = e.target.files[0]
        },
      addmenu() {
        let form = new FormData
            form.append('foto', this.menu.foto)
            form.append('nama', this.menu.nama)
            form.append('jenis', this.menu.jenis)
            form.append('harga', this.menu.harga)
            form.append('deskripsi', this.menu.deskripsi)

            axios.post('http://localhost:8000/api/createmenu/', form)
                .then(
                    (response) => {
                        console.log(response)
                       alert ('sukses brok')
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                      alert ('gagal')
                    }
                )
        },
        editmenu() {
            // let form = new FormData
            // // form.append("foto", this.detailmenu.foto)
            // form.append("nama", this.detailmenu.nama)
            // form.append("jenis", this.detailmenu.jenis)
            // form.append("harga", this.detailmenu.harga)
            // form.append("deskripsi", this.detailmenu.deskripsi)

            alert('yakin?')
           
                
                   
                        axios.put('http://localhost:8000/api/updatemenu/' + this.detailmenu.id_menu, this.detailmenu)
                            .then(
                                (response) => {
                                    console.log(response)
                                   alert('sukses')
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                   alert('error')
                                }
                            )
                    
                
            
        },
        updatefoto(e) {
            this.foto = e.target.files[0]
        },
        savefoto() {
            let form = new FormData
            form.append("foto", this.foto)

            axios.post('http://localhost:8000/api/updatephoto/' + this.detailmenu.id_menu, form)
                .then(
                    (response) => {
                        console.log(response)
                        alert('sukses')
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                       alert('upload foto error')
                    }
                )
        },
        removemenu() {
            alert('yakin?')
           
                
                   
            axios.delete('http://localhost:8000/api/deletemenu/' + this.detailmenu.id_menu)
               .then(
                   (response) => {
                       console.log(response)
                      alert('sukses')
                       setTimeout(() => {
                           location.reload()
                       }, 1200);
                   }
               )
               .catch(
                                (error) => {
                                    console.log(error)
                                   alert('gagal')
                                }
                            )
                     
       
   

},
        }
        }
    
  

</script>