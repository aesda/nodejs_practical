import express from "express";
const router = express.Router();

app.get("/", (req, res) => {
    res.send("All jobs");

});

  
router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({status: "Ok", data: {id}  });
});

router.post("/:id", (req, res) =>{
    const id = req.id;
    res.json({status: "Ok", data: {id}  });
});

router.put("/:id", (req, res) =>{
    
    res.json({status: "Ok", message:`job with id ${req.params.id} updated successfully`, data: body });
});

router.delete("/:id", (req, res) =>{
    
    res.json({status: "Ok", message:`job with id ${req.params.id} deleted successfully`, data: body });
});

router.put("/:id", (req, res) =>{
    
    res.json({status: "Ok", message:`job with id ${req.params.id} updated successfully`, data: body });
});

router.put("/:id", (req, res) =>{
    
    res.json({status: "Ok", message:`job with id ${req.params.id} updated successfully`, data: body });
});




  export default router;