const express = require('express');
const cors = require('cors');
const routerExercises = require('../routes/exercise.routes');
const routerParks = require('../routes/parks.routes');
class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		// Path
		this.exercisesPath = '/api/exercises';
		this.parksPath = '/api/parks';
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

	// Routes
	routes() {
		this.app.use(this.exercisesPath, routerExercises);
		this.app.use(this.parksPath, routerParks);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`server in ${this.port}`);
		});
	}
}

module.exports = Server;
