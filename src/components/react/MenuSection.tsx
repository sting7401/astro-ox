interface SubItem {
	text: string;
	url: string;
	check: string;
	etc?: string;
	subtitle?: string;
}

interface MenuItemExtended {
	page?: string;
	title: string;
	subList: SubItem[];
}

interface Props {
	items?: MenuItemExtended[];
}

const menuArrays: MenuItemExtended[] = [
	{
		page: '유통물류',
		title: '기준정보',
		subList: [
			{
				text: '고객사 관리',
				url: '/CMS_04_1',
				check: '신규',
				etc: '',
			},
			{
				text: '고객사 등록',
				url: '/CMS_04_1/reg',
				check: '신규',
				etc: 'popup : 양식관리',
			},
			{
				text: '상품관리',
				url: '/CMS_04_2',
				check: '신규',
				etc: '',
			},
			{
				text: '단일 상품 등록',
				url: '/CMS_04_2/single/reg',
				check: '신규',
				etc: 'popup : 옵션 편집/등록',
			},
			{
				text: '단일 상품 상품 상세정보',
				url: '/CMS_04_2/single/detail',
				check: '신규',
				etc: '',
			},
			{
				text: '세트 상품 등록',
				url: '/CMS_04_2/set/reg',
				check: '신규',
				etc: 'popup : 단일상품 조회',
			},
			{
				text: '세트 상품 상품 상세정보',
				url: '/CMS_01/set/detail',
				check: '신규',
				etc: '',
			},
		],
	},
];

const getStatusClass = (check: string) => {
	switch (check) {
		case '완료':
			return 'text-[--222]';
		case '수정':
			return 'text-red-600';
		case '삭제':
			return 'text-gray-300 line-through';
		case '신규':
			return 'text-2070fb';
		case '확인 필요':
			return 'text-green-600';
		default:
			return 'text-gray-300';
	}
};

export const MenuSection: React.FC<Props> = ({ items = menuArrays }) => (
	<section className="container mx-auto px-4 py-8">
		{items.map((item) => (
			<div key={item.title} className="mb-8">
				{item.page && <h2 className="text-2070fb m-2 text-2xl font-bold">{item.page}</h2>}
				<h3 className="text-2d3648 m-2 text-xl">{item.title}</h3>

				<div className="grid gap-4 sm:grid-cols-1">
					{item.subList.map((subItem, subIndex) => (
						<div
							key={subItem.text}
							className={`border-b border-gray-300 transition-shadow hover:shadow-md ${getStatusClass(subItem.check)}`}
						>
							{subItem.subtitle && (
								<p className="px-4 py-2 font-medium text-gray-600">{subItem.subtitle}</p>
							)}

							<a
								href={subItem.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex h-full flex-col gap-2 p-2 hover:bg-slate-50"
							>
								<div className="flex items-start justify-between gap-2">
									<span className="font-medium">
										{subIndex + 1}. {subItem.text}
									</span>
									{subItem.etc && (
										<span className="shrink-0 rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500 group-hover:bg-white">
											{subItem.etc}
										</span>
									)}
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		))}
	</section>
);
