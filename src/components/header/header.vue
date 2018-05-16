<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper"  @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" style="width: 100%;">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main"></div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  name: 'Vheader'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";

  .header
    color #fff
    overflow hidden
    position relative
    background rgba(7,17,27,0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        img
         border-radius 2px
      .content
        display inline-block
        font-size 14px
        margin-left 16px
        vertical-align top
        .title
          margin 2px 0 8px 0
          .brand
            width 30px
            height 18px
            display inline-block
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
            vertical-align top
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height 12px
            font-size 10px
      .support-count
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-align center
        .count
          vertical-align middle
          font-size 10px
        .icon-keyboard_arrow_right
          margin-left 2px
          line-height 24px
          font-size 10px
    .bulletin-wrapper
      background rgba(7,17,27,0.2)
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      position relative
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      .bulletin-title
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat
        display inline-block
        vertical-align middle
        height 12px
        width 22px
      .bulletin-text
        font-size 10px
        margin 0 4px
        vertical-align middle
      .icon-keyboard_arrow_right{
        font-size 10px
        position absolute
        right 12px
        top 8px

      }
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      overflow hidden
      z-index -1
      filter blur(5px)
      img
        margin-top: -30%
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7,17,27,0.8)
      .detail-wrapper
        min-height 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
      .detail-close
          position relative


</style>
