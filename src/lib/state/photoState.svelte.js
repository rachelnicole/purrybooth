const STORAGE_KEY = 'purrybooth:photoState';

function loadInitial() {
if (typeof sessionStorage === 'undefined') return { avatar: null, photoPic: null };
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) ?? { avatar: null, photoPic: null };
    } catch {
        return { avatar: null, photoPic: null };
    }
}

export const photoState = $state(loadInitial());

export function setAvatar(dataUrl) {
    photoState.avatar = dataUrl;
    photoState.photoPic = dataUrl;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(photoState));
}