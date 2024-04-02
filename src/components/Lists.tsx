//rendering lists

//array of products
const products = [
    {title: 'Banana', id: 1, price: 29},
    {title: 'Apple', id: 2, price: 39},
    {title: 'Orange', id: 3, price: 59},
    {title: 'Pineapple', id: 4, price: 79},
]

export default function Lists() {
//map function is used to transform the array of products into an array of list items
const listItems  = products.map(product =>
    <li key={product.id}> {/*key is a special attribute that is used by React to identify which items have changed, are added, or are removed*/}
        {product.title} - {product.price} {/*product.title and product.price are the properties of the product object*/}
    </li>   
);

return (
    <ul>{listItems}</ul>
);

}
//products.map(product => this is the function that is called for each product in the array
//it takes a product as an argument and returns a list item element
//products.map returns an array of list items