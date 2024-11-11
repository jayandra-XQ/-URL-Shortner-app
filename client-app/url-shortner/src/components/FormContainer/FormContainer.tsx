import * as React from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constant';

const FormContainer: React.FunctionComponent = () => {
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your URL shortening logic here
    console.log('Shortened URL:', `urlshortner.link/${fullUrl}`);

    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl
      });
      setFullUrl("");
      toast.success('URL shortened successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner bg-cover rounded-xl my-8 bg-center">
        <div className="h-full w-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-black text-4xl text-center pb-4">URL Shortner</h2>

          <p className="text-white text-center pb-2 text-xl font-extralight">
            Paste your untidy link to shorten it
          </p>

          <p className="text-white text-center pb-4 text-sm font-bold">
            free tool to Shorten a URL or reduce link. Use our URL shortner to create a shortened & neat link making it easy to use
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>

                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                />

                <button 
                  type="submit" 
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;