import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Heroslider from "../components/Heroslider/Heroslider";
import { getBanner } from "../service/Banner.service";
import Card from "../components/Card/Card";

const Home = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getBanner((data) => {
      setHero(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Layout>
        <div>
          {hero.map((hero) => (
            <Heroslider key={hero.id} image_banner={hero.image_banner} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
{
  /* <div className="flex flex-wrap justify-center gap-5">
          {products.map((product) => (
            <div className="">
              <Card
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            </div>
          ))}
        </div> */
}
