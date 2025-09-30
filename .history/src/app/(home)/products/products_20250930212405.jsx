import React from "react";
import Link from 'next/link';

const arr =  [
    {
      "id": "1",
      "productImg": "./images/1.png",
      "title": "Black Short",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 150
    },
    {
      "id": "2",
      "productImg": "./images/2.webp",
      "title": "Men Travel Bag",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 200
    },
    {
      "id": "3",
      "productImg": "./images/3.webp",
      "title": "Sport Backpack",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 50
    },
    {
      "id": "4",
      "productImg": "./images/4.webp",
      "title": "Casual Men's Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 300
    },
    {
      "id": "5",
      "productImg": "./images/5.webp",
      "title": "Summer Baseball Cap",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 100
    },
    {
      "id": "6",
      "productImg": "./images/6.webp",
      "title": "Apple Watch",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 14.99
    },
    {
      "id": "7",
      "productImg": "./images/7.webp",
      "title": "Trendy Sunglasses",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 100
    },
    {
      "id": "8",
      "productImg": "./images/8.png",
      "title": "Men's Tank Top",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet eos rem molestiae repellendus, ducimus distinctio      perspiciatis veniam, neque iure illo eligendi. Lorem ipsum dolor sit      amet, consectetur adipisicing elit Suscipit consectetur.",
      "price": 14.99
    }
  ]

function Products() {

  return (
    <section className="products flex">
      {arr.map((item) => {
        return (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <img width={200} height={200} src={item.productImg} alt="" />
            </Link>
            <div style={{ width: "266px" }} className="content">
              <h1 className="title">{item.title.slice(0, 10)}...</h1>
              <p className="description">{item.description.slice(0, 100)}</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem"
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

export default products;
