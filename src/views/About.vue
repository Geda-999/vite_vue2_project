<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>Hello 这里是初始化 <b> vite + vue2 </b>啦！！！</p>
		<div><i-mdi-account-reactivate style="font-size: 2em; color: red" /></div>
		<div class="a"></div>
	</div>
</template>
<style lang="scss">
.a {
	width: 100px;
	height: 100px;
	display: flex;
	margin: 0 auto;
	background-color: #f0f;

	//&是父选择器标识符
	&:hover {
		background: red;
	}

	//属性嵌套
	border: 1px solid #000 {
		left: 5px solid #000;
		right: 10px solid #000;
	}
}
</style>
