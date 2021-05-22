const express = require('express')
const treetype_controller = require('../controller/treetype-controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Api started...')
})

// Treetypes api
router.post('/api/treetypes', treetype_controller.createtreetype)
router.get('/api/treetypes', treetype_controller.findalltreetype)
router.get('/api/treetypes/:id', treetype_controller.findtreetypebyid)
router.put('/api/treetypes/:id', treetype_controller.updatetreetype)
router.delete('/api/treetypes/:id', treetype_controller.deletetreetype)



module.exports = router