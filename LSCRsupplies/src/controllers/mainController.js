const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const { detail, index } = require('./productsController');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	index: (req, res) => {
		// Do the magic
		
	/* const producto_visitado = products.filter(function (prod) {
		return (prod.category === "visited");

    });  
	const producto_insale = products.filter(function (prod) {
		return (prod.category === "in-sale");

	});*/
	
	res.render("index");
		   
	},	
	search: (req, res) => {
		// Do the
		
		/* let buscar_original = req.query.keywords;
		buscar=buscar_original.toLowerCase();
		const search_prod = products.filter(prod => {
			let min_prod = prod.name.toLowerCase();
			if(min_prod.includes(buscar)){
				return true;
			};
			return;
			
		})
		res.render("results", {search_prod, toThousand, buscar_original});
 */
	},
};

module.exports = controller;
