import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';
//import { Button } from '@/components/ui/button';
import React from 'react';

const Page = () => {
	return (
		<main>
			<h1>Popular Companions</h1>
			<section className='home-section'>
				<CompanionCard
					id='123'
					name='Neura the Brainy Explore'
					topic='Neural Network of the Brain'
					subject='Science'
					duration={45}
					color='#a855f7'
				/>
				<CompanionCard
					id='456'
					name='Countsy the Number Wizard'
					topic='Derivatives and Integrals'
					subject='Math'
					duration={30}
					color='#fccc41'
				/>
				<CompanionCard
					id='789'
					name='Verba the Vocabulary Builder'
					topic='Language'
					subject='English Literature'
					duration={30}
					color='#ff7847'
				/>
			</section>

			<section className='home-section'>
				<CompanionsList
					title='Recently Completed Sessions'
					companions={recentSessions}
					classNames='w-2/3 max-lg:w-full'
				/>
				<CTA />
			</section>
		</main>
	);
};

export default Page;
