## Overall Application
This is a large project that we are not going to finish by the end of project #2
### Problem Statement:
Developing a schedule for a team is time consuming and often leads to errors that can impact people's pay and sleep. We need a tool that will allow the creation of schedules that respects people's leave requests, TDY requirements, and other unavailability rules. The tool should allow the regeneration of schedules with only the minimum amount of changes required to accomadate the new unavailability requests.

## Project #2 
Here is what we are attempting to accomplish for project #2
### Problem Statement
We do not have any way for our unit to interact with our application.

### Requirements
3 Routes
  - /           - Main Calendar
  - /about      - About page
  - /admin      - Allows editing members
  - /users/:id  - Calendar specific to that member  

### Assumptions
24/7 coverage
2 person per shift
8 hour shifts

### Glossary
user - a person on a computer
member - is someone who can be put into the schedule

### MVP
We should have a frontend that allows the user to input a roster and unavailability statuses of members on the roster.
It should display mock output data from the server and allow the user to request a modification to the mock data.

### Features
1. Header / Title
2. App Drawer on the left hand side
3. Roster Page with ability to add/remove/edit members
4. Schedule page that generates a schedule
5. Day Edit page that allows marking members unavailable
7. Download button to export to csv

Stretch
1. Member page that allows you edit a person's month availability
2. User Login
