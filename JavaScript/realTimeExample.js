let products = 
[
    {
        title:"footwear",
        brand:"puma",
        price:2500,
        rating:4
    },

    {
        title:"Clothes",
        brand:"Gucci",
        price: 50000,
        rating:2
    },

    {
        title:"Wrist Watch",
        brand:"Rolex",
        price: 100000 ,
        rating:5
    }
]

let result = products.map( (data) => 
{
    // return data.title
    console.log(`the product name is ${data.brand} ${data.title}`);
})

// console.log(result);



let result2 = products.filter( (data2) => 
{
    return data2.rating > 2;
})
console.log(result2);



let result3 = products.reduce( (sum,data3) => 
{
    return sum += data3.price;
},0)
console.log(result3);