# Blogging App with NodeJS and MongoDB - AWS Deployment

This is a simple blogging application built with Node.js, Express, and MongoDB. The application allows users to create, edit, delete, and view blog posts. It also includes user authentication and is ready to be deployed on AWS.

## Features

- **Create, Edit, Delete, and View Blog Posts**: Users can manage their blog posts with full CRUD functionality.
- **User Authentication**: Secure user authentication to manage user sessions.
- **AWS Deployment**: Configured for deployment on AWS.
- **Environment Variables**: Managed using `.env` for secure configuration.

## Project Structure

- `node_modules/`: Contains all npm dependencies.
- `middleware/`: Contains middleware, authentication using JWT.
- `public/`: Contains static assets such as CSS, JavaScript, and images.
- `routes/`: Contains route definitions for handling different HTTP requests.
- `views/`: Contains the view templates rendered by the application.
- `.env`: Environment variables (not included in version control).
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `app.js`: Main application setup and middleware configuration.
- `package.json`: Lists project dependencies and scripts.
- `package-lock.json`: Lockfile for npm dependencies.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Pranavv361/Blogging-App-with-NodeJS-and-MongoDB---AWS.git
    cd Blogging-App-with-NodeJS-and-MongoDB---AWS
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string and other environment variables.

4. **Run the application**:
    ```sh
    npm start
    ```

5. **Access the application**:
    - Navigate to `http://localhost:3000` in your browser.

## Deployment on AWS

1. **Provision an EC2 instance**:
   - Set up an EC2 instance on AWS with the necessary security groups.

2. **Install Node.js and MongoDB on the EC2 instance**:
   - Follow the instructions on the official Node.js and MongoDB websites to install the required software on your EC2 instance.

3. **Clone the repository to your EC2 instance**:
   - SSH into your EC2 instance and clone the repository.

4. **Set up environment variables**:
   - Create a `.env` file on your EC2 instance with your MongoDB connection string and other environment-specific variables.

5. **Start the application**:
   - Run `npm start` on your EC2 instance.

## License

This project is licensed under the MIT License - see the License file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments and References.
- https://getbootstrap.com/docs/5.3/customize/sass/#file-structure
- https://www.mongodb.com/docs/mongodb-shell/run-commands/#command-exceptions
- https://mongoosejs.com/docs/tutorials/virtuals.html
- https://www.npmjs.com/package/cookie-parser
- https://www.npmjs.com/package/multer
- https://www.npmjs.com/package/dotenv

