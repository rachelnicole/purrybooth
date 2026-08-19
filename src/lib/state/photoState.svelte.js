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

export function setAvatar(dataUrl, imageSize) {
    photoState.avatar = dataUrl;
    photoState.photoPic = dataUrl;
    photoState.width = imageSize.width;
    photoState.height = imageSize.height;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(photoState));
}

export function updateAvatar(dataUrl) {
    photoState.avatar = dataUrl;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(photoState));
}