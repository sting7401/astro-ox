export interface SubItem {
	text: string;
	url: string;
	check: '완료' | '수정' | '삭제' | '신규' | '확인 필요' | string;
	subtitle?: string;
	etc?: string;
}

export interface MenuItem {
	page?: string;
	title: string;
	subList: SubItem[];
}

export const menuArrays: MenuItem[] = [
	{
		page: 'Front',
		title: '',
		subList: [
			{
				text: '12',
				url: '',
				check: '신규',
				etc: '1231232222122123',
			},
		],
	},
];
