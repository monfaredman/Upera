export default function(context) {

	if (process.server) {

		let ip=null

		if(context.req.headers['HTTP_X_FORWARDED_FOR'])
			ip = context.req.headers['HTTP_X_FORWARDED_FOR'].split(',').pop()
		else if(context.req.headers['HTTP_CF_CONNECTING_IP'])
			ip = context.req.headers['HTTP_CF_CONNECTING_IP'].split(',').pop()
		else
			ip=context.req.connection.remoteAddress || 
		  context.req.socket.remoteAddress || 
		  context.req.connection.socket.remoteAddress

		 let country = null

		if(context.req.headers['HTTP_AR_REAL_COUNTRY'])
			country = context.req.headers['HTTP_AR_REAL_COUNTRY'].split(',').pop()
		else if(context.req.headers['HTTP_CF_IPCOUNTRY'])
			country = context.req.headers['HTTP_CF_IPCOUNTRY'].split(',').pop()

		if(ip)
			context.app.$axios.setHeader('Nuxt_IP', ip)

		if(country)
			context.app.$axios.setHeader('Nuxt_Country', country)
	}

	context.app.$axios.onError(error => {
		if (error.response.status !== 200) {
			if(error.response) {
				if(error.response.data.errors)
					context.store.dispatch("validation/setErrors", error.response.data.errors)
				else if(error.response.data.message_fa)
					context.store.dispatch("validation/setErrors", error.response.data.message_fa)
				else
					context.store.dispatch("validation/setErrors", error.response.data.message)
			}
		}
	})

	context.app.$axios.onRequest(() => {
		context.store.dispatch("validation/clearErrors")
	})
}
