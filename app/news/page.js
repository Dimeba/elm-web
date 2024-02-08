// contentful
import { createClient } from 'contentful'

export default async function News() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	return (
		<main>
			<section>
				<div className='sectionContainer'>Kad se setim</div>
			</section>
		</main>
	)
}
