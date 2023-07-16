const {Router} = require('express')
const User = require('./models/user')
const bcrypt = require('bcrypt')
const router = Router()


router.post('/login', async (req, res) => {
 
    const { nome, senha } = req.body
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try{
    const user = await User.findOne({where: {
        nome: nome
    }})

    if(!user){
        return res.status(402).json({
            msg: `User ${req.body.nome} not exist.`,
          })
    }
    const valid_pass = bcrypt.compareSync(senha, user.senha)
    if (!valid_pass) {
        return res.status(401).json({
          msg: 'User name or password is invalid!.',
        })
      }
      res.status(200).json({
        msg: `Welcome ${req.body.nome}`,
        data: user
      })
    }catch (error) {
        console.error(error);
        res.status(500).json({
          msg: error.message
        })
      }
})

router.get('/get', async (req, res) => {
    const { nome } = req.body

    try {
        const user = await User.findOne({
            attributes: { exclude: ['senha', 'updatedAt', 'createdAt'] }
          },{where:{
            nome : nome
        }})

        if(!user){
            return res.status(401).json({msg: 'Nobody find!'})
        }
        res.status(200).json({user})

    }catch(err){
        console.error(err),
        res.status(500).json({error: err})
    }
})

router.get('/getall', async (req, res) => {
    try{
    const users = await User.findAll({
        attributes: { exclude: ['senha', 'updatedAt', 'createdAt'] }
      })
    res.status(200).json({users})
    }catch(err){
        console.error(err),
        res.status(500).json({error: err})
    }
})

router.post('/register', async (req, res) => {
    const { nome, senha } = req.body

    try{
    const nameExist = await User.findOne({
        where:{
          nome: nome
        }
    })

    if (nameExist) {
        return res.status(401).json({ msg: 'Name already used!.' })
      }

    const user = await User.create({
        nome, 
        senha: await bcrypt.hash(senha, 10)
    })
    res.status(200).json({msg: `User registered! Welcome ${nome}`})
}catch(err){
    console.error(err),
    res.status(500).json({error: err})
}
})

module.exports = router