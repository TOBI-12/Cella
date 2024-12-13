/*

 * Simple base bot whatsapp
 * Created by Anggazyy ZcoderX
 * Support by ChatGPT Assistant
 * Jangan delete credit ya ^^
 
 Contact Support:
 📞 Whatsapp : wa.me/6288804148639
 ☎ Telegram : t.me/anggazyydev
 
*/

global.owner = [
  "+1 (939) 229-3665", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '6283896203628'
global.urlfoto = 'https://files.catbox.moe/5zmln0.jpg'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})