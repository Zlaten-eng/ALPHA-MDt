const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VV2Y6jOBT9lZZfk+qwL5FKGiCEkJ0QstRoHgyYJawxJoS06pdG8w/9YyMqVaqSepkanixjn3vuvecefwN5EVdohlow/AZKHF8gQd2StCUCQ6DWQYAw6AMfEgiGwJ4k13CiLuOy6clc6c6mE940rydnLfHl9UzaJlhcLJzRbPEInvugrN009n4DODpCz2nT+UnIjgMn3WF6tk9u2K1ixJjpKNgHVE2kGaOFi0fw3CHCGMd5qJcRyhCG6Qy1axjjz9Gvx3V41Dh6csx7PBfsB+f5ujeeyMrkhqg430Y3367MSOIO1Ofoo2gXthwrB6Jlm57OchIqSKG37U1chsZmVx9QsmymnNhwd/pVHObIN32Uk5i0n657sVwHpa1HG68KHRrx9rid9nbsPC5PvKVhxahR0CRLaZV+krhTsRf5qehpmazqh1Oz81yHWs1VMTh6t8Nap8aKpZj6LL1JH4mv8ZtWkv9T92qm2Iw/J9xiRmnqWV1r03SDhbi15nUU3xorGmsjdU33WOlz9FOpue1qOjBYmWJ6hWlPpgVNVMdYBkKW8tZ0215gCJG2Kd7pQ1Lj37FslFWU9C4o3JiOVS0P/EaQ0psh50g83oxJstEO41E0Ps0jjlEWoUiNVvnkoo5asb56Bb0r+bI512mwSSVKJETf2nsjbh5fMkpQa/pgSD/3AUZhXBEMSVzk3Z7M9AH0LzbyMCIv1QV+W6SOIxs9qgpaOF6YrnuAg2RayYpQl2MYOEFlJadlvUkeQR+UuPBQVSF/ElekwO0CVRUMUQWGf740qssZo6wgaBr7YAgYnhMliaNkmuL/qL42ESQVLMuvOSKgDwJcZAsEhgTXqA9eLigCr2iqogs8J3IcLY9GjMQzoiQwksAKtNJlmN2DbuMMVQRmJRjSIifQtCgL4vNffZCjK7nLp0uapfsgiHFFnLwu0wL6b9p6+wk9r6hzYre5p3ULhMHwwzYiJM7DqsusziH2oviCtC4PMAxgWqHnPvDRJfZQhweOyFRpSmy30VkxzloyfdoyftNVLiry+xGepXgUQP4Buaz7wDGs8CAhRnoIOF7yRYESaZ8HXTnuk9vd+aWQtqO0co+pcMm5UWipJotdObAsb96GL2K4KwBh5L9V2YVeUpfbIkH5b3AVjTeOmzRJT3CQo6mmGuZ6u3hqLM77gHtXFhh+e3dLrfA7vB2vcuuNoYOuW12cH9QwFOUfBZHD7jSwv/8dEtyGIf6itxVBcZ5/seOwxt//gbgq8o7Ba3s6bB8RGKcVGAJtdRZLcaHpM3Z2qxTDUPRQ0UIFvLfzbTrv8t+J+7nkJfZyM5ncnupoE98yx9QHA0n0k61ym2wJxlBeN23x+BMQMATz63XlmSQ7mSNxsG+O82Cl5aMJ06Rkb8wrF9ujrRyGWS3cjie39OiZTnYrO1YQ2ejEmEUj44QvNEr2Bz7qLS7R3jZV67GLdpfVx2BewK7GsNmedGuu6+sm9VhnN50Ians8X8vUPQqSgcL1xYRIrumaNWX3ul6ngwOsdT5SS90d9MhZs/bnTcYEmeygAzxZd9948a309b2IX0f6LsIgRi/2+9qe/2zj+zxQz/0PGK+G/gvNqTtEx4PJVD85m6vEuIVzrPhUU9eDwYp90pvFlRKhwFy20uIMnrtBL1NIggJnne9nLgR9kMKKKO/z/BOL4MQ+yFqlLG0CyZsNAKX7dHcAnv8FTZhpAKgIAAA=',
    PREFIXE: process.env.PREFIX || "?",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254788409105",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
