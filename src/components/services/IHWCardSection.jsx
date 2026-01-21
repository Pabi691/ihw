import React from "react";

const IHWCardSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">

          {/* Image Card */}
          <div className="col-span-2 md:col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://indianhairworld.com/wp-content/themes/kapee/assets/images/sec2-img.jpg"
              alt="Hair services"
            />
          </div>

          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <img
                className="w-12 mx-auto mb-3"
                src="https://indianhairworld.com/wp-content/themes/kapee/assets/images/male-short-hair-wig-shape (1).png"
                alt="Monofilament patches"
              />
              <h4 className="text-lg font-semibold mb-2">
                Monofilament Patches
              </h4>
              <p className="text-sm text-gray-600">
                Model, EKO, Unique gold, BMW, Silk based patches, Mirage
                monofilament patches.
              </p>
            </div>

            <a
              href="https://indianhairworld.com/book-appointment"
              className="inline-block bg-black text-white text-sm px-5 py-2 rounded hover:bg-gray-800 transition"
            >
              Book An Appointment
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <img
                className="w-14 mx-auto mb-3"
                src="https://indianhairworld.com/wp-content/themes/kapee/assets/images/lace-patches-removebg-preview.png"
                alt="Front lace patches"
              />
              <h4 className="text-lg font-semibold mb-2">
                Front Lace Patches
              </h4>
              <p className="text-sm text-gray-600">
                Australian patch, Mirage French lace, Australian Mirage,
                Monofilament Front lace.
              </p>
            </div>

            <a
              href="https://indianhairworld.com/shop"
              className="inline-block border border-black text-black text-sm px-5 py-2 rounded hover:bg-black hover:text-white transition"
            >
              View Our Products
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                className="w-14 mx-auto mb-3"
                src="https://indianhairworld.com/wp-content/themes/kapee/assets/images/clipboard-test-tube-svgrepo-com.png"
                alt="Different methods"
              />
              <h4 className="text-lg font-semibold mb-2">
                Different Methods
              </h4>
              <p className="text-sm text-gray-600">
                Glue Method, Taping Method, Clipping Method, Hair Bonding.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IHWCardSection;
