var Sunview = Sunview || {};

Sunview.Events = {
  hasPassed: function(date) {
    var now = new Date();
    return date < now;
  },

  stylePastEvents: function() {
    var eventsList = document.getElementsByClassName('event');

    for(var i = 0; i < eventsList.length; i++) {
      var eventEl = eventsList[i];
      var eventDate = new Date(eventEl.dataset.date);
      var eventClass = this.hasPassed(eventDate) ? "past" : "upcoming";
      eventEl.classList.add(eventClass);
    }
  },

  hidePastEvents: function() {
    this.stylePastEvents('event');
    var upcoming = document.getElementsByClassName('upcoming');
    if (upcoming.length === 0) {
      document.getElementById('events-placeholder').classList.remove('hidden');
      document.getElementById('events-intro').classList.add('hidden');
    }
  }
}

