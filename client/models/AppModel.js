// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song) {
      //this.set('currentSong', song);
      if (this.get('songQueue').at(0)){
        this.set('currentSong', this.get('songQueue').at(0))
      }
    }, this);

    params.library.on('enqueue', function(song) {
       console.log("AppModel.js - params.library.on('enqueue')", this)
      this.get('songQueue').enqueue(song);
    }, this);

    params.library.on('dequeue', function(song) {
      this.get('songQueue').dequeue(song);
    }, this);

    params.library.on('ended', function(){
      console.log("Triggered ended in AppModel");
      this.get('songQueue').dequeue(this.get('songQueue').at(0))
      // is this backbone MV**?
      if(this.get('songQueue').at(0)){
        this.get('songQueue').at(0).play();
      }
    }, this);
  }
});

/* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
