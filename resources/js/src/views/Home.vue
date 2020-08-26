<template>
<div>
	<div class="flex flex-wrap -mx-2">
		<div class="w-full md:w-2/3 px-4">
			<vs-card vs-justify="center" vs-align="center">
				<div slot="header">
					<span class="headText"><pre>  Doors & Drawers</pre></span>
				</div>
				<div style="font-size:1em">
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col w-full">
							<li v-for="(image, index) in images">
								<vs-radio v-model="radios1" :vs-value="image.ID">
									<vs-image :key="index" :src="image.logo_image_small" />
								</vs-radio>
							</li>
						</div>
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Style Group <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="[style]" v-for="(style, index) in images" :key="index" @change="" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Door <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
						<div class="vx-col sm:w-1/4 w-full px-2">
							<vs-button type="flat" size="small" style="font-size: 0.9em; padding:0.5em 0.7em;">Options</vs-button>
							<vs-button type="flat" size="small" style="font-size: 0.9em; padding:0.5em 0.7em;">Spec</vs-button>
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Small Drawer <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Large Drawer <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Material <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Color/Pattern <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Finish <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Header Note</b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<vs-textarea v-model="textarea" height="100px" />
						</div>
					</div>

					<div class="flex px-6 mb-2">
						<div class="vx-col sm:w-1/4 w-full text_end"></div>
						<div class="vx-col sm:w-1/2 w-full">
							<vs-button type="relief" @click="">Price Sheet</vs-button>
						</div>
					</div>
				</div>
			</vs-card>
		</div>
		<div class="w-full md:w-1/3 px-4">
			<vs-card vs-justify="center" vs-align="center">
				<div slot="header">
					<div class="flex item_center">
						<div class="vx-col sm:w-1/2 w-full">
							<span class="headText"><pre>  Drawings</pre></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<span class="headText"><pre> Door Options</pre></span>
						</div>
					</div>
				</div>
				<div style="font-size:1em">
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Door</span>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Inside Profile</span>
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Drawer</span>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Center Panel</span>
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>LG Drawer</span>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Outside Profile</span>
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Hardware</span>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<span>Stile/Rail</span>
						</div>
					</div>
				</div>
			</vs-card>
		</div>
	</div>

	<div class="flex flex-wrap -mx-2">
		<div class="w-full md:w-2/3 px-4">
			<vs-card vs-justify="center" vs-align="center">
				<div slot="header">
					<span class="headText"><pre>  Cabinet Materials</pre></span>
				</div>
				<div style="font-size:1em">
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Cabinet Box Material <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Drawer Box <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-3 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Hinges <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>
					<hr>
					<div class="flex px-6 mt-3 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Fin End Material <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Fin End Color <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Fin End Finish <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Edge Banding <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select :options="['foo','bar']" />
						</div>
					</div>

					<div class="flex px-6">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Admin Note</b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<vs-textarea v-model="textarea" height="100px" />
						</div>
					</div>
				</div>
			</vs-card>
		</div>
		<div class="w-full md:w-1/3 px-4">
			<vs-card vs-justify="center" vs-align="center">
				<div slot="header">
					<span class="headText"><pre>  Did you know?</pre></span>
				</div>
				<div style="font-size:1em; height: 150px !important">
					<div class="flex px-6 mb-6 item_center">
						<span>This is my first tip.</span>

					</div>

				</div>
			</vs-card>

			<vs-card vs-justify="center" vs-align="center">
				<div slot="header">
					<span class="headText"><pre>  Explore our Gallery</pre></span>
				</div>
				<div style="font-size:1em">
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col w-full px-4">
							<vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
						</div>
						
					</div>
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col w-full px-4">
							<h3><a href="#">Visit Door Gallery</a></h3>
						</div>
					</div>
				</div>
			</vs-card>
		</div>
	</div>
</div>
</template>

<script>
	import vSelect from 'vue-select'

	export default{
		components: {
			'v-select': vSelect
		},
		data:()=>({
			textarea: '',
		}),
		computed: {
			images() {
				this.$store.dispatch('job/fetchImage')
					.then((response) => { console.log(response.data) })
					// .catch(error => {
					// 	this.$vs.notify({
					// 		title: 'Error',
					// 		text: error.message,
					// 		iconPack: 'feather',
					// 		icon: 'icon-alert-circle',
					// 		color: 'danger'
					// 	})
					// })
			}
		},
		methods: {
			
			style_group () {
				this.$store.dispatch('job/fetchStyle')
					.then(() => { return response.data })
					// .catch(error => {
					// 	this.$vs.notify({
					// 		title: 'Error',
					// 		text: error.message,
					// 		iconPack: 'feather',
					// 		icon: 'icon-alert-circle',
					// 		color: 'danger'
					// })
				// })
			},
			
		},
		created () {
			// this.$store.registerModule('job', moduleJob)
		},
		beforeDestroy () {
			// this.$store.unregisterModule('job')
		}
	}
</script>