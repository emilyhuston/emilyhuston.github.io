# Emily's Portfolio


## Bonjour le monde!

My Github Pages repo can be found at: <https://github.com/emilyhuston/emilyhuston.github.io/>

Live site: <https://emilyhuston.github.io/>


## Resources

- [HTML validator](https://validator.w3.org/)
- Autoformatting for HTML: [Prettier playground](https://prettier.io/playground/) (use `--print-width 100` and `--parser html`)
- [Page Speed](https://pagespeed.web.dev/report?url=https%3A%2F%2Femilyhuston.github.io%2F)
- [Mobile-friendliness test](https://search.google.com/test/mobile-friendly)
- Lightboxes:
  - Currently using: [fslightbox](https://fslightbox.com/)
  - Not using but bookmarked for posterity:
    - [Basic Lightbox](https://basiclightbox.electerious.com)
    - [Simple Lightbox](https://simplelightbox.com/)
    - [Pure CSS modal](https://markodenic.com/css-tips/)
- [Single-page app POC without JS](https://john-doe.neocities.org/) might be interesting to try


## Development

Install Python if not present.

Run a Python server from the root directory in your terminal to serve assets:

```
python3 -m http.server
```

Navigate your browser to <http://localhost:8000>

See the [`utils`](/utils) directory for Python scripts that you can use to batch resize images and generate HTML for fslightbox-ready HTML.


## TODO

- Add a photographer subtitle below main header
- Switch font awesome Twitter icon to Mastodon
- Consider making taglines pop a bit more
- Consider a different color for Hire Me link
- Handle medium views which set text to left while centering photos which looks odd
- Make CSS mobile first
- Photos should be wider at 600px cutoff (use width and height props, thumbs 500px [but show at 300px for mid-sized displays], full images could be 2000 px wide)
- Add links to external articles and projects in bio
- Find out why smooth scrolling isn't working, or get rid of it completely
- Consider trying to block context clicks on large photos
- Consider moving social icons and copyright to footer
- Improve scripts to better generate results (photos don't need special names and can be sequentially numbered)
