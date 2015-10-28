import Ember from 'ember';

export default Ember.Controller.extend({

  modalDidChange: Ember.observer('service.modal.title', function(){
    console.log(this.get('service.modal'));
  }),

  actions: {
    openModal1(){
      let modal = {
        title: "Modal 1",
        body: "This is the modal body, you can change this by passing a modal object on openModal",
      };

      this.modal.openModal(modal);
    },

    openModal2(){
      let modal = {
        title: "Modal 2",
        bodyTemplate: "custom/body",
        footerTemplate: "custom/footer",
        overlay: false
      };

      this.modal.openModal(modal);
    }
  }
});
