# Ember-modal
This is an Ember Modal Component.
This Modal is a service, so you can easily call it whenever and wherever you need.
It is inspired in the Ember-cli-flash Service implementation: https://github.com/poteto/ember-cli-flash.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

To display a modal all you need to do is this:
´´´javascript
//app/controllers/yourcontroller.js

actions: {
  someAction(){
    //...code....
    this.modal.alert("This will be displayed in the modal alert", 500);        
  }
}
´´´

## Running

* `ember server`
* Visit your app at http://localhost:4200.
