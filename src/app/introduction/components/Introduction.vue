<template>
  <div>
    <div class="dt tc center mv4">
      <router-link to="/">
        <img src="~@/assets/logo.png" class="dib v-mid h3 dtc-l mr4">
      </router-link>
      <h1 class="blue f1 fw4 v-mid dtc-l">Introduction /</h1>
      <h2 class="green f2 fw4 v-mid dtc-l db">About Vue.js</h2>
    </div>
    <div class="mt5 mw8 center ph4-ns">
        <h3 class="f3 tl fw6">Vue.js Overview</h3>
        <p class="tj lh-copy">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and <a :href="libraries" target="_blank" class="link green hover-blue">supporting libraries.</a></p>
        <p class="tj lh-copy">If you are an experienced frontend developer and you want to know how Vue.js compares to other libraries/frameworks, check out the Comparison with Other Frameworks chapter.</p>
        <p class="tj lh-copy">If you are interested to learn more information about Vue.js’ core take a look at <a :href="guide" class="link green hover-blue">Vue.js official guide.</a></p>
      <hr class="mw4 bb b--blue left mv4">
      <h3 class="f3 tl fw6">Comparison with Other Frameworks</h3>
      <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-50 w-25-l pa2">
            <a href="#" @click.prevent="show('angularjs')">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba"
                  :class="techs.angularjs ? 'b--green': 'b--black-10'">
                <div class="tc">
                  <img src="/static/logos/angular-js.svg" class="h4-l h3 dib" title="Angular 1">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#" @click.prevent="show('angular')">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba"
                  :class="techs.angular ? 'b--green': 'b--black-10'">
                <div class="tc">
                  <img src="/static/logos/angular.png" class="h4-l h3 dib" title="Angular 2">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#" @click.prevent="show('react')">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba"
                  :class="techs.react ? 'b--green': 'b--black-10'">
                <div class="tc">
                  <img src="/static/logos/react.svg" class="h4-l h3 dib" title="React">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#" @click.prevent="show('ember')">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba"
                  :class="techs.ember ? 'b--green': 'b--black-10'">
                <div class="tc">
                  <img src="/static/logos/ember.png" class="h4-l h3 dib" title="Ember">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#polymer" @click.prevent="show('polymer')">
              <div class="mw5 center bg-white br3 pv3 pv4-ns mv3 ba"
                  :class="techs.polymer ? 'b--green': 'b--black-10'">
                <div class="tc">
                  <img src="/static/logos/polymer.png" class="h4-l h3 dib" title="Polymer">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#tech">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/knockout.svg" class="h4-l h3 dib" title="Knockout">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-50 w-25-l pa2">
            <a href="#tech">
              <div class="mw5 center bg-white br3 pv3 ph1 pv4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/riot.png" class="h4-l h3 dib" title="Riot">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <article class="mw8 center bg-white br3 pa4 pa4-ns ma3 ba b--black-10" v-if="techs.angularjs" id="tech">
          <div class="tc">
            <img src="/static/logos/angular-js.svg" class="h4 dib" title="Angular 1">
            <h3 class="f3">Angular 1</h3>
          </div>
          <p class="lh-copy center f5 black-70 tl tj">Some of Vue’s syntax will look very similar to Angular (e.g. v-if vs ng-if). This is because there were a lot of things that Angular got right and these were an inspiration for Vue very early in its development. There are also many pains that come with Angular however, where Vue has attempted to offer a significant improvement.</p>
          <hr class="mw3 bb bw1 b--black-10">
          <h4 class="f4 fw6">Complexity</h4>
          <p class="lh-copy f5 black-70 tl tj">Vue is much simpler than Angular 1, both in terms of API and design. Learning enough to build non-trivial applications typically takes less than a day, which is not true for Angular 1.</p>
          <hr class="mw3 bb bw1 b--black-10">
          <h4 class="f4">Flexibility and Modularity</h4>
          <p class="lh-copy f5 black-70 tl tj">Angular 1 has strong opinions about how your applications should be structured, while Vue is a more flexible, modular solution. That’s why a Webpack template3 is provided, that can set you up within minutes, while also granting you access to advanced features such as hot module reloading, linting, CSS extraction, and much more.</p>
          <hr class="mw3 bb bw1 b--black-10">
          <h4 class="f4">Data binding</h4>
          <p class="lh-copy f5 black-70 tl tj">Angular 1 uses two-way binding between scopes, while Vue enforces a one-way data flow between components. This makes the flow of data easier to reason about in non-trivial applications.</p>
          <hr class="mw3 bb bw1 b--black-10">
          <h4 class="f4">Directives vs Components</h4>
          <p class="lh-copy f5 black-70 tl tj">Vue has a clearer separation between directives and components. Directives are meant to encapsulate DOM manipulations only, while components are self-contained units that have their own view and data logic. In Angular, there’s a lot of confusion between the two.</p>
          <hr class="mw3 bb bw1 b--black-10">
          <h4 class="f4">Performance</h4>
          <p class="lh-copy f5 black-70 tl tj">Vue has better performance and is much, much easier to optimize because it doesn’t use dirty checking. Angular 1 becomes slow when there are a lot of watchers, because every time anything in the scope changes, all these watchers need to be re-evaluated again. Also, the digest cycle may have to run multiple times to “stabilize” if some watcher triggers another update. Angular users often have to resort to esoteric techniques to get around the digest cycle, and in some situations, there’s simply no way to optimize a scope with many watchers.</p>
          <p class="lh-copy f5 black-70 tl tj">Vue doesn’t suffer from this at all because it uses a transparent dependency-tracking observation system with async queueing - all changes trigger independently unless they have explicit depen- dency relationships.
            Interestingly, there are quite a few similarities in how Angular 2 and Vue are addressing these Angular 1 issues.</p>
          </article>
      </transition>
      <transition name="fade" mode="out-in">
        <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" v-if="techs.angular" id="tech">
        <div class="tc">
          <img src="/static/logos/angular.png" class="h4 dib" title="Angular 2">
          <h3 class="f3">Angular 2</h3>
        </div>
        <p class="lh-copy center f5 black-70 tl tj">There is a separate section for Angular 2 because it really is a completely new framework. For example, it features a first-class component system, many implementation details have been completely rewritten, and the API has also changed quite drastically.</p>
        <hr class="mw3 bb bw1 b--black-10">
        <h4 class="f4 fw6">Size and Performance</h4>
        <p class="lh-copy f5 black-70 tl tj">In terms of performance, both frameworks are exceptionally fast and there isn’t enough data from real world use cases to make a verdict. However if you are determined to see some numbers, Vue 2.0 seems to be ahead of Angular 2 according to this 3rd party benchmark.</p>
        <p class="lh-copy f5 black-70 tl tj">Size wise, although Angular 2 with offline compilation and tree-shaking is able to get its size down considerably, a full-featured Vue 2.0 with compiler included (23kb) is still lighter than a tree-shaken bare-bone example of Angular 2 (50kb).</p>
        <hr class="mw3 bb bw1 b--black-10">
        <h4 class="f4">Flexibility</h4>
        <p class="lh-copy f5 black-70 tl tj">Vue is much less opinionated than Angular 2, offering official support for a variety of build systems, with no restrictions on how you structure your application. Many developers enjoy this freedom, while some prefer having only one Right Way to build any application.</p>
        <hr class="mw3 bb bw1 b--black-10">
        <h4 class="f4">Learning Curve</h4>
        <p class="lh-copy f5 black-70 tl tj">To get started with Vue, all you need is familiarity with HTML and ES5 JavaScript (i.e. plain JavaScript). With these basic skills, you can start building non-trivial applications within less than a day of reading the guide.</p>
        <p class="lh-copy f5 black-70 tl tj">Angular’s learning curve is much steeper. The API surface of the framework is simply huge and as a user you will need to familiarize yourself with a lot more concepts before getting productive. Obviously, the complexity of Angular is largely due to its design goal of targeting only large, complex applications - but that does make the framework a lot more difficult for less-experienced developers to pick up.</p>
      </article>
      </transition>
      <transition name="fade" mode="out-in">
        <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" v-if="techs.react" id="tech">
        <div class="tc">
          <img src="/static/logos/react.svg" class="h4 dib" title="React">
          <h3 class="f3">React</h3>
        </div>
        <p class="lh-copy center f5 black-70 tl tj">React and Vue share many similarities. They both:</p>
        <ul class="list tl pl0 lh-copy f5 black-70 tj">
          <li class="mv1">Utilize a virtual DOM.</li>
          <li class="mv1">Provide reactive and composable view components.</li>
          <li class="mv1">Maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries.</li>
        </ul>
        <hr class="mw3 bb bw1 b--black-10">
        <h4 class="f4 fw6">Performance Profiles</h4>
        <p class="lh-copy f5 black-70 tl tj">In every real-world scenario that has been tested so far, Vue outperforms React by a fair margin.</p>
        <h5 class="f5">Render Performance</h5>
        <p class="lh-copy f5 black-70 tl tj">When rendering UI, manipulating the DOM is typically the most expensive operation and unfortu- nately, no library can make those raw operations faster. The best it can be done is:</p>
        <ul class="list tl lh-copy f5 black-70 tl tj pl0">
          <li class="mv1">1. Minimize the number of necessary DOM mutations. Both React and Vue use virtual DOM abstractions to accomplish this and both implementations work about equally well.</li>
          <li class="mv1">2. Add as little overhead as possible on top of those DOM manipulations. This is an area where Vue and React differ. In React, let’s say the additional overhead of rendering an element is 1 and the overhead of an average component is 2. In Vue, the overhead of an element would be more like 0.1, but the overhead of an average component would be 4, due to the setup required for the reactivity system.</li>
        </ul>
        <p class="lh-copy f5 black-70 tl tj">This means that in typical applications, where there are many more elements than components being rendered, Vue will outperform React by a significant margin. In extreme cases however, such as using 1 normal component to render each element, Vue will usually be slower.</p>
        <p class="lh-copy f5 black-70 tl tj">Both Vue and React also offer functional components, which are stateless and instanceless - and therefore, require less overhead. When these are used in performance-critical situations, Vue is once again faster.</p>
        <h5 class="f5">Update Performance</h5>
        <p class="lh-copy f5 black-70 tl tj">In React, you need to implement shouldComponentUpdate everywhere and use immutable data structures to achieve fully optimized re-renders. In Vue, a component’s dependencies are automat- ically tracked so that it only updates when one of those dependencies change. The only further optimization that sometimes can be helpful in Vue is adding a key attribute to items in long lists.</p>
        <p class="lh-copy f5 black-70 tl tj">This means updates in unoptimized Vue will be much faster than unoptimized React and actually, due to the improved render performance in Vue, even fully-optimized React will usually be slower than Vue is out-of-the-box.</p>
        <h5 class="f5">In Development</h5>
        <p class="lh-copy f5 black-70 tl tj">Obviously, performance in production is the most important and that’s what we’ve been discussing so far. Performance in development still matters though. The good news is that both Vue and React remain fast enough in development for most normal applications.</p>
        <p class="lh-copy f5 black-70 tl tj">However, if you’re prototyping any high-performance data visualizations or animations, you may find it useful to know that in scenarios where Vue can’t handle more than 10 frames per second in development, we’ve seen React slow down to about 1 frame per second.</p>
        <p class="lh-copy f5 black-70 tl tj">This is due to React’s many heavy invariant checks, which help it to provide many excellent warnings and error messages.</p>
      </article>
      </transition>
      <transition name="fade" mode="out-in">
        <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" v-if="techs.ember" id="tech">
        <div class="tc">
          <img src="/static/logos/ember.png" class="h4 dib" title="Ember">
          <h3 class="f3">Ember</h3>
        </div>
        <p class="lh-copy center f5 black-70 tl tj">Ember is a full-featured framework that is designed to be highly opinionated. It provides a lot of established conventions and once you are familiar enough with them, it can make you very productive. However, it also means the learning curve is high and flexibility suffers. It’s a trade-off when you try to pick between an opinionated framework and a library with a loosely coupled set of tools that work together. The latter gives you more freedom but also requires you to make more architectural decisions.</p>
        <p class="lh-copy center f5 black-70 tl tj">That said, it would probably make a better comparison between Vue core and Ember’s templating and object model layers:</p>
        <ul class="list tl pl0 lh-copy f5 black-70 tj">
          <li class="mv1">Vue provides unobtrusive reactivity on plain JavaScript objects and fully automatic computed properties. In Ember, you need to wrap everything in Ember Objects and manually declare dependencies for computed properties.</li>
          <li class="mv1">Vue’s template syntax harnesses the full power of JavaScript expressions, while Handlebars’ expression and helper syntax is intentionally quite limited in comparison.</li>
          <li class="mv1">Performance-wise, Vue outperforms Ember by a fair margin, even after the latest Glimmer engine update in Ember 2.0. Vue automatically batches updates, while in Ember you need to manually manage run loops in performance-critical situations.</li>
        </ul>
      </article>
      </transition>
      <transition name="fade" mode="out-in">
        <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" v-if="techs.polymer" id="polymer">
        <div class="tc">
          <img src="/static/logos/polymer.png" class="h4 dib" title="Polymer">
          <h3 class="f3">Polymer</h3>
        </div>
        <p class="lh-copy center f5 black-70 tl tj">Polymer is yet another Google-sponsored project and in fact was a source of inspiration for Vue as well. Vue’s components can be loosely compared to Polymer’s custom elements and both provide a very similar development style. The biggest difference is that Polymer is built upon the latest Web Components features and requires non-trivial polyfills to work (with degraded performance) in browsers that don’t support those features natively. In contrast, Vue works without any dependencies or polyfills down to IE9.</p>
        <p class="lh-copy center f5 black-70 tl tj">In Polymer 1.0, the team has also made its data-binding system very limited in order to compensate for the performance. For example, the only expressions supported in Polymer templates are boolean negation and single method calls. Its computed property implementation is also not very flexible.</p>
        <p class="lh-copy center f5 black-70 tl tj">Polymer custom elements are authored in HTML files, which limits you to plain JavaScript/CSS (and language features supported by today’s browsers). In comparison, Vue’s single file components allows you to easily use ES2015+ and any CSS preprocessors you want.</p>
        <p class="lh-copy center f5 black-70 tl tj">When deploying to production, Polymer recommends loading everything on-the-fly with HTML Imports, which assumes browsers implementing the spec, and HTTP/2 support on both server and client. This may or may not be feasible depending on your target audience and deployment environment. In cases where this is not desirable, you will have to use a special tool called Vulcanizer to bundle your Polymer elements. On this front, Vue can combine its async component feature with Webpack’s code-splitting feature to easily split out parts of the application bundle to be lazy-loaded. This ensures compatibility with older browsers while retaining great app loading performance.</p>
      </article>
      </transition>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          libraries: 'https://github.com/vuejs/awesome-vue#libraries--plugins',
          guide: 'https://vuejs.org/v2/guide/',
          techs: {
            angularjs: false,
            angular: false,
            react: false,
            ember: false,
            polymer: false
          }
        }
      },
      methods: {
        show (tech) {
          for (var key in this.techs) {
            this.techs[key] = false
          }
          this.techs[tech] = true
        }
      }
    }
</script>
