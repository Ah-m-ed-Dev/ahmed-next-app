import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";
import "./home.css";

const arr = [
  { productImg: "./images/1.png" },
  { productImg: "./images/2.webp" },
  { productImg: "./images/3.webp" },
  { productImg: "./images/4.webp" },
  { productImg: "./images/5.webp" },
  { productImg: "./images/6.webp" },
  { productImg: "./images/7.webp" },
  { productImg: "./images/8.png" },
];

export default function Home() {
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
  
      </main>

      <Footer />
    </>
  );
}
