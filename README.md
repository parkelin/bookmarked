# Bookmarked
The Ultimate Canvas for Storytellers!

Bookmarked is a tool for writers to bring together their brainstorming, world building, and writing process in one unified platform. Authors can brainstorm and save details about their characters, access the notes at any point while writing, and check for inconsistencies in their writing with AI.

# Features!

<img width="200" height="100" alt="Screenshot 2024-05-18 at 12 29 03 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/8e52dc02-2f31-4261-89a5-4365d02ae0d8">
<img width="200" height="100" alt="Screenshot 2024-05-18 at 12 29 46 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/306b5cca-5ef4-41a2-8594-73375a5df737">
<img width="200" height="100" alt="Screenshot 2024-04-15 at 9 43 18 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/9189d34a-d5ff-4aa7-b379-f51c6c166a7c">
<img width="200" height="100" alt="Screenshot 2024-04-15 at 9 43 35 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/3253266b-bbf3-4df9-a46a-1d5db58908dc">
<img width="200" height="100" alt="Screenshot 2024-04-15 at 9 43 04 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/78090372-e801-4751-a36b-a6b53b50b9fc">
<img width="200" height="100" alt="Screenshot 2024-04-15 at 9 51 24 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/e1996eca-80ea-43b0-b562-39d0126d5179">
<img width="200" height="100" alt="Screenshot 2024-04-28 at 9 19 58 PM" src="https://github.com/parkelin/bookmarked/assets/84208868/2348dc6f-40cd-4d70-a9f4-80e3500082ea">

- Walkthrough tutorial for first time users
- Writing Document to track writing process
- Glossary to store information about characters/details
- 'Find Character' to access details about a character at any point during the writing process
- 'Create Character' to create characters during the writing process
- Ability to edit and delete details about characters at any point
- Inconsistency checker powered by the Chat GPT API

# How we Built it

<img width="495" alt="Screenshot 2024-05-18 at 11 48 24 AM" src="https://github.com/parkelin/bookmarked/assets/96144192/e3cfed2b-9e1d-46f2-a63e-6e4952c48314">


Bookmarked was built with React and Node.js. We used Firebase Firestore for data storage, so users would be able to save their writing and characters and access them at any future point. We also used Firebase for authentication and image storage. In addition, we used OpenAI API to check writing inconsistencies and the Quill library to create the interface for the writing document

# Challenges

Some issues we ran into while developing bookmarked had to do with making sure out auto saving feature was working well with real time writing without inconsistencies in syncing current text to data storage. To remedy this, we ended up limiting auto saving to be during page navigation and logging out of the application only, with users being responsible for saving at other times. We also had to iterate on the Chat GPT prompt engineering to ensure that the text was being properly evaluated for writing inconsistencies and compared to all previous brainstorming, which required very precise wording. Some other feature debugging involved making sure that we were able to upload images from a local device that would be saved and fetched properly from the database. 

We conducted user interviews to test the experience of using Bookmarked and noticed that some of the features were not located in intuitive locations for users to access, so we devised a solution through creating a first-time user tutorial that explained how to use Bookmarked's features to the users' best advantage. 



