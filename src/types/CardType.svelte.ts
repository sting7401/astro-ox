import { z } from 'zod';

// Zod 스키마 정의
export const CardImgSchema = z.object({
	img: z.string().optional().default(''),
	title: z.string().optional().default(''),
	categoryIcon: z.string().optional().default(''),
	green: z.string().optional().default('OFF'),
	cherry: z.string().optional().default('OFF'),
	floor: z.string().optional().default(''),
	hall: z.string().optional().default(''),
	boothNumber: z.string().optional().default(''),
});

// 타입 추론
export type CardImgProps = z.infer<typeof CardImgSchema>;

// props 검증 함수
export function validCardImgProps(props: Partial<CardImgProps> = {}): CardImgProps {
	// Partial로 선언하면 필수값 없이도 안전하게 전달 가능
	return CardImgSchema.parse(props);
}

const CardBadgeSchema = z.object({
	courseCurrent: z.string().optional().default(''),
	difficulty: z.string().optional().default(''),
});
export type CardBadgeProps = z.infer<typeof CardBadgeSchema>;
export function validCardBadgeProps(props: unknown): CardBadgeProps {
	return CardBadgeSchema.parse(props);
}
