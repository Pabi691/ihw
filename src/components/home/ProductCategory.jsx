import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../global/GlobalContext";
import Skeleton from "react-loading-skeleton";
import compressImage from "../../utils/compressImage";
import { cacheManager } from "../../utils/cacheManager";
import { CategoryService } from "../../content/category-service";
import { strokedHeading } from "../../styles/typography";

function ProductCategory({ title }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useGlobal();

  const fetchProductCategory = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const cached = cacheManager.get("categories");
      if (cached) {
        setCategories(cached);
        setLoading(false);
        return;
      }

      const response = await CategoryService.getAll();

      if (response.status === 200 && response.data?.category_list) {
        const list = Array.isArray(response.data.category_list)
          ? response.data.category_list
          : [response.data.category_list];

        setCategories(list);
        cacheManager.set("categories", list);
      } else {
        throw new Error("Failed to fetch categories");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load categories");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchProductCategory();
  }, [fetchProductCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2
          className={strokedHeading}
        >
          {title}
        </h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Carousel */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">

          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[260px] h-[380px] rounded-lg overflow-hidden"
              >
                <Skeleton height={380} />
              </div>
            ))}

          {!loading &&
            categories.map((cat) => (
              <Link
                to={`/${cat.slug}`}
                key={cat.id}
                className="group relative min-w-[260px] h-[380px]
                overflow-hidden rounded-lg shadow-lg snap-start"
              >
                {/* Image */}
                <img
                  src={compressImage(cat.cat_img, 600, 75, "webp")}
                  alt={cat.category_name}
                  className="w-full h-full object-cover
                  transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
                  <h3 className="mb-6 text-lg font-bold uppercase tracking-wide bg-white/90 px-4 py-2 rounded text-gray-800">
                    {cat.category_name}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;
