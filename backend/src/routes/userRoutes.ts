import express from 'express';
import connection from '../db';

const router = express.Router();

// Rota para listar todos os usuários sem a senha por segurança
router.get('/users', (req, res) => {
    connection.query('SELECT User_ID, Nome, Email, Telefone, Foto_Perfil, SIAPE, Tipo, Data_Criacao, Role FROM Users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: `Erro ao buscar usuários: ${err.message}` });
        }
        return res.status(200).json(results);
    });
});

// Rota para criar um usuário
router.post('/users', (req, res) => {
    const user = req.body;
    connection.query(
        'INSERT INTO Users SET ?',
        user,
        (err, results: any) => {
            if (err) {
                return res.status(500).json({ error: `Erro ao criar usuário: ${err.message}` });
            }
            return res.status(201).json({ message: 'Usuário criado com sucesso', User_ID: results.insertId });
        }
    );
});

// Rota para obter um usuário pelo ID sem a senha por segurança
router.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    connection.query('SELECT User_ID, Nome, Email, Telefone, Foto_Perfil, SIAPE, Tipo, Data_Criacao, Role FROM Users WHERE User_ID = ?', [userId], (err, results: any[]) => {
        if (err) {
            return res.status(500).json({ error: `Erro ao buscar usuário: ${err.message}` });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        return res.status(200).json(results[0]);
    });
});

// Rota para deletar um usuário e tudo relacionado a ele pelo ID
router.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    connection.beginTransaction((transactionErr) => {
        if (transactionErr) {
            return res.status(500).json({ error: `Erro ao iniciar transação: ${transactionErr.message}` });
        }

        connection.query('DELETE FROM Manifestacoes WHERE User_ID = ?', [userId], (deleteErr) => {
            if (deleteErr) {
                return connection.rollback(() => {
                    res.status(500).json({ error: `Erro ao deletar manifestações: ${deleteErr.message}` });
                });
            }

            connection.query('DELETE FROM Users WHERE User_ID = ?', [userId], (userDeleteErr, results: any) => {
                if (userDeleteErr) {
                    return connection.rollback(() => {
                        res.status(500).json({ error: `Erro ao deletar usuário: ${userDeleteErr.message}` });
                    });
                }

                if (results.affectedRows === 0) {
                    return connection.rollback(() => {
                        res.status(404).json({ error: 'Usuário não encontrado' });
                    });
                }

                connection.commit((commitErr) => {
                    if (commitErr) {
                        return connection.rollback(() => {
                            res.status(500).json({ error: `Erro ao confirmar transação: ${commitErr.message}` });
                        });
                    }

                    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
                });
            });
        });
    });
});

// Rota para atualizar um usuário pelo ID
router.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = req.body;
    connection.query('UPDATE Users SET ? WHERE User_ID = ?', [user, userId], (err, results: any) => {
        if (err) {
            return res.status(500).json({ error: `Erro ao atualizar usuário: ${err.message}` });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    });
});

export default router;
