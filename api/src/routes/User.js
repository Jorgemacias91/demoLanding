const server = require('express').Router();
const { User } = require('../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const verifyToken = require("./verifyToken");



server.post('/', async (req, res) => {
    const { username, name, lastname, email, birth, password } = req.body
    
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

// server.get('/:idUser', (req, res) => {
//     const { idUser } = req.params;

//     try {

//         User.findOne({
//             where: { id: idUser }
//         })
//             .then(result => {
//                 res.json(result)
//             })

//     } catch (error) {
//         res.status(400).json({ message: `Error ${error}` })

//     }

// })

server.get('/', (req, res) => {
        
    
    try {

        User.findAll()
            .then(result => {
                res.json(result)
            })

    } catch (error) {
        res.status(400).json({ message: `Error ${error}` })

    }

})

server.put('/:idUser', (req, res) => {
    const { idUser } = req.params;
    const { username, name, lastname, email, birth } = req.body

    try {
       

        User.update({
            username,
            name,
            lastname,
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

server.post('/signin', (req,res) => {
    const {username, password} = req.body;

    const compare = async (password, passwordDataBase ) => {
        return bcrypt.compare(password,passwordDataBase)
    };

    User.findOne({
        where: {username}
    })
    .then(async (user) => {
        if(user){
            const comparer = await compare(password, user.password);

            if(comparer){
                let token = jwt.sign({id:user.id}, "secret_key", {
                    expiresIn: 60*60*24
                });
                user.password="";
                res.json({
                    user,
                    auth:true,
                    token
                });
            }else{
                res.json("contraseña incorrecta")
            }
        }else{
            res.json("usuario inexistente")
        }
    })
    .catch((err) => {
        res.json({message: `Error ${err}`})
    })
})

server.post("/userdata/token", verifyToken, (req, res, next) => {
	User.findByPk(req.userId)
		.then((user) => {
			user.password = 0;
			res.json(user);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		});
});

module.exports = server