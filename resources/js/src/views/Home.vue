<template>
<div class="row mx-6 my-6">
	<div class="flex flex-wrap -mx-2">
		<div class="w-full md:w-3/5 px-4">

			<!-- Door & Drawer -->
			<div class="w-full px-4">
				<vs-card vs-justify="center" vs-align="center">
					<div slot="header">
						<span class="headText"><pre>  Doors & Drawers</pre></span>
					</div>

					<div style="font-size:1em">
						<!-- Image List -->
						<div class="flex flex-wrap px-6 mb-6">
							<div class="px-3 ml-auto mr-auto" v-for="(image, index) in images" :key="index">
								<!-- <vs-input class="inputx" :placeholder="image.ID" /> -->
								<vs-radio v-model="radio_brand" :vs-value="image.ID" @change="get_Styles_CMaterial(image.ID)">
									<img :src="`/images/logos/${image.logo_image_small}`" :width="image.image_width" :height="image.image_height" />
								</vs-radio>
							</div>
						</div>

						<!-- Style Group -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Style Group <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setStyle" :options="styles_cmaterial.styles" @input="getDoors" />
							</div>
						</div>

						<!-- Door -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Door <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setDoor" :options="doors" @input="getMaterial" />
							</div>
							<div class="vx-col sm:w-1/4 w-full px-2">
								<vs-button type="flat" size="small" style="font-size: 0.9em; padding:0.5em 0.7em;" @click="showOptionDialog">Options</vs-button>
								<vs-button type="flat" size="small" style="font-size: 0.9em; padding:0.5em 0.7em;" @click="showPDF()">Spec</vs-button>
							</div>
						</div>

						<!-- Small Drawer -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Small Drawer <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setSDrawer" :options="materials.Drawer" @input="" />
							</div>
						</div>

						<!-- Large Drawer -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Large Drawer <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setLDrawer" :options="materials.LgDrawer" @input="" />
							</div>
						</div>

						<!-- Materials -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Material <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setMaterial" :options="materials.Material" @input="getColor" >
									<template slot="option" slot-scope="option">
										<template v-if = "option.Name=='*Special - V'">
											<img :src="`/images/finish/Special - V.jpg`" width='40' @error="imageLoadError" />
										</template>
										<template v-else-if = "option.Name=='*Special - S'">
											<img :src="`/images/finish/Special - S.jpg`" width='40' @error="imageLoadError" />
										</template>
										<template v-else>
											<img :src="`/images/finish/${option.Name}.jpg`" width='40' @error="imageLoadError" />
										</template>
										{{ option.Name }}
									</template>
								</v-select>
							</div>
						</div>

						<!-- Color/Pattern -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Color/Pattern <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setColor" :options="colors" @input="getFinish" >
									<template slot="option" slot-scope="option">
										<!-- {{getShow(setMaterial.Name, option.Name)}} -->
										<template v-if = "setMaterial.Name=='*Special - V'">
											<img :src="`/images/finish/Special - V ${option.Name}.jpg`" width='40' @error="imageLoadError" />
										</template>
										<template v-else-if = "setMaterial.Name=='*Special - S'">
											<img :src="`/images/finish/Special - S ${option.Name}.jpg`" width='40' @error="imageLoadError" />
										</template>
										<template v-else>
											<img :src="`/images/finish/${setMaterial.Name} ${option.Name}.jpg`" width='40' @error="imageLoadError" />
										</template>
										{{ option.Name }}
									</template>
								</v-select>
							</div>
						</div>

						<!-- Finish -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Finish <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setFinish" :options="finish" @input="getEdge" />
							</div>
						</div>

						<!-- Header Note -->
						<div class="flex px-6">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Header Note</b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<vs-textarea v-model="textarea" height="100px" />
							</div>
						</div>
						<!-- Price Sheet -->
						<div class="flex px-6 mb-2">
							<div class="vx-col sm:w-1/4 w-full text_end"></div>
							<div class="vx-col sm:w-1/2 w-full">
								<vs-button type="relief" @click="showPriceDialog">Price Sheet</vs-button>
							</div>
						</div>
					</div>
				</vs-card>
			</div>

			<!-- Cabinet panel -->
			<div class="w-full px-4">
				<vs-card vs-justify="center" vs-align="center">
					<div slot="header">
						<span class="headText"><pre>  Cabinet Materials</pre></span>
					</div>
					<div style="font-size:1em">

						<!-- Cabinet Box Material -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Cabinet Box Material <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setCMaterial" :options="styles_cmaterial.cmaterial" @input="" >
								</v-select>
							</div>
						</div>
						
						<!-- Drawer Box -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Drawer Box <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setDBox" :options="styles_cmaterial.dbox" @input="" />
							</div>
						</div>

						<!-- Hinges -->
						<div class="flex px-6 mb-3 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Hinges <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setHinges" :options="edges.hinges" />
							</div>
						</div>

						<hr>

						<!-- Fin End Material -->
						<div class="flex px-6 mt-3 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Fin End Material <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select <v-select label="Name" v-model="setFMaterial" @input="" >
									<!-- <template slot="option" slot-scope="option">
										<img :src="`/images/finish/${option.Name}.jpg`" width='40' @error="imageLoadError" />
										{{ option.Name }}
									</template> -->
								</v-select>
							</div>
						</div>

						<!-- Fin End Color -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Fin End Color <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select  label="Name" v-model="setFColor" />
							</div>
						</div>

						<!-- Fin End Finish -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Fin End Finish <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setFFinish" />
							</div>
						</div>

						<!-- Edge Banding -->
						<div class="flex px-6 mb-6 item_center">
							<div class="vx-col sm:w-1/4 w-full text_end">
								<span><b>Edge Banding <span style="color:red">*</span></b></span>
							</div>
							<div class="vx-col sm:w-1/2 w-full">
								<v-select label="Name" v-model="setEdge" :options="edges.edges" />
							</div>
						</div>

						<!-- Admin Note -->
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
		</div>

		<!-- Drawings / Door Options -->
		<div class="w-full md:w-2/5 px-4">
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
							<img :src="`/images/doors/${setDoor.Name}/Door ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/doors/${setDoor.Name}/Door ${setDoor.Name} ${drawerData.door_code}`)" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/inside/${drawerData.inside_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" />
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
						<template v-if = "setSDrawer.Name=='DRW'">
							<img :src="`/images/drawers/${setDoor.Name}/Drw ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/drawers/${setDoor.Name}/Drw ${setDoor.Name} ${drawerData.door_code}`)" />
						</template>
						<template v-else-if = "setSDrawer.Name=='DRW - Slab'">
							<img :src="`/images/drawers/${setDoor.Name}/Drw ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/drawers/${setDoor.Name}/Drw ${setDoor.Name} ${drawerData.door_code}`)" />
						</template>
						<template v-else>
							<img :src="`/images/drawers/${setSDrawer.Name}/Drw ${setSDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/drawers/${setSDrawer.Name}/Drw ${setSDrawer.Name} ${drawerData.door_code}`)" />
						</template>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/centerpanel/${drawerData.centerpanel_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" />
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
						<template v-if = "setLDrawer.Name=='DRW'">
							<img :src="`/images/largedrawers/${setDoor.Name}/LgDrw ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/largedrawers/${setDoor.Name}/LgDrw ${setDoor.Name} ${drawerData.door_code}`)" />
						</template>
						<template v-else-if = "setLDrawer.Name=='DRW - Slab'">
							<img :src="`/images/largedrawers/${setDoor.Name}/LgDrw ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/largedrawers/${setDoor.Name}/LgDrw ${setDoor.Name} ${drawerData.door_code}`)" />
						</template>
						<template v-else>
							<img :src="`/images/largedrawers/${setLDrawer.Name}/LgDrw ${setLDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" @error="imageLoadError" @click="showDrawerDialog(`/images/largedrawers/${setLDrawer.Name}/LgDrw ${setLDrawer.Name} ${drawerData.door_code}`)" />
						</template>
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/outside/${drawerData.outside_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" />
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
							<img :src="`/images/hardware/${drawerData.hardware_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" />
						</div> 
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/stilerail/${drawerData.stilerail_code.Code}.png`" alt="No-Image" @error="imageLoadError" @click="showOptionDialog" />
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

	<options-modal :displayPrompt="displayPrompt" :optionsVal = "optionsVal" @hideDisplayPrompt="hidePrompt" v-if="displayPrompt" ></options-modal>
	<drawer-modal :displayDrawer="displayDrawer" :filePaths = "filePaths" @hideDisplayPrompt="hideDrawer" v-if="displayDrawer" ></drawer-modal>
	<price-modal :displayPrice="displayPrice" :priceData="priceData" @hideDisplayPrompt="hidePrice" v-if="displayPrice" ></price-modal>
</div>

</template>

<script>
	import vSelect from 'vue-select'
	import OptionsModal from './modals/OptionsModal.vue'
	import DrawerModal from './modals/DrawerModal.vue'
	import PriceModal from './modals/PriceModal.vue'

	export default{
		components: {
			'v-select': vSelect,
			OptionsModal,
			DrawerModal,
			PriceModal
		},
		data(){
			return {
				textarea: '',
				radio_brand: '',
				setStyle: 'Select Style Group...',
				setDoor: 'Select Door...',
				setLDrawer: 'Select Large Drawer...',
				setSDrawer: 'Select Small Drawer...',
				setMaterial: 'Select Material...',
				setColor: 'Select Color...',
				setFinish: 'Select Finish...',

				setCMaterial: 'Select Cabinet Box Material...',
				setDBox: 'Select Drawer Box...',
				setEdge: 'Select Edge Branding...',
				setHinges: 'Select Hinges...',
				setFColor: 'Select Color...',
				setFFinish: 'Select Fin End Finish...',
				setFMaterial: 'Select Material...',

				displayPrompt: false,
				
				optionsVal: {
					doorName: '',
					inside: {Code: ''},
					outside: {Code: ''},
					centerpanel: {Code: ''},
					stile: {Code: ''},
					hardware: {Code: ''},
				},

				displayDrawer: false,
				filePaths: {
					path: '',
				},

				displayPrice: false,
				priceData: [],
			}
		},
		computed: {
			images () {
				return this.$store.state.job.images;
			},
			styles_cmaterial () {
				return this.$store.state.job.styles_cmaterial;
			},
			doors () {
				return this.$store.state.job.doors;
			},
			materials () {
				return this.$store.state.job.materials;
			},
			colors () {
				return this.$store.state.job.colors;
			},
			finish () {
				return this.$store.state.job.finish;
			},
			edges () {
				return this.$store.state.job.edges;
			},
			drawerData () {
				return this.$store.state.job.drawerData;
			},
			profiles () {
				return this.$store.state.job.profiles;
			}
		},
		methods: {
			// getShow(a){
			// 	console.log(a);
			// },
			showOptionDialog(){
				this.displayPrompt = true;
			},
			hidePrompt () {
				this.displayPrompt = false;
			},
			showDrawerDialog(val){
				this.filePaths.path=val;
				this.displayDrawer = true;
			},
			hideDrawer () {
				this.displayDrawer = false;
			},
			showPriceDialog(){
				this.priceData = [{
					'Name' : {
						'Keyword': 'Door',
						'Value': this.setDoor.Name
					},
					'Cols' : {
						'Door' : this.setDoor.DoorCost,
						'Tall' : this.setDoor.TallDoorCost,
						'Full' : this.setDoor.FullTallDoorCost,			
						'Drw' : this.setDoor.DrawerCost,			
						'LgDrw' : this.setDoor.LargeDrawerCost,			
						'Over' : this.setDoor.OverlayCost,
						'DrSQ' : this.setDoor.DoorSqFtCost,
						'DrwSQ' : this.setDoor.DrawerSqftCost,
						'WallE' : this.setDoor.WallEndCost,
						'BaseE' : this.setDoor.BaseEndCost,
						'TallE' : this.setDoor.TallEndCost,
						'FinInts' : this.setDoor.FinishedInteriorCost,
						'P1sq' : this.setDoor.Panel1SSqFtCost,
						'P2sq' : this.setDoor.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Inside Profile',
						'Value': this.drawerData.inside_code.Name,
					},
					'Cols' : {
						'Door' : this.drawerData.inside_code.DoorCost,
						'Tall' : this.drawerData.inside_code.TallDoorCost,
						'Full' : this.drawerData.inside_code.FullTallDoorCost,
						'Drw' : this.drawerData.inside_code.DrawerCost,			
						'LgDrw' : this.drawerData.inside_code.LargeDrawerCost,
						'Over' : this.drawerData.inside_code.OverlayCost,
						'DrSQ' : this.drawerData.inside_code.DoorSqFtCost,
						'DrwSQ' : this.drawerData.inside_code.DrawerSqftCost,
						'WallE' : this.drawerData.inside_code.WallEndCost,
						'BaseE' : this.drawerData.inside_code.BaseEndCost,
						'TallE' : this.drawerData.inside_code.TallEndCost,
						'FinInts' : this.drawerData.inside_code.FinishedInteriorCost,
						'P1sq' : this.drawerData.inside_code.Panel1SSqFtCost,
						'P2sq' : this.drawerData.inside_code.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Center Panel',
						'Value': this.drawerData.centerpanel_code.Name,
					},
					'Cols' : {
						'Door' : this.drawerData.centerpanel_code.DoorCost,
						'Tall' : this.drawerData.centerpanel_code.TallDoorCost,
						'Full' : this.drawerData.centerpanel_code.FullTallDoorCost,
						'Drw' : this.drawerData.centerpanel_code.DrawerCost,			
						'LgDrw' : this.drawerData.centerpanel_code.LargeDrawerCost,
						'Over' : this.drawerData.centerpanel_code.OverlayCost,
						'DrSQ' : this.drawerData.centerpanel_code.DoorSqFtCost,
						'DrwSQ' : this.drawerData.centerpanel_code.DrawerSqftCost,
						'WallE' : this.drawerData.centerpanel_code.WallEndCost,
						'BaseE' : this.drawerData.centerpanel_code.BaseEndCost,
						'TallE' : this.drawerData.centerpanel_code.TallEndCost,
						'FinInts' : this.drawerData.centerpanel_code.FinishedInteriorCost,
						'P1sq' : this.drawerData.centerpanel_code.Panel1SSqFtCost,
						'P2sq' : this.drawerData.centerpanel_code.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Outside Profile',
						'Value': this.drawerData.outside_code.Name,
					},
					'Cols' : {
						'Door' : this.drawerData.outside_code.DoorCost,
						'Tall' : this.drawerData.outside_code.TallDoorCost,
						'Full' : this.drawerData.outside_code.FullTallDoorCost,
						'Drw' : this.drawerData.outside_code.DrawerCost,			
						'LgDrw' : this.drawerData.outside_code.LargeDrawerCost,
						'Over' : this.drawerData.outside_code.OverlayCost,
						'DrSQ' : this.drawerData.outside_code.DoorSqFtCost,
						'DrwSQ' : this.drawerData.outside_code.DrawerSqftCost,
						'WallE' : this.drawerData.outside_code.WallEndCost,
						'BaseE' : this.drawerData.outside_code.BaseEndCost,
						'TallE' : this.drawerData.outside_code.TallEndCost,
						'FinInts' : this.drawerData.outside_code.FinishedInteriorCost,
						'P1sq' : this.drawerData.outside_code.Panel1SSqFtCost,
						'P2sq' : this.drawerData.outside_code.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Stile Rail',
						'Value': this.drawerData.stilerail_code.Name,
					},
					'Cols' : {
						'Door' : this.drawerData.stilerail_code.DoorCost,
						'Tall' : this.drawerData.stilerail_code.TallDoorCost,
						'Full' : this.drawerData.stilerail_code.FullTallDoorCost,
						'Drw' : this.drawerData.stilerail_code.DrawerCost,			
						'LgDrw' : this.drawerData.stilerail_code.LargeDrawerCost,
						'Over' : this.drawerData.stilerail_code.OverlayCost,
						'DrSQ' : this.drawerData.stilerail_code.DoorSqFtCost,
						'DrwSQ' : this.drawerData.stilerail_code.DrawerSqftCost,
						'WallE' : this.drawerData.stilerail_code.WallEndCost,
						'BaseE' : this.drawerData.stilerail_code.BaseEndCost,
						'TallE' : this.drawerData.stilerail_code.TallEndCost,
						'FinInts' : this.drawerData.stilerail_code.FinishedInteriorCost,
						'P1sq' : this.drawerData.stilerail_code.Panel1SSqFtCost,
						'P2sq' : this.drawerData.stilerail_code.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Hardware',
						'Value': this.drawerData.hardware_code.Name,
					},
					'Cols' : {
						'Door' : this.drawerData.hardware_code.DoorCost,
						'Tall' : this.drawerData.hardware_code.TallDoorCost,
						'Full' : this.drawerData.hardware_code.FullTallDoorCost,
						'Drw' : this.drawerData.hardware_code.DrawerCost,
						'LgDrw' : this.drawerData.hardware_code.LargeDrawerCost,
						'Over' : this.drawerData.hardware_code.OverlayCost,
						'DrSQ' : this.drawerData.hardware_code.DoorSqFtCost,
						'DrwSQ' : this.drawerData.hardware_code.DrawerSqftCost,
						'WallE' : this.drawerData.hardware_code.WallEndCost,
						'BaseE' : this.drawerData.hardware_code.BaseEndCost,
						'TallE' : this.drawerData.hardware_code.TallEndCost,
						'FinInts' : this.drawerData.hardware_code.FinishedInteriorCost,
						'P1sq' : this.drawerData.hardware_code.Panel1SSqFtCost,
						'P2sq' : this.drawerData.hardware_code.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Material',
						'Value': this.setMaterial.Name,
					},
					'Cols' : {
						'Door' : this.setMaterial.DoorCost,
						'Tall' : this.setMaterial.TallDoorCost,
						'Full' : this.setMaterial.FullTallDoorCost,			
						'Drw' : this.setMaterial.DrawerCost,			
						'LgDrw' : this.setMaterial.LargeDrawerCost,			
						'Over' : this.setMaterial.OverlayCost,
						'DrSQ' : this.setMaterial.DoorSqFtCost,
						'DrwSQ' : this.setMaterial.DrawerSqftCost,
						'WallE' : this.setMaterial.WallEndCost,
						'BaseE' : this.setMaterial.BaseEndCost,
						'TallE' : this.setMaterial.TallEndCost,
						'FinInts' : this.setMaterial.FinishedInteriorCost,
						'P1sq' : this.setMaterial.Panel1SSqFtCost,
						'P2sq' : this.setMaterial.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Color',
						'Value': this.setColor.Name,
					},
					'Cols' : {
						'Door' : this.setColor.DoorCost,
						'Tall' : this.setColor.TallDoorCost,
						'Full' : this.setColor.FullTallDoorCost,			
						'Drw' : this.setColor.DrawerCost,			
						'LgDrw' : this.setColor.LargeDrawerCost,			
						'Over' : this.setColor.OverlayCost,
						'DrSQ' : this.setColor.DoorSqFtCost,
						'DrwSQ' : this.setColor.DrawerSqftCost,
						'WallE' : this.setColor.WallEndCost,
						'BaseE' : this.setColor.BaseEndCost,
						'TallE' : this.setColor.TallEndCost,
						'FinInts' : this.setColor.FinishedInteriorCost,
						'P1sq' : this.setColor.Panel1SSqFtCost,
						'P2sq' : this.setColor.Panel2SSqFtCost,
					}
				}, {
					'Name' : {
						'Keyword': 'Finish',
						'Value': this.setFinish.Name,
					},
					'Cols' : {
						'Door' : this.setFinish.DoorCost,
						'Tall' : this.setFinish.TallDoorCost,
						'Full' : this.setFinish.FullTallDoorCost,			
						'Drw' : this.setFinish.DrawerCost,			
						'LgDrw' : this.setFinish.LargeDrawerCost,			
						'Over' : this.setFinish.OverlayCost,
						'DrSQ' : this.setFinish.DoorSqFtCost,
						'DrwSQ' : this.setFinish.DrawerSqftCost,
						'WallE' : this.setFinish.WallEndCost,
						'BaseE' : this.setFinish.BaseEndCost,
						'TallE' : this.setFinish.TallEndCost,
						'FinInts' : this.setFinish.FinishedInteriorCost,
						'P1sq' : this.setFinish.Panel1SSqFtCost,
						'P2sq' : this.setFinish.Panel2SSqFtCost,
					}
				}];
				this.displayPrice = true;
			},
			hidePrice () {
				this.displayPrice = false;
			},
			initSelect () {
				this.setStyle =  {Name: 'Select Style Group...'},
				this.setDoor =  {Name: 'Select Door...'},
				this.setLDrawer =  {Name: 'Select Large Drawer...'},
				this.setSDrawer =  {Name: 'Select Small Drawer...'},
				this.setMaterial =  {Name: 'Select Material...'},
				this.setColor =  {Name: 'Select Color...'},
				this.setFinish =  {Name: 'Select Finish...'},

				this.setCMaterial =  {Name: 'Select Cabinet Box Material...'},
				this.setDBox =  {Name: 'Select Drawer Box...'},
				this.setEdge =  {Name: 'Select Edge Branding...'},
				this.setHinges =  {Name: 'Select Hinges...'},
				this.setFColor =  {Name: 'Select Color...'},
				this.setFFinish =  {Name: 'Select Fin End Finish...'},
				this.setFMaterial =  {Name: 'Select Material...'};
			},
			get_Styles_CMaterial (brand_id) {
				this.$vs.loading();
				this.initSelect();
				const payload = {
					condition: brand_id
				};
				
				this.$store.dispatch('job/fetchStyle', payload)
					.then((response) => {

						this.setStyle = this.styles_cmaterial.styles[5];
						this.setCMaterial = this.styles_cmaterial.cmaterial[0];
						this.setDBox = this.styles_cmaterial.dbox[0];
						if(this.setStyle == undefined) {
							this.setStyle =  {Name: 'Select Style Group...'};
						}
						this.getDoors(this.styles_cmaterial.styles[5]);
						 
						this.$vs.loading.close();

					})
					.catch( error => {
						this.$vs.loading.close()
					});

			},
			getDoors(value) {
				this.$vs.loading();
				// get Door select List
				const payload = {
					BrandID_con: value.BrandID,
					GroupID_con: value.ID,
				};
				
				this.$store.dispatch('job/fetchDoor', payload)
					.then((response) => {
						const found = this.doors.find(element => element.ID == this.setStyle.SpecDefault);
						this.setDoor = found;
						this.getMaterial(found);
						 
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})

			},
			getMaterial(value) {

				this.$vs.loading();
				
				// get Material select List
				const payload = {
					MaterialID: value.MaterialID,
					DrawerStyleID: value.DrawerStyleID,
					LgDrawerStyleID: value.LgDrawerStyleID,
				};

				this.$store.dispatch('job/fetchMaterial', payload)
					.then((response) => {
						const foundMaterial = this.materials.Material.find(element => element.ID == this.setDoor.DefaultMaterial);
						const foundDrawer = this.materials.Drawer.find(element => element.ID == this.setDoor.DefaultDrawer);
						const foundLDrawer = this.materials.LgDrawer.find(element => element.ID == this.setDoor.DefaultLgDrawer);
						// console.log(this.materials.Material);
						this.setSDrawer = foundDrawer;
						this.setLDrawer = this.materials.LgDrawer[0];
						this.setMaterial = foundMaterial;
						this.setFMaterial = {"ID": foundMaterial.ID, "Name": foundMaterial.Name};

						if(this.setDoor.ID==49 || this.setDoor.ID==810 || this.setDoor.ID==964 || this.setDoor.ID==965) {
							this.setFMaterial.Name="Complimentary Laminate";
						}

						this.getColor(this.setMaterial);
						 
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})
			},
			getColor(value) {
				
				this.$vs.loading();
				
				// get Material select List
				const payload = {
					ColorID: value.ColorID,
				};
				
				this.$store.dispatch('job/fetchColor', payload)
					.then((response) => {
						this.setColor = this.colors[0];
						this.getFinish(this.setColor);
						 
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})
			},
			getFinish(value) {

				this.$vs.loading();
				this.setFColor = {"ID": this.setColor.ID, "Name": this.setColor.Name};
				// get Material select List
				const payload = {
					FinishID: value.FinishID,
				};
				
				this.$store.dispatch('job/fetchFinish', payload)
					.then((response) => {
						this.setFinish = this.finish[0];
						this.getEdge(this.setFinish);
						 
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})
			},
			getEdge(value) {
				this.setEdge =  'Select Edge Branding...';
				this.setHinges = 'Select Hinges...';

				this.$vs.loading();
				
				// get Material select List
				const payload = {
					MaterialID: this.setMaterial.ID,
					ColorID: this.setColor.ID,
				};
				this.$store.dispatch('job/fetchEdge', payload)
					.then((response) => {
						if(this.setDoor.ID==138) {
							this.edges.edges=[{"ID": 13, "Name": "See Header Notes"}, {"ID": 2, "Name": "Paintable PVC"}];
						}
						const found = this.edges.edges[0];

						this.setEdge = found;
						this.setHinges = this.edges.hinges[0];
						//Stella-HG Rule
						const temp = this.setFinish;
						this.setFFinish={"ID": temp.ID, "Name": temp.Name};

						if(this.setDoor.ID==138) {
							this.setFFinish.ID=63;
							this.setFFinish.Name="F – High Gloss – 90";

							this.setEdge.ID=13;
							this.setEdge.Name="See Header Notes";

							this.setFColor.ID=1973;
							this.setFColor.Name="Custom Paint – SB";

							this.setFMaterial.ID = 233;
							this.setFMaterial.Name = "Formica – Solid Colors – Gloss";
						}

						this.getInitModal();
						 
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})
			},
			imageLoadError(event) {
				event.target.src = "/images/1x1.png" 
			},
			getInitModal() {
				const payload = {
					Inside: this.setDoor.InsideProfileID,
					Outside: this.setDoor.OutsideProfileID,
					CenterPanel: this.setDoor.CenterPanelID,
					StileRail: this.setDoor.StileRailID,
					Hardware: this.setDoor.HardwareID,
				};
				const defaultVal = {
					inside: this.setDoor.DefaultInside,
					outside: this.setDoor.DefaultOutside,
					centerpanel: this.setDoor.DefaultCenter,
					stile: this.setDoor.DefaultStile,
					hardware: this.setDoor.DefaultHardware,
				}
				this.$vs.loading();
				var inside_radio = {'Code': ''}, outside_radio = {'Code': ''}, centerpanel_radio = {'Code': ''}, hardware_radio = {'Code': ''}, stilerail_radio = {'Code': ''};
				this.$store.dispatch('job/fetchProfiles', payload)
					.then(()=>{
						this.optionsVal.doorName=this.setDoor.Name;
						if(defaultVal.inside && this.profiles.insides.length) {
							this.optionsVal.inside = this.profiles.insides.find(element => element.ID == defaultVal.inside);
							
							inside_radio = this.optionsVal.inside;
						}

						if(defaultVal.centerpanel && this.profiles.centerpanels.length) {
							this.optionsVal.centerpanel = this.profiles.centerpanels.find(element => element.ID == defaultVal.centerpanel);
							centerpanel_radio = this.optionsVal.centerpanel;
						}

						if(defaultVal.outside  && this.profiles.outsides.length) {

							this.optionsVal.outside = this.profiles.outsides.find(element => element.ID == defaultVal.outside);
							outside_radio = this.optionsVal.outside;
						}

						if(defaultVal.stile && this.profiles.stilerails.length) {
							this.optionsVal.stile = this.profiles.stilerails.find(element => element.ID == defaultVal.stile);
							stilerail_radio = this.optionsVal.stile;
						}

						if(defaultVal.hardware && this.profiles.hardwares.length) {
							this.optionsVal.hardware = this.profiles.hardwares.find(element => element.ID == defaultVal.hardware);
							hardware_radio = this.optionsVal.hardware;
						}
						var tmp='';
						tmp += (inside_radio.Code ? inside_radio.Code + ' ' : '');
						tmp += (stilerail_radio.Code ? stilerail_radio.Code + ' ' : '');
						tmp += (centerpanel_radio.Code ? centerpanel_radio.Code + ' ' : '');
						tmp += (outside_radio.Code ? outside_radio.Code : '');

						const payload1 = {
							door_code: tmp,
							inside_code: inside_radio,
							centerpanel_code: centerpanel_radio ,
							outside_code: outside_radio,
							hardware_code: hardware_radio ,
							stilerail_code: stilerail_radio ,
						};
						this.$store.dispatch('job/setDrawerdatas', payload1)
						 
						this.$vs.loading.close();
					})
					.catch(error => {
						this.$vs.loading.close();
					})
			},
			showPDF() {
				window.open('/images/doors/' + this.setDoor.Name + '/Door ' + this.setDoor.Name + ' ' + this.drawerData.door_code + '.pdf', "_blank");
			}
		},
		created () {
			this.$vs.loading();
			this.$store.dispatch('job/fetchImage')
				.then((response)=>{
					this.radio_brand = (response.data)[0].ID;
					this.get_Styles_CMaterial((response.data)[0].ID);
					this.$vs.loading.close();
				})
				.catch(error => {
					this.$vs.loading.close();
				})
		}
	}
</script>