<template>
	<v-menu
		:close-on-content-click="false"
		bottom
		left
		min-width="300"
		max-width="300"
		nudge-left="12"
		offset-x
		transition="slide-y-transition"
	>
		<template v-slot:activator="{ on }">
			<v-btn
				v-on="on"
				class="elevation-0"
				color="grey"
				dark
				fab
				fixed
				style="bottom: 96px;"
				bottom
			>
				<v-icon>mdi-settings</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-container grid-list-xl>
				<v-layout wrap>
					<v-flex xs12>
						<div class="text-xs-center body-2 text-uppercase sidebar-filter">
							{{ $t('Sidebar Filters') }}
						</div>

						<v-layout justify-center>
							<v-avatar
								v-for="c in colors"
								:key="c"
								:class="[
									c === color ? 'color-active color-' + c : 'color-' + c,
								]"
								size="23"
								@click="setColor(c)"
							/>
						</v-layout>
						<v-divider class="mt-3" />
					</v-flex>
					<v-flex xs12>
						<div class="text-xs-center body-2 text-uppercase sidebar-filter">
							{{ $t('Images') }}
						</div>
					</v-flex>
					<v-flex v-for="img in images" :key="img" xs3>
						<v-img
							:class="[image === img ? 'image-active' : '']"
							:src="img"
							height="120"
							@click.native="setImage(img)"
						/>
					</v-flex>

					<v-flex xs12>
						<v-switch v-model="switch1" color="primary">
							<template v-slot:label>
								<div>
									<strong
										class="text-xs-center body-2 text-uppercase sidebar-filter"
										>{{ $t('Random wallpaper') }}</strong
									>
								</div>
							</template>
						</v-switch>
					</v-flex>

					<v-flex xs12>
						<v-btn
							href="https://www.creative-tim.com/product/vuetify-material-dashboard"
							target="_blank"
							color="success"
							block
							>Free Download</v-btn
						>
					</v-flex>

					<v-flex xs12>
						<v-btn
							href="https://demos.creative-tim.com/vuetify-material-dashboard/documentation"
							target="_blank"
							class="white--text"
							color="primary"
							block
							>Documentation</v-btn
						>
					</v-flex>
					<v-flex xs12>
						<div class="text-xs-center body-2 text-uppercase">
							<div class="sidebar-filter">Thank You for Sharing!</div>

							<div>
								<v-btn
									color="indigo"
									class="mr-2 v-btn-facebook"
									fab
									icon
									small
									rounded
								>
									<v-icon>mdi-facebook</v-icon>
								</v-btn>
								<v-btn
									color="cyan"
									class="v-btn-twitter"
									fab
									icon
									small
									rounded
								>
									<v-icon>mdi-twitter</v-icon>
								</v-btn>
							</div>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-menu>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex';

export default {
	data() {
		return {
			switch1: true,
			switch2: false,
		};
	},

	computed: {
		...mapState('app', ['image', 'images', 'color', 'colors']),
		/*     color() {
      console.log(this);
      return this.$store.state.app.color;
    },
    images() {
      return this.$store.state.app.images;
    } */
	},

	methods: {
		...mapMutations('app', ['setImage']),
		setColor(color) {
			this.$store.state.app.color = color;
		},
	},
};
</script>

<style lang="scss">
.v-avatar,
.v-responsive {
	cursor: pointer;
}
</style>
