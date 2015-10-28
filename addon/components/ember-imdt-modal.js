import Ember from 'ember';

export default Ember.Component.extend({
  service: Ember.inject.service('ember-imdt-modal'),
  classNames: ['ember-imdt-modal'],

  actions:{
    close(){
      this.overlay().fadeOut('fast');
      this.modalElement().fadeOut('fast');
    }
  },

  overlay(){
    return this.$('.ember-imdt-modal-overlay');
  },

  modalElement(){
    return this.$('.ember-imdt-modal-container');
  },
});
