import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-400 p-4">
            <section className="mx-auto max-w-6xl">

                {/* Hero */}
                <div className="rounded-2xl bg-gray-200 p-8 text-center shadow-lg shadow-slate-600">
                    <h1 className="text-4xl font-bold text-slate-800">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Have a question, suggestion, or feedback about
                        CampusFind? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    {/* Get in Touch */}
                    <div className="rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-bold text-slate-800">
                            Get in Touch
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            If you have found an issue, have a suggestion,
                            or need help with CampusFind, you can reach out
                            to us through the information below.
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Email
                                    </h3>
                                    <p className="text-slate-600">
                                        campusfind@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🏫</span>
                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Campus
                                    </h3>
                                    <p className="text-slate-600">
                                        St. Thomas' College of Engineering &
                                        Technology
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-2xl">💬</span>
                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Feedback
                                    </h3>
                                    <p className="text-slate-600">
                                        Your feedback can help us improve
                                        CampusFind.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-bold text-slate-800">
                            Send a Message
                        </h2>

                        <form className="mt-5 flex flex-col gap-4">

                            <div>
                                <label className="mb-2 block font-semibold text-slate-700">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-slate-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-slate-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What is this about?"
                                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-slate-700">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="mt-2 rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:scale-[1.01] hover:bg-indigo-700"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

                {/* Help Section */}
                <div className="mt-8 rounded-2xl bg-gray-200 p-6 text-center shadow-md shadow-slate-600">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Looking for a Lost Item?
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                        Before contacting us, check the Lost & Found section
                        to see whether your item has already been reported.
                    </p>

                    <a
                        href="/items"
                        className="mt-5 inline-block rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
                    >
                        Browse Items
                    </a>
                </div>

            </section>
        </div>
    );
};

export default Contact;