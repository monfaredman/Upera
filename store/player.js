export const state = () => ({
        data: [],
        season: [],
        suggestion: [],
        bookmark: [],
        url: [],
        show_report: false,
        filesloading: true,
        showplyrmodal: false,
        showDownloadModal: false,
        next: null,
        next_episode: null,
        next_season: null,
        next_is: null,
        next_playlist: null,
        download_files: [],
        next_episode_playlist: null,
        season_playlist_active: null
})

// getters
export const getters = {
  url(state) {
    return state.url
  },
  suggestion(state) {
    return state.suggestion
  },
  show_report(state) {
    return state.show_report
  },
  next(state) {
    return state.next
  },
  filesloading(state) {
    return state.filesloading
  },
  showplyrmodal(state) {
    return state.showplyrmodal
  },
  showDownloadModal(state) {
    return state.showDownloadModal
  },
  download_files(state) {
    return state.download_files
  }
}


export const actions = {


        /**
         * Get movie vidoe,subtitle,suggestion
         *
         * @param {any} param
         * @param {any} id
         */

        LOAD_MOVIE_PLAYER({commit}, {id, lg_backdrop, md_backdrop,SRMdata}) {
            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=''
            else
              ref='?ref='+ref
            this.$axios.get('/get/watch/movie-hls/' + id + '/1'+ref).then(response => {
                if (response.status === 200) {
                    response.data.data.guest=0
                    commit('SET_MOVIE', {data:response.data.data, lg_backdrop, md_backdrop})
                }
            }, error => {
                // Show Sweetalert if there is problem
                if (error.response.data.status == 'not_free') {


                    var dlsmtitle=this.app.i18n.t('player.error2')
                    if(this.app.i18n.locale=="fa"){
                      dlsmtitle=error.response.data.message_fa
                    }else{
                      dlsmtitle=error.response.data.message
                    }
                    var dlsmbuttons={back: {
                              text: this.app.i18n.t('player.back'),
                              value: "back",
                              closeModal: true,
                              className: 'swal-back'
                            }}

                    if(error.response.data.show_download === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('player.download'),
                              value: "download",
                              closeModal: true
                        }})
                    }
                    if(error.response.data.show_ekran === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('show.buy_ticket'),
                              value: "download",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_subscription === 1){
                        Object.assign(dlsmbuttons, {subscribe: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "subscribe",
                              closeModal: true
                        }})
                    }
                    this.app.$swal({
                          title: dlsmtitle,
                          icon: 'error',
                          dangerMode: true,
                          buttons: dlsmbuttons,
                        })
                        .then((value) => {
                          switch (value) {
                         
                            case "back":
                              
                              (window.history.length > 2) ? this.$router.go(-1) : this.$router.push({ name: 'movie-id' , params: {id: id }})
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break
                         
                            case "subscribe":
                                  this.$router.push({ name: 'change-plan' })
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break

                            case "download":
                            this.$router.push({ name: 'movie-download-id', params: {id: id }, query: { force_to_buy: 1 } })

                              break

                            default:
                              (window.history.length > 2) ? this.$router.go(-1) : this.$router.push({ name: 'movie-id' , params: {id: id }})
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break
                          }
                    })
                }else{
                    this.app.$swal({
                        icon: 'error',
                        title: this.app.i18n.t('player.error1'),
                        dangerMode: true,
                        button: this.app.i18n.t('player.back'),
                    }).then(() => {
                        (window.history.length > 2) ? this.$router.go(-1) : this.$router.push({ name: 'movie-id' , params: {id: id }})
                        //commit('FLOWPLAYER_DESTORY', 'movie')
                    })
                }
            })
            return SRMdata
        },

        LOAD_GHOST_MOVIE_PLAYER({commit}, {id, lg_backdrop, md_backdrop,SRMdata,ekran_unique_id}) {
          var ref=this.$cookiz.get('ref')

            if(ekran_unique_id){
              ekran_unique_id='?ekran_unique_id='+ekran_unique_id

            
            if(!ref || isNaN(ref))
              ref=''
            else
              ref='&ref='+ref
            }else{
              ekran_unique_id=''

            
            if(!ref || isNaN(ref))
              ref=''
            else
              ref='?ref='+ref
            }
            this.$axios.get('/ghost/get/watch/movie-hls/' + id + '/1'+ekran_unique_id+ref).then(response => {
                if (response.status === 200) {
                    response.data.data.guest=1
                    commit('SET_MOVIE', {data:response.data.data, lg_backdrop, md_backdrop})
                }
            }, error => {
                // Show Sweetalert if there is problem
                if (error.response.data.status == 'not_free') {
                    var dlsmtitle=this.app.i18n.t('player.error2')
                    if(this.app.i18n.locale=="fa"){
                      dlsmtitle=error.response.data.message_fa
                    }else{
                      dlsmtitle=error.response.data.message
                    }
                    var dlsmbuttons={back: {
                              text: this.app.i18n.t('player.back'),
                              value: "back",
                              closeModal: true,
                              className: 'swal-back'
                            }}

                    if(error.response.data.show_download === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('player.download'),
                              value: "download",
                              closeModal: true
                        }})
                    }
                    if(error.response.data.show_ekran === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('show.buy_ticket'),
                              value: "download",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_subscription === 1){
                        Object.assign(dlsmbuttons, {signup: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "signup",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_login === 1){
                      Object.assign(dlsmbuttons, {login: {
                            text: this.app.i18n.t('nav.login'),
                            value: "login",
                            closeModal: true
                      }})
                    }



                    this.app.$swal({
                          title: dlsmtitle,
                          icon: 'error',
                          dangerMode: true,
                          buttons: dlsmbuttons,
                        })
                        .then((value) => {
                          switch (value) {
                         
                            case "back":
                              (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'movie-id' , params: {id: id }})
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break
                         
                            case "subscribe":
                                  this.$router.push({ name: 'change-plan-after-signup' })

                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break

                            case "signup":
                              this.$router.push({ name: 'signup-with-plan' })
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break


                            case "login":
                              this.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
                              break

                            case "download":
                              this.$router.push({ name: 'movie-download-id', params: {id: id }, query: { force_to_buy: 1 } })
                              break

                            default:
                              (window.history.length > 2) ? this.$router.go(-1) : this.$router.push({ name: 'movie-id' , params: {id: id }})
                              //commit('FLOWPLAYER_DESTORY', 'movie')
                              break
                          }
                    })
                }else{
                    this.app.$swal({
                        icon: 'error',
                        title: this.app.i18n.t('player.error1'),
                        dangerMode: true,
                        button: this.app.i18n.t('player.back'),
                    }).then(() => {
                        (window.history.length > 2) ? this.$router.go(-1) : this.$router.push({ name: 'movie-id' , params: {id: id }})
                        //commit('FLOWPLAYER_DESTORY', 'movie')
                    })
                }
            })
            return SRMdata
        },
        /**
         *
         * @param {*}  commit
         * @param {uuid,string,uuid}  Array
         */
        LOAD_SERIES_PLAYER({commit}, {episode_id, type, series_id, lg_backdrop,md_backdrop,SRMdata}) {
            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0
            this.$axios.post('/get/watch/series', {
                episode_id: episode_id,
                type: type,
                series_id: series_id,
                hls: 1,
                ref: ref,
            })
                .then(response => {
                    if (response.data.status === 'success') {
                        response.data.data.guest=0
                        commit('SET_SERIES', {data:response.data.data, lg_backdrop, md_backdrop})
                    }
                }, error => {
                    if (error.response.data.status == 'not_free') {
                    var dlsmtitle=this.app.i18n.t('player.error2')
                    if(this.app.i18n.locale=="fa"){
                      dlsmtitle=error.response.data.message_fa
                    }else{
                      dlsmtitle=error.response.data.message
                    }
                    var dlsmbuttons={back: {
                              text: this.app.i18n.t('player.back'),
                              value: "back",
                              closeModal: true,
                              className: 'swal-back'
                            }}

                    if(error.response.data.show_download === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('player.download'),
                              value: "download",
                              closeModal: true
                        }})
                    }
                    if(error.response.data.show_ekran === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('show.buy_ticket'),
                              value: "download",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_subscription === 1){
                        Object.assign(dlsmbuttons, {subscribe: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "subscribe",
                              closeModal: true
                        }})
                    }

                      this.app.$swal({
                            title: dlsmtitle,
                            icon: 'error',
                            dangerMode: true,
                            buttons: dlsmbuttons,
                          })
                          .then((value) => {
                            switch (value) {
                           
                              case "back":
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                              break
                           
                              case "subscribe":
                                  this.$router.push({ name: 'change-plan' })
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break


                              case "download":
                                if(type!='cur'){
                                  this.$router.push({ name: 'episode-download-id', params: {id: episode_id }, query: { force_to_buy: 1 } })
                                }else{
                                  this.$router.push({ name: 'episode-download-id', params: {id: error.response.data.episode_id }, query: { force_to_buy: 1 } })
                                }
                                break

                              default:
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break
                            }
                      })
                    }else{
                        this.app.$swal({
                            icon: 'error',
                            title: this.app.i18n.t('player.error1'),
                            dangerMode: true,
                            button: this.app.i18n.t('player.back'),
                        }).then(() => {
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                            //commit('FLOWPLAYER_DESTORY', 'series')
                        })
                    }
                })
