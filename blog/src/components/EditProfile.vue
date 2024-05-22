<template>
  <div class="edit-card">
    <h3>Edit Profile</h3>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="nickname" />
    <label for="description">Description:</label>
    <textarea id="description" v-model="description"></textarea>
    <div class="buttons">
      <button @click="saveChanges">Save Changes</button>
      <button @click="deleteAccount">Delete Account</button>
      <button @click="$emit('close')">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  props: ['currentUsername', 'currentDescription'],
  data() {
    return {
      username: this.currentUsername,
      description: this.currentDescription
    };
  },
  methods: {
    async saveChanges() {
      const token = localStorage.getItem('token');
      const tokenValue = token ? JSON.parse(token).token : null;

      try {
        const response = await fetch(import.meta.env.VITE_API_LINK +'/users/edit', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenValue}`,
          },
          body: JSON.stringify({ nickname: this.nickname, description: this.description }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        alert('Profile updated successfully');
        this.$emit('update-success');
        this.$emit('close');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
    async deleteAccount() {
      const token = localStorage.getItem('token');
      const tokenValue = token ? JSON.parse(token).token : null;

      try {
        const response = await fetch(import.meta.env.VITE_API_LINK +'/users/delete', {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        alert('Account deleted successfully');
        // Handle account deletion logic (e.g., redirect to home page)
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  }
};
</script>

<style>
.edit-card {
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

.edit-card h3 {
  margin-top: 0;
}

.edit-card label {
  display: block;
  margin-top: 10px;
}

.edit-card input,
.edit-card textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

.edit-card .buttons {
  margin-top: 20px;
}

.edit-card button {
  margin-right: 10px;
}
</style>
