<template>
  <div class="edit-card">
    <h3>Edit Profile</h3>
    <label for="username">Username:</label>
    <input type="text" id="username-update" v-model="username" />
    <div class="description-profile">
      <label for="description">Description:</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <div class="buttons">
      <button @click="saveChanges">Save Changes</button>
      <button @click="confirmDelete" id="cancel" class="delete">Delete Account</button>
      <button @click="$emit('close')" id="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

const router = useRouter();

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
        const response = await fetch(import.meta.env.VITE_API_LINK + '/users/edit', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenValue}`,
          },
          body: JSON.stringify({ nickname: this.username, description: this.description }),
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
    confirmDelete() {
      const isConfirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
      if (isConfirmed) {
        this.deleteAccount();
      }
    },
    async deleteAccount() {
      const token = localStorage.getItem('token');
      const tokenValue = token ? JSON.parse(token).token : null;

      try {
        const response = await fetch(import.meta.env.VITE_API_LINK + '/users/delete', {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        alert('Account deleted successfully');
        router.push("/login");
        // Handle account deletion logic (e.g., redirect to home page)
        this.$emit('account-deleted');
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
  width: 600px;
  display: flex;
  flex-direction: column;

  text-align: left;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.edit-card button {
  margin-right: 10px;
}

.description-profile{
  width: 100%;
  height: 170px;
}

 #description{
   width: calc(100% - 25px);
  height: 120px;
 
 }

 #username-update{
  width: 300px;
  border: 1px solid black;
 }

 .delete{
background-color: red;
 }
</style>
