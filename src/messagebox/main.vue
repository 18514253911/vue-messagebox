<template>
  <div class="message-wrapper" v-if="visible">
    <div class="message-content">
      <div class="title">
        <div class="title-value">{{titleValue}}</div>
        <div class="close-btn" @click="closeClick"></div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'messageBox',
  props: {
    titleValue: {
      type: String
    },
    visible: {
      type: Boolean
    }
  },
  data() {
    return {
    };
  },
  methods: {
    closeClick() {
      this.$emit('update:visible', false);
    }
  }
};
</script>
<style scoped>
.message-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgba(47, 79, 79, 0.6);
  z-index: 999;
}

.message-wrapper::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.message-content {
  display: inline-block;
  min-width: 400px;
  vertical-align: middle;
  background-color: #fff;
}

.title {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: linear-gradient(to bottom, #0a162c, #0a2f4d) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0a162c', endColorstr='#0a2f4d', GradientType=0);
}

.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  background-image: url(./window_close.png);
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
