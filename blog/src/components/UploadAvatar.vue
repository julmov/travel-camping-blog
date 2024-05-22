<template>
  <div class="upload-card">
    <h3>Upload New Avatar</h3>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadAvatar">Upload</button>
    <button @click="$emit('close')">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'UploadAvatar',
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadAvatar() {
      if (this.selectedFile) {
        const token = localStorage.getItem('token');
        const tokenValue = token ? JSON.parse(token).token : null;
        const formData = new FormData();
        formData.append('avatar', this.selectedFile);

        fetch(import.meta.env.VITE_API_LINK +'/users/upload-avatar', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokenValue}`
          },
          body: formData
        })
        .then(response => {
          if (response.ok) {
            alert('Avatar uploaded successfully');
            this.$emit('upload-success');
            this.$emit('close');
          } else {
            alert('Error uploading avatar');
          }
        })
        .catch(error => {
          console.error('Error uploading avatar:', error);
        });
      } else {
        alert('Please select a file first');
      }
    }
  }
};
</script>

<style>
.upload-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.upload-card h3 {
  margin-top: 0;
}

.upload-card input {
  display: block;
  margin: 10px 0;
}

.upload-card button {
  margin: 5px;
}

</style>
