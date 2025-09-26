import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-12 lg:py-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative z-10 rounded-md p-8 shadow-three sm:p-11 lg:p-8 xl:p-11"
              data-wow-delay=".2s"
            >
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                About{" "}
                <span className="bg-primary bg-clip-text text-transparent">
                  Sharvix Innovations
                </span>
              </h2>

              <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg lg:text-base xl:text-lg">
                At Sharvix Innovations, we believe in building solutions that
                don't just work today, but evolve with your business. Founded
                with a vision to bridge the gap between cutting-edge technology
                and practical business needs.
              </p>

              <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg lg:text-base xl:text-lg">
                Our team of experienced developers, designers, and strategists
                work collaboratively to deliver digital solutions that drive
                growth, enhance user experiences, and position your business for
                long-term success.
              </p>

              {/* Stats */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 text-center dark:from-indigo-900/20 dark:to-purple-900/20">
                  <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 text-center dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
              data-wow-delay=".2s"
            >
              <Image
                src={getImagePath("/images/about/about-image.jpg")}
                alt="about image"
                fill
                className="mx-auto max-w-full rounded-md object-cover lg:mr-0"
              />

              {/* Floating Elements */}
              <div className="absolute -right-4 -top-4 z-10">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-600"
                  >
                    <path
                      d="M16 2L20.09 10.26L29 12L20.09 13.74L16 22L11.91 13.74L3 12L11.91 10.26L16 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25 8L26.5 11.5L30 13L26.5 14.5L25 18L23.5 14.5L20 13L23.5 11.5L25 8Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 z-10">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
