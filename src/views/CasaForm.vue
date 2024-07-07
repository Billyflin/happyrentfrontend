<template>
  <div>
    {{ propertyData}}
  </div>
</template>

<script>
export default {
  props: {
    propertyData: {
      type: Object,
      required: true
    }
  }
}
</script>