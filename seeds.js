const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPENED');
    }).catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR');
        console.log(err)
    });

// const p = new Product({
//     name: "apple",
//     price: .50,
//     category: "fruit"
// })
// p.save().then(p => console.log(p)).catch(e => console.log(e))

const seedProducts = [
    {
        name: 'orange',
        price: .75,
        category: 'fruit'
    },
    {
        name: 'carrot',
        price: .25,
        category: 'vegetable'
    },
    {
        name: 'Bag of Potatos',
        price: 2.99,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 3.99,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts).then(d => console.log(d)).catch(e => console.log(e));