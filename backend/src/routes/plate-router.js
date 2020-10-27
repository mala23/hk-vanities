const express = require('express')

const PlateCtrl = require('../controllers/plate-ctrl')

const router = express.Router()

router.post('/plate', PlateCtrl.createPlate)
router.put('/plate/:id', PlateCtrl.updatePlate)
router.delete('/plate/:id', PlateCtrl.deletePlate)
router.get('/plate/:id', PlateCtrl.getPlateById)
router.get('/plates', PlateCtrl.getPlates)

module.exports = router
