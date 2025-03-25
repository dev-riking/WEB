import { Sequelize } from 'sequelize'

// const sequelize = new Sequelize('disciplinabd', 'root', 'BemVindo!',{
//     host: 'localhost',
//     dialect: "mysql",
//     port: 3306
// });

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './database/disciplinabd.sqlite'
});

export async function syncDatabase() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false})
        console.log('Conectado com sucesso!')
    }catch (error){
        console.error('ERROR!')
    }
}

export default sequelize