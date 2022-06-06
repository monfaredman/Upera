export default function(context) {

	if (process.server) {

		let ip=null

		if(context.req.headers['ar-real-ip'])
			ip = context.req.headers['ar-real-ip']
		else if(context.req.headers['cf-connecting-ip'])
			ip = context.req.headers['cf-connecting-ip']
		else if(context.req.headers['x-forwarded-for'])
			ip = context.req.headers['x-forwarded-for']
		else if(context.req.headers['x_forwarded_for'])
			ip = context.req.headers['x_forwarded_for']
		else if(context.req.headers['X_Forwarded_For'])
			ip = context.req.headers['X_Forwarded_For']
		else if(context.req.headers['X-Forwarded-For'])
			ip = context.req.headers['X-Forwarded-For']
		else
			ip=context.req.connection.remoteAddress || 
		  context.req.socket.remoteAddress || 
		  context.req.connection.socket.remoteAddress

		 //let country = null

		// if(context.req.headers['ar-real-country'])
		// 	country = context.req.headers['ar-real-country'].split(',').pop()
		// else if(context.req.headers['cf-ipcountry'])
		// 	country = context.req.headers['cf-ipcountry'].split(',').pop()


		if(ip){
			context.app.$axios.setHeader('Nuxt_IP', ip)
			context.app.$axios.setHeader('X_FORWARDED_FOR', ip)
			context.app.$axios.setHeader('X-FORWARDED-FOR', ip)
		}

		// if(country)
		// 	context.app.$axios.setHeader('Nuxt_Country', country)

	}

if (context.route.query.ref){
  const num = context.route.query.ref
  const limit = num.length
  if (context.app.$cookiz.get('refb')!=num && limit < 11) {
    context.app.$cookiz.set('refb', num)

    const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var res =  (base + '').indexOf(num.charAt(0), 0)

    var i
    for (i = 1; i < limit; i++) {
      res = 62 * res + (base + '').indexOf(num.charAt(i), 0)
    }

    context.app.$cookiz.set('ref', res)

  }
}



	context.app.$axios.onError(error => {
		if (error.response && error.response.status !== 200) {
				if(error.response.data.errors)
					context.store.dispatch("validation/setErrors", error.response.data.errors)
				else if(error.response.data.message_fa)
					context.store.dispatch("validation/setErrors", error.response.data.message_fa)
				else
					context.store.dispatch("validation/setErrors", error.response.data.message)
		}
		if(error.response && error.response.status === 401){
			context.app.$axios.get('/logout?2').then(response => {
				context.app.$cookiz.removeAll()
				if (process.browser) {
					localStorage.clear()
					location.reload()
				}
				return response
			}, (error) => {
				context.app.$cookiz.removeAll()
				if (process.browser) {
					localStorage.clear()
					location.reload()
				}
          return error
        })
		}
	})

	context.app.$axios.onRequest(() => {
		context.store.dispatch("validation/clearErrors")
	})
}
