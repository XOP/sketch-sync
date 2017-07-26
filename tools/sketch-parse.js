import path from 'path';
import { parseFile } from 'kactus-cli';

const fileName = '45-2.sketch';
const filePath = path.join(__dirname, '../', fileName);

parseFile(filePath)
    .then((pathName) => {
        console.log(`"${fileName}" has been successfully parsed to "${pathName}"`);
    })
    .catch(err => {
        console.error(`Oh no! ${err}`);
    });
