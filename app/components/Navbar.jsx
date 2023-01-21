'use client';

import { useEffect, useState } from 'react';
import {
	Person as PersonIcon,
	Image as ImageIcon,
	Envelope as EnvelopeIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	Tiktok as TikTokIcon,
	List as ListIcon,
} from 'react-bootstrap-icons';

export default function Navbar() {
	const [checked, setChecked] = useState(false);
	const [toggleClass, setToggleClass] = useState('default');

	const handleChange = () => {
		setChecked(!checked);
	};

	useEffect(() => {
		if (checked) {
			setToggleClass('active');
		} else {
			setToggleClass('default');
		}
	}, [checked]);

	return (
		<>
			<div className='p-[2rem] fixed cursor-pointer text-[6.5vh] leading-none z-[4] md:hidden'>
				<ListIcon className='mb-[5px] bi-list block bg-black rounded drop-shadow-lg' onClick={handleChange} />
			</div>
			<nav
				onClick={handleChange}
				className={
					toggleClass +
					' left-[-100%] fixed flex items-center justify-center w-[100%] min-h-screen bg-black/75 backdrop-blur backdrop-opacity-100 text-center text-[9vw] md:backdrop-blur-none md:w-auto md:bg-transparent md:block md:min-h-0 md:bottom-[5rem] md:left-auto md:right-[5rem] md:text-[1.4vw] z-[3]'
				}
			>
				<ul>
					<li>
						<a href='#about' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<PersonIcon className='inline-block mb-[5px]' /> About
							</span>
						</a>
					</li>
					<li>
						<a href='#portfolio' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<ImageIcon className='inline-block mb-[5px]' /> Portfolio
							</span>
						</a>
					</li>
					<li>
						<a href='#contact' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<EnvelopeIcon className='inline-block mb-[5px]' /> Contact
							</span>
						</a>
					</li>
					<li>
						<a href='https://instagram.com/retroxar' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<InstagramIcon className='inline-block mb-[5px]' /> Instagram
							</span>
						</a>
					</li>
					<li>
						<a href='https://twitter.com/retroxar' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<TwitterIcon className='inline-block mb-[5px]' /> Twitter
							</span>
						</a>
					</li>
					<li>
						<a href='https://www.tiktok.com/@retroxar' className='w-full block overflow-auto'>
							<span className='w-full md:w-auto block md:bg-black float-right py-2 px-3 btn'>
								<TikTokIcon className='inline-block mb-[5px]' /> TikTok
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
