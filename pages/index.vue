<template>
  <div>
    This is the index template
  </div>
</template>

<script setup>
import getStrapiMedia from '~~/composables/getStrapiMedia';
const { data: globalData } = await useGetGlobal();
const global = globalData.value.data.attributes;
const { data: homepageData } = await useGetHomePage();
const homepage = homepageData.value.data.attributes;
useSEO(global, homepage);

</script>
