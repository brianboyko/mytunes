// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
  },

  enqueue: function(song){
    console.log("SongQueue - enqueue (this.add function)", this.add);
    this.add(song);
    //console.log("SongQueue.js - enqueue", "this", this)
  },

  dequeue: function(song){
    this.remove(song);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
