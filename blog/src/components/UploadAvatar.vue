<template>
  <div class="upload-card">
    <h3>Upload New Avatar</h3>
    <input type="file" @change="handleFileChange" />
    <div class="buttons-row">
    <button @click="uploadAvatar" id="upload">Upload</button>
    <button @click="$emit('close')" id="cancel">Cancel</button>
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upload-card h3 {
  margin-top: 0;
}

.upload-card input {
  display: block;
  margin: 10px 0;
}

.upload-card button {
  background-color: rgb(9, 56, 40);
  color:antiquewhite;
  margin: 5px;
}

.buttons-row{
  display: flex;
  flex-direction: row;
  width: 170px;
}

#cancel {
  background: none;
  border: 1px solid rgb(162, 162, 162);
  color: black;
 
}

</style>
