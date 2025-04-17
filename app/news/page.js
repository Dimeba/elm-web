export const dynamic = 'force-static'

// contentful
import { createClient } from 'contentful'

// components
import PagesHero from '@/components/PagesHero'
import NewsSection from '@/components/news/NewsSection'

// hooks
// import { redirect } from 'next/navigation'

export default async function News() {
	// redirect('/') // Redirect to the homepage

	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const news = await client.getEntries({
		content_type: 'newsSection'
	})

	return (
		<main>
			<PagesHero
				image={'https:' + news.items[0].fields.image.fields.file.url}
			/>
			<NewsSection content={news.items[0]} />
		</main>
	)
}
