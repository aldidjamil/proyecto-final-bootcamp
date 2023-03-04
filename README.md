# Final project - Ironhack Bootcamp Madrid. 

This is going to be the final project for the 3 months Bootcamp on Web development that we are taking in the Ironhack Tech School in Madrid. This application is going to envolve a full MERN application.


## Authors

Adrián Mendieta
Fawzi Alditama Djamil


### Topic

Our final project is going to envolve a Start-up called BeanBased. They produce and sell a veggie protein called tempeh that started originally in Indonesia and its starting to be known all over the world.


#### Programming languages

Server side: Express, MongoDB, Node.JS
Client side: React


##### Here are the relevant endpoints (routes) that we will be using:


SERVER ROUTES

--- Base URL /Products ---
HTTP METHOD  | Route                              | Description                  | JSON
-------------| -----------------------------------| ---------------------------- | ----- |
GET          | `/getAllProducts`                  | All Products list             |
POST         | `/NewProduct`                      | New product form render      |
GET          | `/:id`                             | Get Poduct Details by Id     |
PUT          | `/:id/edit`                        | Edit Products by Id          |
DELETE       | `/:id/delete`                      | Delete Products by Id        |
--- Base URL /Recipes ---
HTTP METHOD  | Route                              | Description                  | JSON
-------------| -----------------------------------| ---------------------------- | ----- |
GET          | `/getAllRecipes`                   | All Recipes list             |
POST         | `/NewRecipe`                       | New Recipe form render       |
GET          | `/:id`                             | Get Recipe Details by Id     |
PUT          | `/:id/edit`                        | Edit Products by Id          |
DELETE       | `/:id/delete`                      | Delete Products by Id        |
--- Base URL /Auth ---
HTTP METHOD  | Route                              | Description                     | JSON
-------------| -----------------------------------| ----------------------------    | ----- |
POST         | `/signup`                          | Signup user                     |
POST         | `/login`                           | Login user                      |
GET          | `/verify`                          | Verify Auth token               |
GET          | `/:id`                             | Get user Details by Id          |
PUT          | `/:id/edit`                        | Edit profile by Id (user/admin) |
DELETE       | `/:id/delete`                      | Delete user by Id  (admin)      |
GET          | `/:id/role`                        | Edit user roles (admin)         |


CLIENT ROUTES

URL                       | Description                        | Protected
--------------------------| -----------------------------------| --------- | 
`/`                       | Index Page                         |           |
`/aboutus`                | Description of Bean Based          |           |
`/abouttempeh`            | Description of Tempeh              |           |
`/events`                 | Information about events           |           |
`/products`               | List of all the Products           |           |
`/products/:id`           | Details on Specific Product        |           |
`/products/create`        | Create new Product                 |Yes        |
`/products/edit/:id`      | Edit a Specific Product            |Yes        |
`/recipes`                | List of all the Recipes            |           |
`/recipes/:id`            | Details on Specific Recipe         |           |
`/recipes/create`         | Create a new Recipe                |Yes        |
`/recipes/edit/:id`       | Edit a Specific Product            |Yes        |
`/users/create`           | Create New User                    |           |
`/users/users-list`       | List of all Users                  |Yes        |
`/user/profile/:id`       | Profile of Specific User           |           |
`/user/profile/edit/:id`  | Edit a Specific User               |Yes        |





