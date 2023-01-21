'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Form() {
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
	};

	return (
		<form ref={form} onSubmit={sendEmail} className='block mt-6'>
			<input
				type='text'
				name='user_name'
				id='user_name'
				className='text-[2.6vh] border border-[black] py-2 px-4 w-full rounded drop-shadow-lg mb-5 md:text-[1.5vw] text-black bg-white'
				placeholder='Your name or nickname'
				required
			/>
			<input
				type='email'
				name='user_email'
				id='user_email'
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
	);
}
