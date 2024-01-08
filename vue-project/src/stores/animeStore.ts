import { defineStore } from 'pinia';

export const useAnimeStore = defineStore({
    id: 'anime',
    state: () => ({
        savedAnime: [],
    }),
    actions: {
        saveAnime(animeId) {
            if (!this.savedAnime.includes(animeId)) {
                this.savedAnime.push(animeId);
            }
            console.log(this.savedAnime); // Log savedAnime to check

        },
        unsaveAnime(animeId) {
            const index = this.savedAnime.indexOf(animeId);
            if (index !== -1) {
                this.savedAnime.splice(index, 1);
            }
        },
        isAnimeSaved(animeId) {
            return this.savedAnime.includes(animeId);
        },
        getSavedAnime() {
            return this.savedAnime;
        },
    },
});
