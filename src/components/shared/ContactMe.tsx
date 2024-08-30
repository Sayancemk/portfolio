'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

function ContactMe() {
  const { register, handleSubmit } = useForm();

  const submit = async (data:any) => {
    console.log(data);
  };

  return (
    <div className="pb-12 pt-20 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray-800">
          Contact Me
        </h1>
        <p className="dark:text-neutral-500 text-neutral-600 max-w-lg mx-auto mb-8 text-sm text-center">
          If you have any questions or want to work together, feel free to send me a message.
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-4 mt-4">
          <input
            type="text"
            {...register('name',{required:true})}
            placeholder="Your name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-2 dark:bg-neutral-950 dark:placeholder:text-neutral-700 bg-white placeholder:text-neutral-800 text-black dark:text-white"
            required
          />
          <input
            type="email"
            {...register('email',{required:true})}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-2 dark:bg-neutral-950 dark:placeholder:text-neutral-700 bg-white placeholder:text-neutral-800 text-black dark:text-white"
            required
          />
          <textarea
            {...register('message',{required:true})}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 dark:bg-neutral-950 dark:placeholder:text-neutral-700 bg-white placeholder:text-neutral-800 text-black dark:text-white"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 block mx-auto text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;