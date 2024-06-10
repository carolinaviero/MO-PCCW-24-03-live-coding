const { eventsList } = require('./events.js');

// Do not change the dependencies
var eventList;
if(typeof require != 'undefined') {
  eventList = require('./events.js');
}

// TODO: Define a function 'needsMoreVolunteers' that checks if an event requires more volunteers.
// Hint: An event needs more volunteers if 'numberOfVolunteers' is less than 'requiredVolunteers'.
function needsMoreVolunteers(events) {
  console.log('entering needsMoreVolunteers')
  return s;
}

function filterEventsWhichNeedVolunteers(eventsList) {
  // TODO: Use the Array.prototype.filter() method to create a new array 'inNeedOfVolunteers'
  // that contains all events from 'eventList' needing more volunteers. You will need to use
  // the 'needsMoreVolunteers' function you defined as the callback function for the filter method.
  const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers); //Replace this line

  return inNeedOfVolunteers;
}

filterEventsWhichNeedVolunteers(eventsList)

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = { filterEventsWhichNeedVolunteers };
}
