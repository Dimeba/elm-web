// contentful
import { createClient } from 'contentful'

// components
import PagesHero from '@/components/PagesHero'
import EquipmentMenu from '@/components/EquipmentMenu'
import EquipmentItems from '@/components/equipment/EquipmentItems'

export default async function Equipment() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const equipment = await client.getEntries({
		content_type: 'equipmentSection'
	})

	const items = await client.getEntries({
		content_type: 'equipment'
	})

	return (
		<main>
			<PagesHero
				image={'https:' + equipment.items[0].fields.image.fields.file.url}
			/>

			<EquipmentMenu content={equipment.items[0]} />

			<EquipmentItems items={items.items} />
		</main>
	)
}
