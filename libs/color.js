export const colorFromClub = (club) => {
    switch (club) {
        case 50: return 'from-[#dfff80] to-#beff00]'
        case 100: return 'from-[#ffe580] to-[#ffca00]'
        case 150: return 'from-[#f2be90] to-[#e67e22]'
        case 200: return 'from-[#ff8080] to-[#ff0000]'
        case 250: return 'from-[#f880ff] to-[#f200ff]'
        case 300: return 'from-[#be8dd2] to-[#71368a]'
        case 350: return 'from-[#80acff] to-[#0059ff]'
        case 400: return 'from-[#80d9ff] to-[#00b3ff]'
        case 450: return 'from-[#80ffbe] to-[#00ff7c]'
        case 500: return 'from-[#b1ff80] to-[#63ff00]'
        default: return 'from-white to-gray-200'
    }
}