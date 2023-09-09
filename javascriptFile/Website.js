const SITE_NAME = 'Information Technology'
const BASE_URL = 'http://it.tni.ac.th'
const COLOR_THEME = 'blue'
const ALLOW_SIGHUP = true

console.log('Welcome to ' + SITE_NAME)

let languages = ['JavaScript','Python','Ruby','Java','PHP']
for(let i in languages){
    let url = BASE_URL + 'lang/' + languages[i].toLowerCase();
    console.log(`- ${languages[i]} programming (${url})`)
}

console.log('Footer')

let footer = ['About','Private']
for(let i in footer){
    let url = BASE_URL+' '+footer[i].toLocaleLowerCase()
    console.log(`- ${footer[i]} (${url})`)
}

if(ALLOW_SIGHUP){
    console.log('[Sign up for new settle]')
}

console.log(`© ${new Date().getFullYear()} ${SITE_NAME}`)
