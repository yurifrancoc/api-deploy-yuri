const { knex } = require('../conexao');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, senhaHash);

        const usuarioEncontrado = await knex('usuarios').where({ id: id }).first();


        if (!usuarioEncontrado) {
            return res.status(404).json('Usuario não encontrado');
        }


        const { senha, ...usuario } = rows[0];

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
}

module.exports = verificaLogin