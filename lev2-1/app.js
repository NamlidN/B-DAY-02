import fs from 'fs';
import datas from './datas.json' assert {type: "json" };

fs.appendFile('output.txt', '\n' + JSON.stringify(datas), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Content added to file successfully');
  });