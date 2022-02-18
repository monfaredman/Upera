export default async function(context) {
	if (process.browser) {
		if(context.app.$auth){
			await context.store.dispatch("SPA_INIT")
		}
	}
}