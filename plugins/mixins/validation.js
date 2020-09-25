import Vue from "vue"
import { mapGetters } from "vuex"

const Validation = {
	install(Vue) {
		Vue.mixin({
			computed: {
				...mapGetters({
					errors: "validation/errors",
					checkuser: "checkuser"
				})
			}
		})
	}
}

Vue.use(Validation)
