var TreeTypes = require('../model/treetypes-model')
var common = require('../common/common')
// const mongoose = require('mongoose')

// const e = require('express')
// const uuidV4 = require('uuid/v4');

// insert a new tree type
exports.createtreetype = (req, res) => {
    console.log(common.createGUID)
    if(!req.body){
        res.status(400).send({
            message: "Content can't be empty"
        })
        return
    }

    const treetype = new TreeTypes({
        TreeTypeID: common.createGUID,
        TreeTypeName: req.body.TreeTypeName
    })
    //console.log(treetype)
    treetype
        .save(treetype)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured in inserting data"
            })
        })
}

// fetch all tree types
exports.findalltreetype = (req, res) => {
    TreeTypes.find()
        .then(treetypes => {
            res.send(treetypes)
           // res.send("http://localhost:9001/")
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured in retreiving data"
            })
        })
}

// fetch tree type by treetypeid
exports.findtreetypebyid = (req, res) => {
    const id = req.params.id

    // obj_details= TreeTypes.find({ TreeTypeID: mongoose.mongo.ObjectId(treetypeid) })
    // var Id = mongoose.mongo.ObjectId(obj_details._id)
    // console.log(` 111111 : ${Id}`)


// //    // console.log(TreeTypes.find({ TreeTypeID: mongoose.mongo.ObjectId(treetypeid) }))
// //    // console.log(TreeTypes.findById(mongoose.mongo.ObjectId(treetypeid)))
//     TreeTypes.find({ TreeTypeID: mongoose.mongo.ObjectId(treetypeid) }) //.findByIdAnpdate(treetypeid, req.body, {useFindAndModify: false})
    TreeTypes.findById(id)
        .then(treetypedetails => {
            res.send(treetypedetails)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured in retreiving data"
            })
        })
}

// update tree types
exports.updatetreetype = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Data to update can't be empty"
        })
        return
    }

    const id = req.params.id
    console.log(id)

    // TreeTypes.findByIdAndUpdate(id, {
    //     TreeTypeID: req.body.TreeTypeID,
    //     TreeTypeName: req.body.treetypename
    // }, (err, docs) => {
    //     if(err)
    //     {
    //         res.status(500).send({
    //                         message: err.message || "Error occured in retreiving data"
    //                     })
    //     }
    //     else{
    //         res.send(details)
    //     }
    // })

    // TreeTypes.updateOne({ _id: id }, req.body)
    // .then(details => {
    //     res.send(details)
    // })
    // .catch(function (error) {
    //     res.status(404).send(err);
    // });

    // obj_details= TreeTypes.find({ TreeTypeID: mongoose.mongo.ObjectId(treetypeid) })
    // var Id = mongoose.mongo.ObjectId(obj_details._id)

    TreeTypes.findByIdAndUpdate(id, req.body, {new: true})
    .then(details => {
        if(!details){
            res.status(404).send({message: `Can't update the tree type with ${id}.`})
        }
        else{
            res.send(details)
        }
    })
    .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured in retreiving data"
            })
    })
        // .then(treetypes => {
        //     if(!treetypes){
        //         res.status(404).send({message: `Can't update the tree type with ${id}.`})
        //     }else{
        //         res.send(treetypes)
        //     }
        // })
        // .catch(err => {
        //     res.status(500).send({
        //         message: err.message || "Error occured in retreiving data"
        //     })
        // })
}

// update tree types
exports.deletetreetype = (req, res) => {

    const id = req.params.id

    TreeTypes.findByIdAndDelete(id)
        .then(treetypes => {
            if(!treetypes){
                res.status(404).send({message: `Can't delete the tree type with ${id}.`})
            }else{
                res.send({message: `Tree type deleted successfully`})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured in retreiving data"
            })
        })
}