import {ClanType, IClan} from "../Domain/IClan";

export const Clans: IClan[] = [
	{ name: 'Banu Haqim', weakness: { name: 'Blood Addiction', description: '' }, type: ClanType.CLAN },
	{ name: 'Brujah', weakness: { name: 'Violent Temper', description: '' }, type: ClanType.CLAN },
	{ name: 'Followers of Set', weakness: { name: 'Abhors the Light', description: '' }, type: ClanType.CLAN },
	{ name: 'Gangrel', weakness: { name: 'Bestial Features', description: '' }, type: ClanType.CLAN },
	{ name: 'Giovanni', weakness: { name: 'Painful Kiss', description: '' }, type: ClanType.CLAN },
	{ name: 'Lasombra', weakness: { name: 'Distorted Image', description: '' }, type: ClanType.CLAN },
	{ name: 'Malkavian', weakness: { name: 'Fractured Perspective', description: '' }, type: ClanType.CLAN },
	{ name: 'Nosferatu', weakness: { name: 'Repulsiveness', description: '' }, type: ClanType.CLAN },
	{ name: 'Ravnos', weakness: { name: 'Doomed', description: '' }, type: ClanType.CLAN },
	{ name: 'Toreador', weakness: { name: 'Repulsiveness', description: '' }, type: ClanType.CLAN },
	{ name: 'Tremer', weakness: { name: 'Deficient Blood', description: '' }, type: ClanType.CLAN },
	{ name: 'Tzimisce', weakness: { name: 'Grounded', description: '' }, type: ClanType.CLAN },
	{ name: 'Ventrue', weakness: { name: 'Arrogance', description: '' }, type: ClanType.CLAN },
]
