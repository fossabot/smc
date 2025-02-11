const AV = require('leancloud-storage');
const path = require('path');
const expand = require(path.resolve('server/utils/expandUtils'));
var axios = require('axios');
const Qs = require('qs');
var fs = require('fs');
// var FormData = require('form-data');

var newDiscussionID = 'K8CWmBMqMtYYpU1f';
var getAttachmentID = 'K8CWmBMqMtYYpU1f';

// console.log(process.env.shimoCookie);

var shimoCookie = process.env.shimoCookie;

var genericHeaders = {
	//一定要填充这个请求头才能规避那个频次过高的检测
	Accept: 'application/vnd.shimo.v2+json',
	'Accept-Encoding': 'br, gzip, deflate',
	'Accept-Language': 'zh-cn',
	Authorization:
		'Bearer 62cbbe058449d3db514c7aece09afe0c13d0e501ed07624478704405d6cef617200823a164c086b87153edbba7acabcbc78c475c53a19a89df10cc2f872855a8',
	'Cache-Control': 'no-cache',
	Connection: 'keep-alive',
	'User-Agent':
		'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16B92',
	Cookie: shimoCookie,
};

async function tryCatch(promise) {
	try {
		const ret = await promise;
		return [ret, null];
	} catch (e) {
		return [null, e];
	}
}

function http(config) {
	return tryCatch(
		axios.create({
			// timeout: 1500,
			transformRequest: [data => Qs.stringify(data)],
		})(config),
	);
}

function KB2GB(KB) {
	return (KB / (1024 * 1024 * 1024)).toFixed(2);
}

async function getDiscussion(fileID) {
	var content, list;
	var contentList = [];
	var headers = {
		Accept: '*/*',
		'Accept-Encoding': 'br, gzip, deflate',
		'Accept-Language': 'zh-cn',
		Connection: 'keep-alive',
		Referer: 'https://shimo.im/docs/K8CWmBMqMtYYpU1f',
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.1 Safari/605.1.15',
		'X-CSRF-Token': 'JDvV3azC-fmyRaI4kR98csJiXEhmprm78WMw',
		Cookie: shimoCookie + '_csrf=q4MNRquXrxATGBLCwExHVcIs;',
	};

	const [resp, error] = await http({
		method: 'get',
		url: `https://shimo.im/smapi/files/${fileID}/discussions?limit=99999999`,
		headers: headers,
	});
	if (error) {
		return console.log('getDiscussion请求出错: ' + error);
	}
	// console.log("getDiscussion请求成功");

	list = resp.data.data.list;

	for (var i in list) {
		var item = list[i];
		contentList.push(item.data.content);
	}
	// console.log(contentList);

	//contentList.reverse();//顺序倒过来，正常来说最新的内容在最上面
	//console.log(contentList.join("\n"));
	return contentList;
}

async function getAttachment(fileID) {
	//var origUrl = "https://api.shimo.im/files/" + fileID + "?contentUrl=true";
	//var origResp = UrlFetchApp.fetch(origUrl);
	//var contentUrl = JSON.parse(origResp).contentUrl;
	//console.log(contentUrl);

	var url = 'https://api.shimo.im/files/' + fileID + '?content=true';
	const [resp, error] = await http({
		method: 'get',
		url: url,
		headers: genericHeaders,
	});
	if (error) {
		return console.log('getAttachment请求出错: ' + error);
	}
	// console.log("getAttachment请求成功 ");

	var attachmentsList = [];
	var orig = resp.data.content;
	orig = JSON.parse(orig);

	for (var i = 0; i < orig.length; i++) {
		var attachment = orig[i][1].attachment;
		if (attachment) {
			attachmentsList.push(attachment);
			// var name = attachment.name;
			// var url = attachment.url;
		}
	}

	// console.log(attachmentsList);

	return attachmentsList;
}

async function postDiscussion(fileID, content) {
	const [resp, error] = await http({
		method: 'post',
		url: 'https://shimo.im/smapi/files/' + fileID + '/discussions',
		headers: {
			Cookie: shimoCookie,
		},
		data: {
			content: content,
		},
	});
	if (error) {
		return console.log('Discussion请求出错: ' + error);
	}

	if (resp.data.code !== 0) {
		console.log(
			'讨论上传失败，错误信息：『' +
				resp.message +
				'』\n' +
				'详情请查看：' +
				'https://shimo.im/docs/' +
				fileID,
		);
		return 'error';
	} else {
		return resp.data;
	}
}

async function shortenURL(input) {
	async function main(input) {
		let longURL = input.match(/[a-zA-z]+:\/\/[^\s]*/g);

		for (i = 0; i < longURL.length; i++) {
			let url =
				'http://api.t.sina.com.cn/short_url/shorten.json?source=2849184197&url_long=' +
				encodeURIComponent(longURL[i]);
			let response = await axios.get(url);
			let json = response.data;
			let shortURL = json[0]['url_short'];
			input = input.replace(longURL[i], shortURL);
		}
		return input;
	}

	var shortenedURL = '';
	do {
		shortenedURL = await main(input);
	} while (!shortenedURL.match(/http(s?):\/\/t\.cn\/\S+/));

	return shortenedURL;
}

