Welcome to the test, it is a mix of frontend and backend questions. Submission details at the end.

Move the provided files around as much as needed. They only exist to support the questions.

===========
QUESTION 1 (Javascript)
===========

Display a short dialogue sequence between two characters. The included dialogue.js file contains a
sequence of "line" objects with a display string and in some cases a list of choices. Display the first
line in a div on the page, and when that div is clicked display the next line in the array or jump to the
line given in the goto field. When the line contains a choice, display those choices in a list and jump
to the selected choice.

See question1.gif for the desired effect.

===========
QUESTION 2 (CSS)
===========

Style the dialogue sequence.
- Make the display text somewhat large, take the full width of the screen and fixed to the bottom.
- Set the background image on the body (img/background.jpg) and make it fill the screen without stretching or leaving white space.
- Display the speakers on opposite sides of the page and facing each other.
- Fade out the person who is not the active speaker, and add a slight bouncing animation to the person that is active.
- Display the text differently based on the mood of the speaker

See question2.gif for the desired effect.

===========
QUESTION 3 (API)
===========

Build an API to track a contact list. An example Contact:

{
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    phone: "555-5555"
}


The API can use an in memory data store instead of a database to save time. NodeJS or Asp.Net are preferred but it can be written in any stack. It will communicate in json, here's an example Contact:

The API should provide the following endpoints:

GET /api/contacts // Return the list of contacts as an array
POST /api/// Adds a new Contact to the data store and returns it with its new id
GET /api/contacts/2 // Return the given contact (2 in this case)
PUT /api/contacts/4 // Updates and returns the given contact (4 in this case)
DELETE /api/contacts/23 // Deletes the contact with the given id (23 in this case)

Use a tool such as Postman or curl to test your api. Only build a frontend if you have time and want to show off.

SUBMISSION
==========
Zip your results and send to auhlman@modesttree.com and mwamboldt@modesttree.com
Please only include the code you have written and any instructions for running it.
That means exclude any node_modules, bin, obj or temp directories. Our mail system
rejects sending exes or dlls directly or in zip files.

If you still can't seem to send the zip then upload to google drive and share with us,
that should work regardless. Please do not post on Github to send to us.
