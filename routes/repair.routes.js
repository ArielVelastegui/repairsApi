const { Router } = require('express');
const {
  findAllRepairs,
  findOneRepair,
  createRepair,
  updateRepair,
  deleteRepair,
} = require('../controllers/repair.controller');
const { validExistRepairs } = require('../middlewares/repairs.middleware');

const router = Router();

router.get('/', findAllRepairs);

router.get('/:id', validExistRepairs, findOneRepair);

router.post('/', createRepair);

router.patch('/:id', validExistRepairs, updateRepair);

router.delete('/:id', validExistRepairs, deleteRepair);

module.exports = {
  repairRouter: router,
};
