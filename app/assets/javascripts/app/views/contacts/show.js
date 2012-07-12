App.ShowContactView = Ember.View.extend({
    templateName:'app/templates/contacts/show',
    classNames:['show-class'],
    tagName:'tr',
    isEditing: false,

    delete: function () {
        var self = this
        this.get('contact').destroy().done(function () {
            App.contactsController.removeObject(self.get('contact'))
        }).error(function () {
                alert('error deleting contact.')
            })
    },

    edit: function(){
        this.set('isEditing', true)
    }

})

