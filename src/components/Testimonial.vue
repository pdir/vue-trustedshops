<template>
    <div class="ts testimonial">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve the reviews at the moment, please try back later</p>
        </section>

        <section v-else>

            <div v-if="loading">Loading...</div>

            <div v-else class="ts-container">
                <div class="quote">&bdquo;</div>

                <carousel :per-page="1" :loop="true" :autoplay="true" :autoplay-timeout="4000">
                    <slide v-for="(review, index) in reviews" :key="index" class="review">
                        {{ review.comment }}
                    </slide>
                </carousel>

                <div class="ratings-total" v-if="reviewIndicator">
                    <a :href="reviewLink">{{ reviewIndicator.totalReviewCount}} Bewertungen</a>
                </div>
            </div>
            <div class="ts-footer">
                <div class="footerArrow"></div>
            </div>
            <div class="ts-footer-logo">
                <img alt="e trustedshops logo" src="@/assets/e-trustedshops_black.svg">
            </div>

        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        components: {
            Carousel,
            Slide
        },
        data: function () {
            return {
                language: null,
                reviews: null,
                loading: true,
                errored: false,
                reviewIndicator: null,
                apiUrl: 'https://api.trustedshops.com/rest/public/v2/shops/' + this.tsid,
                reviewLink: 'https://www.trustedshops.de/bewertung/info_' + this.tsid + '.html'
            }
        },
        props: {
            tsid: String
        },
        mounted () {
            axios
                .get(this.apiUrl + '/reviews.json')
                .then(response => {
                    this.language = response.data.response.data.shop.languageISO2
                    this.reviews = response.data.response.data.shop.reviews
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
            axios
                .get(this.apiUrl + '/quality.json')
                .then(response => {
                    this.reviewIndicator = response.data.response.data.shop.qualityIndicators.reviewIndicator
                })
        }
    }
</script>

<style scoped>
    .testimonial {
        font-size: 12px;
        line-height: 14px;
        color: #000;
    }

    .ts-container {
        padding: 15px 0 10px 0;
        background-color: #ccc;
    }

    .quote {
        color: #fff;
        font-size: 50px;
        position: relative;
        top: -24px;
    }

    .ts-footer {
        display: block;
        padding-bottom: 5px;
        width: 100%;
        height: 10px;
        box-sizing: content-box;
        background-color: transparent!important;
    }

    .footerArrow {
        float: right;
        margin-right: 55px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 14px 13px 0;
        border-color: transparent #ccc transparent transparent;
        -moz-border-top-colors: transparent;
    }
    img {
        float: right;
        width: 72px;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>

<style>
    .testimonial ul.VueCarousel-dot-container li {
        margin-top: 5px !important;
        margin-bottom: 5px !important;
        padding: 2px !important;
    }

    .testimonial ul.VueCarousel-dot-container li button {
        background: none !important;
        border: 1px solid #000 !important;
    }

    .testimonial ul.VueCarousel-dot-container li[aria-selected="true"] button {
        background: #000 !important;
    }
</style>