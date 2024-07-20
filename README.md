* Cd into the project folder && yarn install
* run 'npx ts-node src/migrate.ts' this command to migrate the user table 
* yarn run start:dev

routes
post http://127.0.0.1:3000   - create user
get http://127.0.0.1:3000    - get all users
get http://127.0.0.1:3000/1  - get a particuular user with id
put http://127.0.0.1:3000/2  - update a particular user with id
delete http://127.0.0.1:3000/2 - delete a particular user with id

