# CRUD MongoDB Mini Project

This project is a simple CRUD (Create, Read, Update, Delete) application using Node.js, Express.js, EJS, and MongoDB. It showcases fundamental operations on a MongoDB database through a straightforward web interface.

## Features

- **Create**: Add new products using the `/add-product` route.
- **Read**: View all products on the homepage at the `/` route.
- **Update**: Edit existing products via the `/edit-product` route linked from the dashboard.
- **Delete**: Remove products directly from the dashboard with a delete button.

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/m-mdy-m/CRUD-MongoDb.git
```

2. Navigate to the project directory:
```bash
cd CRUD-MongoDb
```

3. Install the dependencies:
```bash
npm install
```

4. Start the MongoDB service on your local machine.

5. Run Project:

```bash
npm start
```
---


### Usage

Once the server is running, you can access the web application in your browser:

- Go to `http://localhost:3000/` to view the homepage with the list of products.
- Navigate to `http://localhost:3000/add-product` to add a new product.
- Access the dashboard to edit or delete products via the buttons provided on product cards.

## Project Structure

- `models`: Contains the Mongoose model for the `Product`.
- `views`: EJS templates for rendering the pages.
- `routes`: Defines the Express routes for the application.
- `controllers`: Express controller functions for handling requests and responses.

## Database Configuration

The project is configured to connect to a MongoDB database named `crud` with a collection named `products`.

Make sure to adjust the database connection string as per your environment setup if required.

## Contributions

Feel free to fork the repository, make improvements, or open issues with any suggestions, bugs, or enhancements.

## License

This project is open-sourced under the MIT License. See the [LICENSE](https://github.com/m-mdy-m/CRUD-MongoDb/blob/main/LICENSE) file for details.
