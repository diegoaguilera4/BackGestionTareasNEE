import  Express from "express";
const router = Express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  
export default router;