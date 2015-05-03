import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('post', Ember.Object.create());
  },
  sortProperties: ['createdDate'],
  sortAscending: false,
  actions: {
    createPost: function () {
      var post = this.store.createRecord('post', {
        title: this.get('post.title'),
        content: this.get('post.content'),
        author: "James",
        createdDate: new Date()
      });
      post.save();
    }
  }
});
