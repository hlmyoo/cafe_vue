import Vue from 'vue'
import VueRouter from 'vue-router'
// import DashboardView from '../views/DashboardView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import ManageMenu from '../views/Admin/ManageMenu.vue'
import ManageMeja from '../views/Admin/ManageMeja.vue'
import ManageUser from '../views/Admin/ManageUser.vue'
import KasirHome from '../views/Kasir/KasirHome.vue'
import AddMenu from '../views/Kasir/AddMenu.vue'
import TransaksiPage from '../views/Kasir/TransaksiPage.vue'
import OnGoing from '../views/Kasir/OnGoing.vue'
import HistoryPage from '../views/Kasir/HistoryPage.vue'
import PrintNota from '../views/Kasir/PrintNota.vue'
import AllTransaksi from '../views/Manager/AllTransaksi.vue'
import FilterTransaksi from '../views/Manager/FilterTransaksi.vue'
import ManagerHome from '../views/Manager/ManagerHome.vue'
import ProfitPage from '../views/Manager/ProfitPage.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/Admin',
    name: 'adminhome',
    component: AdminHome
  },
  {
    path: '/AdminMenu',
    name: 'managemenu',
    component: ManageMenu
  },
  {
    path: '/AdminMeja',
    name: 'managemeja',
    component: ManageMeja
  },
  {
    path: '/AdminUser',
    name: 'manageuser',
    component: ManageUser
  },
  {
    path: '/Kasir',
    name: 'kasirhome',
    component: KasirHome
  },
  {
    path: '/KasirMenu',
    name: 'addmenu',
    component: AddMenu
  },
  {
    path: '/KasirTransaksi',
    name: 'transaksipage',
    component: TransaksiPage
  },
  {
    path: '/OnGoing',
    name: 'ongoing',
    component: OnGoing
  },
  {
    path: '/History',
    name: 'historypage',
    component: HistoryPage
  },
  {
    path: '/printnota/:id',
    name: 'printnota',
    component: PrintNota
  },
  {
    path: '/alltransaksi',
    name: 'alltransaksi',
    component: AllTransaksi
  },
  {
    path: '/manager',
    name: 'managerhome',
    component: ManagerHome
  },
  {
    path: '/filtertransaksi',
    name: 'filtertransaksi',
    component: FilterTransaksi
  },
  {
    path: '/profitpage',
    name: 'profitpage',
    component: ProfitPage
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