function cutHTTP(input) {
	return input.replace(/[a-zA-z]+:\/\//g, '');
}

function emoji(suffix) {
	var emoji;

	if (suffix.match(/[a-zA-Z]/g)) {
		if (suffix.match(/mp4|mov|avi/gi)) {
			//根据后缀给出emoji
			emoji = '🎬'; //常规视频文件
		} else if (suffix.match(/webm|mkv|avi/gi)) {
			emoji = '▶️'; //手机无法播放的非常规视频文件
		} else if (suffix.match(/mp3|ogg|wav|flac|ape|alca|aac/gi)) {
			emoji = '🎵'; //音频文件
		} else if (suffix.match(/zip|7z|rar/gi)) {
			emoji = '📦'; //压缩包
		} else if (suffix.match(/dmg|iso/gi)) {
			emoji = '💽'; //光盘映像
		} else if (suffix.match(/ai|psd|aep/gi)) {
			emoji = '📐'; //工程文件
		} else if (suffix.match(/ppt|pptx|key/gi)) {
			emoji = '📽️'; //演示文件
		} else if (suffix.match(/ttf|otf/gi)) {
			emoji = '🔤️'; //字体文件
		} else if (suffix.match(/doc|pdf/gi)) {
			emoji = '️📄'; //文档
		} else {
			emoji = '❓'; //未知格式
		}
	} else {
		emoji = suffix;
	}
	return emoji;
}

async function update(newDiscussionID, getAttachmentID) {
	//更新上传专用的石墨文档的项目是否与评论区同步
	var joinList, realName, name, attachment, attachmentsList, content, dic;
	var result = [];
	var sumSize = 0;
	var count = 0;
	var list = await getDiscussion(newDiscussionID); //post评论区的文档
	var total = list.length;

	attachmentsList = await getAttachment(getAttachmentID); //get附件的文档

	if (list.length != 0) {
		//检测评论区目标是否一条评论都没有
		joinList = list.join('\n');
	} else {
		joinList = '';
	}

	for (var j in list) {
		if (list[j].match('size')) {
			sumSize += Number(JSON.parse(list[j]).size);
		}
	}

	attachmentsList.forEach(async e => {
		var attachment = e;
		var realName = attachment.name.split('.');
		var suffix = realName.pop();
		var name = realName.join('.');

		if (joinList.match(attachment.url)) {
			//查重检测
			// console.log("跳过重复文件:"+attachment.name);
			return;
		}

		var params = {
			suffix: suffix,
			name: name,
			size: Number(attachment.size),
			uploaderURL: attachment.url,
		};

		await save2DataBase(params);

		result.push(output);
	});

	//统计评论区里面的文件上传总数和累计已上传的体积
	var count = result.length;
	if (count != 0) {
		console.log(
			'共增加' +
				count +
				'个新项目' +
				'，已上传 ' +
				(total + count) +
				' 个文件，累计 ' +
				KB2GB(sumSize) +
				' GB',
		);
		console.log('\n' + result.join('\n') + '\n');
	} else {
		console.log('已上传 ' + total + ' 个文件，累计 ' + KB2GB(sumSize) + ' GB');
	}
	return result;
	//newRevert(getAttachmentID,dataHistoryID);//更新完成后，马上清空「上传专用」文档，清零作用
}

async function save2DataBase(params) {
	let regExp = /(http(s?):\/\/(attachments-cdn\.shimo\.im)\/([a-z0-9]{16,})(\/[\S]+)*)(\?)*/i;

	let expandedURL = await expand(params.uploaderURL);

	let matched = expandedURL.match(regExp);
	if (matched) {
		let attachmentURL = matched[1];
		console.log(attachmentURL);
		params.attachmentURL = attachmentURL;

		let selfMakeAttachmentURL = attachmentURL.replace(
			/http(s?):\/\/(attachments-cdn\.shimo\.im)\//i,
			'https://dn-shimo-attachment.qbox.me/',
		);
		params.newShortURL = await shortenURL(selfMakeAttachmentURL);
	}

	params.name_trans = await AV.Cloud.run('googleTranslateByPost', {
		orig: params.name.toLowerCase(),
	});

	content = JSON.stringify(params);

	var resp = await postDiscussion(newDiscussionID, content); //上传到评论区

	params.id = resp.data.id;
	params.unixus = resp.data.unixus;

	// AV.Cloud.run('save2LeanCloud', params); //上传到leancloud的数据储存

	save2LeanCloud(params);

	var output = `${emoji(params.suffix)} ${params.name} | ${cutHTTP(
		params.shortURL || params.newShortURL,
	)}`; //输出到控制台

	return output;
}

function save2LeanCloud(dic) {
	var extendedClass = AV.Object.extend(dic.chosenClass);
	var file = new extendedClass();
	for (var i in dic) {
		if (i == 'size') {
			file.set(i, Number(dic[i]));
		} else {
			file.set(i, dic[i]);
		}
	}
	file.save().then(
		function() {
			console.log('已上传到LeanCloud');
		},
		function(error) {
			console.log(JSON.stringify(error));
		},
	);
	return;
}

async function thisFunc(request) {
	var feedback;

	if (request && request.params.code == 0) {
		//如果传入了石墨上传成功后返回的参数(code:0),那么就直接进行save2DataBase,否则就进行常规的update
		let params = request.params.data;
		console.log('\033[1;31;47m已经成功传入updateShimo这里了\033[0m');

		var chosenClass = request.params.class || 'ShimoBed';

		params.uploaderURL = params.url;
		params.lottieURL = request.params.lottieURL;
		params.chosenClass = chosenClass;

		// console.log(params);

		save2DataBase(params);
		feedback = [params];
	} else {
		feedback = await update(newDiscussionID, getAttachmentID);
	}

	return feedback; //返回更新了多少个文件
}

/*CG:D*/

require(path.resolve('./tools/identifier.js')).run({
	rules: '!vscode||local',
	func: () => {
		thisFunc();
	},
});

/*CG:D*/

module.exports = thisFunc;
