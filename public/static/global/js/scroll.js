document.querySelectorAll('.blockdivisor ._headdeco').forEach((span, index) => {
    setInterval(() => {
        if (index % 2 === 0) {

            span.textContent =
                span.textContent.at(-1) +
                span.textContent.slice(0, -1);
        } else {

            span.textContent =
                span.textContent.slice(1) +
                span.textContent[0];
        }
    }, 120);
});