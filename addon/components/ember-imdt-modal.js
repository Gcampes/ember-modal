import Ember from 'ember';

export default Ember.Component.extend({
  service: Ember.inject.service('ember-imdt-modal'),
  classNames: ['ember-imdt-modal'],

  actions:{
    modalClose(){
      this.modal.hide();
    },
    modalCancel(){
      return false;
    },
    modalConfirm(){
      return true;
    }
  },
});
