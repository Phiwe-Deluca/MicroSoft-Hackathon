import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resources() {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center w-96 mx-auto mt-10">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-3xl font-bold">Verified Medical Resources</h2>
      <p>Explore trusted sources and learn about early cancer detection and prevention.</p>

      {/* Trusted Health Links */}
      <div className="my-4">
        <h3 className="text-xl font-semibold">Trusted Medical Links</h3>
        <ul className="space-y-2">
          <li><a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">WHO - Cancer Research</a></li>
          <li><a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">American Cancer Society</a></li>
          <li><a href="https://learn.microsoft.com/en-us/azure/healthcare/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft Health AI</a></li>
        </ul>
      </div>

      {/* Educational Videos */}
      <h3 className="text-xl font-semibold">Educational Videos</h3>
      <div className="flex flex-col space-y-4 items-center my-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/example1" allowFullScreen className="rounded-md shadow-md"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/example2" allowFullScreen className="rounded-md shadow-md"></iframe>
      </div>

      {/* Informative Articles */}
      <h3 className="text-xl font-semibold">Informative Articles</h3>
      <ul className="space-y-2">
        <li><a href="https://www.medicalnewstoday.com/articles/cancer-symptoms" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Early Signs of Cancer</a></li>
        <li><a href="https://www.cancer.gov/about-cancer/prevention" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Cancer Prevention Strategies</a></li>
        <li><a href="https://www.nhs.uk/conditions/cancer/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Understanding Different Types of Cancer</a></li>
      </ul>

      {/* Navigation */}
      <a href="/" className="text-blue-500 underline mt-4">Back to Home</a>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Resources;
