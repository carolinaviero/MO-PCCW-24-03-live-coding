function needsMoreVolunteers(event) {
  return event.numberOfVolunteers < event.requiredVolunteers;
}
function filterEventsWhichNeedVolunteers(eventsList) {
  const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers);
  return inNeedOfVolunteers;
}

// Function to create a message for each event
function createVolunteerRecruitmentMessage(event) {
  // TODO: Construct a message using the event's details. The message should include:
  const message = `Join our community effort at ${event.title} in ${event.location} on ${event.date}! We're currently ${event.requiredVolunteers - event.numberOfVolunteers} volunteers short and need your help to make this event a success. You can be a part of something meaningful and contribute to our goal of a cleaner and happier community. For more information or to join our team, please reach out to our dedicated organizers:

  ${event.organizersContact[0].name}: Call at ${event.organizersContact[0].contact} or email ${event.organizersContact[0].email}

  Let's work together to make a positive impact on ${event.location}. See you there!`
 

  // Return the crafted message
  return message;
}

function generateAllVolunteerRecruitmentMessages(inNeedOfVolunteers) {
  // Map over the 'inNeedOfVolunteers' array to create messages
  const volunteerRecruitmentMessages = inNeedOfVolunteers.map(createVolunteerRecruitmentMessage); //Replace this line;
  return volunteerRecruitmentMessages;
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    filterEventsWhichNeedVolunteers,
    generateAllVolunteerRecruitmentMessages,
  };
}
