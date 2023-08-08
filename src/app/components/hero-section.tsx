export default function HeroSection() {
    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1645723947866-4f98043ddc0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1654&q=80)] bg-cover bg-center bg-no-repeat">
            {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-stone-50">
                        Lush lawns.
                        <div>Expert care.</div>
                        <strong className="block font-extrabold text-stone-50">
                            Guaranteed.
                        </strong>
                    </h1>

                    {/* <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p> */}

                    <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                        <div className="w-full sm:w-auto">
                            <a
                                href="#contact"
                                className="block w-full rounded bg-primary-button px-12 py-3 text-sm font-medium text-white shadow active:bg-opacity-10"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="w-full sm:w-auto">
                            <a
                                href="#gallery"
                                className="block w-full rounded bg-secondary-button px-12 py-3 text-sm font-medium shadow active:bg-opacity-10"
                            >
                                Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
