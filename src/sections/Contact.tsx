import React from 'react'
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="Contact"
      className="w-full py-24 bg-white flex justify-center "
    >
      <div className="flex flex-col w-2/3 gap-6 ">
        <div className="flex flex-col gap-2 font-semibold">
          <p className="text-blue font-semibold">CONTACT</p>
          <p className="text-2xl font-bold">Don't be shy! Hit me up! 👇</p>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-2 items-center">
            <div className="rounded-full p-4 bg-white border-gray-100 border-2">
              <MdEmail className="text-blue w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Email</p>
              <p>nagoudinada.pro@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact