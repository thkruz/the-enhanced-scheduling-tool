Presentations at 5:00 PM

DEMO Pacing
- Spin up backend (npm start in server)
- Spin up frontend (npm start in frontend)
- Spin up cypress (npx cypress open in root)
- Start in the base route (‘/‘)
  - Point out the various regions of the Calendar
  - Quick Nav has three routes (one of which in the Beyond MVP would only exist if logged in as an Administrator)
  - Roster has a list of members in the unit
  - Main center view as the current calendar schedule with a Download button to save the calendar as a CSV file
  - The PIX region is reserved for beyond MVP where icons and other quick utility features would exist
  - Inspired from Google Calendar and iCal (Ted’s Burger King story about when something is good, then why not)
  - Note that the title is Scheduling App
- Click on John Doe either in the Calendar or the Roster
  - Note that this takes to a user details page (route /user/:id)
  - Note that the title changes to Member Availability
  - Shows a First Name, Last Name, and a Shift Preference
  - John, Doe, Preference is Day
  - Also shows a calendar of when working and not available for the Admin/Boss to take into consideration
- Now Click on Administration
  - Note that the Title is now Admin Page (re-iterate this would be hidden in a stretch goal for checking if a User is logging in and whether they are Admin or not)
  - Note that there are 4 options. 3 of them are completed (as they satisfy the MVP), while the fourth only alerts as it is a stretch goal.
  - Start by clicking on Remove User
  - Remove a few of them, like John Doe, Jane Doe, and Juan Doe (toward the bottom)
  - Notice that the Roster as now changed and shows the Calendar view again
- Navigate back to the Administration
  - Click on Add New User
  - First name: example: Tony
  - Last name: example: EMPTY do not write anything
  - Shift Preference: example: mid
  - Save New User click
  - Notice the alert, so there is some level of form field validation on client side
  - Click ok, now fill in all the fields, Tony Kelly Mid and Save New User
  - Notice that the Roster now has a Tony Kelly
  - Mention this was a source of a very subtle bug! Needed a refactor on Context object at this point so that member id's were not re-used!! This would likley have been handled naturally in a SQL application with a Primary ID Key that autoincremented......
  - Click on Tony Kelly
  - Notice the first, last, and preference are all filled correctly. No assignments have been given to this new user. Go ahead and change Mid to Day.
  - Now click on Julia Doe above Tony Kelly
  - Click back on Tony Kelly and notice his preference is still Day. So changes on the User Details hold throughout.
- Navigate back to Administration
  - Click on Upload Roster Data
  - Gives an alert since this is a placeholder for beyond MVP
  - Click on Export Roster Data 
  - It downloads a copy of the calendar json to be used for however its meant to be used. This depends on the Browser and computer settings, but often goes to a Downloads folder.
- Navigate to Developers (the ‘about’ route)
  - This pulls from the GitHub API
  - Uses just an array of GitHub user names and Promise.all to build out developer cards. So if someone updates their GitHub, then it will update this page as well. 
  - Gives a kind warning that clicking on a link here will open a new tab
  - While it might not show up here, if someone hits their hourly pull limit, then instead of showing nothing, a message will show up telling someone they are basically on cool down for that hour (instead of just showing Loading or nothing)
- Now switch over to Cypress
  - Let it run all the tests
  - Point out that sometimes these tests would fail during code merges (which is good!, example User Details story), letting us know something broke. This let us set up hot fix issues.
  - In other words, unit testing and e2e testing working as intended!!!
  - Navigate partially through one of the tests, just to point out the Loading that shows up whenever waiting not the server to fetch data.


Problem Space
-


Approach to solution
-

Things We did Well
- Communication using GitHub discussions and commenting on issues
- Creating bite-sized Issues that anyone could grab and handle isolation having no to very few overlapping conflicts
   - If there were overlapping conflicts then a bug issue was quickly opened and assigned to the person who it overlapped with some either discussion or pair programming could be used to address it quickly
- While everyone could work all across the application, it helped to also assign broad “regional“ aspects of software design
   - Example: Ted for server/GitHub CI-CD/code scanning
   - Example: Tony for frontend with respect to commercial entity design
   - Example: Collin for unit testing and component breakdown
- To be clear though, everyone worked everywhere (unit tests, ci, frontend), it was a shared assignment, but we found it to be useful to have some ownership in certain areas

Lessons learned
- Mapping out the data hierarchy should be part of the wireframes.
  - We did some of this, but once we started encountering some cousin-level components, we realized we needed to either lift state higher and higher, or create a context object
  - This causing some refactoring through the scope of the project but also greatly improved the performance and application logic


Struggled With
- Styling is often the last real thing to be considered, especially since the design philosophy is to design the failing test -> write minimum code to pass the test (which . It’s applied during the process for scaffolding purposes, but while it might not need as much discussion time as the User Stories for Interactions and Data, it definitely could use some User Stories especially
Note: our styling overall, we feel is solid. We could have organized the styled-components integrating with the Rux UI as a separate User Story all on its own



——————
Retro

