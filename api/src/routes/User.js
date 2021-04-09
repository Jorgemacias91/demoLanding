const server = require('express').Router();
const { User } = require('../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

server.post('/', async (req, res) => {
    const { username, name, lastname, profilePic, email, birth, password } = req.body
    
    const finder = await User.findOne({
        where: {
            username: username,
        },
    });
    if (finder) {
        return res.json({
            msgUsername: "El usuario ya existe",
        });
    }
    
    if (!finder) {
        const emailFinder = await User.findOne({
            where: {
                email: email,
            },
        });
        if (emailFinder) {
            return res.json({
                msgEmail: "Este email ya esta registrado",
            });
        }
    }
    
    
    
    try {

        const crypter = async (password) => {
            const salt = await bcrypt.genSalt(10);
            return bcrypt.hash(password, salt);
        };

        const hashPass = await crypter(password);

        var newUser = await User.create({
            username,
            name,
            lastname,
            profilePic,
            email,
            birth,
            password : hashPass

        })
        .then(async (newuser) => {
            const token = jwt.sign({ id: newuser.id }, "secret_key", {
                expiresIn: 60 * 60 * 24,
            });
            let obj = { user: newuser, auth: true, token };
					res.json(obj);
				});

        

        

        } catch (error) {
            res.status(400).json({ message: `Error ${error}` })
        }

    })


server.get('/:idUser', (req, res) => {
    const { idUser } = req.params;

    try {

        User.findOne({
            where: { id: idUser }
        })
            .then(result => {
                res.json(result)
            })

    } catch (error) {
        res.status(400).json({ message: `Error ${error}` })

    }

})

server.put('/:idUser', (req, res) => {
    const { idUser } = req.params;
    const { username, name, lastname, profilePic, email, birth } = req.body

    try {
        User.update({
            username,
            name,
            lastname,
            profilePic,
            email,
            birth
        },
            {
                where: { id: idUser }
            }
        )
            .then(() => {
                res.json({ message: "user updated successfully" })
            })

    } catch (error) {
        res.status(400).json({ message: `Error ${error}` })

    }

})

server.delete('/:idUser', (req, res) => {
    const { idUser } = req.params
    try {
        User.destroy({
            where: { id: idUser }
        })
            .then(() => {
                res.json({ message: 'user deleted successfully' })
            })
    } catch (error) {
        res.json({ message: `Error ${error}` })
    }
})


module.exports = server