App.ListContactsView = Ember.View.extend({
    templateName:'app/templates/contacts/list',
    contentBinding:'App.contactsController',
    isNewVisible: false,

    showNew: function () {
        this.set('isNewVisible', true)
    }
})