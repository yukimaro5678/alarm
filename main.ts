let じ = 0
let ふん = 0
let びょう = 0
let あらーむ : boolean = true
let じかんになった : boolean = false
function _1 () {
    for (let index = 0; index < 12; index++) {
        basic.pause(5000)
    }
}
input.onButtonPressed(Button.AB, function () {
    あらーむ = false;
})
basic.forever(function () {
    じかんになった = (じ == 0 && ふん == 1);
    if (あらーむ && じかんになった) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C D C - C D C - ", 541)
        }
        for (let index = 0; index < 2; index++) {
            music.playMelody("- D E D F F D - ", 541)
        }
        for (let index = 0; index < 2; index++) {
            music.playMelody("- D E D G F E - ", 541)
        }
        for (let index = 0; index < 2; index++) {
            music.playMelody("- D E D B F E - ", 541)
        }
    }
})
control.inBackground(function () {
    while (true) {
        basic.showString("" + じ + ":" + ふん + ":" + びょう)
    }
})
control.inBackground(function () {
    while (true) {
        びょう += 1
        if (びょう >= 60) {
            ふん += 1
            びょう = 0
        }
        if (ふん >= 60) {
            じ += 1
            ふん = 0
        }
        basic.pause(1000)
    }
})
