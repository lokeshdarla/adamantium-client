'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Copy, Trash, User } from 'lucide-react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [apiKey, setApiKey] = useState('');
  const [isKey, setIsKey] = useState(false);

  useEffect(() => {
    const savedApiKey = Cookies.get('api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsKey(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Cookies.set('api_key', apiKey, { expires: 7 });
    setIsKey(true);
    toast.success('API Key has been saved in cookies!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success('API Key copied to clipboard!');
  };

  const handleRemove = () => {
    Cookies.remove('api_key');
    setApiKey('');
    setIsKey(false);
    toast.success('API Key has been removed!');
  };
  return (
    <aside className="flex flex-col w-72 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-transparent dark:border-gray-700">
      <div className='flex items-center justify-start gap-2'>
        <Image className="w-auto h-10" height={200} width={200} src="/logo.png" alt="" />
        <p className="text-xl font-extrabold text-center">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            Adamantium
          </span>
        </p>
      </div>

      <div className="flex flex-col justify-end flex-1 mt-6">
        <div className="mt-6">
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

            <input
              id="api_key"
              disabled={isKey}
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Claude API Key" />


            {isKey ? (
              <div className="flex justify-between gap-1">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-6 py-1.5 w-full text-sm text-center  flex items-center justify-center text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                >
                  <Copy size={15} />
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="py-1.5 pl-10 pr-4 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                >
                  <Trash size={15} />
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none "
              >
                Submit
              </button>
            )}
          </form>

          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-4">
              <User />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Log In</span>
            </a>

            <a href="#" className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
