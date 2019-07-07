let placeholderMapping = [
	{
		name: 'pdf',
		suffix: ['pdf'],
		width: 165,
	},
	{
		name: 'pages',
		suffix: ['pages'],
		width: 220,
	},
	{
		name: 'excel',
		suffix: ['xls', 'xlsx'],
		width: 200,
	},
	{
		name: 'word',
		suffix: ['doc', 'docs'],
		width: 220,
	},
	{
		name: '7z',
		suffix: ['7z'],
		width: 140,
	},
];

let fileDescription = [
	{
		suffix: ['mp4', 'mov', 'webm'],
		emoji: '🎬', //常规视频文件
		typeName: '视频',
		size: '',
		icon: 'mdi-video',
		canPlay: {
			icon: 'mdi-play',
			color: 'red',
		},
	},
	{
		suffix: ['mkv', 'avi', 'flv'],
		emoji: '▶️', //常规视频文件
		typeName: '非标视频',
		size: '',
		icon: 'mdi-file-video',
	},
	{
		suffix: ['mp3', 'ogg', 'wav', 'flac', 'ape', 'alca', 'aac'],
		emoji: '🎵', //音频文件
		typeName: '音频',
		size: '',
		icon: 'mdi-music',
	},
	{
		suffix: ['png', 'jpg', 'bmp', 'gif'],
		emoji: '🖼️', //图片
		typeName: '图片',
		size: '',
		icon: 'mdi-image-size-select-actual',
	},
	{
		suffix: ['zip', '7z', 'rar'],
		emoji: '📦', //压缩包
		typeName: '压缩包',
		size: '20',
		icon: 'mdi-zip-box',
	},
	{
		suffix: ['dmg', 'iso'],
		emoji: '💽', //光盘映像
		typeName: '光盘映像',
		size: '',
		icon: 'mdi-harddisk',
	},
	{
		suffix: ['ai', 'psd', 'aep'],
		emoji: '📐', //工程文件
		typeName: '工程文件',
		size: '',
		icon: 'mdi-briefcase-edit',
	},
	{
		suffix: ['ppt', 'pptx', 'key'],
		emoji: '📽️', //演示文件
		typeName: '演示文件',
		icon: 'mdi-projector-screen',
	},
	{
		suffix: ['ttf', 'otf'],
		emoji: '🔤️', //字体文件
		typeName: '字体',
		size: '',
		icon: 'mdi-format-font',
	},
	{
		suffix: ['doc', 'docs', 'pdf', 'txt', 'pages', 'xls', 'xlsx'],
		emoji: '📄', //文档
		typeName: '文档',
		size: '',
		icon: 'mdi-file-pdf',
	},
	{
		suffix: ['puppet'],
		emoji: '🤖', //
		typeName: 'Ch人偶模型',
		size: '',
		icon: 'mdi-robot',
	},
];

function mapToList(placeholderMapping) {
	let map = arrayToObject(placeholderMapping, 'suffix');

	let placeholderContext = require.context(
		'@/assets/img/placeholder',
		false,
		/@2x\.png$/ /* 只读取二倍体 */,
	);

	placeholderContext.keys().map(fileName => {
		// console.log(fileName);
		let regExp = /(file_cover_(bg|name)_)([a-z0-9]+)(@2x\.png)/i;
		let group = fileName.match(regExp);

		if (group) {
			let name = group[3];
			if (!map[name]) {
				//没有手动添加才进行自动加载
				map[name] = { name };
			}
		}
	});

	console.log(map);

	return map;
}

function arrayToObject(array, key) {
	let object = {};
	array.forEach((eachObject, index) => {
		eachObject[key].forEach((eachKey, index) => {
			object[eachKey] = eachObject;
			delete object[eachKey][key]; //可以删除json里的一项key
		});
	});
	return object;
}

export default {
	results: [],

	unknownDescription: {
		suffix: [],
		emoji: '❓', //未知格式
		typeName: '未知格式',
		size: '',
		icon: 'mdi-file-question',
	},
	suffixList: [
		{
			size: '20',
			icon: 'fas fa-globe-americas',
			typeName: '全部',
			count: 0,
		},
	],

	placeholderList: mapToList(placeholderMapping),

	descriptionList: arrayToObject(fileDescription, 'suffix'),
};
