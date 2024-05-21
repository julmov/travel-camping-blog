<template>
  <div class="comment-menu" v-if="comment.showMenu">
    <div v-if="!isEditing">
      <button @click="startEditing">Edit</button>
      <button @click="deleteComment">Delete</button>
    </div>
    <div v-else>
      <textarea v-model="newContent" placeholder="Edit your comment"></textarea>
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  comment: Object,
});

const emit = defineEmits(['onEdit', 'onDelete']);

const isEditing = ref(false);
const newContent = ref(props.comment.content);

const token = localStorage.getItem('token');
const tokenValue = token ? JSON.parse(token).token : null;
const router = useRouter();

watch(() => props.comment.content, (newVal) => {
  newContent.value = newVal;
});

const startEditing = () => {
  isEditing.value = true;
};

const saveEdit = async () => {
  try {
    const response = await fetch(
      `https://blog-camping-cbb2c4cfea86.herokuapp.com/comments/update/${props.comment._id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newContent.value }),
      }
    );
    if (!response.ok) throw new Error('Failed to edit comment');
    emit('onEdit');
    isEditing.value = false; // Exit editing mode
  } catch (error) {
    console.error('Error editing comment:', error);
  }
};

const cancelEdit = () => {
  newContent.value = props.comment.content; // Reset content to the original comment content
  isEditing.value = false; // Exit editing mode
};

const deleteComment = async () => {
  try {
    const response = await fetch(
      `https://blog-camping-cbb2c4cfea86.herokuapp.com/comments/delete/${props.comment._id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to delete comment:', errorData);
      throw new Error('Failed to delete comment');
    }
    emit('onDelete');
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};
</script>

<style scoped>
.comment-menu {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
  z-index: 10;
}

textarea {
  width: 100%;
  height: 60px;
  margin-bottom: 5px;
}
</style>
