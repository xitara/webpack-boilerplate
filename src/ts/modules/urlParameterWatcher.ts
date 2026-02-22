// Helper: Typ für das CustomEvent
interface UrlVariantChangeEventDetail {
    variant: string | null;
}

// Funktion: Query-Parameter auslesen
function getQueryParam(name: string, url: string = window.location.href): string | null {
    const params = new URL(url).searchParams;
    return params.get(name);
}

// Funktion: Custom Event feuern
function fireUrlChangeEvent(): void {
    const variant = getQueryParam('variant');
    const event = new CustomEvent<UrlVariantChangeEventDetail>('urlVariantChange', {
        detail: { variant },
    });
    window.dispatchEvent(event);
}

// Library-Setup
export function setupUrlVariantWatcher(): void {
    // Originalfunktionen sichern
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    // History.pushState überschreiben
    history.pushState = function (...args: Parameters<typeof originalPushState>): void {
        originalPushState.apply(this, args);
        fireUrlChangeEvent();
    };

    // History.replaceState überschreiben
    history.replaceState = function (...args: Parameters<typeof originalReplaceState>): void {
        originalReplaceState.apply(this, args);
        fireUrlChangeEvent();
    };

    // Popstate überwachen (bei Browsernavigation)
    window.addEventListener('popstate', fireUrlChangeEvent);
}

// Beispiel: Den Custom Event abfangen
// window.addEventListener('urlVariantChange', (event: CustomEvent<UrlVariantChangeEventDetail>) => {
//     console.log('Variant geändert zu:', event.detail.variant);
// });
