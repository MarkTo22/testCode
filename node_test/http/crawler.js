var https = require('https')
var cheerio = require('cheerio')

var url = 'https://www.imooc.com/learn/348'

//npm install cheerio

function filterChapters(html) {
	var $ = cheerio.load(html)
	var chapters = $('.course-wrap')
	// [{
	// 	chapterTitle:'',
	// 	videos:[{
	// 		title:'',
	// 		id:''
	// 	}]
	// }]
	
	var courseData = []
	chapters.each(function(item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('h3').text().trim()
		var videos = chapter.find('.video').children('li')
		var chapterData = {
			chapterTitle: chapterTitle,
			videos:[]
		}
		videos.each(function(videoItem) {
			var video = $(this).find('.J-media-item')
			var videoTitle = video.text().trim()
			var id = video.attr('href').split('video/')[1]

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseData.push(chapterData)
	})

	return courseData
}

function printCourseInfo(courseData) {
	courseData.forEach(function(item) {
		var chapterTitle = item.chapterTitle
		console.log(chapterTitle + '\n')

		item.videos.forEach(function(video) {
			console.log('  [' + video.id + ']  ' + video.title + '\n')
		})
	})
}

https.get(url, function(res) {
	var html = ''
	res.on('data', function(data) {
		html += data
	})

	res.on('end', function() {
		var courseData = filterChapters(html)
		printCourseInfo(courseData)
	})
}).on('error', function(){
	console.error('get error!')
})