// import { createClient } from '@supabase/supabase-js';

// export const createSupabaseClient = () => {
// 	const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
// 	const key =
// 		process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 	if (!url || !key) {
// 		throw new Error(
// 			`Supabase env missing: SUPABASE_URL=${!!url}, SUPABASE_ANON_KEY=${!!key}.`
// 		);
// 	}

// 	return createClient(url, key, {
// 		auth: { persistSession: false },
// 	});
// };

import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

export const createSupabaseClient = () => {
	return createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			async accessToken() {
				return (await auth()).getToken();
			},
		}
	);
};
