
App.EditContactView = Ember.View.extend({
    templateName: 'app/templates/contacts/edit',
    tagName: 'form',

    init: function(){
        this._super();
        this.set('contact', Ember.copy(this.get('parentView').get('contact')))
    },

    submit: function(event){
        var self = this
        event.preventDefault()
        var contact = this.get('contact')

        contact.save().done(function(){
            self.get('parentView').get('contact').updateWithApiData(contact.toJSON())
            self.get('parentView').set('isEditing', false)
        }).error(function(){
                alert('error saving contact')
            })
    },
    cancel: function(event){
        event.preventDefault()
        self.get('parentView').set('isEditing', false)
    }
})

