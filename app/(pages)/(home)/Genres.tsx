import Link from 'next/link';
import React from 'react';

export default function Genres() {
    const genres = [
        {
            name: 'Personal Development & Growth',
            image: '/assets/images/genres/leaf.jpg',  // Absolute path from public
            href: '/search?name=Personal%20Development%20%26%20Growth'
        },
        {
            name: 'Productivity & Time Management',
            image: '/assets/images/genres/time.webp',  // Absolute path from public
            href: '/search?name=Productivity%20%26%20Time%20Management'
        },
        {
            name: 'Mindset & Psychology',
            image: '/assets/images/genres/mindset.png',  // Absolute path from public
            href: '/search?name=Mindset%20%26%20Psychology'
        },
        {
            name: 'Finance & Wealth Building',
            image: '/assets/images/genres/money.png',  // Absolute path from public
            href: '/search?name=Finance%20%26%20Wealth%20Building'
        },
        {
            name: 'Health & Wellness',
            image: '/assets/images/genres/health.png',  // Absolute path from public
            href: '/search?name=Health%20%26%20Wellness'
        },
        {
            name: 'Leadership & Influence',
            image: '/assets/images/genres/leadership.webp',  // Absolute path from public
            href: '/search?name=Leadership%20%26%20Influence'
        },
        {
            name: 'Happiness & Positivity',
            image: '/assets/images/genres/happy.png',  // Absolute path from public
            href: '/search?name=Happiness%20%26%20Positivity'
        },
        {
            name: 'Spirituality & Mindfulness',
            image: '/assets/images/genres/spirit.png',  // Absolute path from public
            href: '/search?name=Spirituality%20%26%20Mindfulness'
        },
        {
            name: 'Creativity & Innovation',
            image: '/assets/images/genres/creative.png',  // Absolute path from public
            href: '/search?name=Creativity%20%26%20Innovation'
        },
        {
            name: 'Social Skills & Relationships',
            image: '/assets/images/genres/relationship.webp',  // Absolute path from public
            href: '/search?name=Social%20Skills%20%26%20Relationships'
        },
        {
            name: 'Self-Discipline & Willpower',
            image: '/assets/images/genres/willpower.webp',  // Absolute path from public
            href: '/search?name=Self-Discipline%20%26%20Willpower'
        },
        {
            name: 'Motivational & Inspirational',
            image: '/assets/images/genres/happy.png',  // Absolute path from public
            href: '/search?name=Motivational%20%26%20Inspirational'
        }
    ];

    return (
        <div className='container h-max py-16 mt-60 px-4'>
            <h1 className='block-heading !mb-12'>Editor{'\''}s Popular Genres</h1>
            <div className="max-sm:mt-2.5 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 items-center justify-center ">
                {genres.map((genre, index) => (
                    <Link href={genre.href} key={index} className="px-3.5 py-2 ring-1 ring-inset ring-gray-200/80 hover:ring-gray-200 hover:py-2.5 transition-all duration-300 ease-in-out max-sm:-my-1 my-1 flex items-center gap-3 rounded-lg">
                        <img src={genre.image} alt={genre.name} className='w-8 h-8 rounded-lg'/>
                        <h2>{genre.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
