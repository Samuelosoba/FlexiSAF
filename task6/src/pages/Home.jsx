import UrlForm from "../components/urlForm";
import heroImg from "../../images/illustration-working.svg";

const Home = () => {
  return (
    <main className="bg-gray-50 pb-0 mb-0">
      {/* Hero Section */}
      <section className="flex  flex-col md:flex-row items-center justify-between  py-10 max-w-6xl mx-auto gap-10">
        <div className="md:w-1/2 space-y-2 px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            More than just shorter links
          </h1>
          <p className="text-gray-600 max-w-[350px]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-cyan-500 text-white px-6 py-2 mt-6 rounded-full hover:bg-cyan-300 font-bold">
            Get Started
          </button>
        </div>
        <img
          src={heroImg}
          alt="working illustration"
          className="md:w-1/2 mt-8 md:mt-0"
        />
      </section>

      {/* URL Shortener */}
      <section className=" mt-15 ">
        <UrlForm />
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center space-y-16 ">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Advanced Statistics
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/images/icon-brand-recognition.svg"
              alt=""
              className="mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Brand Recognition</h3>
            <p className="text-gray-600 text-sm">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <img
              src="/images/icon-detailed-records.svg"
              alt=""
              className="mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Detailed Records</h3>
            <p className="text-gray-600 text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-16">
            <img
              src="/images/icon-fully-customizable.svg"
              alt=""
              className="mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Fully Customizable</h3>
            <p className="text-gray-600 text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-cover bg-violet-950  bg-center bg-no-repeat m-0 p-0"
        style={{ backgroundImage: "url('/images/bg-boost-desktop.svg')" }}
      >
        <section className=" text-white text-center py-12">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Boost your links today
          </h2>
          <button className="bg-cyan-500 hover:bg-cyan-300 px-6 py-3 rounded-full">
            Get Started
          </button>
        </section>
      </section>
    </main>
  );
};

export default Home;
