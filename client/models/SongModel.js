// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
  	console.log(this);
    this.set('playCount', 0);
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }, 
  enqueue: function(){
  	this.trigger('enqueue', this);
  },
  dequeue: function(){
    // debugger;
    this.trigger('dequeue', this);
  },
  ended: function(){
    // debugger;
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('ended', this);
  }

});
