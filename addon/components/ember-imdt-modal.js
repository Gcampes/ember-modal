import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-imdt-modal'],

  // Set Modal Positioning
  setupModal: Ember.on(
    'didInsertElement',
    function() {
      let modal = this.modal();

      let modalHeight =   this.modal().height() +
                   Number(modal.css('padding-top').replace('px', '')) +
                   Number(modal.css('padding-bottom').replace('px', ''));

      let modalWidth =   modal.width() +
                  Number(modal.css('padding-left').replace('px', '')) +
                  Number(modal.css('padding-right').replace('px', ''));

      let windowHeight = this.$(window).height();
      let windowWidth = this.$(window).width();

      let top = windowHeight / 2 - modalHeight / 2 + "px";
      let left = windowWidth / 2 - modalWidth / 2 + "px";

      modal.css('top', top);
      modal.css('left', left);
    }
  ),

  actions: {
    open(){
      this.modal().fadeIn('fast');
    },

    close(){
      this.modal().fadeOut('fast');
    }
  },

  modal(){
    return this.$('.ember-imdt-modal-container');
  }
});
