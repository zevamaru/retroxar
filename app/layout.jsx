import './globals.css';

import { Roboto_Mono } from '@next/font/google';
const roboto = Roboto_Mono({ weights: ['500', '600', '700'], subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
