import { defineStore } from 'pinia';

export const useAnimeStore = defineStore({
    id: 'anime',
    state: () => ({
        savedAnime: JSON.parse(localStorage.getItem('savedAnime') ?? '[]'),
    }),
    actions: {
        saveAnime(animeId: number) {
            if (!this.savedAnime.includes(animeId)) {
                this.savedAnime.push(animeId);
                this.updateLocalStorage();
            }
        },
        unsaveAnime(animeId: number) {
            const index = this.savedAnime.indexOf(animeId);
            if (index !== -1) {
                this.savedAnime.splice(index, 1);
                this.updateLocalStorage();
            }
        },
        isAnimeSaved(animeId: number) {
            return this.savedAnime.includes(animeId);
        },
        getSavedAnime() {
            return this.savedAnime;
        },
        updateLocalStorage() {
            localStorage.setItem('savedAnime', JSON.stringify(this.savedAnime));
        },
    },
});
