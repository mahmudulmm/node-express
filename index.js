const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/my-students')

    .then(() => console.log("connected successfully"))
    .catch(err => console.error("connection failed"));

//schema

const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    dob: Date,
    passsed: Boolean,
    hobbies: [String],
    parents: {
        father: String,
        mother: String,
    },
    subjects: [{ name: String, marks: { type: Number, min: 0, max: 100 } }]

});


//model

const Student = mongoose.model('Student', studentSchema);//class

const student = new Student({
    firstname: 'Karim',
    lastname: 'abul',
    dob: '16 julu 1999',
    passsed: true,
    hobbies: ['swiming', 'gardening'],
    parents: {
        father: 'a',
        mother: 'b',
    },
    subjects: [{
        name: 'math',
        marks: 90,
    }]

});

student.save()
    .then(data => console.log(data))
    .catch(err => console.error("failed"));

