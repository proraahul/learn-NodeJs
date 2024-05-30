const express = require('express');
const router = express.Router();

const MenuItem = require("../models/Menu");



//POST route to add a Menu
router.post("/", async (req, res) => {
    try {
      const data = req.body; //assuming the req.body contains the menu data
      const newMenu = new MenuItem(data);
  
      // save the new menu to the database
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  });
  
  // get method to get the menu
  router.get("/", async (req, res) => {
    try {
      const response = await MenuItem.find();
      console.log("data fetched successfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  });

  router.get("/:tasteType", async (req, res) => {
    try {
      // extract the work type from the URL parameter
      const tasteType = req.params.tasteType;
      if(tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour"){
        const response = await MenuItem.find({ taste: tasteType });
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({error: "Invalid taste type"});
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({err: "Internal Server Error"});
    }
  });

  // update operation
router.put("/:id", async (req, res) => {
    try {
      const menuId = req.params.id; //extract the id from the URL parameter
      const updateMenuData = req.body; //update data for the person
  
      const updatedMenuResponse = await MenuItem.findByIdAndUpdate(
        menuId,
        updateMenuData,
        {
          new: true, //return the updated document
          runValidators: true, //Run mongoose validation
        }
      );
  
      if (!updatedMenuResponse) {
        return res.status(404).json({ error: "Menu Not Found" });
      }
  
      console.log("data updated");
      res.status(200).json(updatedMenuResponse);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  });

  // delete operation
router.delete("/:id", async (req, res) => {
    try {
      const menuId = req.params.id; //extract the id from the URL parameter
      const deletedMenuResponse = await MenuItem.findByIdAndDelete(menuId);
      if (!deletedMenuResponse) {
        return res.status(404).json({ error: "Menu Not Found" });
      }
      console.log("data deleted");
      res.status(200).json(deletedMenuResponse);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  });
  

module.exports = router
