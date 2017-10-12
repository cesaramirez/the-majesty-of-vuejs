<template>
  <div>
    <div class="dt tc center mv4">
      <router-link to="/">
        <img src="~@/assets/logo.png" class="dib v-mid h3 dtc-l mr4 hvr-bounce-in">
      </router-link>
      <h1 class="blue f1 fw4 v-mid dtc-l">Vue.js Fundamentals</h1>
    </div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-50 w-25-l pa2" v-for="content in contents">
          <a href="#" class="link">
            <div class="mw5 center bg-white br3 ph3 pv4 ba b--black-10 hvr-grow">
              <div class="tc f4 green h2 hover-green" v-text="content.title"></div>
              <hr class="mw3 bb bw1 b--black-10 mv4">
              <p class="blue h5 lh-copy" v-text="content.description"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          contents: [
            {
              'title': 'Install Vue.js',
              'description': 'When it comes to download Vue.js you have a few options to choose from.',
              'url': ''
            },
            {
              'title': 'Getting Started',
              'description': 'Let’s start with a quick tour of Vue’s data binding features. We’re going to make a simple application that will allow us to enter a message and have it displayed on the page in real time.',
              'url': ''
            },
            {
              'title': 'A Flavor of Directives',
              'description': 'In this chapter we are going through some basic examples of Vue’s directives. Well, if you have not used any Framework like Vue.js or Angular.js before, you probably don’t know what a directive is.',
              'url': ''
            },
            {
              'title': 'List Rendering',
              'description': 'In the fourth chapter of this book, we are going to learn about list rendering.',
              'url': ''
            },
            {
              'title': 'Interactivity',
              'description': 'In this chapter, we are going to create and expand previous examples, learn new things concerning ‘methods’, ‘event handling’ and ‘computed properties’.',
              'url': ''
            },
            {
              'title': 'Filters',
              'description': 'In the two previous chapters we reviewed list rendering, methods, and computed properties. Now it is a good time to make some examples using all the information above.',
              'url': ''
            },
            {
              'title': 'Components',
              'description': 'For this chapter’s exercise you should do the following. Start by creating an array of people. Each person has a name and an age.',
              'url': ''
            },
            {
              'title': 'Custom Events',
              'description': 'Some times it is needed to fire a custom event. To do so, we can use Vue Instance methods. Every Vue instance implements the Events interface.',
              'url': ''
            },
            {
              'title': 'Class and Style Bindings',
              'description': 'A common need for data binding is to manipulate an element’s class and its styles. For such cases, you can use v-bind:class.',
              'url': ''
            }
          ]
        }
      }
    }
</script>
