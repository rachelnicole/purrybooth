const STORAGE_KEY = 'purrybooth:photoState';

if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => {
          sessionStorage.removeItem(STORAGE_KEY);
      });
  }

function loadInitial() {
if (typeof sessionStorage === 'undefined') return { avatar: null, photoPic: null };
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) ?? { avatar: null, photoPic: null };
    } catch {
        return { avatar: null, photoPic: null };
    }
}

export const photoState = $state(loadInitial());

function persist() {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(photoState));
    } catch (err) {
        console.warn('Unable to persist photoState to sessionStorage:', err);
    }
}

export function setAvatar(dataUrl, imageSize) {
    photoState.avatar = dataUrl;
    photoState.width = imageSize.width;
    photoState.height = imageSize.height;
    persist();
}

export function updateAvatar(dataUrl) {
    photoState.avatar = dataUrl;
    persist()
}