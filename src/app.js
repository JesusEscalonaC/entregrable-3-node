const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const Users = require('./models/users.model');
const Courses = require('./models/courses.model');
const Categories = require('./models/categories.model');
const Videos = require('./models/videos.models');
const UsersCourses = require('./models/users-courses');
const userRoutes = require('./routes/users.route');
const courseRoutes = require('./routes/courses.route');
const videoRoutes = require('./routes/videos.route');
const categoriesRoutes = require('./routes/categories.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
db.authenticate()
.then(()=>console.log("autenticacion exitosa"))
.catch((error)=>console.log(error));

initModels();
db.sync({force: false})
.then(() => console.log('base de datos sincronizada'))
.catch((error)=>console.log(error));

app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoriesRoutes);
const PORT = 8000;


app.listen(PORT, () =>{
    console.log(`escuchando desde el puerto ${PORT}`);
})



