const express = require('express');

const Recipes = require('./db-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({message: 'There are no recipes available'}, err)
        })
})


router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params;
        Recipes.getShoppingList(id)
            .then(steps => {
                if(steps.length) {
                    res.status(200).json(steps)
                } else {
                    res.status(404).json({message: 'The recipe instruction with the specified ID do not exist'})
                }
            })
            .catch(err => {
                res.status(500).json({errorMessage: 'There was a problem with the database'}, err)
                })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
        Recipes.getInstructions(id)
            .then(inst => {
                if(inst) {
                    res.status(200).json(inst)
                } else {
                    res.status(404).json({message: 'The instructions with the specified ID does not exist'})
                }
            })
            .catch(err => {
                res.status(500).json({errorMessage: 'There was a problem with the database'})
            })
})

module.exports = router;

