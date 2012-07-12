

App.Contact = Ember.Resource.define({
    url: '/contacts',
    schema: {
        id: Number,
        first_name: String,
        last_name: String,
        email: String
    }
})
