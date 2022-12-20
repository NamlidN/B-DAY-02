import fs from 'fs'



// function writeToFile(content) {
//   fs.mkdir('data', { recursive: true }, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     fs.appendFile('data/myfile.txt', content + '\n', 'utf8', (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       console.log('Content added to file successfully');
//     });
//   });
// }
fs.mkdir('data', { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Directory created successfully');
  });

  fs.exists('myfile.txt', (exists) => {
    if (!exists) {
      fs.writeFile('myfile.txt', 'Hello, World!', 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
  
        console.log('File created successfully');
      });
    } else {
      console.log('File already exists');
    }
  });

function writeToFile(content) {
    fs.appendFile('myfile.txt', content + '\n', 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log('Content added to file successfully');
    });
  }
  
  // Aufruf der Funktion mit verschiedenen Inhalten
  writeToFile('Hello, World!'); // Fügt den Text "Hello, World!" in einer neuen Zeile hinzu
  writeToFile('Hello, Universe!'); // Fügt den Text "Hello, Universe!" in einer neuen Zeile hinzu
  writeToFile('Hello, Galaxy!'); 