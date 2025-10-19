import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const LOCAL_STORAGE_KEY = "shortenedLinks";

const UrlForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [shortenedLinks, setShortenedLinks] = useState(() => {
    const storedLinks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedLinks ? JSON.parse(storedLinks) : [];
  });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  const onSubmit = async (data) => {
    const { url } = data;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${url}`
      );
      const newLink = {
        original: url,
        short: response.data,
      };
      setShortenedLinks((prev) => [newLink, ...prev]);
      reset();
    } catch (error) {
      alert("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <section className="bg-gray-200 relative min-h-[300px] pb-10">
      <div className="max-w-6xl mx-auto sm:mx-10 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute left-1/2 -translate-x-1/2 -top-16 w-full max-w-6xl bg-cover bg-center bg-no-repeat rounded-xl p-6 bg-violet-950 shadow-xl"
          style={{ backgroundImage: "url('/images/bg-boost-desktop.svg')" }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className={`w-full p-3 rounded bg-white outline-none ${
                  errors.url
                    ? "border-2 border-red-400"
                    : "border border-cyan-400"
                }`}
                {...register("url", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 text-white px-6 py-3 rounded-lg font-bold"
            >
              {loading ? "Shortening..." : "Shorten It!"}
            </button>
          </div>
          {errors.url && (
            <p className="text-red-400 text-sm mt-1">Please add a link</p>
          )}
        </form>

        <div className="space-y-4 max-w-6xl mx-auto px-4 pt-32 md:pt-10">
          {shortenedLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <p className="text-gray-800 break-all">{link.original}</p>
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 sm:mt-0">
                <a
                  href={link.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 font-bold"
                >
                  {link.short}
                </a>
                <button
                  className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded"
                  onClick={() => handleCopy(link.short)}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrlForm;
