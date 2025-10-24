import GetIntouch from '@/components/about/GetIntouch';
import BlogHero from '@/components/blog/BlogHero';
import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



// --- SVG Icon Components ---
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round" className="text-pink-500"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round" className="text-pink-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round" className="text-pink-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);



// --- Sidebar Components ---

const SearchWidget = () => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Search</h3>
        <form className="flex">
            <input type="text" placeholder="Search Here" className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Search</button>
        </form>
    </div>
);

const RecentPostsWidget = () => {
    const posts = [
        { date: 'September 14, 2023', title: 'The reasons why we love web design agency', image: 'https://placehold.co/80x80' },
        { date: 'September 14, 2023', title: 'A guide to running an effective meeting', image: 'https://placehold.co/80x80' },
        { date: 'September 14, 2023', title: 'How to make your design stand out', image: 'https://placehold.co/80x80' },
    ];
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Posts</h3>
            <div className="space-y-4">
                {posts.map((post, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src="/blogdetailsimg.png" alt={post.title} className="w-20 h-20 rounded-md object-cover" />
                        <div>
                            <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><CalendarIcon /> {post.date}</p>
                            <h4 className="font-semibold text-gray-700 leading-tight hover:text-blue-600 transition-colors cursor-pointer">{post.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ServicesWidget = () => {
    const services = [
        { name: 'Web Development & Design', active: true },
        { name: 'Product Management' },
        { name: 'UX/UI Design' },
        { name: 'Digital Marketing' },
        { name: 'Content Strategy' },
    ];
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">All Services</h3>
            <ul className="space-y-3">
                {services.map((service, index) => (
                    <li key={index}>
                        <a href="#" className={`flex justify-between items-center p-4 rounded-md transition-all duration-300 ${service.active ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md' : 'bg-white hover:bg-blue-50 text-gray-800 border border-gray-200'}`}>
                            <span className="font-medium">{service.name}</span>
                            <ChevronRightIcon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TagsWidget = () => {
    const tags = ['Development', 'Solution', 'Marketing'];
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                    <a key={index} href="#" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold">{tag}</a>
                ))}
            </div>
        </div>
    );
};

const Socialicon = () => (
    <div className="flex justify-center gap-4">
        <button className='bg-blue-500 p-2 rounded-sm '>
            <FaFacebook className='text-2xl text-white' />
        </button>
        <button className='bg-blue-500 p-2 rounded-sm'>
            <FaInstagram className='text-2xl text-white' />

        </button>
        <button className='bg-blue-500 p-2 rounded-sm'>
            <FaLinkedin className='text-2xl text-white' />

        </button>
        <button className='bg-blue-500 p-2 rounded-sm'>
            <FaTwitter className='text-2xl text-white' />

        </button>
    </div>
)

const FollowUsWidget = () => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Follow Us</h3>
        <Socialicon />
    </div>
);

// --- Main Blog Post and Sidebar Components ---

const BlogPost = () => (
    <main className="lg:col-span-2">
        <article className="space-y-8">
            <img src="/blogdetailsimg.png" alt="Blog post header" className="w-full h-auto rounded-lg object-cover" />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500">
                <div className="flex items-center gap-2"><CalendarIcon /> September 14, 2025</div>
                <div className="flex items-center gap-2"><CommentIcon /> 0 Comments</div>
                <div className="flex items-center gap-2"><UserIcon /> By admin</div>
            </div>

            <hr />

            <div className="prose prose-lg max-w-none text-gray-600">
                <p>There are endless ways to create a some ways to have a business. We spend more time at the meetings than ever with knowledge melioration.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src="/blogdetailsimg.png" alt="Blog content" className="rounded-lg w-full" />
                <img src="/blogdetailsimg.png" alt="Blog content" className="rounded-lg w-full" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
                <h2 className="text-3xl font-semibold text-gray-800">Our Personal Approach</h2>
                <p>Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus auctor.</p>
            </div>

            <blockquote className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-4">
                    <div className="text-7xl text-blue-300 font-serif">“</div>
                    <div className="flex-1">
                        <p className="text-gray-600 italic">IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.</p>
                        <cite className="block text-blue-600 font-semibold mt-2 not-italic">--- Md avcnaokvn</cite>
                    </div>
                </div>
            </blockquote>

            <p className="prose prose-lg max-w-none text-gray-600">No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself because it is painse.</p>

            <hr />

            <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-xl text-gray-800">Tags:</span>
                    <a href="#" className="px-4 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Marketing</a>
                </div>
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-xl text-gray-800">Share:</span>
                    <div>
                        <Socialicon />
                    </div>
                </div>
            </div>
        </article>

        <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Leave a Reply</h3>
            <form className="space-y-4">
                <textarea placeholder="Write a comment" rows={6} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="save-info" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="save-info" className="text-gray-600">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">Post a comment</button>
            </form>
        </div>
    </main>
);

const Sidebar = () => (
    <aside className="lg:col-span-1 space-y-8">
        <SearchWidget />
        <RecentPostsWidget />
        <ServicesWidget />
        <TagsWidget />
        <FollowUsWidget />
    </aside>
);


// --- Main Page Component ---
function BlogDetailsPage() {
    return (
        <div>
            <BlogHero />
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        <BlogPost />
                        <Sidebar />
                    </div>
                </div>
            </div>
            <GetIntouch />
        </div>
    );
}

export default BlogDetailsPage;

