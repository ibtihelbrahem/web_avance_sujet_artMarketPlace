const express = require('express');
const router = express.Router();
const multer = require('multer');
const artwork = require('../src/artist/artworkModel');
let filename='';


const mystorage = multer.diskStorage({
destination: './uploads',
filename: (req, file, callback) =>{
    let date = Date.now();

    let f1 = date + '.' + file.mimetype.split('/')[1];
    filename = f1;
    callback(null, f1);
}

})
const upload = multer({storage: mystorage})

router.post('/ajout', upload.any('image'), (req, res)=>{
let data = req.body;
let artwo = new artwork(data);
artwo.date = new Date();
artwo.image = filename;
if (data.tags){
artwo.tags = data.tags.split(',');}

artwo.save() 
    .then(
        (saved)=>{
            filename='';
            res.status(200).send(saved);
        }
    )
    .catch(
        err=>{
            res.status(400).send(err)
        }
    )
})
router.get('/all', (req , res)=> {
    artwork.find({})
    .then(
        (artworks)=>{
            res.status(200).send(artworks);
            
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
    artwork.findOne({_id:id})
    .then(
        (artworks)=>{
            res.status(200).send(artworks);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})
router.get('/getbyidArtist/:id', (req , res)=> {
    let id =req.params.id
    artwork.find({idArtist:id})
    .then(
        (artworks)=>{
            res.status(200).send(artworks);
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
    artwork.findByIdAndDelete({_id:id})
    .then(
        (artwork)=>{
            res.status(200).send(artwork);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})
router.put('/update/:id', upload.any('image'), (req , res)=> {
    let id =req.params.id
    let data = req.body;
    data.tags=data.tags.split(',');
    
    if (filename.length > 0){
        data.image = filename;
    }
    artwork.findByIdAndUpdate({_id:id} , data)
    .then(
        (artwork)=>{
            filename ='';
            res.status(200).send(artwork);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})

module.exports = router;