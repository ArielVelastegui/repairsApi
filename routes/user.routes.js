const { Router } = require('express');
const {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controllers');
const { validExistUser } = require('../middlewares/users.middleware');

const router = Router();

router.get('/', findAllUsers);

router.get('/:id',validExistUser, findOneUser);

router.post('/', createUser);

router.patch('/:id',validExistUser, updateUser);

router.delete('/:id',validExistUser, deleteUser);

module.exports = {
  userRouter: router,
};
