<template>
<div>
	<div class="flex flex-wrap -mx-2">
		<div class="w-full md:w-2/3 px-4">

			<!-- Door & Drawer -->
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
						<!-- {{radio_brand}} -->
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
									<img :src="`/images/finish/${option.Name}.jpg`" width='40' @error="imageLoadError" />
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
									<img :src="`/images/finish/${materials.Material.Name} ${option.Name}.jpg`" width='40' @error="imageLoadError" />
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
							<vs-button type="relief" @click="">Price Sheet</vs-button>
						</div>
					</div>
				</div>
			</vs-card>
		</div>

		<!-- Drawings / Door Options -->
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
							<img :src="`/images/doors/${setDoor.Name}/Door ${setDoor.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/inside/${drawerData.inside_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
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
							<img :src="`/images/drawers/${setSDrawer.Name}/Drw ${setSDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/centerpanel/${drawerData.centerpanel_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
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
							<img :src="`/images/largedrawers/${setLDrawer.Name}/LgDrw ${setLDrawer.Name} Thumbnail ${drawerData.door_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/outside/${drawerData.outside_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
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
							<img :src="`/images/hardware/${drawerData.hardware_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
						</div>
						<div class="vx-col sm:w-1/2 w-full px-4">
							<img :src="`/images/stilerail/${drawerData.stilerail_code}.png`" alt="No-Image" width = '70' hegit = '70' @error="imageLoadError" />
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

	<!-- Cabinet Materials -->
	<div class="flex flex-wrap -mx-2">
		<div class="w-full md:w-2/3 px-4">
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
							<v-select <v-select label="Name" v-model="setMaterial" :options="materials.Material" @input="" >
								<template slot="option" slot-scope="option">
									<img :src="`/images/finish/${option.Name}.jpg`" width='40' @error="imageLoadError" />
									{{ option.Name }}
								</template>
							</v-select>
						</div>
					</div>

					<!-- Fin End Color -->
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Fin End Color <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select  label="Name" v-model="setColor" :options="colors" />
						</div>
					</div>

					<!-- Fin End Finish -->
					<div class="flex px-6 mb-6 item_center">
						<div class="vx-col sm:w-1/4 w-full text_end">
							<span><b>Fin End Finish <span style="color:red">*</span></b></span>
						</div>
						<div class="vx-col sm:w-1/2 w-full">
							<v-select label="Name" v-model="setFinish" :options="finish" />
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
	
	<options-modal :displayPrompt="displayPrompt" :optionsVal = "optionsVal" @hideDisplayPrompt="hidePrompt" v-if="displayPrompt" ></options-modal>
</div>

</template>

<script>
	import vSelect from 'vue-select'
	import OptionsModal from './modals/OptionsModal.vue'

	export default{
		components: {
			'v-select': vSelect,
			OptionsModal,
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
				setFinish: 'Select Color...',

				setCMaterial: 'Select Cabinet Box Material...',
				setDBox: 'Select Drawer Box...',
				setEdge: 'Select Edge Branding...',
				setHinges: 'Select Hinges...',

				displayPrompt: false,
				
				optionsVal: {
					inside: '',
					outside: '',
					centerpanel: '',
					stile: '',
					hardware: '',
				}
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
			showOptionDialog(){
				// this.optionsVal = {
				// 	defaultVal: {
				// 		
				// 	}
				// }
				this.displayPrompt = true;
			},
			hidePrompt () {
				this.displayPrompt = false;
			},
			get_Styles_CMaterial (brand_id) {

				this.$vs.loading();
				
				const payload = {
					condition: brand_id
				};
				
				this.$store.dispatch('job/fetchStyle', payload)
					.then((response) => {
						this.setStyle = this.styles_cmaterial.styles[5];
						this.setCMaterial = this.styles_cmaterial.cmaterial[0];
						this.setDBox = this.styles_cmaterial.dbox[0];
						
						this.getDoors(this.styles_cmaterial.styles[5]);
						this.$vs.loading.close();
					})
					.catch( error => {
						this.$vs.loading.close()
					})
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

						this.setSDrawer = foundDrawer;
						this.setLDrawer = this.materials.LgDrawer[0];
						this.setMaterial = foundMaterial;
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
						const found = this.edges.edges.find(element => element.ID == this.setColor.EdgeBandingDefaultID);

						this.setEdge = found;
						this.setHinges = this.edges.hinges[0];

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
				var inside_radio = '', outside_radio = '', centerpanel_radio = '', hardware_radio = '', stilerail_radio = '';
				this.$store.dispatch('job/fetchProfiles', payload)
					.then(()=>{

						if(defaultVal.inside && this.profiles.insides.length) {
							this.optionsVal.inside = this.profiles.insides.find(element => element.ID == defaultVal.inside);
							
							inside_radio = this.optionsVal.inside.Code;
						}

						if(defaultVal.centerpanel && this.profiles.centerpanels.length) {
							this.optionsVal.centerpanel = this.profiles.centerpanels.find(element => element.ID == defaultVal.centerpanel);
							centerpanel_radio = this.optionsVal.centerpanel.Code;
						}

						if(defaultVal.outside  && this.profiles.outsides.length) {

							this.optionsVal.outside = this.profiles.outsides.find(element => element.ID == defaultVal.outside);
							outside_radio = this.optionsVal.outside.Code;
						}

						if(defaultVal.stile && this.profiles.stilerails.length) {
							this.optionsVal.stile = this.profiles.stilerails.find(element => element.ID == defaultVal.stile);
							stilerail_radio = this.optionsVal.stile.Code;
						}

						if(defaultVal.hardware && this.profiles.hardwares.length) {
							this.optionsVal.hardware = this.profiles.hardwares.find(element => element.ID == defaultVal.hardware);
							hardware_radio = this.optionsVal.hardware.Code;
						}

						var tmp='';
						tmp += (inside_radio ? inside_radio + ' ' : '');
						tmp += (stilerail_radio ? stilerail_radio + ' ' : '');
						tmp += (centerpanel_radio ? centerpanel_radio + ' ' : '');
						tmp += (outside_radio ? outside_radio : '');

						const payload1 = {
							door_code: tmp,
							inside_code: inside_radio,
							centerpanel_code: centerpanel_radio,
							outside_code: outside_radio,
							hardware_code: hardware_radio,
							stilerail_code: stilerail_radio,
						};
						this.$store.dispatch('job/setDrawerdatas', payload1);
	  
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
				.then(()=>{
					
					this.$vs.loading.close();
				})
				.catch(error => {
					this.$vs.loading.close();
				})
		}
	}
</script>