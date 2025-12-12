<svelte:options
	customElement={{
		tag: 'drop-upload',
		shadow: 'none',
	}}
/>

<script lang="ts">
	import Dropzone from 'dropzone';

	const url = window.location.pathname;

	function dzInstance(element: HTMLElement): void | (() => void) {
		const dz = new Dropzone(element, {
			url: url,
			acceptedFiles: '.jpg,.jpeg,.png',
			maxFiles: 1,
			maxFilesize: 10,
			addRemoveLinks: false,
			dictRemoveFile: '삭제',
			autoProcessQueue: true,
			previewsContainer: element,
			previewTemplate: /* HTML */ `
				<div class="dz-preview dz-file-preview relative h-full rounded-lg border border-gray-200 bg-white">
					<img class="h-full w-full rounded-lg object-cover" data-dz-thumbnail />
					<div class="absolute top-0 right-0 flex items-center justify-between gap-x-3 whitespace-nowrap">
						<div class="flex items-center gap-x-2">
							<button
								class="button relative size-8 rounded-full hover:scale-110 focus:outline-hidden"
								type="button"
								data-dz-remove
								title="삭제"
							>
								<icon-list class="fill-ff0000 flex size-6" data-name="close-circle"></icon-list>
							</button>
						</div>
					</div>
				</div>
			`,
			init() {
				const previewPlaceholder = this.element.parentElement?.querySelector(
					'[data-dropzone="previewPlaceholder"]',
				);

				if (!previewPlaceholder) return;
			},
		});

		return () => {
			dz.destroy();
		};
	}
</script>

<div class="col-span-2 flex flex-col flex-wrap items-start gap-3 md:flex-row md:items-start">
	<div class="relative size-25 rounded-lg bg-white object-cover" id="dropZoneUp" {@attach dzInstance}>
		<div class="group" data-dropzone="previewPlaceholder">
			<div
				class="border-primary absolute top-0 left-0 flex size-full flex-col items-center justify-center rounded-lg border"
			>
				<icon-list data-name="gallery" class="flex size-6 stroke-black"></icon-list>
				<p class="text-2xs text-666">파일선택</p>
			</div>
		</div>
	</div>

	<!-- 업로드 트리거 버튼 (필요시) -->
	<div>
		<button
			type="button"
			class="bg-2070fb flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300"
			data-dropzone="uploadTrigger"
		>
			이미지 업로드
		</button>
		<div class="mt-2 space-y-0.5 ps-3 text-sm text-gray-500" id="file_input_help">
			<p>* 이미지는 최대 1장까지 등록 가능</p>
			<p>* 권장크기/형식 : 1,000 x 1,000 pixels (jpg, jpeg, png)</p>
		</div>
	</div>
</div>
