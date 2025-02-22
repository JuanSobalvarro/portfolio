import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InView } from "react-intersection-observer";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Import Swiper modules

const projects = [
  {
    title: "Table Tennis Ranking System",
    description: "Table tennis ranking system built with Django, React & PostgreSQL.",
    image: "/portfolio/projects/collage-ttranking.png",
    link: "https://ttranking.juansobalvarro.site/",
  },
  {
    title: "SudokuQt",
    description: "Sudoku game practice built with C++ and Qt Framework.",
    image: "/portfolio/projects/collage-sudoku.png",
    link: "https://github.com/JuanSobalvarro/SudokuQt",
  },
  {
    title: "parametricsim",
    description: "A parametric equation grapher tool so students can watch graphing in real-time.",
    video: "/portfolio/videos/parametricsim.mp4",
    link: "https://github.com/juansobalvarro/parametricsim",
  },
  {
    title: "AsisMed ULSA",
    description: "Medical Assistance System for the ULSA University. I worked as Lead Developer.",
    image: "/portfolio/projects/collage-asismed.png",
  },
  {
    title: "reverseShellSnake",
    description: "A reverse shell written in Python that uses a snake game/m4ri0 game as a disguise.",
    image: "/portfolio/projects/reverseshell.png",
  },
];

function Projects() {
  return (
    <section className="flex flex-col items-center py-16 bg-lightblue-50 text-gray-800 dark:bg-gray-900 dark:text-white pb-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-300">Projects</h2>

      <InView triggerOnce threshold={0.5} as="div">
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full sm:max-w-6xl rounded-xl">
            <Swiper
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-slide",
                nextEl: ".next-slide",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="swiper-container"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center pb-10">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-700">
                    <div className="w-full h-64 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          loop
                          muted
                          aria-label={`Video of ${project.title}`}
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          aria-label={`Image of ${project.title}`}
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                          aria-label={`View ${project.title} project`}
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-300 p-2 rounded-full hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 prev-slide z-10"
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-300 p-2 rounded-full hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 next-slide z-10"
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="swiper-pagination !bottom-2"></div>
          </div>
        )}
      </InView>
    </section>
  );
}

export default Projects;
