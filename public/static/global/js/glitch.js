// very laggy

function irandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NOISE_LEVEL = 5;
const MIN_LIFE = 80; 
const MAX_LIFE = 500;

const BLACKLIST = new Set([
    ' ',
    '\n',
    '\r',
    '\t',
    '_',
    '/',
    '|',
    '\x5C',
    '■',
    '<',
    'q','b','r','a','O'
]);

document.querySelectorAll('._borzoi pre').forEach(pre => {
    const original = [...pre.textContent];
    const chars = [...original];

    const valid = [];
    for (let i = 0; i < chars.length; i++) {
        if (!BLACKLIST.has(chars[i])) {
            valid.push(i);
        }
    }

    function spawnGlitch() {
        for (let i = 0; i < NOISE_LEVEL; i++) {
            const idx = valid[irandom(0, valid.length - 1)];

            if (chars[idx] === '#') continue;

            rchars = ['*','-','.','v','x','=']

            const old = chars[idx];
            chars[idx] = rchars[Math.floor(Math.random() * rchars.length)];

            pre.textContent = chars.join('');

            const life = irandom(MIN_LIFE, MAX_LIFE);

            setTimeout(() => {
                chars[idx] = old;
                pre.textContent = chars.join('');
            }, life);
        }
    }

    setInterval(spawnGlitch, 30);
});