App.contactsController = Ember.ResourceCollection.create({
    type: App.Contact,

  // Implement your controller here.
  //
  // An ArrayController has a `content` property, which you should
  // set up in your router.

  parse: function(json){
      return this._super(json['contacts'])
  }
});

