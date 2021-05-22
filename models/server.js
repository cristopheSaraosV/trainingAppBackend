const express = require('express');
const cors = require('cors');
const routerExercises = require('../routes/exercise.routes');
const routerParks = require('../routes/parks.routes');
const routerUser = require('../routes/users.routes');
const { dbConnection } = require('../database/config.database');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		// Connect DB
		this.connectDB();
		// Path
		this.exercisesPath = '/api/exercises';
		this.parksPath = '/api/parks';
		this.usersPath = '/api/users';
		// Middleware
		this.middlewares();
		// Routes
		this.routes();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.static('public'));
		this.app.use(express.json());
	}

	async connectDB() {
		await dbConnection();
	}

	// Routes
	routes() {
		this.app.use(this.exercisesPath, routerExercises);
		this.app.use(this.parksPath, routerParks);
		this.app.use(this.usersPath, routerUser);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`server in ${this.port}`);
		});
	}
}

module.exports = Server;
