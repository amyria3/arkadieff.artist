// server.js by ChatGPT


const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

// Stelle den MIME-Typ für JavaScript-Dateien ein
express.static.mime.types['js'] = 'text/javascript';

// Definiere Routen
app.get('/', (req, res) => {
  // Lese den Inhalt der index.html-Datei
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Lesen der index.html-Datei:', err);
      return;
    }

    res.send(data);
  });
});

// Statische Dateien wie "app.js" bereitstellen
app.use(express.static(__dirname + '/'));

// Starte den Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});