import React from 'react';

const arr = [
  { productImg: "./images/1.png",
di },
  { productImg: "./images/2.webp" },
  { productImg: "./images/3.webp" },
  { productImg: "./images/4.webp" },
  { productImg: "./images/5.webp" },
  { productImg: "./images/6.webp" },
  { productImg: "./images/7.webp" },
  { productImg: "./images/8.png" },
];




const Products = async () => {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  
   


    return (
        <section className="products flex">
        {arr.map((item) => {
          return (
            <article title={item.title} key={item.id} className="card">
              <a href="/pages/product-details.html">
                <img width={200} height={200} src={item.productImg} alt=""  />
              </a>
              <div style={{ width: "266px" }} className="content">
                <h1 className="title">{item.title}...</h1>
                <p className="description">
                 {item.description}
                </p>
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <div className="price">${item.price}</div>
                  <button className="add-to-cart flex">
                    <i className="fa-solid fa-cart-plus" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
}

export default Products;
