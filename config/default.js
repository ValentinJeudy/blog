module.exports = {
	serverConfig: {
		port: 7000
	},
	dbConfig: {
		uri: 'mongodb://localhost:27017/blog',
		database: 'blog',
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
	},
	logConfig: {},
	corsConfig: {
		origin: '*',
		optionsSuccessStatus: 200,
		// allowedHeaders: ['X-RR-Token', 'Content-Type', 'Accept'],
	},
	jwtConfig: {
		secret: 'trytocrackmykeybitch'
	}
}
