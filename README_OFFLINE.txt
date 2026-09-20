AMINE PS4 - 13.52 OFFLINE PACKAGE

This package contains the local HTML/JS resources, 1352 patch, and the supplied goldhen.bin.

IMPORTANT:
1. The PS4 browser cannot execute a ZIP directly. The files must first be served from the same origin/host used to populate Application Cache.
2. Open index.html from that host while online once and wait for the cache event to complete.
3. Then disconnect the internet and reopen the SAME URL.
4. If the browser shows Network Error immediately, the application cache was not populated for that origin; this ZIP alone cannot force the PS4 browser to cache a remote website.
5. This package does not prove that goldhen.bin is compatible with PS4 13.52; it only makes the supplied binary available to the local loader without replacing the exploit mechanism.

IMPORTANT ROUTING FIX:
Open the canonical path /ps4/index.html (or /ps4/jb.html), not /ps4/jb.html/offline-18-v-1352. The latter makes a relative manifest resolve under /ps4/jb.html/ and causes the Network Error seen on the PS4.
