const db = require('../../dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateProfile,
  findByUserNameLogin
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findByUserNameLogin(userName) {
  return db('users').select('id', 'username', 'password')
      .where('username', userName)
      .first();
};



async function add(user) {
  const id = await db('users').insert(user, 'id')
  console.log(id, 'id')
  return findById(id[0]);
}

function findById(id) { 
  return db('users')
    .where({ id })
    .first();
}


async function updateProfile(id, changes){
  await db('users')
    .where({id: id})
    .update(changes)
  return findById(id[0])
}
