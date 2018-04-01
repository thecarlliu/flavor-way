#Flavorway

###Flavorway is a full stack web app that allows users to share pictures and recipes of their favorite food combos! Users can sign in using a username and password that they chose during registration.

####TOdos

- create buttons on every flavor in flavor feed that update the flavor.favorite to true/false (toggle)
- when toggle button is clicked, ajax a put request that finds the flavor that was clicked in the DB by id, and updates that flavor, setting favorite=true, then redirects the page back to /flavors, thus the flavorites get loaded.

- eventually update Flavor model so that it also has a column for creator_id
- script.js should send ajax post request to /flavors when the submit button is clicked (need to add submit button to create section), then the post response adds a new Flavor to the database with the appropriate creator_id, then the page adds the new flavor to the flavor feed
- script.js should also send an ajax get request to /flavors/user, get response jsons flavors with the same creator_id as the user back to the page, then the page displays the json appropriately within the your flavors section

- and then.... eventually implement sign in/register function