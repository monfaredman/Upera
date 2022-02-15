export default function(context) {
	if (process.browser) {
		if(context.app.$auth){
			context.store.dispatch("SPA_INIT")
		}
	}
}