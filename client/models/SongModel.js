// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // create enqueue method which will activate when a song name is clicked and adds a song to the queue.
  enqueue: function(){
    console.log('SongModel - enqueue', this)
    this.trigger('enqueue', this);
  },

  dequeue: function(){
      this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }
});
