#Flavorway

###Flavorway is a full stack web app that allows users to share pictures and recipes of their favorite food combos! Users can sign in using a username and password that they chose during registration.

####TOdos

- create buttons on every flavor in flavor feed that update the flavor.favorite to true/false (toggle)
- when toggle button is clicked, ajax a put request that finds the flavor that was clicked in the DB by id, and updates that flavor, setting favorite=true, then redirects the page back to /flavors, thus the flavorites get loaded.

- /flavors GET route should implement a check for all flavors with the same user id as the current user and render those flavors into the your flavors section.

- and then.... eventually implement sign in/register function