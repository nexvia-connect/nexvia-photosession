// Extract URL parameters from the parent window
const params = new URLSearchParams(window.parent.location.search);

// Iterate over the parameters and append them to the iframe's URL
params.forEach((value, key) => {
    document.querySelectorAll('iframe').forEach(iframe => {
        let iframeSrc = new URL(iframe.src);
        iframeSrc.searchParams.set(key, value);
        iframe.src = iframeSrc.toString();
    });
});
