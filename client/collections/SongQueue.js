// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('add', this.enqueue, this);
    this.on('remove', this.dequeue, this);
  },

  enqueue: function(song){
    console.log("SongQueue - enqueue (this.add function)", this.add);
    this.add(song);
    if (this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);
    if(this.at(0)){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  }

});
