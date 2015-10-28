# Ember-modal
This is an Ember Modal Component.
This Modal is a service, so you can easily call it whenever and wherever you need.
It is inspired in the Ember-cli-flash Service implementation: https://github.com/poteto/ember-cli-flash.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

To display a modal all you need to do is choose a shorthand or create your custom modal like this:
```javascript
//app/controllers/yourcontroller.js
// Using the Alert shorthand

actions: {
  someAction(){
    //...code....
    this.modal.alert("This will be displayed in the modal alert", 500);        
  }
}
```

Here we create our own modal using the custom method:

```javascript
//app/controllers/yourcontroller.js
// Using the Alert shorthand

actions: {
  someAction(){
    let options = {
      title: "Custom",
      bodyTemplate: "custom/body",
      footerTemplate: "custom/footer",
      overlay: false
    };

    this.modal.custom(options);
  }
}
```

The supported methods and shorthands are:
--------
|custom|
|alert|
|confirm|
---------

## Running

* `ember server`
* Visit your app at http://localhost:4200.
