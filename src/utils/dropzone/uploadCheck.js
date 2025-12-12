const target = new Map();
let _imgDropMap = { target };

function registerDropzoneEvents(key) {
	const dropzone = _imgDropMap.get(key); // key는 등록 시 사용한 selector 또는 element.id
	if (!dropzone) {
		console.warn(`Dropzone not found for key: ${key}`);
		return;
	}

	dropzone.on('addedfile', (file) => {
		if (dropzone.files.length > 1) {
			dropzone.removeFile(dropzone.files[0]);
		}
		console.info('File added:', file);
	});

	dropzone.on('removedfile', (file) => {
		console.info('File removed:', file);
	});

	dropzone.on('error', (file, message) => {
		alert(message);
	});

	dropzone.on('complete', () => {
		console.info('Upload complete!');
	});
}

function _dropImgEvents(selector = 'hs-file-upload') {
	if (!window.HSFileUpload) return;
	HSFileUpload.autoInit();

	const { element } = HSFileUpload.getInstance(`#${selector}`, true);
	const { dropzone } = element;

	if (!element || !dropzone) {
		return;
	}

	_imgDropMap.set(`#${selector}`, dropzone);

	// 외부에서 재사용 가능한 이벤트 등록 호출
	registerDropzoneEvents(`#${selector}`);
}
