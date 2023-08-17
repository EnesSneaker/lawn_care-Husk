const SocialProof = () => {
    return (
        <section className="bg-white lg:mx-20 dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            1000+
                        </dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">
                            Satisfied Customers
                        </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            500+
                        </dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">
                            Beautiful Lawns Transformed
                        </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            97%
                        </dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">
                            Customer Satisfaction Rate
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default SocialProof;
