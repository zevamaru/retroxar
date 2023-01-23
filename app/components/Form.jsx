'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Send = () => {
	return(
		<>
			<p className='text-[2.2vh] leading-relaxed md:text-[1.3vw]'>
				You can contact me through the following form or by{' '}
				<a href='mailto:contact@retrox.ar' className='bg-black p-1'>
					e-mail
				</a>
				, it's your choice. Choose wisely.
			</p>
		</>
	);
};

const Sent = () => {
	return(
		<>
			<p className='text-[2.2vh] leading-relaxed md:text-[1.3vw] p-[1.2rem] text-center border rounded colorized shadow-lg'>
				You've choosen well. I'll contact you, listen to the bell.
			</p>
		</>
	);
};

export default function Form() {
	const [sent, setSent] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_s8lt85c', 'template_0bl4z4f', form.current, 'Oqa_XHWRGC-iR5EBl').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		document.querySelector('#user_name').disabled = true;
		document.querySelector('#user_email').disabled = true;
		document.querySelector('#message').disabled = true;
		document.querySelector('#submit').disabled = true;
		setSent(true);
	};

	return (
		<>
			{sent ? <Sent /> : <Send />}
			<form ref={form} onSubmit={sendEmail} className='block mt-6'>
				<input
					type='text'
					name='user_name'
					id='user_name'
					className='text-[2.6vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-5 md:text-[1.5vw] text-black bg-white disabled:opacity-50'
					placeholder='Your name or nickname'
					required
				/>
				<input
					type='email'
					name='user_email'
					id='user_email'
					className='text-[2.6vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-5 md:text-[1.5vw] md:h-auto text-black bg-white disabled:opacity-50'
					placeholder='Your e-mail'
					required
				/>
				<textarea
					name='message'
					id='message'
					cols='30'
					rows='5'
					className='text-[2.6vh] h-[30vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-4 md:h-auto md:text-[1.5vw] text-black bg-white disabled:opacity-50'
					placeholder='How I can help you?'
					required
				></textarea>
				<button type='submit' id='submit' className='text-[2.6vh] p-3 drop-shadow-lg md:text-[1.5vw] bg-black leading-none btn disabled:opacity-25'>
					<i className='bi-envelope-at'></i> Send
				</button>
			</form>
		</>
	);
}
