import Ember from 'ember';

export default Ember.Service.extend({
  flag: false,

  options:{
    title: null,
    titleTemplate: null,
    body: null,
    bodyTemplate: null,
    footer: null,
    footerTemplate: null,
    overlay: true
  },

  defaultOptions:{
    title: null,
    titleTemplate: null,
    body: null,
    bodyTemplate: null,
    footer: null,
    footerTemplate: null,
    overlay: true
  },

  openModal (options){
    let defaultOptions = this.get('defaultOptions');

    if(options){
      this.set('options.title', options.title || defaultOptions.title);
      this.set('options.body', options.body || defaultOptions.body);
      this.set('options.footer', options.footer || defaultOptions.footer);
      this.set('options.titleTemplate', options.titleTemplate || defaultOptions.titleTemplate);
      this.set('options.bodyTemplate', options.bodyTemplate || defaultOptions.bodyTemplate);
      this.set('options.footerTemplate', options.footerTemplate || defaultOptions.footerTemplate);
      this.set('options.overlay', options.overlay || defaultOptions.overlay);
    }
    setTimeout(() => {
      $('.ember-imdt-modal-overlay').fadeIn(700);
    });
    this.modalElement().fadeIn(100);

    this.positionModal();
  },

  modalElement(){
    return $('.ember-imdt-modal-container');
  },

  positionModal(){
    setTimeout(() => {
      let modal = this.modalElement();

      let modalHeight =   modal.height() +
                   Number(modal.css('padding-top').replace('px', '')) +
                   Number(modal.css('padding-bottom').replace('px', ''));

      let modalWidth =   modal.width() +
                  Number(modal.css('padding-left').replace('px', '')) +
                  Number(modal.css('padding-right').replace('px', ''));

      let windowHeight = $(window).height();
      let windowWidth = $(window).width();

      let top = windowHeight / 2 - modalHeight / 2 + "px";
      let left = windowWidth / 2 - modalWidth / 2 + "px";

      modal.css('top', top);
      modal.css('left', left);
    });
  }
});
