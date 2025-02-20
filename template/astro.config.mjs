// @ts-check
import {defineConfig} from 'astro/config';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: 'https://exampleweb.cz/',
    integrations: [
        sitemap(),
        playformCompress({
            JavaScript: false,
            HTML: true,
            CSS: true,
            SVG: true,
        }),
        compressor(),
    ],
});
