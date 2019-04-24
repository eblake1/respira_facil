import Component from '@ember/component';

export default Component.extend({
  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },
    submitConfirm() {
      //call the onConfirm property to invoke the passed in action
      this.onConfirm();
    }
  }

});