return SRMdata
        },
        LOAD_GHOST_SERIES_PLAYER({commit}, {episode_id, type, series_id, lg_backdrop,md_backdrop,SRMdata}) {
                      var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0
            this.$axios.post('/ghost/get/watch/series', {
                episode_id: episode_id,
                type: type,
                series_id: series_id,
                hls: 1,
                ref: ref
            })
                .then(response => {
                    if (response.data.status === 'success') {
                        response.data.data.guest=1
                        commit('SET_SERIES', {data:response.data.data, lg_backdrop, md_backdrop})
                    }
                }, error => {
                    if (error.response.data.status == 'not_free') {
                    var dlsmtitle=this.app.i18n.t('player.error2')
                    if(this.app.i18n.locale=="fa"){
                      dlsmtitle=error.response.data.message_fa
                    }else{
                      dlsmtitle=error.response.data.message
                    }
                    var dlsmbuttons={back: {
                              text: this.app.i18n.t('player.back'),
                              value: "back",
                              closeModal: true,
                              className: 'swal-back'
                            }}

                    if(error.response.data.show_download === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('player.download'),
                              value: "download",
                              closeModal: true
                        }})
                    }
                    if(error.response.data.show_ekran === 1){
                        Object.assign(dlsmbuttons, {download: {
                              text: this.app.i18n.t('show.buy_ticket'),
                              value: "download",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_subscription === 1){
                        Object.assign(dlsmbuttons, {signup: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "signup",
                              closeModal: true
                        }})
                    }

                    if(error.response.data.show_login === 1){
                      Object.assign(dlsmbuttons, {login: {
                            text: this.app.i18n.t('nav.login'),
                            value: "login",
                            closeModal: true
                      }})
                    }

                      this.app.$swal({
                            title: dlsmtitle,
                            icon: 'error',
                            dangerMode: true,
                            buttons: dlsmbuttons,
                          })
                          .then((value) => {
                            switch (value) {
                           
                              case "back":
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break
                           
                              case "subscribe":
                                  this.$router.push({ name: 'change-plan-after-signup' })

                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break

                              case "signup":
                                this.$router.push({ name: 'signup-with-plan' })
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break


                              case "login":
                                this.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
                                break

                              case "download":
                                if(type!='cur'){
                                  this.$router.push({ name: 'episode-download-id', params: {id: episode_id }, query: { force_to_buy: 1 } })
                                }else{
                                  this.$router.push({ name: 'episode-download-id', params: {id: error.response.data.episode_id }, query: { force_to_buy: 1 } })
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break

                              default:
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                                break
                            }
                      })
                    }else{
                        this.app.$swal({
                            icon: 'error',
                            title: this.app.i18n.t('player.error1'),
                            dangerMode: true,
                            button: this.app.i18n.t('player.back'),
                        }).then(() => {
                                if(type!='cur'){
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: episode_id }})
                                }else{
                                  (window.history.length > 2) ? this.$router.go(-1) :this.$router.push({ name: 'episode-id' , params: {id: error.response.data.episode_id }})
                                }
                                //commit('FLOWPLAYER_DESTORY', 'series')
                        })
                    }
                })

            return SRMdata
        },
        /**
         *  Tv
         *
         * @param commit
         * @param id
         * @constructor
         */
        LOAD_TV({commit}, {id,SRMdata}) {
            this.$axios.get('/get/watch/tv/' + id)
                .then(res => {
                    if (res.status === 200) {
                        res.data.data.guest=0
                        commit('SET_DATA_PLAYER_TV',  res.data.data)
                    }
                }, error => {
                  if (error.response.data.status == 'not_free') {
                      var dlsmtitle=this.app.i18n.t('player.error2')
                      if(!SRMdata.subscription){
                        dlsmtitle=this.app.i18n.t('player.error6')
                      }
                      var dlsmbuttons={back: {
                                text: this.app.i18n.t('player.back'),
                                value: "back",
                                closeModal: true,
                                className: 'swal-back'
                              }}

                      if(SRMdata.subscription){
                          Object.assign(dlsmbuttons, {subscribe: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "subscribe",
                              closeModal: true
                          }})
                      }                      
                      this.app.$swal({
                      title: dlsmtitle,
                      icon: 'error',
                      dangerMode: true,
                      buttons: dlsmbuttons,
                    })
                    .then((value) => {
                      switch (value) {
                     
                        case "back":
                          (window.history.length > 2) ? this.$router.go(-1) :  this.$router.push('/')
                          //commit('FLOWPLAYER_DESTORY', 'tv')
                          break
                     
                        case "subscribe":
                                  this.$router.push({ name: 'change-plan' })
                          //commit('FLOWPLAYER_DESTORY', 'tv')
                          break
                     
                        default:
                          (window.history.length > 2) ? this.$router.go(-1) :  this.$router.push('/')
                          //commit('FLOWPLAYER_DESTORY', 'tv')
                          break
                      }
                    })
                  } else {
                    // Show Sweetalert if there is problem
                    this.app.$swal({
                        icon: 'error',
                        title: this.app.i18n.t('player.error1'),
                        dangerMode: true,
                        button: this.app.i18n.t('player.back'),
                    }).then(() => {
                        this.$router.go(-1)
                        //commit('FLOWPLAYER_DESTORY', 'tv')
                    })
                }
            })
        },
        LOAD_GHOST_TV({commit}, {id,SRMdata}) {
            this.$axios.get('/ghost/get/watch/tv/' + id)
                .then(res => {
                    if (res.status === 200) {
                        res.data.data.guest=1
                        commit('SET_DATA_PLAYER_TV',  res.data.data)
                    }
                }, error => {
                  if (error.response.data.status == 'not_free') {
                      var dlsmtitle=this.app.i18n.t('player.error2')
                      if(!SRMdata.subscription){
                        dlsmtitle=this.app.i18n.t('player.error6')
                      }
                      var dlsmbuttons={back: {
                                text: this.app.i18n.t('player.back'),
                                value: "back",
                                closeModal: true,
                                className: 'swal-back'
                              }}

                      if(SRMdata.subscription){
                          Object.assign(dlsmbuttons, {signup: {
                              text: this.app.i18n.t('player.subscribe'),
                              value: "signup",
                              closeModal: true
                          }})
                      }

                      Object.assign(dlsmbuttons, {login: {
                            text: this.app.i18n.t('nav.login'),
                            value: "login",
                            closeModal: true
                          }})

                      this.app.$swal({
                      title: dlsmtitle,
                      icon: 'error',
                      dangerMode: true,
                      buttons: dlsmbuttons,
                    })
                    .then((value) => {
                      switch (value) {
                     
                        case "back":
                          (window.history.length > 2) ? this.$router.go(-1) :  this.$router.push('/')
                          //commit('FLOWPLAYER_DESTORY', 'tv')
                          break
                     

                          case "signup":
                            this.$router.push({ name: 'signup-with-plan' })
                            //commit('FLOWPLAYER_DESTORY', 'tv')
                            break

                          
                          case "login":
                            this.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
                            break
                     
                        default:
                          (window.history.length > 2) ? this.$router.go(-1) :  this.$router.push('/')
                          //commit('FLOWPLAYER_DESTORY', 'tv')
                      }
                    })
                  } else {
                    // Show Sweetalert if there is problem
                    this.app.$swal({
                        icon: 'error',
                        title: this.app.i18n.t('player.error1'),
                        dangerMode: true,
                        button: this.app.i18n.t('player.back'),
                    }).then(() => {
                        this.$router.go(-1)
                        //commit('FLOWPLAYER_DESTORY', 'tv')
                    })
                }
            })
        },




        LOAD_FILE_PLAYER({commit}, {loggedIn,id,type, content, backdrop,block_id,name}) {
            var ref=this.$cookiz.get('ref')
            if(!ref || isNaN(ref))
              ref=0
                var api_url
                if (loggedIn) {
                    api_url='/get/files'
                } else {
                    api_url='/ghost/get/files'
                }
                commit('DOWNLOAD_SPINER_LOAD')
                this.$axios.post(api_url, {
                    id: id,
                    content: content,
                    hls: 1,
                    type: type,
                    ref: ref
                }).then((res) => {
                    if (res.status === 200) {
                        if(content==5){
                            this.lightimages=res.data.data.images
                        }else{
                            commit('PLAYER_MODAL_LOAD')


                            let jwp
                            let titlesm

                            titlesm = name

                            if(content==1)
                                titlesm=this.app.i18n.t('show.trailer')+' '+titlesm
                            else if(content==2)
                                titlesm=this.app.i18n.t('show.watch_backstage')+' | '+titlesm
                            else if(content==3)
                                titlesm=this.app.i18n.t('show.watch_next')+' | '+titlesm
                            else if(content==4)
                                titlesm=this.app.i18n.t('show.watch_musicvideo')+' | '+titlesm
                            else
                                titlesm=this.app.i18n.t('show.watch_images')+' | '+titlesm

                            res.data=res.data.data


                            if(res.data.file.length===0){
                              this.app.$swal('There was a problem playing the video, we will fix it soon.', {
                                icon: "error",
                              })
                              commit('DOWNLOAD_SPINER_CLEAN')
                            }else{
                              commit('PLAYER_DOWNLOAD_FILE',res.data.download)


                              if(this.$device.isTV){
                                  if(res.data.file[0].file.includes("?")){
                                    res.data.file[0].file=res.data.file[0].file+'&app=1'
                                  }else{
                                    res.data.file[0].file=res.data.file[0].file+'?app=1'
                                  }
                              }

  jwp=window.jwplayer(block_id).setup({ 
    "playlist": [
      {
        "file": res.data.file[0].file,
        "title": titlesm,
        "image": backdrop,
        "type": 'hls'
      }
    ],
    "height": "100%",
    "width": "100%",
    "autostart": true
  })




                                jwp.on("setupError", function (e) {
                                  this.app.$swal(e.message, {
                                    icon: "error",
                                  })
                                })
jwp.on('ready', (e) => {


  commit('DOWNLOAD_SPINER_CLEAN')
  return e
})

                            }
                            
                        }


                    }
                }, (error) => {

commit('PLAYER_MODAL_CLEAN')
                    if (error.response.data.status == 'not_free') {

                        var dlsmtitle=this.app.i18n.t('player.error2')
                        if(!this.getters.checkuser.subscription){
                          dlsmtitle=this.app.i18n.t('player.error6')
                        }
                        var dlsmbuttons={back: {
                                  text: this.app.i18n.t('player.back'),
                                  value: "back",
                                  closeModal: true,
                                  className: 'swal-back'
                                }}
                        if(error.response.data.download !== null){
                            dlsmtitle=this.app.i18n.t('player.error3')
                            if(!this.getters.checkuser.subscription){
                              dlsmtitle=this.app.i18n.t('player.error7')
                            }
                            Object.assign(dlsmbuttons, {download: {
                                  text: this.app.i18n.t('player.download'),
                                  value: "download",
                                  closeModal: true
                            }})
                        }
                        if(error.response.data.presale !== 0){
                            if(error.response.data.download !== null){
                                dlsmtitle=this.app.i18n.t('player.error4') + error.response.data.presale
                            }else{
                                dlsmtitle=this.app.i18n.t('player.error5') + error.response.data.presale
                            }
                        }
                        if (loggedIn) {
                            if(error.response.data.presale === 0 && this.getters.checkuser.subscription){
                                Object.assign(dlsmbuttons, {subscribe: {
                                      text: this.app.i18n.t('player.subscribe'),
                                      value: "subscribe",
                                      closeModal: true
                                }})
                            }
                        }else{
                            if(error.response.data.presale === 0 && this.getters.checkuser.subscription){
                                Object.assign(dlsmbuttons, {signup: {
                                      text: this.app.i18n.t('player.subscribe'),
                                      value: "signup",
                                      closeModal: true
                                }})
                            }

                            Object.assign(dlsmbuttons, {login: {
                                  text: this.app.i18n.t('nav.login'),
                                  value: "login",
                                  closeModal: true
                            }})
                        }
                        this.app.$swal({
                              title: dlsmtitle,
                              icon: 'error',
                              dangerMode: true,
                              buttons: dlsmbuttons,
                            })
                            .then((value) => {
                              switch (value) {
                             
                                case "back":
                                  this.app.$swal.close()
                                  break
                             
                                case "subscribe":
                                  this.$router.push({ name: 'change-plan' })
                                  break

                                case "signup":
                                  this.$router.push({ name: 'signup-with-plan' })
                                  break


                                case "login":
                                  this.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
                                  break

                                case "download":
                                  commit('DOWNLOAD_MODAL_LOAD')
                                  break

                                default:
                                  this.app.$swal.close()
                                  break
                              }
                        })
                    }else{
                              this.app.$swal('There was a problem playing the video, we will fix it soon.', {
                                icon: "error",
                              })
                    }
                })

        },


        PLAYER_MODAL_LOAD({commit}) {
            commit('PLAYER_MODAL_LOAD')
            return commit
        },
        PLAYER_MODAL_CLEAN({commit}) {
            commit('PLAYER_MODAL_CLEAN')
            return commit
        },
        DOWNLOAD_MODAL_LOAD({commit}) {
            commit('DOWNLOAD_MODAL_LOAD')
            return commit
        },
        DOWNLOAD_MODAL_CLEAN({commit}) {
            commit('DOWNLOAD_MODAL_CLEAN')
            return commit
        },

}

