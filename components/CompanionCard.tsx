import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CompanionCardProps {
	id: string;
	name: string;
	topic: string;
	subject: string;
	duration: number; // in minutes
	color: string; // hex color code
}

const CompanionCard = ({
	id,
	name,
	topic,
	subject,
	duration,
	color,
}: CompanionCardProps) => {
	return (
		<article className='companion-card' style={{ backgroundColor: color }}>
			<div className='flex justify-between items-center'>
				<div className='subject-badge'>{subject}</div>
				<button className='companion-bookmark'>
					<Image
						src='/icons/bookmark.svg'
						alt='bookmark'
						width={12.5}
						height={15}
					/>
				</button>
			</div>
			<h2 className='text-2xl font-bold text-black'>{name}</h2>
			<p className='text-sm text-black'>{topic}</p>
			<div className='flex items-center gap-2'>
				<Image
					src='/icons/clock.svg'
					alt='duration'
					width={13.5}
					height={13.5}
				/>
				<p className='text-sm text-black'>{duration} minutes</p>
			</div>
			<Link href={`/companions/${id}`} className='w-full'>
				<button className='bg-black rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2 justify-center w-full'>
					Launch Lesson
				</button>
			</Link>
		</article>
	);
};

export default CompanionCard;
