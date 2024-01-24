const express = require('express');
const artistController = require('../src/artist/artistController');
const router = express.Router();
const artist = require('../src/artist/artistModel');

router.post('/login',artistController.loginArtistControllerFn);
router.post('/register',artistController.createArtistControllerFn);

router.get('/getname/:id', (req, res) => {
    let id = req.params.id;

    artist.findById(id)
        .then((foundArtist) => {
            if (foundArtist) {
                res.status(200).send({ name: foundArtist.name });
            } else {
                res.status(404).send({ message: 'Artist not found' });
            }
        })
        .catch((err) => {
            
            res.status(400).send(err);
        });
});

router.get('/all', (req , res)=> {
    artist.find({})
    .then(
        (artists)=>{
            res.status(200).send(artists);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})
router.get('/getbyid/:id', (req , res)=> {
    let id =req.params.id
    artist.findOne({_id:id})
    .then(
        (artist)=>{
            res.status(200).send(artist);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})

router.delete('/supprimer/:id', (req , res)=> {
    let id =req.params.id
    artist.findByIdAndDelete({_id:id})
    .then(
        (artist)=>{
            res.status(200).send(artist);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})



module.exports = router;