export const mutations = {

        /**
         * This mutations to set all video details (video resolation,subtitle,suggestion) in videojs player
         *
         * @param {*} state
         * @param {*} data
         */

        SET_MOVIE(state, data) {
            var app=this.app
            state.next = null
            state.suggestion = data.data.suggestion

            // // Check if there is custom caption settting or not
            // // If there is custom setting add stylesheet
            if (localStorage.getItem('caption') !== "" && localStorage.getItem('caption') != "undefined") {

                const parsedCaption = JSON.parse(localStorage.getItem('caption'))
                let css
                if (parsedCaption !== null && parsedCaption !== 'null' && parsedCaption !== undefined) {
                    css = ` .flowplayer .fp-captions p {
                                    color:` + parsedCaption['color'] + ` !important;
                                    background-color: ` + parsedCaption['background-color'] + ` !important;
                                    font-size: ` + parseInt(parsedCaption['font-size']) * 2 + `px;
                                    font-weight: ` + parsedCaption['font-weight'] + `
                                   }`

                } else {
                    css = `.jwplayer .jw-captions .jw-captions-text {
                                    color:#fff !important;
                                    background-color:  transparent !important;
                                    font-size: 35px;
                                    font-weight: 600;
                                   }`
                }
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')

                style.type = 'text/css'
                if (style.styleSheet) {
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }

                head.appendChild(style)
            }
            else {
                let css = ` .jwplayer .jw-captions .jw-captions-text {
                                    color:#fff !important;
                                    background-color:  transparent !important;
                                    font-size: 35px;
                                    font-weight: 600;
                                   }`
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')

                style.type = 'text/css'
                if (style.styleSheet) {
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }

                head.appendChild(style)
            }


            /***********************************/

            // Add Component Before Init Player

            /***********************************/





            /***********************************/

            // Init Player & Set Video and Subtitles

            /***********************************/

            // Get Element of player div


            // Import subtitle to array
            let TextTrack = []
            if (data.data.subtitle !== null) {
                for (var i = 0; i < data.data.subtitle.length; i++) {
                    TextTrack.push(
                        {
                            kind: 'captions',
                            label: data.data.subtitle[i].subtitle_language,
                            file: data.data.subtitle[i].subtitle_name
                        }
                    )
                }
            }

            // Check image backdrop
            let md_backdrop, lg_backdrop

            lg_backdrop = data.data.cdn.lg_backdrop

            var myDiv
            // Check and Sort Vidoe Link
            
            let jwp

                              if(this.$device.isTV){
                                  if(data.data.video[0].video.includes("?")){
                                    data.data.video[0].video=data.data.video[0].video+'&app=1'
                                  }else{
                                    data.data.video[0].video=data.data.video[0].video+'?app=1'
                                  }
                              }

  jwp=window.jwplayer('my-player').setup({ 
    "playlist": [
      {
        "file": data.data.video[0].video,
        "tracks": TextTrack,
        "image": lg_backdrop + data.data.video[0].backdrop,
        "title": (this.app.i18n.locale=="fa" && data.data.video[0].name_fa) ? data.data.video[0].name_fa : data.data.video[0].name,
        "type": 'hls'
      }
    ],
    "height": "100%",
    "width": "100%",
    "displaytitle": true
  })






            /***********************************/

            // 1- Send request recently time of video
            // 2- Check next movie

            /***********************************/


            let RecentlyTime = 200 // Default second


            // Change RecenltyTime in Seeking

            jwp.on("seek", function(e) {
               RecentlyTime = e.offset.toFixed()
            })



            // Send Recently Request
            jwp.on('time', (e) => {


                // Set recently time
                if (e.position.toFixed() == RecentlyTime) {

                    // Plus 5 second
                    RecentlyTime = parseInt(e.position.toFixed()) + 200

                    // Send request
                    if (data.data.guest)
                    this.$axios.post('/ghost/create/watch/movie/recently', {
                        current_time: e.position.toFixed(),
                        duration_time: e.duration.toFixed(),
                        movie_id: data.data.video[0].id,
                    })
                    else
                    this.$axios.post('/create/watch/movie/recently', {
                        current_time: e.position.toFixed(),
                        duration_time: e.duration.toFixed(),
                        movie_id: data.data.video[0].id,
                    })
                }


                // Show Next Moive before 20 Second
                if (parseInt(e.duration.toFixed()) - 100 <= e.position.toFixed()) {
                    var showElement = document.querySelector('.hide-play-next-movie') // bug
                    if (showElement !== null) {
                        showElement.classList.remove('hide-play-next-movie')
                        showElement.classList.add('show-play-next-movie')

                    }
                } else {
                    var hideElement = document.querySelector('.show-play-next-movie') // bug
                    if (hideElement !== null) {
                        hideElement.classList.add('hide-play-next-movie')
                        hideElement.classList.remove('show-play-next-movie')
                    }
                }


                // auto play next movie
                if (parseInt(e.duration.toFixed()) - 4 == e.position.toFixed()) {
                    if(data.data.suggestion !== null) {
                        if(jwp){
                            jwp.remove()
                        }
                        state.next = 'movie'
                    }
                }

                if(RecentlyTime!=200 && e.position.toFixed()-(RecentlyTime-200)>=20){
                    RecentlyTime = e.position.toFixed()
                }

            })

  jwp.on("setupError", function (e) {
    var errorsm=e.message
                this.app.$swal({
                    icon: 'error',
                    title: errorsm,
                    dangerMode: true,
                    button: 'Back',
                }).then(() => {
                        if(jwp){
                            jwp.remove()
                        }
                    var reElement = document.getElementById("my-player")
                    reElement.parentNode.removeChild(reElement)

                    var addElement = document.getElementById("flowplayer-player")

                    addElement.innerHTML = `<div id="my-player" class="fp-full fp-mute fp-edgy flowplayer">

                        </div>`
                        if(window.history.length > 2) 
                         app.router.go(-1) 
                       else
                          app.router.push({ name: 'movie-id' , params: {id: data.data.video[0].id }})

                })
 
  })

            // Add Next Movie Player

            var nextHTML=''


            if (data.data.suggestion !== null) {
                    md_backdrop = data.data.cdn.md_backdrop
                

                
                 nextHTML = `<div id="flowplayer-next-video" class="col-12">
                    <div class="col-12 col-sm-4 col-xl-3 content hide-play-next-movie">
                    
                      <div class="title">
                        <p> <span>` + this.app.i18n.t('player.next') + `</span> ` + ((this.app.i18n.locale=="fa" && data.data.suggestion.name_fa) ? data.data.suggestion.name_fa : data.data.suggestion.name) + `</p> 
                     </div>
                     
                     <div class="backdrop">
                          <img src="` +  md_backdrop + data.data.suggestion.backdrop + `" width="100%">
                     </div>
                     
                     <div class="play-next-movie-button">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve" width="100%" id="play-next-movie" class="play-svg"> <g> <g> <path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392 c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421 S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421 s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> <path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883 l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333 c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029 C113.877,77.926,111.575,77.902,109.699,78.969z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> </g> </g> </svg>
                     </div>
                     
                    </div>
                </div>`





            }else{
               nextHTML=null
            }


            if (!data.data.guest)
              jwp.addButton('/images/player-report.svg', 'Report', function() {state.show_report = true;jwp.pause()}, 'flowplayer-report-button', '')


            // Back Event Listener






            window.jwplayer().on('play', (e) => {
              document.getElementById('my-player').classList.remove( "jw-state-idle" )
              return e
             })
            jwp.on('ready', (e) => {
                if(document.getElementById('my-player')){
                  document.body.classList.add('loaded')
                    document.getElementById('my-player').classList.add( "jw-state-idle" )
                    document.body.classList.add('playerback')
                    document.getElementById('my-player').classList.remove( "jw-flag-aspect-mode" )

                    myDiv = document.createElement("div")
                    
                    myDiv.innerHTML = '<div id="flowplayer-back-button"><div class="icon-back"></div></div>'

                    document.getElementsByClassName("jwplayer")[0].appendChild(myDiv)


                    document.getElementById('flowplayer-back-button').addEventListener('click', () => {
                        if(jwp){
                            jwp.remove()
                        }
                        var reElement = document.getElementById("my-player")
                        reElement.parentNode.removeChild(reElement)

                        var addElement = document.getElementById("flowplayer-player")

                        addElement.innerHTML = `<div id="my-player" class="fp-full fp-mute fp-edgy flowplayer">

                            </div>`

                                                if(window.history.length > 2) 
                         app.router.go(-1) 
                       else
                        app.router.push({ name: 'movie-id' , params: {id: data.data.video[0].id }})
                    })


                    if(this.app.i18n.locale=="fa" && data.data.fullrate !== null){
                      myDiv = document.createElement("span")
                      myDiv.innerHTML = '<div id="flowplayer-rate">حجم مصرفی: <button type="button" class="btn btn-info rounded-pill">'+data.data.fullrate_data.fa.title+'</button></div>'
                      document.getElementsByClassName("jwplayer")[0].appendChild(myDiv)
      
                        if(data.data.fullrate_data.message){
                          const flowplayerRate = document.getElementById('flowplayer-rate')
                          flowplayerRate.addEventListener('click', () => {
                              var dlsmbuttons={back: {
                                text: this.app.i18n.t('player.back'),
                                value: "back",
                                closeModal: true,
                                className: 'swal-back'
                              }}

                              if(data.data.fullrate_data.show_download === 1){
                                  Object.assign(dlsmbuttons, {download: {
                                        text: this.app.i18n.t('player.download'),
                                        value: "download",
                                        closeModal: true
                                  }})
                              }
                              if(data.data.fullrate_data.show_subscription === 1){
                                  Object.assign(dlsmbuttons, {subscribe: {
                                        text: this.app.i18n.t('player.subscribe'),
                                        value: "subscribe",
                                        closeModal: true
                                  }})
                              }
                              this.app.$swal({
                                    title: data.data.fullrate_data.fa.message_title,
                                    text: data.data.fullrate_data.fa.message_desc,
                                    icon: 'error',
                                    dangerMode: true,
                                    buttons: dlsmbuttons,
                                  })
                                  .then((value) => {
                                    switch (value) {
                                   
                                      case "back":
                                        this.app.$swal.close()
                                        break
                                   
                                      case "subscribe":
                                if(data.data.guest)
                                  app.router.push({ name: 'change-plan-after-signup' })
                                else
                                  app.router.push({ name: 'change-plan' })
                                        break


                                      case "download":
                                        app.router.push({ name: 'movie-download-id', params: {id: data.data.video[0].id }, query: { force_to_buy: 1 } })
                                        break

                                      default:
                                        this.app.$swal.close()
                                        break
                                    }
                              })
                            })
                          }
                    }


                    if(nextHTML){
                      myDiv = document.createElement("span")
                      myDiv.innerHTML = nextHTML

                      document.getElementsByClassName( "jw-media" )[0].appendChild(myDiv)
                    
                      const nextMovieButton = document.getElementById('play-next-movie')

                      nextMovieButton.addEventListener('click', () => {
                              if(jwp){
                                  jwp.remove()
                              }
                          state.next = 'movie'
                      })
                    }

                    if (data.data.video[0].current_time !== null) {
                        jwp.seek(data.data.video[0].current_time)
                        jwp.play()
                        RecentlyTime = data.data.video[0].current_time + 200
                    }else{
                      jwp.play()
                    }

                    
                }else{ 
                  jwp.remove()
                }
                return e
            })
        },


        /**
         *
         * @param {*} state
         * @param {*} list
         */
        SET_SERIES(state, data) {
            var app=this.app
            state.data = data.data.episode[0]
            state.season = data.data.season
            state.next_season = null
            state.next_episode = null
            state.next = null
            state.next_is = null
            state.next_playlist = null
            state.season_playlist_active = data.data.episode[0].season_number

            // // Check if there is custom caption settting or not
            // // If there is custom setting add stylesheet
            if (localStorage.getItem('caption') !== "" && localStorage.getItem('caption') != "undefined") {

                const parsedCaption = JSON.parse(localStorage.getItem('caption'))
                let css
                if (parsedCaption !== null && parsedCaption !== 'null' && parsedCaption !== undefined) {
                    css = `.jwplayer .jw-captions .jw-captions-text {
                                    color:` + parsedCaption['color'] + ` !important;
                                    background-color: ` + parsedCaption['background-color'] + ` !important;
                                    font-size: ` + parseInt(parsedCaption['font-size']) * 2 + `px;
                                    font-weight: ` + parsedCaption['font-weight'] + `
                                   }`

                } else {
                    css = `.jwplayer .jw-captions .jw-captions-text {
                                    color:#fff !important;
                                    background-color:  transparent !important;
                                    font-size: 35px;
                                    font-weight: 600;
                                   }`
                }
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')

                style.type = 'text/css'
                if (style.styleSheet) {
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }

                head.appendChild(style)
            }
            else {
                let css = `.jwplayer .jw-captions .jw-captions-text{
                                    color:#fff !important;
                                    background-color:  transparent !important;
                                    font-size: 35px;
                                    font-weight: 600;
                                   }`
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')

                style.type = 'text/css'
                if (style.styleSheet) {
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }

                head.appendChild(style)
            }


            /***********************************/

            // Add Component Before Init Player

            /***********************************/



            /***********************************/

            // Init Player & Set Video and Subtitles

            /***********************************/

            // Get Element of player div



            // Import subtitle to array
            let TextTrack = []
            if (data.data.subtitle !== null) {
                for (var i = 0; i < data.data.subtitle.length; i++) {
                    TextTrack.push(
                        {
                            kind: 'captions',
                            label: data.data.subtitle[i].subtitle_language,
                            file: data.data.subtitle[i].subtitle_name
                        }
                    )
                }
            }


            // Check image backdrop
            let lg_backdrop


            lg_backdrop = data.data.cdn.lg_backdrop

            var myDiv


            // Check and Sort Video Link
            let jwp

                              if(this.$device.isTV){
                                  if(data.data.episode[0].video.includes("?")){
                                    data.data.episode[0].video=data.data.episode[0].video+'&app=1'
                                  }else{
                                    data.data.episode[0].video=data.data.episode[0].video+'?app=1'
                                  }
                              }

  jwp=window.jwplayer('my-player').setup({ 
    "playlist": [
      {
        "file": data.data.episode[0].video,
        "tracks": TextTrack,
        "image": lg_backdrop + data.data.episode[0].backdrop,
        "title": (this.app.i18n.locale=="fa" && data.data.episode[0].name_fa) ? data.data.episode[0].name_fa : data.data.episode[0].name,
        "type": 'hls'
      }
    ],
    "height": "100%",
    "width": "100%",
    "displaytitle": true
  })

            /***********************************/

            // 1- Send request recenlty time of video
            // 2- Check next season and episode

            /***********************************/


            let RecentlyTime = 200 // Default second


            // Change RecenltyTime in Seeking

            jwp.on("seek", function(e) {
               RecentlyTime = e.offset.toFixed()
            })

            if (state.next_episode == null) {
              if(data.data.season.length){
                for (let i = 0; i < data.data.season[data.data.episode[0].season_number].length; i++) {
                    if (data.data.episode[0].episode_number === data.data.season[data.data.episode[0].season_number][i].episode_number) {
                        if ({}.hasOwnProperty.call(data.data.season[data.data.episode[0].season_number], i + 1)) {
                            state.next_episode = data.data.season[data.data.episode[0].season_number][i + 1]
                        } else {
                            state.next_episode = null
                        }
                    }
                }
              }
            }

            if (state.next_season == null) {
                if (data.data.next_season !== null) {
                    state.next_season = data.data.next_season
                }
            }

var nextHTML =''
            if (state.next_episode !== null) {
                     nextHTML = `
                    <div id="flowplayer-next-video" class="col-12"><div class="col-12 col-sm-4 col-xl-3 content hide-play-next-episode" id="play-next-episode">
                    
                      <div class="title">
                        <p> <span>` + this.app.i18n.t('player.play_next_episode') + ` </span> S` + state.next_episode.season_number + `E` + state.next_episode.episode_number + ': ' + ((this.app.i18n.locale=="fa" && state.next_episode.name_fa) ? state.next_episode.name_fa : state.next_episode.name) + `</p> 
                     </div>
                     
                     <div class="backdrop">
                          <img src="`+ data.data.cdn.md_backdrop + state.next_episode.backdrop + `" width="100%" >
                     </div>
                     
                     <div class="play-next-movie-button">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve" width="100%" id="play-next-episode" class="play-svg"> <g> <g> <path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392 c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421 S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421 s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> <path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883 l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333 c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029 C113.877,77.926,111.575,77.902,109.699,78.969z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> </g> </g> </svg>
                     </div>
                     
                    </div></div>
                `


            }
            else if (state.next_season !== null) {

                     nextHTML = `
                    <div id="flowplayer-next-video" class="col-12"><div class="col-12 col-sm-4 col-xl-3 content hide-play-next-episode" id="play-next-season">
                    
                      <div class="title">
                        <p> <span>` + this.app.i18n.t('player.play_next_season') + ` </span> S` + state.next_season.season_number + `E` + state.next_season.episode_number + ': ' + ((this.app.i18n.locale=="fa" && state.next_season.name_fa) ? state.next_season.name_fa : state.next_season.name) + `</p> 
                     </div>
                     
                     <div class="backdrop">
                          <img src="` + data.data.cdn.md_backdrop + state.next_season.backdrop + `" width="100%" >
                     </div>
                     
                     <div class="play-next-movie-button">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve" width="100%" id="play-next-season" class="play-svg"> <g> <g> <path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392 c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421 S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421 s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> <path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883 l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333 c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029 C113.877,77.926,111.575,77.902,109.699,78.969z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff" /> </g> </g> </svg>
                     </div>
                     
                    </div></div>
                `
            } else {
                 nextHTML=null
            }

            // Check Recently
            window.jwplayer().on('play', (e) => {
              document.getElementById('my-player').classList.remove( "jw-state-idle" )
              return e
             })
            jwp.on('ready', (e) => {
               if(document.getElementById('my-player')){
document.body.classList.add('loaded')
                    document.getElementById('my-player').classList.add( "jw-state-idle" )
                    document.body.classList.add('playerback')
                    document.getElementById('my-player').classList.remove( "jw-flag-aspect-mode" )

                    myDiv = document.createElement("div")
                    myDiv.innerHTML = '<div id="flowplayer-back-button"><div class="icon-back"></div></div>'
                    document.getElementsByClassName( "jwplayer" )[0].appendChild(myDiv)


                    document.getElementById('flowplayer-back-button').addEventListener('click', () => {
                        if(jwp){
                            jwp.remove()
                        }
                        var reElement = document.getElementById("my-player")
                        reElement.parentNode.removeChild(reElement)

                        var addElement = document.getElementById("flowplayer-player")

                        addElement.innerHTML = `<div id="flowplayer-playlist" class="col-6 col-md-4 col-xl-3"></div>
                        <div id="my-player" class="fp-full fp-mute fp-edgy flowplayer">

                            </div>`
                                                if(window.history.length > 2) 
                         app.router.go(-1) 
                       else
                        app.router.push({ name: 'episode-id' , params: {id: data.data.episode[0].id }})
                    })


                    if(this.app.i18n.locale=="fa" && data.data.fullrate !== null){
                      myDiv = document.createElement("span")
                      myDiv.innerHTML ='<div id="flowplayer-rate">حجم مصرفی: <button type="button" class="btn btn-info rounded-pill">'+data.data.fullrate_data.fa.title+'</button></div>'
                      document.getElementsByClassName( "jwplayer" )[0].appendChild(myDiv)
      
                        if(data.data.fullrate_data.message){
                          const flowplayerRate = document.getElementById('flowplayer-rate')
                          flowplayerRate.addEventListener('click', () => {
                              var dlsmbuttons={back: {
                                text: this.app.i18n.t('player.back'),
                                value: "back",
                                closeModal: true,
                                className: 'swal-back'
                              }}

                              if(data.data.fullrate_data.show_download === 1){
                                  Object.assign(dlsmbuttons, {download: {
                                        text: this.app.i18n.t('player.download'),
                                        value: "download",
                                        closeModal: true
                                  }})
                              }
                              if(data.data.fullrate_data.show_subscription === 1){
                                  Object.assign(dlsmbuttons, {subscribe: {
                                        text: this.app.i18n.t('player.subscribe'),
                                        value: "subscribe",
                                        closeModal: true
                                  }})
                              }
                              this.app.$swal({
                                    title: data.data.fullrate_data.fa.message_title,
                                    text: data.data.fullrate_data.fa.message_desc,
                                    icon: 'error',
                                    dangerMode: true,
                                    buttons: dlsmbuttons,
                                  })
                                  .then((value) => {
                                    switch (value) {
                                   
                                      case "back":
                                        this.app.$swal.close()
                                        break
                                   
                                      case "subscribe":
                                if(data.data.guest)
                                  app.router.push({ name: 'change-plan-after-signup' })
                                else
                                  app.router.push({ name: 'change-plan' })
                                        break

                                      case "download":
                                      app.router.push({ name: 'episode-download-id', params: {id: data.data.episode[0].id }, query: { force_to_buy: 1 } })

                                        break

                                      default:
                                        this.app.$swal.close()
                                        break
                                    }
                              })
                            })
                          }
                        
                    }

                    if(nextHTML){
                      myDiv = document.createElement("span")
                      myDiv.innerHTML = nextHTML
                      document.getElementsByClassName("jw-media")[0].appendChild(myDiv)
    
                        if (state.next_episode !== null) {
                            const nextEpisodeButton = document.getElementById('play-next-episode')
                        
                            nextEpisodeButton.addEventListener('click', () => {
                                if(jwp){
                                    jwp.remove()
                                }
                                state.next_is = 'episode'
                            })
                        }else{
                            const nextSeasonButton = document.getElementById('play-next-season')

                            nextSeasonButton.addEventListener('click', () => {
                                if(jwp){
                                    jwp.remove()
                                }
                                state.next_is = 'season'
                            })
                        }

                     
                    }



  var outerDiv = document.getElementById('flowplayer-playlist')
  var innerDiv = document.getElementsByClassName('jwplayer')[0]

  innerDiv.appendChild(outerDiv)


  

                    if (data.data.episode[0].current_time !== null) {
                        jwp.seek(data.data.episode[0].current_time)
                        jwp.play()
                        RecentlyTime = data.data.episode[0].current_time + 200
                    }else{
                      jwp.play()
                    }
                }else{ 
                    jwp.remove()
                }
                return e
            })

            // Send Recently Request
            jwp.on('time', (e) => {


                // Set recently time
                if (e.position.toFixed() == RecentlyTime) {

                    // Plus 5 second
                    RecentlyTime = parseInt(e.position.toFixed()) + 200

                    // Send request
                    if (data.data.guest)
                    this.$axios.post('/ghost/create/watch/series/recently', {
                        current_time: e.position.toFixed(),
                        duration_time: e.duration.toFixed(),
                        episode_id: data.data.episode[0].id,
                        series_id: data.data.episode[0].series_id
                    })
                    else
                    this.$axios.post('/create/watch/series/recently', {
                        current_time: e.position.toFixed(),
                        duration_time: e.duration.toFixed(),
                        episode_id: data.data.episode[0].id,
                        series_id: data.data.episode[0].series_id
                    })
                }


                // Show Next Moive before 100 Second
                if (parseInt(e.duration.toFixed()) - 100 <= e.position.toFixed()) {
                    var showSeElement = document.querySelector('.hide-play-next-episode') // bug
                    if (showSeElement !== null) {
                        showSeElement.classList.remove('hide-play-next-episode')
                        showSeElement.classList.add('show-play-next-episode')
                    }
                } else {
                    var hideElement = document.querySelector('.show-play-next-episode') // bug
                    if (hideElement !== null) {
                        hideElement.classList.add('hide-play-next-episode')
                        hideElement.classList.remove('show-play-next-episode')
                    }
                }


                // Auto play next movie
                if (parseInt(e.duration.toFixed()) - 3 <= e.position.toFixed()) {

                    if (state.next_episode !== null) {
                        if(jwp){
                            jwp.remove()
                        }
                        state.next = 'episode'
                    } else if (state.next_season !== null) {
                        if(jwp){
                            jwp.remove()
                        }
                        state.next = 'season'

                    }

                }

            })


          jwp.on("setupError", function (e) {
            var errorsm=e.message
                        this.app.$swal({
                            icon: 'error',
                            title: errorsm,
                            dangerMode: true,
                            button: 'Back',
                        }).then(() => {
                            if(jwp){
                                jwp.remove()
                            }
                            var reElement = document.getElementById("my-player")
                            reElement.parentNode.removeChild(reElement)

                            var addElement = document.getElementById("flowplayer-player")

                            addElement.innerHTML = `<div id="flowplayer-playlist" class="col-6 col-md-4 col-xl-3"></div>
                            <div id="my-player" class="fp-full fp-mute fp-edgy flowplayer custom-subtitles fp-custom-playlist">


                    </div>`
                                                    if(window.history.length > 2) 
                         app.router.go(-1) 
                       else
                        app.router.push({ name: 'episode-id' , params: {id: data.data.episode[0].id }})

                        })
         
          })
            /***********************************/

            // Create Season Playlist

            /***********************************/


            if(data.data.season.length !== 0) {

                var seasonComponent = document.getElementById("flowplayer-playlist")


                let seasonOpened = data.data.episode[0].season_number

                var playlistComponentRender


                playlistComponentRender = function () {
                    let seasonList = ``
                    for (let key in state.season) {
                        if ({}.hasOwnProperty.call(state.season, key)) {
                            if (seasonOpened == key) {
                                seasonList += `<button class="season-toggle-btn active noselect" id="` + key + `">` + key + `</button>`
                            } else {
                                seasonList += `<button class="season-toggle-btn noselect" id="` + key + `">` + key + `</button>`
                            }
                        }
                    }

                    let episodeList = ``
                    for (let index = 0; index < state.season[seasonOpened].length; index++) {

                        if (data.data.episode[0].id == state.season[seasonOpened][index].id) {

                            episodeList += `<a class="list-group-item active list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">قسمت ` + state.season[seasonOpened][index].episode_number + `</h5>
      <small>` + state.season[seasonOpened][index].season_number + `</small>
    </div>
    <p class="mb-1">` + ((app.i18n.locale=="fa" && state.season[seasonOpened][index].overview_fa) ? state.season[seasonOpened][index].overview_fa : state.season[seasonOpened][index].overview) + `</p>

  </a>`

                        } else {

                            episodeList += `<a id="` + state.season[seasonOpened][index].id + `" class="list-group-item playlist-play-button list-group-item-action flex-column align-items-start">
    <div id="` + state.season[seasonOpened][index].id + `" class="d-flex w-100 justify-content-between">
      <h5 id="` + state.season[seasonOpened][index].id + `" class="mb-1">قسمت ` + state.season[seasonOpened][index].episode_number + `</h5>
      <small id="` + state.season[seasonOpened][index].id + `"class="d-none d-sm-block">` + state.season[seasonOpened][index].season_number + `</small>
    </div>
    <p id="` + state.season[seasonOpened][index].id + `" class="mb-1 d-none d-sm-block">` + ((app.i18n.locale=="fa" && state.season[seasonOpened][index].overview_fa) ? state.season[seasonOpened][index].overview_fa : state.season[seasonOpened][index].overview) + `</p>

  </a>`
                        }
                    }
                                                         // <p class="d-none d-sm-block" id="` + state.season[seasonOpened][index].id + `">` + ((app.i18n.locale=="fa" && state.season[seasonOpened][index].overview_fa) ? state.season[seasonOpened][index].overview_fa : state.season[seasonOpened][index].overview) + `</p>


                    // Add component
                    seasonComponent.innerHTML = `<div class="playlist-content"> <div class="season-list">` + seasonList + `</div>` + `<div class="list-group">` + episodeList + `</div></div> <div id="toggle-playlist-button"><div class="toggle-playlist-icon"></div></div> `

                }

                playlistComponentRender()

                // Event Listener To Change Episode

                var playEpisode
                playEpisode = function(e) {
                    if(jwp){
                        jwp.remove()
                    }
                    app.router.push({ name: 'episode-show-id' , params: {id: e.target.id }})

                }


                const playEpisodeButton = document.querySelectorAll('.playlist-play-button')

                for (let i = 0; i < playEpisodeButton.length; i++) {
                    playEpisodeButton[i].addEventListener('click', playEpisode, false)
                }



                // Event Listener To Change Season
                var setSeason
                setSeason = function(e) {
                    seasonOpened = e.target.id
                    state.season_playlist_active =  e.target.id
                    playlistComponentRender()

                    // Re-set Event Listener for season/episode
                    const seasonButton = document.getElementsByClassName('season-toggle-btn')
                    for (let i = 0; i < seasonButton.length; i++) {
                        seasonButton[i].addEventListener('click', setSeason, false)
                    }


                    const playEpisodeButton = document.getElementsByClassName('playlist-play-button')
                    for (let i = 0; i < playEpisodeButton.length; i++) {
                        playEpisodeButton[i].addEventListener('click', playEpisode, false)
                    }

                }

                const seasonButton = document.getElementsByClassName('season-toggle-btn')

                for (let i = 0; i < seasonButton.length; i++) {
                    seasonButton[i].addEventListener('click', setSeason, false)
                }



                jwp.addButton('/images/flowplayer-playlist.svg', 'Play List', function() {seasonComponent.classList.toggle("show");if(document.getElementById("flowplayer-playlist").classList.contains("show")){jwp.pause()}else{jwp.play()}}, 'flowplayer-playlist-button', '')


            }


            // Event Listener Open Report

            if (!data.data.guest)
              jwp.addButton('/images/player-report.svg', 'Report', function() {state.show_report = true;jwp.pause()}, 'flowplayer-report-button', '')


        },


        SET_DATA_PLAYER_TV(state, data) {
            var app=this.app
            state.data = data

            /***********************************/

            // Add Component Before Init Player

            /***********************************/


            // Get Element of player div


            // Check and Sort Vidoe Link
            let jwp

            
                              if(this.$device.isTV){
                                  if(state.data.video[0].streaming_url.includes("?")){
                                    state.data.video[0].streaming_url=state.data.video[0].streaming_url+'&app=1'
                                  }else{
                                    state.data.video[0].streaming_url=state.data.video[0].streaming_url+'?app=1'
                                  }
                              }

  jwp=window.jwplayer('my-player').setup({
    "playlist": [
      {
        "file": state.data.video[0].streaming_url,
        "type": 'hls'
      }
    ],
    "height": "100%",
    "width": "100%",
    "autostart": true
  })


            jwp.on('ready', (e) => {
              
               if(!document.getElementById('my-player')){
                document.body.classList.add('loaded')
                  if(jwp){
                      jwp.remove()
                  }
                }else{ 
                  jwp.remove()
                }
                return e
            })

  jwp.on("setupError", function (e) {
    var errorsm=e.message
                this.app.$swal({
                    icon: 'error',
                    title: errorsm,
                    dangerMode: true,
                    button: 'Back',
                }).then(() => {
                        if(jwp){
                            jwp.remove()
                        }
                    var reElement = document.getElementById("my-player")
                    reElement.parentNode.removeChild(reElement)

                    var addElement = document.getElementById("flowplayer-player")

                    addElement.innerHTML = `<div id="my-player" class="fp-full fp-mute fp-edgy flowplayer">

                        </div>`
                    app.router.go(-1)

                })
 
  })


              jwp.addButton('/images/player-report.svg', 'Report', function() {state.show_report = true;jwp.pause()}, 'flowplayer-report-button', '')



        },

        CLOSE_REPORT(state) {
            state.show_report = false
            if(window.jwplayer("my-player"))
                window.jwplayer("my-player").play()
        },

        DOWNLOAD_SPINER_LOAD(state) {
            state.filesloading = true
        },

        DOWNLOAD_SPINER_CLEAN(state) {
            state.filesloading = false
        },

        PLAYER_MODAL_LOAD(state) {
            state.showplyrmodal = true
        },

        PLAYER_MODAL_CLEAN(state) {
            state.showplyrmodal = false
           var playersm=window.jwplayer('my-files-player')
            if(document.getElementById('my-files-player') && playersm){
                playersm.remove()
            }
        },
        DOWNLOAD_MODAL_LOAD(state) {
            state.showDownloadModal = true
        },

        DOWNLOAD_MODAL_CLEAN(state) {
            state.showDownloadModal = false

        },
        PLAYER_DOWNLOAD_FILE(state,data) {
            state.download_files = data
        }



}


