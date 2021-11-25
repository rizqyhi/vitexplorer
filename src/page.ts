import sayHi from './sayHi'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>A Page in Vite, ${sayHi('Rizqy')}!</h1>
  <a href="index.html">&larr; Back to Home ok</a>
`
