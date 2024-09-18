export const dynamic = 'force-static'

// components
import ProductSection from '@/components/equipment/ProductSection'

// contentful
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

const equipment = await client.getEntries({
	content_type: 'equipment'
})

export async function generateStaticParams() {
	return equipment.items.map(item => ({
		slug: item.fields.title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-')
	}))
}

export default async function Product({ params }) {
	const { slug } = params

	// member
	const product = equipment.items.find(
		item =>
			item.fields.title
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, '')
				.replace(/\s+/g, '-') == slug
	)

	return (
		<main>
			<ProductSection content={product} />
		</main>
	)
}
