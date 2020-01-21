const router = require('express').Router();

const db = require('../data/dbConfig');

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: 'Sorry, can\'t get a list of cars.'})
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({ error: 'Sorry, we lost that car.'}))
})

router.post('/', (req, res) => {
    const carDetail = req.body;
    db('cars').insert(carDetail)
        .then(ids => {
            db('cars').where({ id: ids[0]})
            .then(newCar => res.status(201).json(newCar))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Sorry, no adding cars today.'})
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where({ id })
    .update(req.body)
    .then(car => res.json(car))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    db('cars')
    .where({id: req.params.id})
    .del()
    .then(car => res.status(201).json(car))
    .catch(err => console.log(err))
})

module.exports = router;