import React from 'react';

export default function Ebooks() {
    return (
        <>
            {/* <!-- Section start --> */}
            <div className="section panel overflow-hidden">
                <div className="section-outer panel py-6 lg:py-9">
                    <div className="container max-w-lg">
                        <div className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9">
                            <header className="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
                                <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">Blog — Classic</h1>
                            </header>
                            <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 gx-2 xl:gx-4">
                                {[
                                    {
                                        id: 1,
                                        imgSrc: "../src/assets/images/blog/img-05.jpg",
                                        imgAlt: "Maximizing your reach with marketing strategies",
                                        category: "Strategy",
                                        authorImg: "../src/assets/images/avatars/02.png",
                                        authorName: "David",
                                        date: "Apr 15, 2024",
                                        title: "Maximizing your reach with marketing strategies",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 2,
                                        imgSrc: "../src/assets/images/blog/img-06.jpg",
                                        imgAlt: "Top 5 reasons to invest in marketing",
                                        category: "Marketing",
                                        authorImg: "../src/assets/images/avatars/04.png",
                                        authorName: "Sarah",
                                        date: "Apr 12, 2024",
                                        title: "Top 5 reasons to invest in marketing",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 3,
                                        imgSrc: "../src/assets/images/blog/img-07.jpg",
                                        imgAlt: "How can marketing help your business?",
                                        category: "Boost",
                                        authorImg: "../src/assets/images/avatars/01.png",
                                        authorName: "Kevin",
                                        date: "Apr 12, 2024",
                                        title: "How can marketing help your business?",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 4,
                                        imgSrc: "../src/assets/images/blog/img-08.jpg",
                                        imgAlt: "The ultimate guide to marketing success",
                                        category: "Advertising",
                                        authorImg: "../src/assets/images/avatars/07.png",
                                        authorName: "Amir",
                                        date: "Apr 10, 2024",
                                        title: "The ultimate guide to marketing success",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 5,
                                        imgSrc: "../src/assets/images/blog/img-09.jpg",
                                        imgAlt: "A comprehensive guide to marketing",
                                        category: "Strategy",
                                        authorImg: "../src/assets/images/avatars/07.png",
                                        authorName: "Amir",
                                        date: "Apr 8, 2024",
                                        title: "A comprehensive guide to marketing",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 6,
                                        imgSrc: "../src/assets/images/blog/img-10.jpg",
                                        imgAlt: "Maximizing your reach with marketing strategies",
                                        category: "Advertising",
                                        authorImg: "../src/assets/images/avatars/06.png",
                                        authorName: "Allen",
                                        date: "Apr 4, 2024",
                                        title: "Maximizing your reach with marketing strategies",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    },
                                    {
                                        id: 7,
                                        imgSrc: "../src/assets/images/blog/img-11.jpg",
                                        imgAlt: "Top 5 reasons to invest in marketing",
                                        category: "Strategy",
                                        authorImg: "../src/assets/images/avatars/02.png",
                                        authorName: "David",
                                        date: "Apr 3, 2024",
                                        title: "Top 5 reasons to invest in marketing",
                                        description: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
                                        detailsLink: "blog-details.html",
                                    }
                                ].map(post => (
                                    <div className="col-12" key={post.id}>
                                        <article className="post type-post panel rounded-3 p-2 md:p-4 bg-secondary dark:bg-gray-800">
                                            <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                                                <div className="sm:col-4 md:col-6 lg:col-4">
                                                    <div className="panel">
                                                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 uc-transition-toggle overflow-hidden">
                                                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src={post.imgSrc} alt={post.imgAlt} />
                                                            <a className='position-cover' data-caption={post.imgAlt} href={post.detailsLink}></a>
                                                        </figure>
                                                        <a className='post-category text-primary fw-normal text-none fw-bold fs-7 py-narrow px-1 rounded bg-primary text-white position-absolute top-0 start-0 m-2' href='blog-category.html'>{post.category}</a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="vstack items-start gap-2 md:gap-3">
                                                        <ul className="post-meta nav-x ft-tertiary justify-start gap-1 fs-7">
                                                            <li>
                                                                <div className="hstack gap-narrow ft-tertiary">
                                                                    <img src={post.authorImg} alt={post.authorName} className="w-24px h-24px rounded-circle me-narrow" />
                                                                    <a href="page-author.html" className="text-none fw-bold text-dark dark:text-white">{post.authorName}</a>
                                                                </div>
                                                            </li>
                                                            <li className="opacity-50">•</li>
                                                            <li>
                                                                <div className="post-date hstack gap-narrow">
                                                                    <span>{post.date}</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <h3 className="h4 sm:h5 md:h4 lg:h3 m-0">
                                                            <a className='text-none' href={post.detailsLink}>{post.title}</a>
                                                        </h3>
                                                        <p className="fs-6 md:fs-5 d-none md:d-block">{post.description}</p>
                                                        <a className='btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block' href={post.detailsLink}>Continue reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                            <div className="nav-pagination fw-medium">
                                <ul className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
                                    <li>
                                        <a href="#"><span className="icon icon-1 unicon-chevron-left rtl:rotate-180"></span></a>
                                    </li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" className="uc-active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li className="uc-disabled"><span>…</span></li>
                                    <li><a href="#">8</a></li>
                                    <li><a href="#">9</a></li>
                                    <li>
                                        <a href="#"><span className="icon icon-1 unicon-chevron-right rtl:rotate-180"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Section end --> */}
        </>
    );
}
