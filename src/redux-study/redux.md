redux 原理解析
1.  redux的主要逻辑在createStore.js中， 在这个js文件中存在三个重要的方法，dipatch/subscribe/getstate
2.  首先用户执行createStore方法返回一个store的对象，这个store的对象上也会挂载这三个方法。
3.  createStore方法接收三个参数，reducer， preloadState, enhance
4.  用户肯定首先调用subscribe方法，这册监听函数
5.  调用dispath方法-》执行reducer-》执行监听函数
6.  最后用户可以在监听函数中执行getstate方法拿到store里面state的值