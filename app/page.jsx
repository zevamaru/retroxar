import Image from 'next/image';

import Navbar from './components/Navbar';

import Logo from '../public/assets/RockLee.gif';

export default function Home() {
	return (
		<>
			<div className='hidden md:block fixed bg-black w-full h-screen opacity-70 z-[1]'></div>
			<Navbar />
			<section
				id='about'
				className='p-[2rem] relative min-h-screen md:p-[5rem] flex items-center justify-center flex-col md:items-start md:justify-end z-[2]'
			>
				<div className='w-[20vh] h-[20vh] mb-[2vh] md:absolute md:m-auto bg-black md:w-[6.5vw] md:h-[6.5vw] md:top-[5rem] rounded-full flex items-center justify-center'>
					<a href='./'>
						<Image src={Logo} width='84' height='84' alt='Retroxar' className='md:w-[4.5vw] md:h-[4.6vw] mt-[-3px]' />
					</a>
				</div>
				<div className='md:pr-[41%] flex justify-center flex-col'>
					<h1 className='text-[5.1vh] md:text-[3.6vw] font-bold py-5 leading-tight'>
						Hello, I’m Retroxar and <span className='bg-black'>I make pixel-art</span>.
					</h1>
					<p className='text-[1.8vh] mb-[3vh] leading-relaxed md:mb-2 md:text-[1.3vw]'>
						I can create all kind of assets: portraits, avatars, characters, icons, backgrounds, tile sets, and so over. If you
						need something special, with quality, attention to detail, and affordable, you’ve come to the right place.
					</p>
					<p className='text-[1.8vh] leading-relaxed md:text-[1.3vw]'>
						Check out{' '}
						<a href='#portfolio' className='bg-black p-1'>
							my portfolio
						</a>{' '}
						and{' '}
						<a href='#contact' className='bg-black p-1'>
							contact me
						</a>{' '}
						if you’re interested in creating a fabulous piece of pixel-art together
						<span className='line-through'> to impress your girlfriend</span>.
					</p>
				</div>
			</section>
			<section id='portfolio' className='p-[2rem] relative min-h-screen md:p-[5rem] z-[2]'>
				<div className='md:pr-[41%]'>
					<h2 className='text-[5.1vh] font-bold pb-5 leading-none pt-[12vh] md:text-[3.5vw] md:pt-[0]'>Portfolio</h2>
					<div className='flex flex-wrap px-[1px]'>
						<div className='flex-[100%] max-width-[100%] md:flex-[50%] md:max-width-[50%] px-[1px]'>
							<a href='/assets/akuma.png'>
								<img src='/assets/akuma.png' className='mt-[2px] w-full align-middle' alt='Akuma' />
							</a>
							<a href='/assets/retrodungeontiles.png'>
								<img src='/assets/retrodungeontiles.png' className='mt-[2px] w-full align-middle' alt='Dungeon tiles' />
							</a>
							<a href='/assets/theelvendungeon.png'>
								<img src='/assets/theelvendungeon.png' className='mt-[2px] w-full align-middle' alt='The Elven Dungeon' />
							</a>
							<a href='/assets/thesaintsofredemption.png'>
								<img
									src='/assets/thesaintsofredemption.png'
									className='mt-[2px] w-full align-middle'
									alt='The Saints of Redemption'
								/>
							</a>
							<a href='/assets/levelnomatter.png'>
								<img src='/assets/levelnomatter.png' className='mt-[2px] w-full align-middle' alt='Level does not matter' />
							</a>
						</div>
						<div className='flex-[100%] max-width-[100%] md:flex-[50%] md:max-width-[50%] px-[1px]'>
							<a href='/assets/thereturnofalexscreenshot.gif'>
								<img
									src='/assets/thereturnofalexscreenshot.gif'
									className='mt-[2px] w-full align-middle'
									alt='The Return of Alex screenshot'
								/>
							</a>
							<a href='/assets/thereturnofalex.gif'>
								<img src='/assets/thereturnofalex.gif' className='mt-[2px] w-full align-middle' alt='The Return of Alex gif' />
							</a>
							<a href='/assets/starwars.jpg'>
								<img src='/assets/starwars.jpg' className='mt-[2px] w-full align-middle' alt='Star Wars' />
							</a>
							<a href='/assets/thereturnofalexbattle.gif'>
								<img
									src='/assets/thereturnofalexbattle.gif'
									className='mt-[2px] w-full align-middle'
									alt='The Return of Alex battle scene'
								/>
							</a>
							<a href='/assets/babayaga.jpg'>
								<img src='/assets/babayaga.jpg' className='mt-[2px] w-full align-middle' alt='Baba Yaga' />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section id='contact' className='p-[2rem] relative min-h-screen md:p-[5rem] md:flex md:flex-col md:justify-end z-[2]'>
				<div className='md:pr-[41%]'>
					<h2 className='text-[5.1vh] md:text-[3.5vw] font-bold pb-5 leading-none pt-[12vh] md:pt-[0]'>Contact</h2>
					<p className='text-[2.2vh] leading-relaxed md:text-[1.3vw]'>
						You can contact me through the following form or by{' '}
						<a href='mailto:contact@retrox.ar' className='bg-black p-1'>
							e-mail
						</a>
						, it's your choice. Choose wisely.
					</p>
					<form action='' className='block mt-6'>
						<input
							type='text'
							name='name'
							id='name'
							className='text-[2.6vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-5 md:text-[1.5vw] text-black bg-white'
							placeholder='Your name or nickname'
							required
						/>
						<input
							type='email'
							name='email'
							id='email'
							className='text-[2.6vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-5 md:text-[1.5vw] md:h-auto text-black bg-white'
							placeholder='Your e-mail'
							required
						/>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='5'
							className='text-[2.6vh] h-[30vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-4 md:h-auto md:text-[1.5vw] text-black bg-white'
							placeholder='How I can help you?'
							required
						></textarea>
						<button type='submit' className='text-[2.6vh] p-3 drop-shadow-lg md:text-[1.5vw] bg-black leading-none btn'>
							<i className='bi-envelope-at'></i> Send
						</button>
					</form>
				</div>
			</section>
			<footer className='px-[2rem] relative md:px-[5rem] py-[2rem] z-[2] opacity-30'>
				<p>
					This site was developed by{' '}
					<a href='http://github.com/zevamaru' className='underline'>
						zevamaru
					</a>{' '}
					using{' '}
					<a href='https://nextjs.org/' className='underline'>
						Next.js
					</a>{' '}
					and
					<a href='https://tailwindcss.com/' className='underline'>
						TailwindCSS
					</a>
					.
				</p>
			</footer>
		</>
	);
}
