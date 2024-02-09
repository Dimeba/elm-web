'use client'

// hooks
import { createContext } from 'react'
import { useState } from 'react'

export const EquipmentContext = createContext()

export const EquipmentContextProvider = ({ children }) => {
	const [equipmentType, setEquipmentType] = useState('')

	return (
		<EquipmentContext.Provider value={{ equipmentType, setEquipmentType }}>
			{children}
		</EquipmentContext.Provider>
	)
}
