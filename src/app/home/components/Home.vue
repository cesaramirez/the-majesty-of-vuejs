<template>
  <div>
      <div class="dt tc center mv4">
        <img src="~@/assets/logo.png" class="dib v-mid h4 dtc mr4">
        <h1 class="blue f-subheadline v-mid dtc">The Majesty of Vue.js</h1>
      </div>
      <div class="mw8 w80 tc dib">
        <p class="f5 lh-copy">This Site is based in the book The Majesty of VueJs, will guide you through the path of the rapidly spreading Javascript Framework called Vue.js!</p>
        <div>
          <h2 class="f2">About the Book</h2>
          <p class="lh-copy">This book is written in an informal, intuitive, and easy-to-follow format, wherein all examples are appropriately detailed enough to provide adequate guidance to everyone.</p>
          <p class="lh-copy">We’ll start from the very basics and through many examples we’ll cover the most significant features of Vue.js. By the end of this book, you will be able to create fast front end applications and increase the performance of your existing projects with Vue.js 2 integration.</p>
        </div>

        <h2 class="f2 blue">Contents</h2>
        <div class="cf">
          <router-link to="introduction" class="link green f3 pb5 fl w-100 w-50-l v-mid hover-blue">
              <span class="icon-introduction f2 v-mid mr3"></span>Introduction
          </router-link>
          <router-link to="fundamentals" class="link green f3 pb5 fl w-100 w-50-l v-mid hover-blue">
            <span class="icon-fundamentals f2 v-mid mr3"></span>Vue.js Fundamentals
          </router-link>
          <router-link to="api" class="link green f3 pb5 fl w-100 w-50-l v-mid hover-blue">
            <span class="icon-api f2 v-mid mr3"></span>Consuming an API
          </router-link>
          <router-link to="applications" class="link green f3 pb5 fl w-100 w-50-l v-mid hover-blue">
            <span class="icon-applications f2 v-mid mr3"></span>Building Large-Scale Applications
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
