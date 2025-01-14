function getTags ({
  cdnBase = 'https://cdn.ampproject.org/v0/'
}) {
  const tags = [
    { tag: 'amp-3d-gltf', version: '0.1' },
    { tag: 'amp-3q-player', version: '0.1' },
    { tag: 'amp-access', version: '0.1' },
    { tag: 'amp-access-laterpay', version: '0.1' },
    { tag: 'amp-access-poool', version: '0.1' },
    { tag: 'amp-accordion', version: '0.1' },
    { tag: 'amp-action-macro', version: '0.1' },
    { tag: 'amp-ad', version: '0.1' },
    { tag: 'amp-ad-exit', version: '0.1' },
    { tag: 'amp-addthis', version: '0.1' },
    { tag: 'amp-analytics', version: '0.1' },
    { tag: 'amp-anim', version: '0.1' },
    { tag: 'amp-animation', version: '0.1' },
    { tag: 'amp-apester-media', version: '0.1' },
    { tag: 'amp-app-banner', version: '0.1' },
    { tag: 'amp-audio', version: '0.1' },
    { tag: 'amp-auto-ads', version: '0.1' },
    { tag: 'amp-autocomplete', version: '0.1' },
    { tag: 'amp-base-carousel', version: '0.1' },
    { tag: 'amp-beopinion', version: '0.1' },
    { tag: 'amp-bind', version: '0.1', regex: /<[^>]*\[.*\][^>]*>/gi }, // usage detection via <..[..]=..>
    { tag: 'amp-bodymovin-animation', version: '0.1' },
    { tag: 'amp-brid-player', version: '0.1' },
    { tag: 'amp-brightcove', version: '0.1' },
    { tag: 'amp-byside-content', version: '0.1' },
    { tag: 'amp-call-tracking', version: '0.1' },
    { tag: 'amp-carousel', version: '0.1' },
    { tag: 'amp-consent', version: '0.1' },
    { tag: 'amp-dailymotion', version: '0.1' },
    { tag: 'amp-date-countdown', version: '0.1' },
    { tag: 'amp-date-display', version: '0.1' },
    { tag: 'amp-date-picker', version: '0.1' },
    { tag: 'amp-delight-player', version: '0.1' },
    { tag: 'amp-dynamic-css-classes', version: '0.1' },
    { tag: 'amp-embedly-card', version: '0.1' },
    { tag: 'amp-embed', script: 'amp-ad', version: '0.1' }, // amp-embed will require amp-ad
    { tag: 'amp-experiment', version: '0.1' },
    { tag: 'amp-facebook', version: '0.1' },
    { tag: 'amp-facebook-comments', version: '0.1' },
    { tag: 'amp-facebook-like', version: '0.1' },
    { tag: 'amp-facebook-page', version: '0.1' },
    { tag: 'amp-fit-text', version: '0.1' },
    { tag: 'amp-font', version: '0.1' },
    { tag: 'form', script: 'amp-form', version: '0.1' },
    { tag: 'amp-fx-collection', version: '0.1' },
    { tag: 'amp-fx-flying-carpet', version: '0.1' },
    { tag: 'amp-geo', version: '0.1' },
    { tag: 'amp-gfycat', version: '0.1' },
    { tag: 'amp-gist', version: '0.1' },
    { tag: 'amp-google-document-embed', version: '0.1' },
    { tag: 'amp-google-vrview-image', version: '0.1' },
    { tag: 'amp-hulu', version: '0.1' },
    { tag: 'amp-iframe', version: '0.1' },
    { tag: 'amp-ima-video', version: '0.1' },
    { tag: 'amp-image-lightbox', version: '0.1' },
    { tag: 'amp-image-slider', version: '0.1' },
    // amp-img is built-in component
    // { tag: 'amp-img', version: '0.1' },
    { tag: 'amp-imgur', version: '0.1' },
    { tag: 'amp-instagram', version: '0.1' },
    { tag: 'amp-install-serviceworker', version: '0.1' },
    { tag: 'amp-izlesene', version: '0.1' },
    { tag: 'amp-jwplayer', version: '0.1' },
    { tag: 'amp-kaltura-player', version: '0.1' },
    // amp-layout is built-in component
    // { tag: 'amp-layout', version: '0.1' },
    { tag: 'amp-lightbox', version: '0.1' },
    { tag: 'amp-lightbox-gallery', version: '0.1' },
    { tag: 'amp-link-rewriter', version: '0.1' },
    { tag: 'amp-list', version: '0.1' },
    { tag: 'amp-live-list', version: '0.1' },
    { tag: 'amp-mathml', version: '0.1' },
    { tag: 'amp-mowplayer', version: '0.1' },
    { tag: 'amp-mustache', version: '0.2', isTemplate: true },
    { tag: 'amp-next-page', version: '0.1' },
    { tag: 'amp-nexxtv-player', version: '0.1' },
    { tag: 'amp-o2-player', version: '0.1' },
    { tag: 'amp-ooyala-player', version: '0.1' },
    { tag: 'amp-orientation-observer', version: '0.1' },
    { tag: 'amp-pan-zoom', version: '0.1' },
    { tag: 'amp-pinterest', version: '0.1' },
    // amp-pixel is built-in component
    // { tag: 'amp-pixel', version: '0.1' },
    { tag: 'amp-playbuzz', version: '0.1' },
    { tag: 'amp-position-observer', version: '0.1' },
    { tag: 'amp-powr-player', version: '0.1' },
    { tag: 'amp-reach-player', version: '0.1' },
    { tag: 'amp-recaptcha-input', version: '0.1' },
    { tag: 'amp-reddit', version: '0.1' },
    { tag: 'amp-riddle-quiz', version: '0.1' },
    { tag: 'amp-script', version: '0.1' },
    { tag: 'amp-selector', version: '0.1' },
    { tag: 'amp-share-tracking', version: '0.1' },
    { tag: 'amp-sidebar', version: '0.1' },
    { tag: 'amp-skimlinks', version: '0.1' },
    { tag: 'amp-smartlinks', version: '0.1' },
    { tag: 'amp-social-share', version: '0.1' },
    { tag: 'amp-soundcloud', version: '0.1' },
    { tag: 'amp-springboard-player', version: '0.1' },
    { tag: 'amp-sticky-ad', version: '0.1' },
    { tag: 'amp-story', version: '1.0' },
    { tag: 'amp-story-auto-ads', version: '0.1' },
    { tag: 'amp-subscriptions', version: '0.1' },
    { tag: 'amp-subscriptions-google', version: '0.1' },
    { tag: 'amp-timeago', version: '0.1' },
    { tag: 'amp-twitter', version: '0.1' },
    { tag: 'amp-user-notification', version: '0.1' },
    { tag: 'amp-video', version: '0.1' },
    { tag: 'amp-video-docking', version: '0.1' },
    { tag: 'amp-video-iframe', version: '0.1' },
    { tag: 'amp-viewer-assistance', version: '0.1' },
    { tag: 'amp-vimeo', version: '0.1' },
    { tag: 'amp-vine', version: '0.1' },
    { tag: 'amp-viqeo-player', version: '0.1' },
    { tag: 'amp-viz-vega', version: '0.1' },
    { tag: 'amp-vk', version: '0.1' },
    { tag: 'amp-web-push', version: '0.1' },
    { tag: 'amp-wistia-player', version: '0.1' },
    { tag: 'amp-yotpo', version: '0.1' },
    { tag: 'amp-youtube', version: '0.1' }
  ]

  for (const t of tags) {
    t.url = `${cdnBase}${t.script || t.tag}-${t.version}.js`
  }

  return tags
}

function detectTags (tags, html) {
  return tags.filter(t => t.isTemplate ? html.includes(`type="${t.tag}"`) : (
    t.regex ? html.search(t.regex) > -1 : html.includes(`<${t.tag}`)
  ))
    .filter((t, index, self) => index === self.findIndex(t2 => (t.url === t2.url))) // filter duplicates
}

module.exports = {
  getTags,
  detectTags
}
