<template>
  <div class="invitation">
    <h1>You're Invited!</h1>
    <p>Join us for the wedding of</p>
    <h2>Jane Doe & John Smith</h2>
    <p>On: June 25, 2024</p>
    <p>At: Dreamland Hall</p>
    <button @click="rsvp">RSVP Now</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    rsvp() {
      alert('Thank you for your RSVP!');
    },
  },
};
</script>

<style scoped>
.invitation {
  text-align: center;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}
h1 {
  font-size: 3em;
  color: #ff6f61;
}
h2 {
  font-size: 2.5em;
  color: #333;
}
button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>