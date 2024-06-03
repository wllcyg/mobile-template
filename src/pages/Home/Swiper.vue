<template>
  <div style="padding: 16px">
    <t-swiper :navigation="{ type: 'dots' }" :autoplay="true" @click="handleClick" @change="handleChange">
      <t-swiper-item v-for="(item, index) in swiperList" :key="index" style="height: 240px">
        <img :src="item" class="img" />
      </t-swiper-item>
    </t-swiper>
  </div>
</template>
<script setup>
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

const handleChange = (index, context) => {
  console.log('基础示例,页数变化到》》》', index, context);
};

const handleClick = (value) => {
  console.log('click: ', value);
};
</script>

<style>
img {
  display: block;
  width: 100%;
  height:100%;
}
</style>
