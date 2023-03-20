const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    res.json(db);
}
);

router.post('/api/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
      const newNote = {
      title,
      text,
      tip_id: uuidv4(),
      };
  
// readAndAppend(newNote, './db/db.json');
const readAndAppend = ('./db/db.json', newNote) {
    FileSystem.readFile(/db/db.json, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
        }
    });
};
     //fs.readFile

     //fs.writeFile
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });

module.exports = router;