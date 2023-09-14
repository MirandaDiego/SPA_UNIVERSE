import { Route } from "./routes.js";
import * as el from './elements.js'


export const div = document.querySelector('.div');
export const pageHome = document.querySelector('.home');
export const pageUniverse = document.querySelector('.universe');
export const pageExploracao = document. querySelector('.exploracao');
export const erro = document.querySelector('.error')
const app = document.querySelector("#app")

const router = new Route()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploracao', '/pages/exploracao.html')
router.add(404, "/pages/404.html")

router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()

pageHome.addEventListener('click', () => {
   
    app.classList.remove('dois')
    app.classList.remove('tres')
    app.classList.add('zero')
})
pageUniverse.addEventListener('click', () => {
    
    app.classList.remove('zero')
    app.classList.remove('tres')
    app.classList.add('dois')
})

pageExploracao.addEventListener('click', () => {
   
    app.classList.remove('zero')
    app.classList.remove('dois')
    app.classList.add('tres')
})

function why() {

}