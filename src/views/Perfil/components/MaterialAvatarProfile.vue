<template>
  <div class="avatar avatar-xl position-relative">
    <img
      :alt="alt"
      class="border-radius-md"
      alt="team-2"
      :src="img" />
    <a
      class="btn btn-sm btn-icon-only bg-gradient-primary position-absolute bottom-0 end-0 mb-n2 me-n2 d-grid"
      @click="triggerFileInput"
    >
      <span
        class="material-icons text-xs top-0"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title
        aria-hidden="true"
        data-bs-original-title="Editar Imagen"
        aria-label="Edit Image"
      >edit</span>
    </a>
    <input
      type="file"
      ref="fileInput"
      class="d-none"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
export default {
  name: 'MaterialAvatar',
  props: {
    img: {
      type: [String, Object],
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('update:img', e.target.result);
        };
        reader.readAsDataURL(file);
        console.log(file);
      }
    }
  }
}
</script>