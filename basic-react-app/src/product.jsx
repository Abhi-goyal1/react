
function Product({title, description, price , feature}){
  
let style = {color:  price>30000 ? "red" : null };

    return(
        <div className="card" >
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>Price : {price}</p>
            <p style={style}>{ price > 30000 ? "Discount = 5%" : "No discount" }</p>
            <p>{feature.map((feature)=> <li>{feature}</li>)}</p>
        </div>
    );
}

export default Product;