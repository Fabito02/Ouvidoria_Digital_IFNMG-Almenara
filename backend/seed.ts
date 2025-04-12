import connection from './src/db';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

async function runSeeds() {
    const promiseConnection = connection.promise();
    
    try {
        console.log('Iniciando processo de seed...');

        await createDatabase(promiseConnection);

        await createTables(promiseConnection);
        
        await insertSeeds(promiseConnection);

        console.log('Seed concluído com sucesso!');
    } catch (err) {
        console.error('Erro durante a execução dos seeds:', err);
    } finally {
        connection.end();
        process.exit(0);
    }
}

async function createDatabase(conn: mysql.Connection) {
    try {
        await conn.query('CREATE DATABASE IF NOT EXISTS Auris');
        console.log('Banco de dados Auris verificado/criado');
        await conn.query('USE Auris');
    } catch (err) {
        console.error('Erro ao criar/verificar o banco de dados:', err);
        throw err;
    }
}

async function createTables(conn: mysql.Connection) {
    const queries = [
        `CREATE TABLE IF NOT EXISTS Users (
            User_ID INT AUTO_INCREMENT PRIMARY KEY,
            Nome VARCHAR(100) NOT NULL,
            Email VARCHAR(100) UNIQUE NOT NULL,
            Telefone VARCHAR(20),
            Foto_Perfil VARCHAR(255),
            SIAPE VARCHAR(50),
            Tipo ENUM('servidor', 'discente', 'docente', 'direção', 'outro') NOT NULL,
            Senha VARCHAR(255) NOT NULL,
            Data_Criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
            Role ENUM('user', 'admin') DEFAULT 'user'
        ) ENGINE=InnoDB`,
        
        `CREATE TABLE IF NOT EXISTS Endereco (
            Endereco_ID INT AUTO_INCREMENT PRIMARY KEY,
            Logradouro VARCHAR(100) NOT NULL,
            Bairro VARCHAR(50) NOT NULL,
            Cidade VARCHAR(50) NOT NULL,
            Numero VARCHAR(10),
            Complemento VARCHAR(100),
            Estado CHAR(2) NOT NULL,
            CEP CHAR(9) NOT NULL,
            User_ID INT NOT NULL,
            FOREIGN KEY (User_ID) REFERENCES Users(User_ID) ON DELETE CASCADE
        ) ENGINE=InnoDB`,
        
        `CREATE TABLE IF NOT EXISTS Manifestacoes (
            Manifestacao_ID INT AUTO_INCREMENT PRIMARY KEY,
            Data_Envio DATETIME DEFAULT CURRENT_TIMESTAMP,
            Titulo VARCHAR(100) NOT NULL,
            Descricao TEXT NOT NULL,
            Tipo VARCHAR(50),
            Tipo_manifestacao VARCHAR(50),
            Anonimo BOOLEAN DEFAULT FALSE,
            Local VARCHAR(100),
            Status ENUM('pendente', 'em_andamento', 'concluido') DEFAULT 'pendente',
            User_ID INT NOT NULL,
            FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
        ) ENGINE=InnoDB`,
        
        `CREATE TABLE IF NOT EXISTS Respostas (
            Resposta_ID INT AUTO_INCREMENT PRIMARY KEY,
            Descricao TEXT NOT NULL,
            Data DATETIME DEFAULT CURRENT_TIMESTAMP,
            User_ID INT NOT NULL,
            Manifestacao_ID INT NOT NULL,
            FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
            FOREIGN KEY (Manifestacao_ID) REFERENCES Manifestacoes(Manifestacao_ID) ON DELETE CASCADE
        ) ENGINE=InnoDB`,
        
        `CREATE TABLE IF NOT EXISTS Logs (
            Log_ID INT AUTO_INCREMENT PRIMARY KEY,
            Acao VARCHAR(100) NOT NULL,
            Data_Acao DATETIME DEFAULT CURRENT_TIMESTAMP,
            User_ID INT,
            FOREIGN KEY (User_ID) REFERENCES Users(User_ID) ON DELETE SET NULL
        ) ENGINE=InnoDB`
    ];

    for (const [index, query] of queries.entries()) {
        try {
            await conn.query(query);
            console.log(`Tabela ${index + 1} criada/verificada com sucesso`);
        } catch (err) {
            console.error(`Erro ao criar tabela ${index + 1}:`, err);
        }
    }
}

async function insertSeeds(conn: mysql.Connection) {
    try {
        const senhaPadrao = '123456';
        const hashedSenha = await bcrypt.hash(senhaPadrao, 10);

        const users = [
            {
                Nome: 'Admin Sistema',
                Email: 'admin@auris.com',
                Telefone: '(11) 99999-9999',
                Tipo: 'direção',
                Role: 'admin',
                Senha: hashedSenha
            },
            {
                Nome: 'Professor João Silva',
                Email: 'joao.silva@escola.com',
                Telefone: '(11) 98888-8888',
                SIAPE: '1234567',
                Tipo: 'docente',
                Senha: hashedSenha
            },
            {
                Nome: 'Aluna Maria Souza',
                Email: 'maria.souza@escola.com',
                Telefone: '(11) 97777-7777',
                Tipo: 'discente',
                Senha: hashedSenha
            }
        ];

        for (const user of users) {
            await conn.query(
                'INSERT IGNORE INTO Users SET ?',
                user
            );
        }
        console.log('Usuários inseridos/verificados');

        const enderecos = [
            {
                Logradouro: 'Rua das Flores',
                Bairro: 'Centro',
                Cidade: 'São Paulo',
                Numero: '100',
                Complemento: 'Sala 101',
                Estado: 'SP',
                CEP: '01001-000',
                User_ID: 1
            },
            {
                Logradouro: 'Avenida Paulista',
                Bairro: 'Bela Vista',
                Cidade: 'São Paulo',
                Numero: '2000',
                Estado: 'SP',
                CEP: '01310-200',
                User_ID: 2
            }
        ];

        for (const endereco of enderecos) {
            await conn.query(
                'INSERT IGNORE INTO Endereco SET ?',
                endereco
            );
        }
        console.log('Endereços inseridos/verificados');

        const manifestacoes = [
            {
                Titulo: 'Problema na iluminação',
                Descricao: 'As luzes do corredor principal não estão funcionando',
                Tipo: 'Infraestrutura',
                Tipo_manifestacao: 'Reclamação',
                Local: 'Corredor principal, 2º andar',
                User_ID: 2,
                Status: 'pendente'
            },
            {
                Titulo: 'Solicitação de material',
                Descricao: 'Precisamos de mais livros para a biblioteca',
                Tipo: 'Recursos',
                Tipo_manifestacao: 'Solicitação',
                Local: 'Biblioteca',
                User_ID: 3,
                Status: 'em_andamento'
            }
        ];

        for (const manifestacao of manifestacoes) {
            await conn.query(
                'INSERT IGNORE INTO Manifestacoes SET ?',
                manifestacao
            );
        }
        console.log('Manifestações inseridas/verificadas');

        const respostas = [
            {
                Descricao: 'Já solicitamos a manutenção da iluminação',
                User_ID: 1,
                Manifestacao_ID: 1
            },
            {
                Descricao: 'Os livros já foram encomendados e chegarão em breve',
                User_ID: 1,
                Manifestacao_ID: 2
            }
        ];

        for (const resposta of respostas) {
            await conn.query(
                'INSERT IGNORE INTO Respostas SET ?',
                resposta
            );
        }
        console.log('Respostas inseridas/verificadas');

    } catch (err) {
        console.error('Erro ao inserir seeds:', err);
        throw err;
    }
}

runSeeds();