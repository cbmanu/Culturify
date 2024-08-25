import express from "express";
import File from "../models/File.js";
import multer from "multer";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });
//files
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = new File({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: req.file.buffer,
    });

    await file.save();
    res.json(file.id);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "File upload failed", error });
  }
});

// Route to retrieve a file by filename
router.get("/file/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res
        .status(404)
        .json({ success: false, message: "File not found" });
    }

    res.set({
      "Content-Type": file.contentType,
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    });

    res.status(200).json([file.data, file.filename]);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving file", error });
  }
});
export default router;
