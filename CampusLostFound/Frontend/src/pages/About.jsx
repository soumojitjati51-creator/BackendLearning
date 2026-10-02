import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-slate-400 p-4">
            <section className="mx-auto max-w-6xl">

                {/* Hero */}
                <div className="rounded-2xl bg-gray-200 p-8 text-center shadow-lg shadow-slate-600">
                    <h1 className="text-4xl font-bold text-slate-800">
                        About CampusFind
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        CampusFind is a campus-based Lost & Found platform
                        designed to help students report, discover, and
                        recover lost items within their college community.
                    </p>
                </div>

                {/* What is CampusFind */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-bold text-slate-800">
                            What is CampusFind?
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Losing something on campus can be frustrating,
                            especially when there is no simple way to inform
                            everyone about it. CampusFind provides a centralized
                            platform where students can report lost or found
                            items and browse existing reports.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-bold text-slate-800">
                            Why CampusFind?
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Instead of relying only on word of mouth or
                            scattered messages, CampusFind keeps item reports
                            organized in one place with useful information
                            such as category, location, date, description,
                            and image.
                        </p>
                    </div>
                </div>

                {/* How it works */}
                <div className="mt-8 rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                    <h2 className="text-2xl font-bold text-center text-slate-800">
                        How It Works
                    </h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">

                        <div className="rounded-xl bg-slate-100 p-5 text-center">
                            <div className="text-3xl">📝</div>
                            <h3 className="mt-3 text-lg font-bold text-slate-800">
                                Report
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Report a lost or found item with its details
                                and an image.
                            </p>
                        </div>

                        <div className="rounded-xl bg-slate-100 p-5 text-center">
                            <div className="text-3xl">🔍</div>
                            <h3 className="mt-3 text-lg font-bold text-slate-800">
                                Search
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Browse reported items and find something that
                                matches your lost item.
                            </p>
                        </div>

                        <div className="rounded-xl bg-slate-100 p-5 text-center">
                            <div className="text-3xl">🤝</div>
                            <h3 className="mt-3 text-lg font-bold text-slate-800">
                                Recover
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Use the available information to reconnect
                                with your lost belongings.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Features */}
                <div className="mt-8 rounded-2xl bg-gray-200 p-6 shadow-md shadow-slate-600">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Key Features
                    </h2>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ Report lost and found items
                        </p>

                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ Upload item images
                        </p>

                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ Browse all reported items
                        </p>

                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ View individual item details
                        </p>

                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ Edit existing reports
                        </p>

                        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
                            ✓ Delete reports
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-2xl bg-indigo-600 p-8 text-center shadow-lg shadow-slate-600">
                    <h2 className="text-2xl font-bold text-white">
                        Have you found or lost something?
                    </h2>

                    <p className="mt-2 text-indigo-100">
                        Help someone in your campus community by reporting it.
                    </p>

                    <Link
                        to="/create-item"
                        className="mt-5 inline-block rounded-md bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:scale-105"
                    >
                        Report an Item
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default About;