const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors")
const cookieParser = require('cookie-parser')
const userRoutes = require('./src/routes/users')
const videoRoutes = require ('./src/routes/videos')
const commentRoutes = require ('./src/routes/comments')
const authRoutes = require ('./src/routes/auth')
const announcementRoutes = require ('./src/routes/announcements')
const feedbackRoutes = require ('./src/routes/feedback')

const app = express()
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

const connect = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("Conectado ao banco de dados");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/announcement", announcementRoutes);
app.use("/api/feedback", feedbackRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Algo está errado!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
