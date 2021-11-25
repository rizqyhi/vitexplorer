import sayHi from './sayHi'
// @ts-ignore
import confetti from 'canvas-confetti'

const app = document.querySelector<HTMLDivElement>('#app')!

// @ts-ignore
window.confetti = confetti

app.innerHTML = `
  <h1>Hello ${sayHi('Rizqy')}!</h1>
  <h2>New heading</h2>
  <a href="page.html">Go to Page</a>
  <button onclick="confetti()">Horeee</button>
`
