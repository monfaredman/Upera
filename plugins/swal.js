import {swal} from 'vue-swal'

export default (ctx, inject) => {
  ctx.$swal = swal
  inject('swal', swal)
}