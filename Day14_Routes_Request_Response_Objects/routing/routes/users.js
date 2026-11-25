

import { Router } from "express";

const router = Router();
router.post('/req/:name/:age' , (req,res)=>{ res.json({param:req.params , method:req.method, url: req.originalUrl, path: req.path }  ) });


router.get("/:id",(req,res)=>{ res.json({id:req.params.id})});

export default router;