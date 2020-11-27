// ************ Require's ************
const express = require('express');
const router = express.Router();
var multer = require('multer');
var {path} = require('../app');

/* Require path para multer */
const path1 = require("path");

var {body, validationResult, check} = require ('express-validator');
const productsController = require('../controllers/productsController.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path1.join (__dirname, '../../public/images/products'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path1.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

/* GET products page. */
router.get('/', productsController.index)

/* GET productDetail. */
router.get('/productDetail/:id', productsController.detail)
  /* res.render('productDetail');
}); */

router.get("/mycart",productsController.mycart);

/*** CREATE ONE PRODUCT ***/ 

router.get('/create', productsController.create); 
router.post('/', upload.any(),productsController.store); 

module.exports = router;




// // ************ Controller Require ************
// const productsController = require('../controllers/productsController');

// /*** GET ALL PRODUCTS ***/ 
// router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
// router.get('/create/', productsController.create); 
// router.post('/', productsController.store); 

// /*** GET ONE PRODUCT ***/ 
// router.get('/detail/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
// router.get('/:id/edit', productsController.edit); 
// router.put('/detail/:id', productsController.update); 

// /*** DELETE ONE PRODUCT***/ 
// router.delete('/delete/:id', productsController.destroy); 

// /*** Export Controller */
// module.exports = router;