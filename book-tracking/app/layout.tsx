import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} min-h-screen h-full fixed w-full mx-auto`}
			>
				<div className='flex gap-10 px-24 max-w-7xl justify-center mx-auto h-screen py-10'>
					{/* <Sidebar /> */}
					<div className='w-full'>
						<Navbar />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
