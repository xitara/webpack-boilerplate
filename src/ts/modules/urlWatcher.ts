interface UrlChangeDetail {
    oldUrl: URL;
    newUrl: URL;
    changes: {
        pathname?: boolean;
        search?: boolean;
        hash?: boolean;
    };
    queryParamChanges?: Record<string, { oldValue: string | null; newValue: string | null }>;
}

type UrlChangeEvent = CustomEvent<UrlChangeDetail>;

function analyzeUrlChanges(oldUrl: URL, newUrl: URL): UrlChangeDetail {
    const changes: UrlChangeDetail['changes'] = {};
    const queryParamChanges: Record<string, { oldValue: string | null; newValue: string | null }> =
        {};

    // Check pathname
    if (oldUrl.pathname !== newUrl.pathname) {
        changes.pathname = true;
    }

    // Check search (query parameters)
    if (oldUrl.search !== newUrl.search) {
        changes.search = true;

        // Compare query parameters
        const oldParams = new URLSearchParams(oldUrl.search);
        const newParams = new URLSearchParams(newUrl.search);

        // Find added/changed parameters
        for (const [key, newValue] of newParams.entries()) {
            const oldValue = oldParams.get(key);
            if (oldValue !== newValue) {
                queryParamChanges[key] = { oldValue, newValue };
            }
        }

        // Find removed parameters
        for (const [key] of oldParams.entries()) {
            if (!newParams.has(key)) {
                queryParamChanges[key] = { oldValue: oldParams.get(key), newValue: null };
            }
        }
    }

    // Check hash
    if (oldUrl.hash !== newUrl.hash) {
        changes.hash = true;
    }

    return {
        oldUrl,
        newUrl,
        changes,
        queryParamChanges: Object.keys(queryParamChanges).length ? queryParamChanges : undefined,
    };
}

export function setupUrlWatcher(): void {
    let currentUrl = new URL(window.location.href);

    const fireUrlChangeEvent = (newUrl: URL) => {
        const detail = analyzeUrlChanges(currentUrl, newUrl);
        currentUrl = newUrl;
        const event: UrlChangeEvent = new CustomEvent('urlChange', { detail });
        window.dispatchEvent(event);
    };

    // Override pushState
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
        const result = originalPushState.apply(this, args);
        fireUrlChangeEvent(new URL(window.location.href));
        return result;
    };

    // Override replaceState
    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
        const result = originalReplaceState.apply(this, args);
        fireUrlChangeEvent(new URL(window.location.href));
        return result;
    };

    // Listen to popstate
    window.addEventListener('popstate', () => {
        fireUrlChangeEvent(new URL(window.location.href));
    });
}

// Beispiel: Event-Listener für Änderungen
window.addEventListener('urlChange', (event: UrlChangeEvent) => {
    console.log('URL geändert:', event.detail);

    if (event.detail.changes.pathname) {
        console.log(
            'Pfad geändert:',
            event.detail.oldUrl.pathname,
            '->',
            event.detail.newUrl.pathname
        );
    }

    if (event.detail.changes.search) {
        console.log('Query-Parameter geändert:', event.detail.queryParamChanges);
    }

    if (event.detail.changes.hash) {
        console.log('Hash geändert:', event.detail.oldUrl.hash, '->', event.detail.newUrl.hash);
    }
});
