<template>
  <div>
    <div class="dt tc center mv4">
      <router-link to="/">
        <img src="~@/assets/logo.png" class="dib v-mid h3 dtc mr4">
      </router-link>
      <h1 class="blue f1 fw4 v-mid dtc">Introduction /</h1>
      <h2 class="green f2 fw4 v-mid dtc">About Vue.js</h2>
    </div>
    <div class="mt5 mw8 center">
        <h3 class="f3 tl fw6">Vue.js Overview</h3>
        <p class="tj lh-copy">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and <a :href="libraries" target="_blank" class="link green hover-blue">supporting libraries.</a></p>
        <p class="tj lh-copy">If you are an experienced frontend developer and you want to know how Vue.js compares to other libraries/frameworks, check out the Comparison with Other Frameworks chapter.</p>
        <p class="tj lh-copy">If you are interested to learn more information about Vue.js’ core take a look at <a :href="guide" class="link green hover-blue">Vue.js official guide.</a></p>
      <hr class="mw4 bb b--blue left mv4">
      <h3 class="f3 tl fw6">Comparison with Other Frameworks</h3>
      <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/angular-js.svg" class="h4 dib" title="Angular 1">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/angular.png" class="h4 dib" title="Angular 2">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/react.svg" class="h4 dib" title="React">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/ember.png" class="h4 dib" title="Ember">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/polymer.png" class="h4 dib" title="Polymer">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/knockout.svg" class="h4 dib" title="Knockout">
                </div>
              </div>
            </a>
          </div>
          <div class="fl w-third w-25-ns pa2">
            <a href="#">
              <div class="mw5 center bg-white br3 pv3 ph1 pv4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img src="/static/logos/riot.png" class="h4 dib" title="Riot">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
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
      <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <img src="/static/logos/angular.png" class="h4 dib" title="Angular 1">
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
    </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          libraries: 'https://github.com/vuejs/awesome-vue#libraries--plugins',
          guide: 'https://vuejs.org/v2/guide/'
        }
      }
    }
</script>
