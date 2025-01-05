import { useEffect, useState } from 'react'

const useCounter = num => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (num > 0) {
			let current = 0
			const interval = setInterval(() => {
				if (current < num) {
					current += 1
					setCount(current)
				} else {
					clearInterval(interval)
				}
			}, 15)

			return () => clearInterval(interval)
		}
	}, [num])
	return { count }
}

export default useCounter
