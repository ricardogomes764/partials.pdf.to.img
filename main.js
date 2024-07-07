import express from "express";
import multer from "multer";

import { promises as fs } from "node:fs";
import { pdf } from "pdf-to-img";

const app = express()
const storage = multer.memoryStorage();
const upload = multer({ storage })

app.post('/', upload.single('image'), async (request, response) => {

  try {

    let counter = 1;
    const document = await pdf(request.file.buffer, { scale: 3 });
    for await (const image of document) {
      await fs.writeFile(`page${counter}.png`, image);
      counter++;
    }

    response.status(200).send("Sucesso, arquivo gerado com sucesso!")

  } catch (error) {
    console.log(error);
  }
})

const PORT = 3001
app.listen(PORT, e => console.log(`O App está online, na porta [${PORT}]`))