const Plate = require('../models/plate-model')

createPlate = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a plate',
        })
    }

    const plate = new Plate(body)

    if (!plate) {
        return res.status(400).json({ success: false, error: err })
    }

    plate
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: plate._id,
                message: 'Plate created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Plate not created!',
            })
        })
}

updatePlate = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Plate.findOne({ _id: req.params.id }, (err, plate) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Plate not found!',
            })
        }
        plate.name = body.name
        plate.img = body.img
        plate
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: plate._id,
                    message: 'Plate updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Plate not updated!',
                })
            })
    })
}

deletePlate = async (req, res) => {
    await Plate.findOneAndDelete({ _id: req.params.id }, (err, plate) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!plate) {
            return res
                .status(404)
                .json({ success: false, error: `Plate not found` })
        }

        return res.status(200).json({ success: true, data: plate })
    }).catch(err => console.log(err))
}

getPlateById = async (req, res) => {
    await Plate.findOne({ _id: req.params.id }, (err, plate) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!plate) {
            return res
                .status(404)
                .json({ success: false, error: `Plate not found` })
        }
        return res.status(200).json({ success: true, data: plate })
    }).catch(err => console.log(err))
}

getPlates = async (req, res) => {
    await Plate.find({}, (err, plates) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!plates.length) {
            return res
                .status(404)
                .json({ success: false, error: `Plate not found` })
        }
        return res.status(200).json({ success: true, data: plates })
    }).catch(err => console.log(err))
}

module.exports = {
    createPlate,
    updatePlate,
    deletePlate,
    getPlates,
    getPlateById,
}
