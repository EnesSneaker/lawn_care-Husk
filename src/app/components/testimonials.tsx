const Testimonials = () => {
    return (
        <section className="bg-white lg:mx-20 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Hear From Our Satisfied Customers
                    </h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Our lawn care services have left a lasting impression on
                        homeowners. See what they have to say about their
                        experiences with us.
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Thriving Garden Owner
                            </h3>
                            <p className="my-4">
                                &quot;We chose Alan for property clean up and
                                freshening prior to home sale, he was prompt,
                                communicative, professional and reasonably
                                priced. He did everything he promised and more,
                                quickly, efficiently and alerting us to any
                                concerns or additional needs promptly. I
                                can&apos;t thank him enough for all of his
                                efforts. He truly went above and beyond.
                                I&apos;d give him 6 stars if that was an
                                option.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="/Fritz_Mid.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Paul E.</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Homeowner
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Picture-Perfect Lawn Enthusiast
                            </h3>
                            <p className="my-4">
                                &quot;So very satisfied with Alan&apos;s Precise
                                Lawn Care. I highly recommend him. Alan is very
                                professional and provides excellent service. He
                                treats my lawn/landscaping as if it&apos;s his
                                own. Very friendly, personable, reliable and
                                capable!. He ensures customer is happy…never
                                realized how nice my property could look!&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="/Rosanna_Mid.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Rosanne L.</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Homeowner
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Stress-Free Homeowner
                            </h3>
                            <p className="my-4">
                                &quot;Alan does an amazing job on my lawn! He is
                                always on time, super efficient, detail
                                oriented, and easy to work with! Would highly
                                recommend his services!&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="/Jennifer_Mid.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jennifer B.</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Homeowner
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Customer for Life
                            </h3>
                            <p className="my-4">
                                &quot;I Hired Alan for a Spring Cleanup. He was
                                thorough and went the extra mile to make it look
                                good. Worked thru the rain to get it done
                                without complaint. Local business, very
                                professional guy and a solid value for the
                                money. You don&apos;t want a big faceless
                                corporation to maintain your lawn- you want
                                Alan. I will be using Alan for everything lawn
                                related this summer. I highly recommend you give
                                him a shot&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="/Mathias_Mid.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>David R.</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Homeowner
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
