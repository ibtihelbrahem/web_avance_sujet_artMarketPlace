const artist = require ('./artistModel')
const bycrypt= require ('bcrypt')
const jwt = require ('jsonwebtoken')
var createArtistControllerFn = async (req, res) => 
{
    data= req.body;
    art = new artist(data);
    salt = bycrypt.genSaltSync(10);
    cryptedPass = await bycrypt.hashSync (data.password , salt);
    art.password = cryptedPass;
    art.save()
        .then(
            (saved)=>{
                res.status(200).send(saved)
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
}
var loginArtistControllerFn = async (req, res) => {
    let data = req.body;
    const art = await artist.findOne({ email: data.email });

    if (!art) {
        return res.status(404).send('Email or password invalid!');
    }

    let validPass = bycrypt.compareSync(data.password, art.password);

    if (!validPass) {
        return res.status(401).send('Email or password invalid!');
    }

    const payload = {
        _id: art._id,
        email: art.email,
        name: art.name
    };

    let token = jwt.sign(payload, '123456789');
    res.status(200).send({ mytoken: token });
} 



module.exports = { createArtistControllerFn,loginArtistControllerFn };