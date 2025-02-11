import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Image src={'/next.svg'} width={70} height={70} alt='Logo' />
		</div>
	)
}
