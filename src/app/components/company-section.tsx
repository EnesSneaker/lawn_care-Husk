const Company = () => {
    return (
        <div className="bg-white shadow-lg lg:mx-50 rounded-md dark:bg-gray-900 max-w-screen-xl mx-auto">
            <section className="py-8 px-4 text-center lg:py-16 lg:px-6">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Who We Work With
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    We&apos;re here to serve both individual homeowners and
                    businesses, bringing expert lawn care solutions to meet your
                    unique needs.
                </p>

                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Business-to-Consumer (B2C)
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Caring for Individuals: B2C Success Stories
                        </h3>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Enhance your home&apos;s beauty with our expert lawn
                            care services. We specialize in creating lush,
                            vibrant lawns that your family can enjoy all year
                            round.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Business-to-Business (B2B)
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Elevating Businesses: B2B Collaborations
                        </h3>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Partner with us for comprehensive lawn care
                            solutions tailored to your business needs. We
                            provide efficient landscaping services to elevate
                            your commercial property&apos;s appeal.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
