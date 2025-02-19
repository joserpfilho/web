import Image from 'next/image';

import { Radio } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Home() {
	return (
		<main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
			<div className="min-h-dvh flex justify-center gap-16 flex-col">
				<div className="flex flex-col gap-8 items-center md:items-start w-full max-w-[550px]">
					<Image src={logo} alt="devstage" width={108.5} height={30} />

					<h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
						<span className="text-blue">CodeCraft</span>Summit 2025
					</h1>
				</div>

				<div className="flex gap-5 items-stretch flex-col md:flex-row">
					<div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
						<div className="flex items-center justify-between">
							<h2 className="font-heading font-semibold text-gray-200 text-xl">
								Sobre o evento
							</h2>
							<span className="text-purple font-semibold text-xs flex items-center gap-2">
								<Radio className="size-5" />
								AO VIVO
							</span>
						</div>
						<p className="text-gray-300 leading-relaxed text-sm md:text-base">
							Um evento feito por e para pessoas desenvolvedoras apaixonadas por
							criar soluções inovadoras e compartilhar conhecimento. Vamos
							mergulhar nas tendências mais recentes em desenvolvimento de
							software, arquitetura de sistemas e tecnologias emergentes, com
							palestras, workshops e hackathons.
						</p>
						<br />
						<br />
						Dias 15 à 17 de março | Das 18h às 21h | Online & Gratuito
					</div>
					<form action="">form</form>
				</div>
			</div>
		</main>
	);
}
