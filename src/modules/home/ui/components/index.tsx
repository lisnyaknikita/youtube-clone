import { SidebarTrigger } from '@/components/ui/sidebar'

import { SearchInput } from './home-navbar/search-input'

import { AuthButton } from '@/modules/auth/ui/components/auth-button'
import Image from 'next/image'
import Link from 'next/link'

export const HomeNavbar = () => {
	return (
		<nav className='fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50'>
			<div className='flex items-center gap-4 w-full'>
				<div className='flex items-center flex-shrink-0'>
					<SidebarTrigger />
					<Link href={'/'}>
						<Image src={'/next.svg'} alt='logo' width={80} height={80} />
					</Link>
				</div>

				<div className='flex-1 flex justify-center max-w-[720px] mx-auto'>
					<SearchInput />
				</div>

				<div className='flex-shrink-0 items-center flex gap-4'>
					<AuthButton />
				</div>
			</div>
		</nav>
	)
}
