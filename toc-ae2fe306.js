// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="architecture.html"><strong aria-hidden="true">2.</strong> Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design.html"><strong aria-hidden="true">3.</strong> Design</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/mcp-router.html"><strong aria-hidden="true">3.1.</strong> MCP Rotuer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/config-reload.html"><strong aria-hidden="true">3.2.</strong> Config Reload</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/module-registry.html"><strong aria-hidden="true">3.3.</strong> Module Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/httpclient-retry.html"><strong aria-hidden="true">3.4.</strong> HttpClient Retry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/genai-client.html"><strong aria-hidden="true">3.5.</strong> GenAI Client</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cross-cutting-concerns.html"><strong aria-hidden="true">4.</strong> Cross-Cutting-Concerns</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-4j.html"><strong aria-hidden="true">4.1.</strong> Light-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/http-handler.html"><strong aria-hidden="true">4.1.1.</strong> Http Handler</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/handler/path-resource.html"><strong aria-hidden="true">4.1.1.1.</strong> Path Resource</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/handler/virtual-host.html"><strong aria-hidden="true">4.1.1.2.</strong> Virtual Host</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware-handler.html"><strong aria-hidden="true">4.1.2.</strong> Middleware Handler</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/header-handler.html"><strong aria-hidden="true">4.1.2.1.</strong> Header Handler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/ip-whitelist.html"><strong aria-hidden="true">4.1.2.2.</strong> IP Whitelist</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/rate-limit.html"><strong aria-hidden="true">4.1.2.3.</strong> Rate Limit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/prometheus-metrics.html"><strong aria-hidden="true">4.1.2.4.</strong> Prometheus Metrics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/sanitizer-handler.html"><strong aria-hidden="true">4.1.2.5.</strong> Sanitizer Handler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/security-handler.html"><strong aria-hidden="true">4.1.2.6.</strong> Security Handler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/unified-security.html"><strong aria-hidden="true">4.1.2.7.</strong> Unified Security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/sidecar-handler.html"><strong aria-hidden="true">4.1.2.8.</strong> Sidecar Handler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/sse-handler.html"><strong aria-hidden="true">4.1.2.9.</strong> SSE Handler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/middleware/mcp-router.html"><strong aria-hidden="true">4.1.2.10.</strong> MCP router</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/interceptor.html"><strong aria-hidden="true">4.1.3.</strong> Interceptor</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/interceptor/request-transformer.html"><strong aria-hidden="true">4.1.3.1.</strong> Request Transformer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/interceptor/response-transformer.html"><strong aria-hidden="true">4.1.3.2.</strong> Response Transformer</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/admin-endpoint.html"><strong aria-hidden="true">4.1.4.</strong> Admin Endpoint</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/admin/server-info.html"><strong aria-hidden="true">4.1.4.1.</strong> Server Info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/admin/logger-handler.html"><strong aria-hidden="true">4.1.4.2.</strong> Logger Handler</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/utility/utility.html"><strong aria-hidden="true">4.1.5.</strong> Utility</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/utility/ladp-util.html"><strong aria-hidden="true">4.1.5.1.</strong> Ldap Utility</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/module.html"><strong aria-hidden="true">4.1.6.</strong> Module</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/monard-result.html"><strong aria-hidden="true">4.1.6.1.</strong> Monard Result</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/data-mask.html"><strong aria-hidden="true">4.1.6.2.</strong> Data Mask</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/portal-registry.html"><strong aria-hidden="true">4.1.6.3.</strong> Portal Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/direct-registry.html"><strong aria-hidden="true">4.1.6.4.</strong> Direct Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/rule-loader.html"><strong aria-hidden="true">4.1.6.5.</strong> Rule Loader</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/module/http-server.html"><strong aria-hidden="true">4.1.6.6.</strong> Http Server</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j.html"><strong aria-hidden="true">4.2.</strong> Light-rest-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j/access-control.html"><strong aria-hidden="true">4.2.1.</strong> Access Control</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j/openapi-meta.html"><strong aria-hidden="true">4.2.2.</strong> OpenAPI Meta</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j/openapi-security.html"><strong aria-hidden="true">4.2.3.</strong> OpenAPI Security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j/openapi-validator.html"><strong aria-hidden="true">4.2.4.</strong> OpenAPI Validator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-rest-4j/specification.html"><strong aria-hidden="true">4.2.5.</strong> Specification</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-hybrid-4j.html"><strong aria-hidden="true">4.3.</strong> Light-hybrid-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-hybrid-4j/rpc-router.html"><strong aria-hidden="true">4.3.1.</strong> Rpc-Router</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-hybrid-4j/rpc-security.html"><strong aria-hidden="true">4.3.2.</strong> Rpc-Security</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-graphql-4j.html"><strong aria-hidden="true">4.4.</strong> Light-Graphql-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-grahpql-4j/graphql-commmon.html"><strong aria-hidden="true">4.4.1.</strong> Graphql Common</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-grahpql-4j/graphql-validator.html"><strong aria-hidden="true">4.4.2.</strong> Graphql Validator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-grahpql-4j/graphql-security.html"><strong aria-hidden="true">4.4.3.</strong> Graphql Security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-grahpql-4j/graphql-router.html"><strong aria-hidden="true">4.4.4.</strong> Graphql Router</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-kafka.html"><strong aria-hidden="true">4.5.</strong> Light-Kafka</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-kafka/kafka-common.html"><strong aria-hidden="true">4.5.1.</strong> Kafka Common</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-kafka/kafka-consumer.html"><strong aria-hidden="true">4.5.2.</strong> Kafka Consumer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-kafka/kafka-producer.html"><strong aria-hidden="true">4.5.3.</strong> Kafka Producer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-kafka/kafka-streams.html"><strong aria-hidden="true">4.5.4.</strong> Kafka Streams</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-spa-4j.html"><strong aria-hidden="true">4.6.</strong> Light-spa-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-spa-4j/msal-exchange.html"><strong aria-hidden="true">4.6.1.</strong> Msal Exchange</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-spa-4j/stateless-auth.html"><strong aria-hidden="true">4.6.2.</strong> Stateless Auth</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey.html"><strong aria-hidden="true">4.7.</strong> Light-chaos-monkey</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey/chaos-monkey.html"><strong aria-hidden="true">4.7.1.</strong> Chaos Monkey</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey/exception-assault.html"><strong aria-hidden="true">4.7.2.</strong> Exception Assault</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey/killapp-assault.html"><strong aria-hidden="true">4.7.3.</strong> Killapp Assault</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey/latency-assault.html"><strong aria-hidden="true">4.7.4.</strong> Latency Assault</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-chaos-monkey/memory-assault.html"><strong aria-hidden="true">4.7.5.</strong> Memory Assault</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-aws-lambda.html"><strong aria-hidden="true">4.8.</strong> Light-sws-lambda</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-aws-lambda/lambda-invoker.html"><strong aria-hidden="true">4.8.1.</strong> Lambda Invoker</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-websocket-4j.html"><strong aria-hidden="true">4.9.</strong> Light-websocket-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-websocket-4j/websocket-client.html"><strong aria-hidden="true">4.9.1.</strong> WebSocket Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-websocket-4j/websocket-router.html"><strong aria-hidden="true">4.9.2.</strong> WebSocket Router</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-websocket-4j/websocket-handler.html"><strong aria-hidden="true">4.9.3.</strong> WebSocket Handler</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j.html"><strong aria-hidden="true">4.10.</strong> Light-genai-4j</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j/ollama-client.html"><strong aria-hidden="true">4.10.1.</strong> Ollama Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j/openai-client.html"><strong aria-hidden="true">4.10.2.</strong> OpenAI Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j/gemini-client.html"><strong aria-hidden="true">4.10.3.</strong> Gemini Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j/bedrock-client.html"><strong aria-hidden="true">4.10.4.</strong> Bedrock Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concern/light-genai-4j/genai-websocket-handler.html"><strong aria-hidden="true">4.10.5.</strong> Genai WebSocket Handler</a></span></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

