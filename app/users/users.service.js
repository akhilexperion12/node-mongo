
const { Users } = require('./../../models/users');

const list = async (req, res) => {
    setTimeout(async ()=>{
        const users = await Users.find();
        return res.status(200).message('success').return(users);
    },5000);
    
};

const userDetails = async (req, res) => {

    const userId = req.params.id;

    const user = await Users.find({ where : { id:  userId}});

    return res.message('RESULT_NOT_FOUND').return(user);

};

module.exports = { list, userDetails };
