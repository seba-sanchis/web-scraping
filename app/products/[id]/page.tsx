import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function Page({ params: { id } }: Props) {
  const product: Product = await getProductById(id);

  if (!product) redirect("/");

  const similarProducts = await getSimilarProducts(id);

  return (
    <div className="product-container">
      <div className="flex gap-24 xl:flex-row flex-col">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={480}
            height={480}
            className="mx-auto"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-6 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-secondary font-semibold">
                {product.title}
              </p>

              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="product-hearts">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />

                <p className="text-base font-semibold text-[#D46F77]">
                  {product.reviewsCount}
                </p>
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/bookmark.svg"
                  alt="bookmark"
                  width={24}
                  height={24}
                />
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="product-info">
            <div className="flex flex-col gap-2">
              <p className="text-3xl text-secondary font-bold">
                {product.currency} {formatNumber(product.currentPrice)}
              </p>
              <p className="text-xl text-black opacity-50 line-through">
                {product.currency} {formatNumber(product.originalPrice)}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="product-stars">
                  <Image
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.stars || "0"}
                  </p>
                </div>

                <div className="product-reviews">
                  <Image
                    src="/assets/icons/comment.svg"
                    alt="comment"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-secondary font-semibold">
                    {product.reviewsCount} Reviews
                  </p>
                </div>
              </div>

              <p className="text-sm text-black opacity-50">
                <span className="text-primary-green font-semibold">93%</span> of
                buyers have recommended this.
              </p>
            </div>
          </div>
          <div className="my-7 flex flex-col gap-6">
            <div className="flex gap-6 flex-wrap">
              <PriceInfoCard
                title="Current price"
                iconSrc="/assets/icons/price-tag.svg"
                value={`${product.currency} ${formatNumber(
                  product.currentPrice
                )}`}
              />
              <PriceInfoCard
                title="Average price"
                iconSrc="/assets/icons/chart.svg"
                value={`${product.currency} ${formatNumber(
                  product.averagePrice
                )}`}
              />
              <PriceInfoCard
                title="Higuest price"
                iconSrc="/assets/icons/arrow-up.svg"
                value={`${product.currency} ${formatNumber(
                  product.highestPrice
                )}`}
              />
              <PriceInfoCard
                title="Lowest price"
                iconSrc="/assets/icons/arrow-down.svg"
                value={`${product.currency} ${formatNumber(
                  product.lowestPrice
                )}`}
              />
            </div>
          </div>
          // Modal
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl text-secondary font-semibold">
            Product Description
          </h3>

          <div className="flex flex-col gap-4">
            {product?.description?.split("\n")}
          </div>
        </div>

        <button className="btn w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
          <Image
            src="/assets/icons/bag.svg"
            alt="check"
            width={24}
            height={24}
          />

          <Link href="/" className="text-base text-white">
            Buy Now
          </Link>
        </button>
      </div>

      {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section-text">Similar Products</p>

          <div className="flex flex-wrap gap-8 mt-6 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
