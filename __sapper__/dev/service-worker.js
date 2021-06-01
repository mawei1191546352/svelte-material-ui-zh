(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1622519031447;

	const files = [
		"/service-worker-index.html",
		"/CNAME",
		"/browserconfig.xml",
		"/header-dark.png",
		"/header-light.png",
		"/header-transparent.png",
		"/header.png",
		"/icons/android-icon-144x144.png",
		"/icons/android-icon-192x192.png",
		"/icons/android-icon-36x36.png",
		"/icons/android-icon-48x48.png",
		"/icons/android-icon-72x72.png",
		"/icons/android-icon-96x96.png",
		"/icons/apple-icon-114x114.png",
		"/icons/apple-icon-120x120.png",
		"/icons/apple-icon-144x144.png",
		"/icons/apple-icon-152x152.png",
		"/icons/apple-icon-180x180.png",
		"/icons/apple-icon-57x57.png",
		"/icons/apple-icon-60x60.png",
		"/icons/apple-icon-72x72.png",
		"/icons/apple-icon-76x76.png",
		"/icons/apple-icon-precomposed.png",
		"/icons/apple-icon.png",
		"/icons/favicon-16x16.png",
		"/icons/favicon-32x32.png",
		"/icons/favicon-96x96.png",
		"/icons/favicon.ico",
		"/icons/ms-icon-144x144.png",
		"/icons/ms-icon-150x150.png",
		"/icons/ms-icon-310x310.png",
		"/icons/ms-icon-70x70.png",
		"/logo-bold-dark.png",
		"/logo-bold-dark.svg",
		"/logo-text.png",
		"/logo-text.svg",
		"/logo.png",
		"/logo.svg",
		"/manifest.json",
		"/page-content.jpg",
		"/site-dark.css",
		"/site.css",
		"/smui-dark.css",
		"/smui.css"
	];

	const shell = [
		"/client/client.ec94238b.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.0c8b64d9.js",
		"/client/Subtitle.1be01128.js",
		"/client/Graphic.805b8c09.js",
		"/client/MIGRATING.md.d97f63dd.js",
		"/client/SVELTEKIT.md.82d4757e.js",
		"/client/INSTALL.md.0544b5fd.js",
		"/client/THEMING.md.de931edc.js",
		"/client/SAPPER.md.dd2ed520.js",
		"/client/REPL.md.1fc7e0c5.js",
		"/client/SASS.md.f8e7c2d9.js",
		"/client/index.31699007.js",
		"/client/Demo.9c515360.js",
		"/client/Checkbox.52871e38.js",
		"/client/FormField.2971fa15.js",
		"/client/Button.d66ce348.js",
		"/client/index.b8a30875.js",
		"/client/CommonLabel.e3297b41.js",
		"/client/Wrapper.fc581bd8.js",
		"/client/index.3a189a01.js",
		"/client/LinearProgress.2a923d82.js",
		"/client/index.04d05664.js",
		"/client/Textfield.38e6e4ee.js",
		"/client/Anchor.88237b9f.js",
		"/client/Supporting.a874223d.js",
		"/client/index.1fa6f4f5.js",
		"/client/Fab.5ce9de7b.js",
		"/client/Text.abd87972.js",
		"/client/Radio.52add3e3.js",
		"/client/index.ce540ab1.js",
		"/client/CommonLabel.6290f478.js",
		"/client/index.210d4c6c.js",
		"/client/index.ab594d40.js",
		"/client/LoremIpsum.116fcbde.js",
		"/client/iframe.33ce86be.js",
		"/client/index.2d03be52.js",
		"/client/Cell.e79ca75d.js",
		"/client/Option.2399e112.js",
		"/client/iframe.0d085591.js",
		"/client/index.0a699421.js",
		"/client/Switch.f22d860f.js",
		"/client/index.10579113.js",
		"/client/Div.92a8773b.js",
		"/client/index.42d9a733.js",
		"/client/index.548bd468.js",
		"/client/index.da3f3c2f.js",
		"/client/index.8bd362c8.js",
		"/client/index.a1b3634d.js",
		"/client/index.cbf364df.js",
		"/client/index.65e51aed.js",
		"/client/index.26b70c32.js",
		"/client/SelectionGroupIcon.cb410e51.js",
		"/client/index.4ed6324f.js",
		"/client/index.689b9ba3.js",
		"/client/Slider.91ac28a7.js",
		"/client/index.1aa9abc4.js",
		"/client/index.4070fb78.js",
		"/client/Ripple.3a4e2bc3.js",
		"/client/index.a3f4ca44.js",
		"/client/index.bd802b4e.js",
		"/client/index.2a1e70d8.js",
		"/client/index.ae9c20e3.js",
		"/client/index.eb1f41c9.js",
		"/client/index.86df3ee9.js",
		"/client/index.60f0ccc8.js",
		"/client/index.732a1838.js",
		"/client/index.43a62ec4.js",
		"/client/index.74b555df.js",
		"/client/index.0725d84f.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', (event) => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then((cache) => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      })
	  );
	});

	self.addEventListener('activate', (event) => {
	  event.waitUntil(
	    caches.keys().then(async (keys) => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    })
	  );
	});

	/**
	 * Fetch the asset from the network and store it in the cache.
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
	  const cache = await caches.open(`offline${timestamp}`);

	  try {
	    const response = await fetch(request);
	    cache.put(request, response.clone());
	    return response;
	  } catch (err) {
	    const response = await cache.match(request);
	    if (response) return response;

	    throw err;
	  }
	}

	self.addEventListener('fetch', (event) => {
	  if (event.request.method !== 'GET' || event.request.headers.has('range'))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  const isHttp = url.protocol.startsWith('http');
	  const isDevServerRequest =
	    url.hostname === self.location.hostname && url.port !== self.location.port;
	  const isStaticAsset =
	    url.host === self.location.host && staticAssets.has(url.pathname);
	  const skipBecauseUncached =
	    event.request.cache === 'only-if-cached' && !isStaticAsset;

	  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
	    event.respondWith(
	      (async () => {
	        // always serve static files and bundler-generated assets from cache.
	        // if your application has other URLs with data that will never change,
	        // set this variable to true for them and they will only be fetched once.
	        const cachedAsset =
	          isStaticAsset && (await caches.match(event.request));

	        // for pages, you might want to serve a shell `service-worker-index.html` file,
	        // which Sapper has generated for you. It's not right for every
	        // app, but if it's right for yours then uncomment this section
	        /*
	        if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
	          return caches.match('/service-worker-index.html');
	        }
	        */

	        return cachedAsset || fetchAndCache(event.request);
	      })()
	    );
	  }
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYyMjUxOTAzMTQ0NztcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL0NOQU1FXCIsXG5cdFwiL2Jyb3dzZXJjb25maWcueG1sXCIsXG5cdFwiL2hlYWRlci1kYXJrLnBuZ1wiLFxuXHRcIi9oZWFkZXItbGlnaHQucG5nXCIsXG5cdFwiL2hlYWRlci10cmFuc3BhcmVudC5wbmdcIixcblx0XCIvaGVhZGVyLnBuZ1wiLFxuXHRcIi9pY29ucy9hbmRyb2lkLWljb24tMTQ0eDE0NC5wbmdcIixcblx0XCIvaWNvbnMvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIsXG5cdFwiL2ljb25zL2FuZHJvaWQtaWNvbi0zNngzNi5wbmdcIixcblx0XCIvaWNvbnMvYW5kcm9pZC1pY29uLTQ4eDQ4LnBuZ1wiLFxuXHRcIi9pY29ucy9hbmRyb2lkLWljb24tNzJ4NzIucG5nXCIsXG5cdFwiL2ljb25zL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmdcIixcblx0XCIvaWNvbnMvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiLFxuXHRcIi9pY29ucy9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIixcblx0XCIvaWNvbnMvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiLFxuXHRcIi9pY29ucy9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tNTd4NTcucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tNjB4NjAucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tNzJ4NzIucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tNzZ4NzYucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24tcHJlY29tcG9zZWQucG5nXCIsXG5cdFwiL2ljb25zL2FwcGxlLWljb24ucG5nXCIsXG5cdFwiL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nXCIsXG5cdFwiL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIsXG5cdFwiL2ljb25zL2Zhdmljb24tOTZ4OTYucG5nXCIsXG5cdFwiL2ljb25zL2Zhdmljb24uaWNvXCIsXG5cdFwiL2ljb25zL21zLWljb24tMTQ0eDE0NC5wbmdcIixcblx0XCIvaWNvbnMvbXMtaWNvbi0xNTB4MTUwLnBuZ1wiLFxuXHRcIi9pY29ucy9tcy1pY29uLTMxMHgzMTAucG5nXCIsXG5cdFwiL2ljb25zL21zLWljb24tNzB4NzAucG5nXCIsXG5cdFwiL2xvZ28tYm9sZC1kYXJrLnBuZ1wiLFxuXHRcIi9sb2dvLWJvbGQtZGFyay5zdmdcIixcblx0XCIvbG9nby10ZXh0LnBuZ1wiLFxuXHRcIi9sb2dvLXRleHQuc3ZnXCIsXG5cdFwiL2xvZ28ucG5nXCIsXG5cdFwiL2xvZ28uc3ZnXCIsXG5cdFwiL21hbmlmZXN0Lmpzb25cIixcblx0XCIvcGFnZS1jb250ZW50LmpwZ1wiLFxuXHRcIi9zaXRlLWRhcmsuY3NzXCIsXG5cdFwiL3NpdGUuY3NzXCIsXG5cdFwiL3NtdWktZGFyay5jc3NcIixcblx0XCIvc211aS5jc3NcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LmVjOTQyMzhiLmpzXCIsXG5cdFwiL2NsaWVudC9pbmplY3Rfc3R5bGVzLjU2MDdhZWM2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4wYzhiNjRkOS5qc1wiLFxuXHRcIi9jbGllbnQvU3VidGl0bGUuMWJlMDExMjguanNcIixcblx0XCIvY2xpZW50L0dyYXBoaWMuODA1YjhjMDkuanNcIixcblx0XCIvY2xpZW50L01JR1JBVElORy5tZC5kOTdmNjNkZC5qc1wiLFxuXHRcIi9jbGllbnQvU1ZFTFRFS0lULm1kLjgyZDQ3NTdlLmpzXCIsXG5cdFwiL2NsaWVudC9JTlNUQUxMLm1kLjA1NDRiNWZkLmpzXCIsXG5cdFwiL2NsaWVudC9USEVNSU5HLm1kLmRlOTMxZWRjLmpzXCIsXG5cdFwiL2NsaWVudC9TQVBQRVIubWQuZGQyZWQ1MjAuanNcIixcblx0XCIvY2xpZW50L1JFUEwubWQuMWZjN2UwYzUuanNcIixcblx0XCIvY2xpZW50L1NBU1MubWQuZjhlN2MyZDkuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjMxNjk5MDA3LmpzXCIsXG5cdFwiL2NsaWVudC9EZW1vLjljNTE1MzYwLmpzXCIsXG5cdFwiL2NsaWVudC9DaGVja2JveC41Mjg3MWUzOC5qc1wiLFxuXHRcIi9jbGllbnQvRm9ybUZpZWxkLjI5NzFmYTE1LmpzXCIsXG5cdFwiL2NsaWVudC9CdXR0b24uZDY2Y2UzNDguanNcIixcblx0XCIvY2xpZW50L2luZGV4LmI4YTMwODc1LmpzXCIsXG5cdFwiL2NsaWVudC9Db21tb25MYWJlbC5lMzI5N2I0MS5qc1wiLFxuXHRcIi9jbGllbnQvV3JhcHBlci5mYzU4MWJkOC5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguM2ExODlhMDEuanNcIixcblx0XCIvY2xpZW50L0xpbmVhclByb2dyZXNzLjJhOTIzZDgyLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4wNGQwNTY2NC5qc1wiLFxuXHRcIi9jbGllbnQvVGV4dGZpZWxkLjM4ZTZlNGVlLmpzXCIsXG5cdFwiL2NsaWVudC9BbmNob3IuODgyMzdiOWYuanNcIixcblx0XCIvY2xpZW50L1N1cHBvcnRpbmcuYTg3NDIyM2QuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjFmYTZmNGY1LmpzXCIsXG5cdFwiL2NsaWVudC9GYWIuNWNlOWRlN2IuanNcIixcblx0XCIvY2xpZW50L1RleHQuYWJkODc5NzIuanNcIixcblx0XCIvY2xpZW50L1JhZGlvLjUyYWRkM2UzLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5jZTU0MGFiMS5qc1wiLFxuXHRcIi9jbGllbnQvQ29tbW9uTGFiZWwuNjI5MGY0NzguanNcIixcblx0XCIvY2xpZW50L2luZGV4LjIxMGQ0YzZjLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5hYjU5NGQ0MC5qc1wiLFxuXHRcIi9jbGllbnQvTG9yZW1JcHN1bS4xMTZmY2JkZS5qc1wiLFxuXHRcIi9jbGllbnQvaWZyYW1lLjMzY2U4NmJlLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4yZDAzYmU1Mi5qc1wiLFxuXHRcIi9jbGllbnQvQ2VsbC5lNzljYTc1ZC5qc1wiLFxuXHRcIi9jbGllbnQvT3B0aW9uLjIzOTllMTEyLmpzXCIsXG5cdFwiL2NsaWVudC9pZnJhbWUuMGQwODU1OTEuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjBhNjk5NDIxLmpzXCIsXG5cdFwiL2NsaWVudC9Td2l0Y2guZjIyZDg2MGYuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjEwNTc5MTEzLmpzXCIsXG5cdFwiL2NsaWVudC9EaXYuOTJhODc3M2IuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjQyZDlhNzMzLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC41NDhiZDQ2OC5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguZGEzZjNjMmYuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjhiZDM2MmM4LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5hMWIzNjM0ZC5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguY2JmMzY0ZGYuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjY1ZTUxYWVkLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4yNmI3MGMzMi5qc1wiLFxuXHRcIi9jbGllbnQvU2VsZWN0aW9uR3JvdXBJY29uLmNiNDEwZTUxLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC40ZWQ2MzI0Zi5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguNjg5YjliYTMuanNcIixcblx0XCIvY2xpZW50L1NsaWRlci45MWFjMjhhNy5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguMWFhOWFiYzQuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjQwNzBmYjc4LmpzXCIsXG5cdFwiL2NsaWVudC9SaXBwbGUuM2E0ZTJiYzMuanNcIixcblx0XCIvY2xpZW50L2luZGV4LmEzZjRjYTQ0LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5iZDgwMmI0ZS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguMmExZTcwZDguanNcIixcblx0XCIvY2xpZW50L2luZGV4LmFlOWMyMGUzLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5lYjFmNDFjOS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguODZkZjNlZTkuanNcIixcblx0XCIvY2xpZW50L2luZGV4LjYwZjBjY2M4LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC43MzJhMTgzOC5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguNDNhNjJlYzQuanNcIixcblx0XCIvY2xpZW50L2luZGV4Ljc0YjU1NWRmLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4wNzI1ZDg0Zi5qc1wiLFxuXHRcIi9jbGllbnQvc2FwcGVyLWRldi1jbGllbnQuMWU3YTRhNWUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9NSUdSQVRJTkdcXC5tZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvU1ZFTFRFS0lUXFwubWRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL0lOU1RBTExcXC5tZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvVEhFTUlOR1xcLm1kXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9TQVBQRVJcXC5tZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvUkVQTFxcLm1kXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9TQVNTXFwubWRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9jaXJjdWxhci1wcm9ncmVzc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL3NlZ21lbnRlZC1idXR0b25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9saW5lYXItcHJvZ3Jlc3NcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9tZW51LXN1cmZhY2VcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC90b3VjaC10YXJnZXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9pY29uLWJ1dHRvblxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL2xheW91dC1ncmlkXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvdG9wLWFwcC1iYXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC90b3AtYXBwLWJhclxcL2lmcmFtZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL2RhdGEtdGFibGVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9kYXRhLXRhYmxlXFwvaWZyYW1lXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvZm9ybS1maWVsZFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL2ltYWdlLWxpc3RcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC90eXBvZ3JhcGh5XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvZWxldmF0aW9uXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvdGV4dGZpZWxkXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvY2hlY2tib3hcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9zbmFja2JhclxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL3Rvb2x0aXBcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9iYW5uZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9idXR0b25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9jb21tb25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9kaWFsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9kcmF3ZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9yaXBwbGVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9zZWxlY3RcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9zbGlkZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9zd2l0Y2hcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9jaGlwc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL3BhcGVyXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvcmFkaW9cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC9jYXJkXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvbGlzdFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZGVtb1xcL21lbnVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbW9cXC90YWJzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZW1vXFwvZmFiXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBzdGF0aWNBc3NldHMgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXNcbiAgICAgIC5vcGVuKEFTU0VUUylcbiAgICAgIC50aGVuKChjYWNoZSkgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2VsZi5za2lwV2FpdGluZygpO1xuICAgICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMgKGtleXMpID0+IHtcbiAgICAgIC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNsaWVudHMuY2xhaW0oKTtcbiAgICB9KVxuICApO1xufSk7XG5cbi8qKlxuICogRmV0Y2ggdGhlIGFzc2V0IGZyb20gdGhlIG5ldHdvcmsgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZS5cbiAqIEZhbGwgYmFjayB0byB0aGUgY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmRDYWNoZShyZXF1ZXN0KSB7XG4gIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgY2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChyZXF1ZXN0KTtcbiAgICBpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSlcbiAgICByZXR1cm47XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cbiAgLy8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcbiAgY29uc3QgaXNIdHRwID0gdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgY29uc3QgaXNEZXZTZXJ2ZXJSZXF1ZXN0ID1cbiAgICB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydDtcbiAgY29uc3QgaXNTdGF0aWNBc3NldCA9XG4gICAgdXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBzdGF0aWNBc3NldHMuaGFzKHVybC5wYXRobmFtZSk7XG4gIGNvbnN0IHNraXBCZWNhdXNlVW5jYWNoZWQgPVxuICAgIGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcgJiYgIWlzU3RhdGljQXNzZXQ7XG5cbiAgaWYgKGlzSHR0cCAmJiAhaXNEZXZTZXJ2ZXJSZXF1ZXN0ICYmICFza2lwQmVjYXVzZVVuY2FjaGVkKSB7XG4gICAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZS5cbiAgICAgICAgLy8gaWYgeW91ciBhcHBsaWNhdGlvbiBoYXMgb3RoZXIgVVJMcyB3aXRoIGRhdGEgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSxcbiAgICAgICAgLy8gc2V0IHRoaXMgdmFyaWFibGUgdG8gdHJ1ZSBmb3IgdGhlbSBhbmQgdGhleSB3aWxsIG9ubHkgYmUgZmV0Y2hlZCBvbmNlLlxuICAgICAgICBjb25zdCBjYWNoZWRBc3NldCA9XG4gICAgICAgICAgaXNTdGF0aWNBc3NldCAmJiAoYXdhaXQgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcblxuICAgICAgICAvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG4gICAgICAgIC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuICAgICAgICAvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cbiAgICAgICAgLypcbiAgICAgICAgaWYgKCFjYWNoZWRBc3NldCAmJiB1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcbiAgICAgICAgICByZXR1cm4gY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgcmV0dXJuIGNhY2hlZEFzc2V0IHx8IGZldGNoQW5kQ2FjaGUoZXZlbnQucmVxdWVzdCk7XG4gICAgICB9KSgpXG4gICAgKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLFFBQVE7Q0FDVCxDQUFDLG9CQUFvQjtDQUNyQixDQUFDLGtCQUFrQjtDQUNuQixDQUFDLG1CQUFtQjtDQUNwQixDQUFDLHlCQUF5QjtDQUMxQixDQUFDLGFBQWE7Q0FDZCxDQUFDLGlDQUFpQztDQUNsQyxDQUFDLGlDQUFpQztDQUNsQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLG1DQUFtQztDQUNwQyxDQUFDLHVCQUF1QjtDQUN4QixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLG9CQUFvQjtDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLFdBQVc7Q0FDWixDQUFDLFdBQVc7Q0FDWixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLG1CQUFtQjtDQUNwQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLFdBQVc7Q0FDWixDQUFDLGdC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