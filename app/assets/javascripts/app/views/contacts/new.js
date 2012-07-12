
App.NewContactView = Ember.View.extend({
    templateName: 'app/templates/contacts/edit',
    classNames: [],
    tagName: 'form',

    init: function(){
        this._super();
        this.set('contact', App.Contact.create())
    },
    submit: function(event){
        var self = this
        event.preventDefault()
        var contact = this.get('contact')

        contact.save().done(function(){
            self.get('parentView').set('isNewVisible', false)
            App.contactsController.pushObject(contact)
        }).error(function(){
                alert('error saving contact')
            })
    },
    cancel: function(event){
        event.preventDefault()
        self.get('parentView').set('isNewVisible', false)
    }
})

