const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const { detail, index } = require('./productsController');
const controller = {
	index: (req, res) => {
			res.render('index');   
	}
	
};

module.exports = controller;
