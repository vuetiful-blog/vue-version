import Vue from 'vue';
import VueVersion from '../src/index.js'

Vue.config.productionTip = false;

describe('Vue Version', () => {
  it('returns the current version of Vue', () => {
    let Component = Vue.extend(VueVersion);
    let vv = new Component();
    expect(vv.version).toBe(Vue.version);
  });

  it('displays the current version of Vue', () => {
    let Component = Vue.extend(VueVersion);
    let vm = new Component().$mount();
    expect(vm.$el.textContent.replace(/(^\s+|\n+)/g, '')).toBe('You are using Vue ' + Vue.version)
  });
});
