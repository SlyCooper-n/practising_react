import React from "react";
import heroBg from "../../public/hero.svg";
import phone from "../../public/phone.svg";

export default function Hero() {
  return (
    <>
      <img
        src={heroBg}
        alt="hero background"
        className="absolute top-0 left-0 w-screen -z-10"
      />

      <div className="container mx-auto px-1 flex flex-col lg:flex-row lg:items-center text-gray-800 font-semibold">
        <section className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold">
            Payments infraestructure <br /> for the internet
          </h1>

          <p className="mt-6 mb-5 text-base lg:text-lg text-gray-600">
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts and
            manage their business online.
          </p>

          <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-md">
            Start now
          </button>
        </section>

        <div className="flex-1">
          <img
            src={phone}
            alt="phone"
            className="w-3/4 lg:w-auto mx-auto mt-4 lg:mt-0"
          />
        </div>
      </div>
    </>
  );
}
