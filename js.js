const body = document.body;

let r1, g1, b1, r2, g2, b2, deg;

const inc =
{
    r1: 1,
    g1: 2,
    b1: 3,
    r2: 3,
    g2: 2,
    b2: 1,
};

r1 = 0;
g1 = 0;
b1 = 0;
r2 = 0;
g2 = 0;
b2 = 0;
deg = 0;

setInterval(() =>
{
    r1 += inc.r1;
    g1 += inc.g1;
    b1 += inc.b1;
    r2 += inc.r2;
    g2 += inc.g2;
    b2 += inc.b2;

    deg += 1;

    if (r1 >= 255 || r1 <= 0) inc.r1 *= -1;
    if (g1 >= 255 || g1 <= 0) inc.g1 *= -1;
    if (b1 >= 255 || b1 <= 0) inc.b1 *= -1;

    if (r2 >= 255 || r2 <= 0) inc.r2 *= -1;
    if (g2 >= 255 || g2 <= 0) inc.g2 *= -1;
    if (b2 >= 255 || b2 <= 0) inc.b2 *= -1;

    body.style.backgroundImage = `linear-gradient(${deg}deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}) 70%)`;
}, 25);