// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
  },

  enqueue: function(song){
    this.add(song);
  },

  dequeue: function(song){
    this.remove(song);
  }

});
