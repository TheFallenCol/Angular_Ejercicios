const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
  export const environment = {
    baseUrl: "${process.env['BASE_URL']}",
    ejemplo_otra_key: "${process.env['EJEMPLO_OTRA_KEY']}"
  };
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync( targetPath, envFileContent );


