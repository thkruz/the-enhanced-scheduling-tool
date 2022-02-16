import fs from 'fs';

/**
 * Reads a file from the express server and sends it back as a json object
 * @param {*} fileName - path to the file to be read
 * @param {*} res - response object
 */
export const sendFile = (fileName, res) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(JSON.parse(data));
  });
};
