const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.glc41.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date
})

const Person = mongoose.model('Person', phonebookSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')

  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name + ' ' + person.number)
    })
    mongoose.connection.close()
  })
} else {
  const personName = process.argv[3]
  const personNumber = process.argv[4]

  const person = new Person({
    name: personName,
    number: personNumber,
    date: new Date()
  })
  person.save().then(person => {
    console.log('Added ' + person.name + ' number ' + person.number + ' to phonebook')
    mongoose.connection.close()
  })
}