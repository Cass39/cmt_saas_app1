import { PricingTable } from '@clerk/nextjs';
import React from 'react';

// Come back later to enforce the number of active comapanions a user can create regarding there subcription status/plan. I used Convex. For now, it appears unlimited.

const Subscription = () => {
	return (
		<div>
			<PricingTable />
		</div>
	);
};

export default Subscription;
