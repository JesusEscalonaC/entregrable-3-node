const db = require('../utils/database');
const Users = require('../models/users.model');
const Courses = require('../models/courses.model');
const Categories = require('../models/categories.model');
const Videos = require('../models/videos.models');
const UsersCourses = require('../models/users-courses');

const users = [
    {firstname: 'jesus', lastname: 'escalona', email: 'jesus@gmail.com', password: '1234'},
    {firstname: 'daniel', lastname: 'escalona', email: 'daniel@gmail.com', password: '1234'},
    {firstname: 'pedro', lastname: 'escalona', email: 'pedro@gmail.com', password: '1234'}
]

const courses = [
    {
    title:"Ingles",
    description: "Se aprendera desde lo basico hasta lo mas avanzado en ingles",
    instructor: "James"
    },
    {
    title: "Frances",
    description: "Se aprendera desde lo basico hasta lo mas avanzado en frances",
    instructor: "Louis"
    },
    {
    title: "Japones",
    description: "Se aprendera desde lo basico hasta lo mas avanzado en japones",
    instructor: "Tadashi",
    },
    {
    title: "Portugues",
    description: "Se aprendera desde lo basico hasta lo mas avanzado en portugues",
    instructor: "Pepe"
    },
    {
    title: "Español",
    description: "Se aprendera desde lo basico hasta lo mas avanzado en español",
    instructor: "Juan"
    },

];

const categories = [
    {name: 'idiomas', course_id: 1},
    {name: 'idiomas', course_id:2},
    {name: 'idiomas', course_id:3},
    {name: 'idiomas', course_id:4},
    {name: 'idiomas', course_id:5},
]
const videos = [
    {title: 'introduccion al ingles', url: 'www.ingles.com', course_id: 1},
    {title: 'ingles avanzado', url: 'www.ingles.com', course_id: 1},

    {title: 'introduccion al frances', url: 'www.frances.com', course_id: 2},
    {title: 'frances avanzado', url: 'www.frances.com', course_id: 2},

    {title: 'introduccion al japones', url: 'www.japones.com', course_id: 3},
    {title: 'japones avanzado', url: 'www.japones.com', course_id: 3},

    {title: 'introduccion al portugues', url: 'www.portugues.com', course_id: 4},
    {title: 'portugues avanzado', url: 'www.portugues.com', course_id: 4},

    {title: 'introduccion al español', url: 'www.español.com', course_id: 5},
    {title: 'español avanzado', url: 'www.español.com', course_id: 5},
]
    
const usersCourses = [
    {user_id: 1, course_id: 1},
    {user_id: 1, course_id: 2},
    {user_id: 2, course_id: 3}, 
    {user_id: 2, course_id: 4},
    {user_id: 3, course_id: 5}
]

db.sync({force: true})
.then(()=>{
    console.log('iniciando la creacion');
    users.forEach((user)=> Users.create(user));

    setTimeout(() => {
        courses.forEach((course)=> Courses.create(course))
    }, 100);

    setTimeout(() => {
        categories.forEach((category)=> Categories.create(category))
    }, 200);

    setTimeout(() => {
        videos.forEach((video)=> Videos.create(video))
    }, 300);

    setTimeout(() => {
        usersCourses.forEach((usercourse)=> UsersCourses.create(usercourse))
    }, 400);
})
    .catch((error)=>console.log(error));