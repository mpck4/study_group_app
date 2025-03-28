# Study Group App

## Overview
The Study Group App is a web application that allows users to create posts and replies, facilitating discussions and collaboration among study group members. The application uses Supabase as its backend database to store posts and replies.

## Features
- Create and view posts
- Reply to posts
- User-friendly interface

## Technologies Used
- Node.js
- Express.js
- Supabase
- EJS (Embedded JavaScript templating)
- CSS for styling

## Project Structure
```
study-group-app
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── postsController.js
│   │   └── repliesController.js
│   ├── routes
│   │   ├── postsRoutes.js
│   │   └── repliesRoutes.js
│   ├── services
│   │   └── supabaseService.js
│   ├── views
│   │   ├── index.ejs
│   │   ├── posts.ejs
│   │   └── replies.ejs
│   └── utils
│       └── helpers.js
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── scripts.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd study-group-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase credentials:
   ```
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the app.

## Usage
- Users can create new posts by filling out the form on the posts page.
- Users can view all posts and click on a post to see and add replies.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.