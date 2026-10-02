import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-300 text-slate-900">

      {/* ==================== HERO SECTION ==================== */}
      <section className="w-full">
        <div className="mx-auto flex min-h-[550px] max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:px-8">

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Campus Lost & Found
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Lost something
              <span className="block text-indigo-600">
                on campus?
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
              CampusFind helps students report lost and found items,
              discover recently reported belongings, and reconnect
              items with their owners.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/items"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Find an Item
              </Link>

              <Link
                to="/create-item"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Report an Item
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          {/* <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-md">

              <div className="absolute -inset-4 rounded-3xl bg-indigo-100 blur-2xl" />

              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    Recently Found
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    FOUND
                  </span>
                </div>

                <div className="flex h-48 items-center justify-center rounded-xl bg-slate-100 text-7xl">
                  🎒
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold">
                    Black Backpack
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    📍 Central Library
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    📅 Recently reported
                  </p>
                </div>

              </div>
            </div>
          </div> */}

        </div>
      </section>


      {/* ==================== HOW IT WORKS ==================== */}
      <section className="w-full bg-slate-400 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Simple Process
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              How CampusFind Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Finding or reporting an item takes only a few simple steps.
            </p>
          </div>


          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Browse
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Browse recently reported lost and found items
                around your campus.
              </p>

            </div>


            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                📢
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Report
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Lost or found something? Create a report
                with the important details.
              </p>

            </div>


            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                🤝
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Reconnect
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Help return lost belongings to their rightful
                owners.
              </p>

            </div>

          </div>
        </div>
      </section>


      

      {/* ==================== CTA ==================== */}
      <section className="w-full bg-indigo-600">

        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Found something on campus?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Someone might be looking for it. Report the item
            and help get it back to its owner.
          </p>

          <Link
            to="/create-item"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Report Found Item
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;