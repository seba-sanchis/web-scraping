import Carousel from "@/components/Carousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts, getTest } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const allProducts = await getAllProducts();

  const data = await getTest();

  return (
    <>
      <div>firstName: {data[0].firstName}</div>
      <div>lastName: {data[0].lastName}</div>
      <div>region: {data[0].region}</div>

      {/* <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Analyze your competition
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of{" "}
              <span className="text-primary">Web Scraping</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <Carousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section> */}
    </>
  );
}
