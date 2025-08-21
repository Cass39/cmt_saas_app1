import { NextResponse } from 'next/server';

export async function GET() {
	const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
	const key =
		process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	let restStatus = 'not tried';
	try {
		if (url && key) {
			const r = await fetch(`${url}/rest/v1/`, {
				headers: { apikey: key, Authorization: `Bearer ${key}` },
			});
			restStatus = `HTTP ${r.status}`;
		}
	} catch (e: any) {
		restStatus = `fetch error: ${e?.message || e}`;
	}

	return NextResponse.json({
		hasUrl: !!url,
		hasKey: !!key,
		restStatus,
		urlPreview: url ? url.slice(0, 35) : null,
	});
}
