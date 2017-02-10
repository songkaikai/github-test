<template>
	<div>
		<div v-for="n in 2">{{ n }}</div>
		<!-- <span>{{ demoD }}</span> -->
		<p>{{ demoT }}</p>
	</div>
</template>

<script>
	import demo from '../demo.js';
	export default {
		data () {
			return {
				msg: 'Hello World!',
				//demoD: demo.str,
				demoT: demo.fu()
			}
		}
	}
</script>

<style>
	html { background: #666; color: #ccc; }
</style>