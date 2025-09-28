"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const hero = document.querySelector(".hero");
        const sections = Array.from(
            document.querySelectorAll(".resume section")
        );

        const HERO_DELAY = 40;
        const SECTION_BASE = 60;
        const SECTION_STAGGER = 30;

        setTimeout(() => {
            requestAnimationFrame(() => hero?.classList.remove("blurred"));
        }, HERO_DELAY);

        sections.forEach((sec, i) => {
            const delay = SECTION_BASE + i * SECTION_STAGGER;
            setTimeout(
                () =>
                    requestAnimationFrame(() =>
                        sec.classList.remove("blurred")
                    ),
                delay
            );
        });
    }, []);

    return (
        <div className="app-wrapper app-blurred font-sans min-h-screen text-white bg-black">
            <header className="hero blurred p-8 max-w-4xl mx-auto">
                <h1 className="title text-4xl sm:text-5xl font-extrabold">
                    Aditya Kumar
                </h1>
                <p className="mt-3 text-gray-300">
                    +91-7479796212 | aaditya1392@gmail.com | Portfolio | GitHub
                    | linkedin.com
                </p>
            </header>

            <main className="container mx-auto p-6 max-w-5xl">
                <article className="resume" aria-labelledby="profile-heading">
                    <section id="profile" className="blurred compact">
                        <h2
                            id="profile-heading"
                            className="text-sm font-semibold"
                        >
                            PROFILE
                        </h2>
                        <p className="mt-1 muted">
                            Full Stack Developer and a full-time freelancer with
                            Masters in Computer Application.
                        </p>
                        <div className="section-divider"></div>
                    </section>

                    <section id="education" className="mt-4 blurred compact">
                        <h2 className="text-sm font-semibold">EDUCATION</h2>
                        <div className="mt-1 muted">
                            <strong>Quantum University</strong> — Uttarakhand,
                            India
                            <div className="compact">
                                Masters in Computer Application, 2024 – 2026
                            </div>
                            <div className="compact">
                                • Among the top 5% of the batch
                            </div>
                        </div>
                        <div className="section-divider"></div>
                    </section>

                    <section id="skills" className="mt-4 blurred compact">
                        <h2 className="text-sm font-semibold">SKILLS</h2>
                        <p className="mt-1 muted">
                            <strong>Languages:</strong> JavaScript, TypeScript,
                            Java, Python, C++
                        </p>
                        <p className="mt-1 muted compact">
                            <strong>Tools:</strong> React, Next, React Native,
                            PostgreSQL, MongoDB, Tailwind, Tanstack Query, Git,
                            Express, Socket.IO, Docker, AWS, Google Cloud
                        </p>
                        <div className="section-divider"></div>
                    </section>

                    <section id="work" className="mt-4 blurred compact">
                        <h2 className="text-sm font-semibold">WORK HISTORY</h2>

                        <div className="mt-2 muted">
                            <div>
                                <strong>Printvc</strong> — Remote{" "}
                                <span className="muted">
                                    · Freelancer · Jan 2025 – Aug 2025
                                </span>
                            </div>
                            <ul className="ml-5 mt-1 compact">
                                <li>
                                    Built a feature-rich, scalable eCommerce
                                    platform to sell custom print products
                                    online efficiently.
                                </li>
                                <li>
                                    Implemented secure wallet, real-time
                                    tracking, and multi-department production
                                    workflows — reduced delays by 30%.
                                </li>
                                <li>
                                    Successfully serving 2000+ active monthly
                                    users with 99.9% uptime and fast page loads.
                                </li>
                            </ul>
                        </div>

                        <div className="mt-2 muted">
                            <div>
                                <strong>Vaishali Press</strong> — Muzaffarpur{" "}
                                <span className="muted">
                                    · Freelancer · Sept 2024 – Nov 2024
                                </span>
                            </div>
                            <ul className="ml-5 mt-1 compact">
                                <li>
                                    Built analytics application with product,
                                    client, and order management plus CSV export
                                    and print support.
                                </li>
                                <li>
                                    Designed dashboards with authentication —
                                    reduced reporting effort by 50%.
                                </li>
                            </ul>
                        </div>

                        <div className="mt-2 muted">
                            <div>
                                <strong>Eklavaya Universal Private LTD</strong>{" "}
                                — Muzaffarpur, Bihar{" "}
                                <span className="muted">
                                    · Freelancer · Jan 2024 – Sep 2024
                                </span>
                            </div>
                            <ul className="ml-5 mt-1 compact">
                                <li>
                                    Built institute management app for multiple
                                    franchises, added
                                    certificate/marksheet/icard printing, and
                                    dynamic onboarding forms.
                                </li>
                                <li>
                                    Serving 1500+ active users across admin and
                                    franchise dashboards.
                                </li>
                            </ul>
                        </div>
                        <div className="section-divider"></div>
                    </section>

                    <section id="projects" className="mt-4 blurred compact">
                        <h2 className="text-sm font-semibold">PROJECTS</h2>
                        <div className="mt-2 muted">
                            <div>
                                <strong>Qu Pass</strong> — Oct 2024
                            </div>
                            <div className="compact ml-5">
                                Built a mobile browser extension using
                                HTML/CSS/JS to automate an outpass workflow by
                                overriding server responses in real-time.
                            </div>

                            <div className="mt-2">
                                <strong>Discord App</strong> — Jan 2024
                            </div>
                            <div className="compact ml-5">
                                Discord-style app with Next.js, TypeScript,
                                SocketIO, Zustand, Zod, and PostgreSQL
                                supporting role-based channels and real-time
                                audio/video.
                            </div>
                        </div>
                        <div className="section-divider"></div>
                    </section>

                    <section id="achievements" className="mt-4 blurred compact">
                        <h2 className="text-sm font-semibold">ACHIEVEMENTS</h2>
                        <ul className="ml-5 mt-1 compact muted">
                            <li>
                                Runner-up in college coding competition among
                                2000+ participants.
                            </li>
                            <li>
                                Found & responsibly disclosed an XSS bug that
                                gave admin access to a dashboard.
                            </li>
                            <li>4-star on Hackerrank</li>
                        </ul>
                    </section>
                </article>
            </main>

            <footer className="text-center p-6 text-gray-500">
                © {new Date().getFullYear()} Aditya Kumar
            </footer>
        </div>
    );
}
