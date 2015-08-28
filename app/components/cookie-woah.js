import Ember from 'ember';

export default Ember.Component.extend({
  idiset: false,
  actions: {
    putDaCookie() {
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 1000*36000;
      now.setTime(expireTime);
      document.cookie = `what=areyousure;expires=${now.toGMTString()}`;
      this.set('idiset', true);
    }
  }
});
