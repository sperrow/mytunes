// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  className: 'song-queue',

  initialize: function() {
    // this.render();

    // this.collection.on('add', function(model){
    //   if( this.collection.length === 1 ) {
    //     this.collection.playFirst();
    //   }
    //   this.render();
    // }, this);

    this.collection.on('add remove', function(model){
      this.render();
    }, this);

    this.render();

  },

  render: function(){
  	// to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  	// see http://api.jquery.com/detach/
  	this.$el.children().detach();

  	this.$el.html('<th>Song Queue</th>').append(
  	  this.collection.map(function(song){
  	    return new SongQueueEntryView({model: song}).render();
  	  })
  	);
  }

});
