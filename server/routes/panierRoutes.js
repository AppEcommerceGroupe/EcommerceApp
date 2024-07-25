const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController'); 

router.get('/getAll', async (req, res) => {
  console.log('Received request to /getAll');
  try {
    const results = await panierController.getAll();
    console.log('Sending response:', results);
    res.status(200).json(results);
  } catch (error) {
    console.error('Response Error:', error);
    res.status(500).json({ error: error.message });
  }
});
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
    try {
      await panierController.delete(id);
      res.status(200).json('Sending response:');
    } catch (error) {
      console.error('Response Error:', error);
      res.status(500).json({ error: error.message });
    }
  });
  router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const paniers = req.body;
    try {
       await panierController.update(id,paniers);
      res.status(200).json('Sending response:');
    } catch (error) {
      console.error('Response Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
