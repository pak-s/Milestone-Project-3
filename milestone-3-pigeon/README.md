# Pigeon 

Want to know more about Area51 ? Pigeon your way 

## Prerequisites 

## Frontend 
- React: Install React on your machine, for installation instructions refer to the official[documentation](https://reactjs.org/docs/getting-started.html) 

## Backend 
- Node and npm: Install Node and npm on your machine,for installation instructions refer to the official [documentation](https://nodejs.org/en/download/)


- MongoDB Compass and MongoDB: Install MongoDB Compass and MongoDB on your machine, for installation instructions refer to the official [documentation](https://docs.mongodb.com/manual/administ)


- Express: Install Express on your machine, for installation instructions refer to the official [documentation](https://expressjs.com/en/starter/installing.html) 

## Setting up the project 

1. Fork and clone the repository 
3. Navigate to the project directory 
4. Initialize using `npm init` command
5. Create a .gitignore file and add the following files to it 
    - node_modules
    - .env
6. Create a .env file and add the following variables to it
    - PORT=5000
    - MONGO_URI=your_mongodb_uri
    - JWT_SECRET=your_jwt_secret
7. Create a config folder and add a config.js file to it
8. Add the following code to the config.js file
    - module.exports = {
        - secret: process.env.JWT_SECRET,
        - mongoURI: process.env.MONGO_URI,
        - port: process.env.PORT
    - }
9. Create a models folder and add the following files to it 
    - user.js
    - post.js
10. Create a routes folder and add the following files to it
    - auth.js
    - post.js
    - user.js
11. Create a controllers folder and add the following files to it
    - auth.js
    - post.js
    - user.js
12. Create a middleware folder and add the following files to it
    - auth.js
13. Create a utils folder and add the following files to it
    - auth.js
    - error.js
    - response.js
14. Create a services folder and add the following files to it
    - auth.js
    - post.js
    - user.js
15. Create a validators folder and add the following files to it
    - auth.js
    - post.js
    - user.js
16. Create a public folder and add the following files to it
    - index.html
    - style.css
17. Create a src folder and add the following files to it
    - App.js
    - index.js
    - index.css
    - serviceWorker.js
18. Create a components folder and add the following files to it
    - Navbar.js
    - Login.js
    - Register.js
    - Home.js
    - Profile.js
    - CreatePost.js
    - Post.js
    - PostList.js
    - PostItem.js
    - Comment.js
    - CommentList.js
    - CommentItem.js
    - Footer.js
    - NotFound.js
    - PrivateRoute.js
    - Alert.js
    - Spinner.js
    - EditProfile.js
    - EditPost.js
    - EditComment.js
    - DeletePost.js
    - DeleteComment.js
    - DeleteAccount.js
    - DeleteProfile.js
    - DeleteImage.js
    - DeleteCover.js
    - DeleteAvatar.js
    - DeleteAllPosts.js
    - DeleteAllComments.js
    - DeleteAllProfiles.js
    - DeleteAllImages.js
    - DeleteAllCovers.js
    - DeleteAllAvatars.js
    - DeleteAll.js
    - DeleteAllData.js
    - DeleteAllPostsData.js
    - DeleteAllCommentsData.js
    - DeleteAllProfilesData.js
    - DeleteAllImagesData.js
    - DeleteAllCoversData.js
    - DeleteAllAvatarsData.js
    - DeleteAllData.js
    - DeleteAllPostsData.js
    - DeleteAllCommentsData.js
    - DeleteAllProfilesData.js
    - DeleteAllImagesData.js
    - DeleteAllCoversData.js
    - DeleteAllAvatarsData.js
    - DeleteAllData.js
    - DeleteAllPostsData.js
    - DeleteAllCommentsData.js
    - DeleteAllProfilesData.js
    - DeleteAllImagesData.js
    - DeleteAllCoversData.js
    - DeleteAllAvatarsData.js
    - DeleteAllData.js
    - DeleteAllPostsData.js
    - DeleteAllCommentsData.js
    - DeleteAllProfilesData.js
    - DeleteAllImagesData.js
    - DeleteAllCoversData.js
    - DeleteAllAvatarsData.js
    - DeleteAllData.js
    - DeleteAllPostsData.js
    - DeleteAllCommentsData.js
    - DeleteAllProfilesData.js
    - DeleteAllImagesData.js
    - DeleteAllCoversData.js
    - DeleteAllAvatarsData.js
    - DeleteAllData.js
    - DeleteAllPostsData
    - DeleteAllCommentsData.js

19. Create a actions folder and add the following files to it
    - alert.js
    - auth.js
    - post.js
    - profile.js
    - types.js
20. Create a reducers folder and add the following files to it
    - alert.js
    - auth.js
    - post.js
    - profile.js
    - index.js
21. Create a store folder and add the following files to it
    - index.js
22. Create a utils folder and add the following files to it



## Running the project 

1. Navigate to the project directory
2. Run the command `npm install` to install all the dependencies
3. Run the command `npm start` to start the project
4. Goto backend directory and run the command nodemon server.js to start the backend server 
