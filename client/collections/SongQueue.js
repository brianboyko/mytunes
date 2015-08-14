// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
  },

  enqueue: function(song){
    console.log('called enqueue');
    this.push(song);
  },

  dequeue: function(song){
    this.remove(song);
  }


  //enqueue method
  // takes song parameter and puts at end of queue (ordered collection)
  //publish change to model

  //dequeue method
  //takes song off front of queue and triggers play
  //publish change to model

});
