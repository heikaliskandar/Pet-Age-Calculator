function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.single_field').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    document.querySelectorAll('figcaption').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
}

function doggy() {
    const dogWeight = document.getElementById("dogWeight").value;
    const dogAge = parseInt(document.getElementById("dogAge").value);
    let humanAge1 = 15;

    if (dogAge > 1 && dogAge < 6) {
        humanAge1 = 15 + 9 + (dogAge - 2) * 4;
    } else if (dogAge >= 6) {
        switch (dogWeight) {
            case "small":
                humanAge1 = 40 + (dogAge - 6) * 4;
                break;
            case "medium":
                humanAge1 = 42;
                for (let i = 6; i < dogAge; i++) {
                    humanAge1 += i % 2 === 0 ? 5 : 4;
                }
                break;
            default:
                humanAge1 = 45;
                for (let i = 6; i < dogAge; i++) {
                    humanAge1 += [6, 7, 9, 11, 12, 14].includes(i) ? 5 : 6;
                }
        }
    }
    document.getElementById("humanAge1").value = humanAge1;
}

function catty() {
    const catWeight = document.getElementById("catWeight").value;
    const catAge = parseInt(document.getElementById("catAge").value);
    let humanAge2 = 15;

    if (catAge > 1 && catAge < 6) {
        humanAge2 = 15 + 9 + (catAge - 2) * 4;
    } else if (catAge >= 6) {
        switch (catWeight) {
            case "small":
                humanAge2 = 40 + (catAge - 6) * 4;
                break;
            case "medium":
                humanAge2 = 42;
                for (let i = 6; i < catAge; i++) {
                    humanAge2 += i % 2 === 0 ? 5 : 4;
                }
                break;
            default:
                humanAge2 = 45;
                for (let i = 6; i < catAge; i++) {
                    humanAge2 += [6, 7, 9, 11, 12, 14].includes(i) ? 5 : 6;
                }
        }
    }
    document.getElementById("humanAge2").value = humanAge2;
}

function fishy() {
    const fishType = document.getElementById("fishType").value;
    const fishAge = parseInt(document.getElementById("fishAge").value);
    let humanAge3 = 0;

    switch (fishType) {
        case "koi":
            humanAge3 = fishAge * 5;
            break;
        case "guppy":
            humanAge3 = fishAge * 7;
            break;
        default:
            humanAge3 = fishAge * 4;
    }
    document.getElementById("humanAge3").value = humanAge3;
}
