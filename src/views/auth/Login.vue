<template>
	<div class="row justify-content-center">
		<div class="col-lg-5 col-md-7">
			<div class="card bg-secondary shadow border-0">
				<div class="card-header bg-transparent pb-5">
					<div class="text-muted text-center mt-2 mb-3 font-weight-bolder">
						<small>{{ $t('Sign in with') }}</small>
					</div>
					<div class="btn-wrapper text-center">
						<!-- <a href="#" class="btn btn-neutral btn-icon">
							<span class="btn-inner--icon">
								<img :src="`${$baseUrl}img/icons/common/github.svg`" />
							</span>
							<span class="btn-inner--text">Github</span>
						</a>
						<a href="#" class="btn btn-neutral btn-icon">
							<span class="btn-inner--icon">
								<img :src="`${$baseUrl}img/icons/common/google.svg`" />
							</span>
							<span class="btn-inner--text">Google</span>
						</a>-->

						<atom-bark-launch />
					</div>
				</div>
				<div class="card-body px-lg-5 py-lg-5">
					<div class="text-center text-muted mb-4 font-weight-bolder">
						<small>{{ $t('Or login in with credentials') }}</small>
					</div>
					<form role="form">
						<v-flex>
							<v-text-field
								v-model="model.username"
								autocapitalize="off"
								prepend-icon="mdi-account"
								:placeholder="$t('Username') + $t('or') + $t('Email')"
								solo
							></v-text-field>
						</v-flex>
						<v-flex>
							<v-text-field
								v-model="model.password"
								type="password"
								prepend-icon="mdi-lock"
								:placeholder="$t('Password')"
								solo
							></v-text-field>
						</v-flex>

						<!-- <base-input
							class="input-group-alternative mb-3"
							autocapitalize="off"
							:placeholder="$t('Username') + $t('or') + $t('Email')"
							addon-left-icon="ni ni-single-02"
							v-model="model.username"
						></base-input> -->

						<!-- <base-input
							class="input-group-alternative"
							:placeholder="$t('Password')"
							type="password"
							addon-left-icon="ni ni-lock-circle-open"
							v-model="model.password"
						></base-input> -->

						<!-- <base-checkbox class="custom-control-alternative">
							<span class="text-muted font-weight-bolder">
								{{ $t('Remember me') }}
							</span>
						</base-checkbox> -->
						<div class="text-center">
							<v-btn @click="login()" color="primary" class="subtitle-2">{{
								$t('Sign in')
							}}</v-btn>
						</div>
					</form>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-6 text-left">
					<a href="#" class="text-light font-weight-bolder">
						<small>{{ $t('Forgot password?') }}</small>
					</a>
				</div>
				<div class="col-6 text-right font-weight-bolder">
					<router-link to="/register" class="text-light">
						<small>{{ $t('Create new account') }}</small>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { login, devPort } from '@/utils/user';
import { mapMutations } from 'vuex';
import { setTimeout } from 'timers';

export default {
	name: 'login',
	data() {
		return {
			model: {
				username: '',
				password: '',
			},
		};
	},
	methods: {
		login() {
			login(this);
		},
	},
};
</script>
<style></style>
