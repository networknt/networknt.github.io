// Give documentation tables the same standalone viewing option as diagram viewers.
(() => {
    const openTable = (table, number, status) => {
        const viewer = window.open('about:blank', '_blank');
        if (!viewer) {
            status.textContent = 'Allow pop-ups for this site to open the table viewer.';
            return;
        }
        status.textContent = '';
        viewer.opener = null;
        const doc = viewer.document;
        doc.title = `Table ${number} — ${document.title}`;
        doc.documentElement.lang = document.documentElement.lang || 'en';
        const viewport = doc.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1';
        doc.head.append(viewport);

        const sourceTheme = getComputedStyle(document.documentElement);
        for (const [name, fallback] of Object.entries({
            '--bg': '#fff', '--fg': '#222', '--links': '#20609f',
            '--table-border-color': '#bbb', '--table-header-bg': '#eee',
            '--table-alternate-bg': '#f7f7f7',
        })) {
            doc.documentElement.style.setProperty(name, sourceTheme.getPropertyValue(name).trim() || fallback);
        }
        const style = doc.createElement('style');
        style.textContent = `
            * { box-sizing: border-box; }
            body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.5 system-ui, sans-serif; }
            nav { position: sticky; top: 0; z-index: 1; display: flex; flex-wrap: wrap;
                align-items: center; gap: 12px; padding: 12px 16px; background: var(--bg);
                border-bottom: 1px solid var(--table-border-color); }
            nav strong { margin-right: auto; }
            button, input { font: inherit; }
            button { padding: 4px 10px; cursor: pointer; }
            main { padding: 16px; overflow-x: auto; }
            table { display: table; border-collapse: collapse; width: 100%; font-size: 100%; }
            th, td { padding: 8px 12px; border: 1px solid var(--table-border-color);
                text-align: left; vertical-align: top; white-space: normal; overflow-wrap: anywhere; }
            thead th { background: var(--table-header-bg); }
            tbody tr:nth-child(even) { background: var(--table-alternate-bg); }
            a { color: var(--links); }
            code { font-size: 0.9em; white-space: inherit; overflow-wrap: anywhere; }
            body.no-wrap table { width: max-content; min-width: 100%; }
            body.no-wrap th, body.no-wrap td { white-space: nowrap; overflow-wrap: normal; }
            @media print { nav { display: none; } main { overflow: visible; padding: 0; } }
        `;
        doc.head.append(style);

        const controls = doc.createElement('nav');
        controls.setAttribute('aria-label', 'Table viewer controls');
        const title = doc.createElement('strong');
        title.textContent = table.caption?.textContent.trim() || `Table ${number}`;
        controls.append(title);
        const canvas = doc.createElement('main');
        canvas.setAttribute('aria-label', 'Expanded table');
        const copy = doc.importNode(table, true);
        const resolveURL = value => {
            try { return new URL(value, document.baseURI); }
            catch { return null; }
        };
        // Resolve relative and fragment links against the original chapter, not about:blank.
        for (const link of copy.querySelectorAll('a[href]')) {
            const url = resolveURL(link.getAttribute('href'));
            if (url && ['http:', 'https:', 'file:'].includes(url.protocol)) {
                link.href = url.href;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            } else {
                link.removeAttribute('href');
            }
        }
        for (const image of copy.querySelectorAll('img[src]')) {
            const url = resolveURL(image.getAttribute('src'));
            if (url && ['http:', 'https:', 'file:', 'data:'].includes(url.protocol)) image.src = url.href;
            else image.removeAttribute('src');
        }
        // The viewer is a read-only copy; do not carry executable embedded markup across.
        for (const element of copy.querySelectorAll('script, iframe, object, embed')) element.remove();
        for (const element of [copy, ...copy.querySelectorAll('*')]) {
            for (const attribute of [...element.attributes]) {
                if (attribute.name.toLowerCase().startsWith('on')) element.removeAttribute(attribute.name);
            }
        }
        canvas.append(copy);

        const scaleLabel = doc.createElement('span');
        scaleLabel.setAttribute('aria-live', 'polite');
        let scale = 100;
        const resize = () => {
            copy.style.fontSize = `${scale}%`;
            scaleLabel.textContent = `${scale}%`;
        };
        const addControl = (label, action) => {
            const button = doc.createElement('button');
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', action);
            controls.append(button);
        };
        addControl('Zoom out', () => { scale = Math.max(50, scale - 10); resize(); });
        addControl('Zoom in', () => { scale = Math.min(200, scale + 10); resize(); });
        addControl('Reset zoom', () => { scale = 100; resize(); });
        controls.append(scaleLabel);
        const wrapLabel = doc.createElement('label');
        const wrap = doc.createElement('input');
        wrap.type = 'checkbox';
        wrap.checked = true;
        wrap.addEventListener('change', () => doc.body.classList.toggle('no-wrap', !wrap.checked));
        wrapLabel.append(wrap, doc.createTextNode(' Wrap text'));
        controls.append(wrapLabel);
        const feedback = doc.createElement('span');
        feedback.setAttribute('role', 'status');
        if (doc.documentElement.requestFullscreen) {
            addControl('Full screen', async () => {
                try {
                    if (doc.fullscreenElement) await doc.exitFullscreen();
                    else await doc.documentElement.requestFullscreen();
                } catch {
                    feedback.textContent = 'Use your browser’s full-screen command to expand this window.';
                }
            });
        }
        addControl('Close', () => viewer.close());
        controls.append(feedback);
        doc.body.append(controls, canvas);
        resize();
        viewer.focus();
    };

    const addViewers = () => {
        for (const [index, table] of [...document.querySelectorAll('main table')].entries()) {
            if (table.dataset.tableViewerReady || table.parentElement.closest('table')) continue;
            table.dataset.tableViewerReady = 'true';
            const toolbar = document.createElement('div');
            toolbar.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:8px 0';
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = 'Open table in full-window view';
            button.title = 'Opens in a new tab or window';
            button.setAttribute('aria-label', `Open table ${index + 1} in full-window view`);
            const status = document.createElement('span');
            status.setAttribute('role', 'status');
            button.addEventListener('click', () => openTable(table, index + 1, status));
            toolbar.append(button, status);
            const wrapper = table.closest('.table-wrapper');
            (wrapper || table).before(toolbar);
        }
    };
    const start = () => {
        addViewers();
        new MutationObserver(addViewers).observe(document.querySelector('main') || document.body,
            { childList: true, subtree: true });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
})();
