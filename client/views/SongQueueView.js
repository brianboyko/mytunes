// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add remove', this.render, this)
  },

  render: function() {
    //debugger;
    console.log("SongQueueView - $el", this.$el)
    if (this.$el.children()){
      this.$el.children().detach();
    }
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      }))
    //return this.$el;
  }


});

// ==>renders when add or remove event fires from the song queue collection â€£
// AssertionError: expected render to have been called at least once, but it was never calledsinon.spy(SongQueueView.prototype, 'render');
// view = new SongQueueView({collection: fakeSongs});
// view.collection.add({
//   artist: 'data',
//   url: '/test/testsong3.mp3',
//   title:'test song 3'
// });
// view.collection.pop();
// expect(view.render).to.have.been.called;
