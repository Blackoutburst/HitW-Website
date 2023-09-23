export const colorFromClub = (club) => {
    switch (club) {
        case 50: return 'from-[#69ff00] to-[#beff00]'
        case 100: return 'from-[#dfff00] to-[#ffca00]'
        case 150: return 'from-[#e6bf22] to-[#e67e22]'
        case 200: return 'from-[#ff5500] to-[#ff0000]'
        case 250: return 'from-[#ff00b7] to-[#f200ff]'
        case 300: return 'from-[#8a3687] to-[#71368a]'
        case 350: return 'from-[#0004ff] to-[#0059ff]'
        case 400: return 'from-[#005eff] to-[#00b3ff]'
        case 450: return 'from-[#00ffd1] to-[#00ff7c]'
        case 500: return 'from-[#0eff00] to-[#63ff00]'
        default: return 'from-white to-gray-200'
    }
}