/* 

MANEIRAS DE DECLARAR AS VARIÁVEIS  
  camelCase
  PascalCase
  snake_case

*/

// =========================================

/* 

  ARROW FUNCTIONS
  =>

  EXEMPLO: 
  argumento => {
    // code
  }

*/

// declarando variáveis objeto
const socialMedia = {
  github: 'vanessabrazuna',
  youtube: 'channel/UCUkehNhp5BY9wMdrrjt9W2A',
  instagram: 'vvanessabrazuna',
  facebook: 'brazuna.nessa',
  twitter: 'twitter.com'
}

// Trocando os dados 
function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name 
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()
