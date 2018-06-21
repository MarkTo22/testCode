var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(11) //默认最大10

function hug(who) {
	console.log('give '+ who + ' a big bug!')
}

life.on('ask for a hug', hug)

life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...2')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...3')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...4')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...5')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...6')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...7')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...8')
})
life.on('ask for a hug', function(who) {
	console.log('give '+ who + ' ...9')
})
life.on('demo1', function(who) {
	console.log('give '+ who + ' ...10')
})
life.on('demo2', function(who) {
	console.log('give '+ who + '...die')
})

//事件移除
life.removeListener('ask for a hug', hug)
life.removeAllListeners('11')

//查看事件
console.log('绑定事件\'ask for a hug\'个数：' + life.listeners('ask for a hug').length)
console.log(EventEmitter.listenerCount(life, 'ask for a hug'))

//触发
life.emit('ask for a hug', 'Marco') //返回boolean值，事件是否被监听