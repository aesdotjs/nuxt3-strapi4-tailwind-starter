<template>
  <div>
    <Html>
      <Head>
        <Title>{{ seo.title }}</Title>
        <Meta
          v-for="meta in getMetaTags(seo)"
          :name="meta.name"
          :content="meta.content"
          :property="meta.property"
          :hid="meta.hid"
        />
        <Link v-for="link in seo.link" :rel="link.rel" :href="link.href"/>
      </Head>
      <Body :class="seo.bodyAttrs"></Body>
    </Html>
  </div>
</template>

<script setup>
import getMetaTags from '~~/composables/getMetaTags';
const props = defineProps({seo: Object});
</script>