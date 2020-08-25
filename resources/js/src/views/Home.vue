<template>
	<vs-row>
		<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
			<vx-card
				title="Gradient Background Image"
				title-color="#fff"
				content-color="#fff"
				:card-background="'linear-gradient(120deg ,rgba(109,213,237,.8), rgba(33,147,176,0.5)), url(' + card_bg_img_1 + ')'"
				>
				<p class="mb-3">You can use <strong>card-background</strong> prop to change background of card. This prop supports hex, rgba, rgb and theme colors.</p>
				<p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>
			</vx-card>
		</vs-col>
		<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
			<vx-card
				title="Gradient Background Image"
				title-color="#fff"
				content-color="#fff"
				:card-background="'linear-gradient(120deg ,rgba(247,97,161,0.5), rgba(140,27,171,.8)), url(' + card_bg_img_2 + ')'"
				>
				<p class="mb-3">You can use <strong>card-background</strong> prop to change background of card. This prop supports hex, rgba, rgb and theme colors.</p>
				<p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>
			</vx-card>
		</vs-col>
	</vs-row>
</template>

<script>
export default{
	data() {
		return {
			// card_bg_img_1: require('@assets/images/pages/card-bg-image-demo-1.jpg')
			// card_bg_img_2: require('@assets/images/pages/card-bg-image-demo-2.jpg')
		}
	}
}
</script>