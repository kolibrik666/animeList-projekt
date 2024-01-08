<!-- HelpView.vue -->
<template>
  <div class="help">
    <h1>Help</h1>

    <h2>Getting Started</h2>
    <p>
      Welcome to our application! Here are some quick tips to get you started:
    </p>
    <ul>
      <li>Explore the home page to discover a list of featured anime.</li>
      <li>Click on an anime card to view detailed information about it.</li>
      <li>Save your favorite anime to your personal list by clicking the "Save" button.</li>
      <li>Visit your My Anime List to see all the anime you've saved.</li>
    </ul>

    <h2>Viewing Anime Details</h2>
    <p>
      When viewing an anime, you can access additional information about characters:
    </p>
    <ul>
      <li>Click on a character card to see details about that character.</li>
      <li>Navigate back to the anime page using the provided links.</li>
    </ul>

    <h2>Managing Your Anime List</h2>
    <p>
      In the My Anime List section, you can:
    </p>
    <ul>
      <li>See a list of all the anime you've saved.</li>
      <li>Remove anime from your list by clicking the "Unsave" button.</li>
    </ul>

    <h2>Need Help?</h2>
    <p>
      If you encounter any issues or have questions, feel free to reach out to our support team at supportAnimeList@gmail.com.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelpView',
};
</script>

<style scoped>
.help {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.help h2 {
  margin-top: 20px;
}
</style>
