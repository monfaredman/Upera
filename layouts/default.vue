<template>
  <div class="srmrtl">
    <div class="default">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
export default {
  components: {
    Header,
    Footer,
  },
    mounted() {
      !function () { function t() { var t = document.createElement("script"); t.type = "text/javascript", t.async = !0, localStorage.getItem("rayToken") ? t.src = "https://app.raychat.io/scripts/js/" + o + "?rid=" + localStorage.getItem("rayToken") + "&href=" + window.location.href : t.src = "https://app.raychat.io/scripts/js/" + o; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e) } var e = document, a = window, o = "0631e113-eac6-4d10-8085-0a7e4fd1517a"; "complete" == e.readyState ? t() : a.attachEvent ? a.attachEvent("onload", t) : a.addEventListener("load", t, !1) }()
window.onscroll = function () {
   
    
    const tabBar = this.document.getElementById('tab-bar')
    const raychatBtn = this.document.getElementById('raychatBtn')
    if (this.oldScroll > this.scrollY) {
        tabBar.classList.add('show')
        if(raychatBtn)
        raychatBtn.classList.add('raychatBtn_hide')
    } else {
        tabBar.classList.remove('show')
        if(raychatBtn)
        raychatBtn.classList.remove('raychatBtn_hide')
        
    }
    this.oldScroll = this.scrollY
}
}
}
</script>
