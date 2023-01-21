const body = document.querySelector('body')
const modal = document.querySelector('dialog')
const modalTitle = document.querySelector('dialog .informations-projects .description-project h2')
const modalClose = document.querySelector('dialog .informations-projects .description-project span')
const modalDescription = document.querySelector('dialog .informations-projects .description-project p')
const modalDate = document.querySelector('dialog .informations-projects .description-project .date-project')
const modalImage = document.querySelector('dialog .informations-projects .image-project img')
const modalLinkRepository = document.querySelector('dialog .links-projects .link-repository')
const modalLinkProject = document.querySelector('dialog .links-projects .link-project')
const modalLinkLinkedin = document.querySelector('dialog .links-projects .link-likedin')
const allProjectsContainer = document.querySelector('.all-projects .cards-projects');
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;


const getProjectsByTypeOrAll = (typeId) => {
    const dataProjects = [
      {
        id: 1,
        type: 2,
        title: 'God of War Ragnarök',
        date: '01 de Dezembro de 2022',
        languages: ['html', 'sass','javascript', 'figma'],
        description: `Landing Page criada no recente lançamento do game <br>
        Foi nesse projeto que tive meu primeito contato com o SASS, e aprendi a utilizar o Swipe API e com certeza será muito útil.
        Projeto feito na no evento online CodeBoost`,
        imgSrc: '../assets/projects/god.png',
        alt: 'God of War Ragnarok',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/god-ragnarok',
        site: 'https://god-ragnarok.vercel.app/'
      },
      {
        id: 2,
        type: 2,
        title: 'RocketPay',
        date: '29 de Outubro de 2022',
        languages: ['html', 'css', 'javascript'],
        description: `Projeto criado no evento da Rocketseat Ignite Lab, com o intuito de aprender mais sobre a DOM JS. <br>
        Foi cedido o repositório para download de todo o layout do projeto, e foi feito validação de campos de acordo com cada <br>
        bandeira de cartão, usado também o Imask para utilização de máscaras nos inputs da página e toda a validação foi dos campos
        foi usando Regex.`,
        imgSrc: '../assets/projects/rocketpay.png',
        alt: 'RocketPay',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/explorer-rocketpay',
        site: 'https://explorer-rocketpay-omega.vercel.app/'
      },
      {
        id: 3,
        type: 2,
        title: 'Habits',
        date: '21 de Janeiro de 2023',
        languages: ['html', 'css', 'javascript', 'figma'],
        description: `Habists criado no evento NLW Setup da Rocketseat, onde foi proposta a ideia de criar <br>
        um habit tracker para ter um controle de atividades diárias. Maior aprendizado do projeto foi o uso de LocalStore, para quando <br>
        sair da página ou dar refresh os dados continuarem salvos. E absolutamente isso será útil em outros projetos.`,
        imgSrc: '../assets/projects/hanits.png',
        alt: 'Habits Tracker',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/habits',
        site: 'https://habits-e.vercel.app/'
      },
      {
        id: 4,
        type: 1,
        title: 'Sistema de Filtragem',
        date: '19 de Janeiro de 2023',
        languages: ['html', 'css', 'javascript'],
        description: `Projeto criado com intuito de aprender a filtrar elementos da página através do conteúdo de um input, feito com JavaScript. <br> 
        Muito divertido e simples o projeto, com certeza vai útil em projetos futuros.`,
        imgSrc: '../assets/projects/filter-system.png',
        alt: 'Filter System',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/system-filter',
        site: 'https://system-filter.vercel.app/'
      },
      {
        id: 5,
        type: 1,
        title: 'My Links',
        date: '26 de Dezembro de 2022',
        languages: ['html', 'css','javascript', 'figma'],
        description: `Projeto criado no evento da Rocketseat, página é um agregador de links para divulgação pessoal. <br>
        Links para likedin, repositório, portifólio e com opção de dark mode ou light mode`,
        imgSrc: '../assets/projects/my-links.png',
        alt: 'My Links',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/my-links',
        site: 'https://my-links-me.vercel.app/'
      },
      {
        id: 6,
        type: 1,
        title: 'Hotel Responsivo',
        date: '20 de Outubro de 2022',
        languages: ['html', 'css'],
        description: `Página criada com intuito de fortalecer conteúdos de Flexbox e responsividade `,
        imgSrc: '../assets/projects/hotel.png',
        alt: 'God of War Ragnarok',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/Hotel-Site',
        site: 'https://hotel-site-omega.vercel.app//'
      },
      {
        id: 7,
        type: 1,
        title: 'Meu Relógio',
        date: '05 de Dezembro de 2022',
        languages: ['html', 'css','javascript'],
        description: `Projeto criado com o intuito de aprender a utilizar e tratar datas e horas no JavaScript`,
        imgSrc: '../assets/projects/relogio.png',
        alt: 'relogio',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/relogio',
        site: 'https://relogio-omega.vercel.app/'
      },
      {
        id: 8,
        type: 1,
        title: 'Copa Catar 2022',
        date: '05 de Dezembro de 2022',
        languages: ['html', 'css','javascript'],
        description: `Projeto construído no evento online da rocketseat com objetivo de fortalecer os conhecimentos 
        de HTML, CSS, JavaScript e uso da responsividade com media query.`,
        imgSrc: '../assets/projects/nlw-copa.png',
        alt: 'Nlw copa',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/nlw-copa',
        site: 'https://nlw-copa-puce.vercel.app/'
      },
      {
        id: 9,
        type: 1,
        title: 'NLW e-Sports',
        date: '06 de Novembro de 2022',
        languages: ['html', 'css'],
        description: `Projeto construído no evento online da rocketseat com objetivo de fortalecer os conhecimentos 
        de HTML, CSS, JavaScript e uso da responsividade com media query.`,
        imgSrc: '../assets/projects/nlw-sports.png',
        alt: 'Nlw copa',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/nlw_esports',
        site: 'https://nlw-esports-alpha.vercel.app/'
      },
      {
        id: 10,
        type: 1,
        title: 'Music Player',
        date: '16 de Janeiro de 2023',
        languages: ['html', 'css'],
        description: `Projeto construído com o intuito de fortalecer os conceitos de HTML, CSS e responsividade.<br>
        Projeto realizado nos desafios #BoraCodar da Rocketseat. Pretendo futuramente adicionar novas features e tornar esse player funcional.`,
        imgSrc: '../assets/projects/music-player.png',
        alt: 'Music Player',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/music-player',
        site: 'https://music-player-nine-azure.vercel.app/'
      },
      {
        id: 11,
        type: 1,
        title: 'Clone Spotify',
        date: '07 de Outubro de 2022',
        languages: ['html', 'css'],
        description: `Projeto construído com o intuito de fortalecer os conceitos de HTML, CSS e responsividade.`,
        imgSrc: '../assets/projects/spotify.png',
        alt: 'Clone Spotify',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/clone-spotify',
        site: 'https://clone-spotify-ochre.vercel.app/'
      },
      {
        id: 12,
        type: 1,
        title: 'Clone Tinder',
        date: '30 de Setembro de 2022',
        languages: ['html', 'css'],
        description: `Projeto construído com o intuito de fortalecer os conceitos de HTML, CSS e responsividade.`,
        imgSrc: '../assets/projects/tinder.png',
        alt: 'Clone Tinder',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/Tinder-clone',
        site: 'https://tinder-clone-amber.vercel.app//'
      },
      {
        id: 13,
        type: 1,
        title: 'Card Produto',
        date: '17 de Janeiro de 2023',
        languages: ['html', 'css', 'javascript'],
        description: `Projeto construído com o intuito de fortalecer os conceitos de HTML, CSS, JavaScript e responsividade.`,
        imgSrc: '../assets/projects/card-sofa.png',
        alt: 'Card Produto',
        linkedin: '#',
        repository: 'https://github.com/Matheus-Santos01/card-sofa',
        site: 'https://card-sofa.vercel.app/'
      }
    ];
  
    return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
  }

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, altImg, date, languages }) => {
    return `
        <div class="card" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="${altImg}">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`).join('')}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}


const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html',
      alt: 'html'
    },
    {
      name: 'CSS3',
      src: 'css',
      alt: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript',
      alt: 'javascript'
    },
    {
      name: 'React.js',
      src: 'react',
      alt: 'react'
    },
    {
      name: 'CSS-in-JS',
      src: 'styledcomponents',
      alt: 'react'
    },
    {
      name: 'SASS',
      src: 'sass',
      alt: 'react'
    },
    {
      name: 'Figma',
      src: 'figma',
      alt: 'figma'
    }
  ]

  cardsContainer.innerHTML = skills.map(({ name, src, alt}, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="${alt}">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, imgSrc, alt }) => {
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkLinkedin.setAttribute('href', linkedin)
  modalImage.setAttribute('src', imgSrc)
  modalImage.setAttribute('alt', alt)
  modal.showModal()
}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll()
      const foundProject = allProjects.find((project) => project.id === id)
      addData(foundProject)
    })
  });
}

const closeModal = () => {
    modal.close()
}

function toggleMenu(){
  const navMenu = document.querySelector('.list-menu')
  const menuIcon = document.querySelector('.menu-icon')
  const closeIcon = document.querySelector('.close-icon')
 
  navMenu.classList.toggle('active')
  
  if(navMenu.classList.contains('active')){
    navMenu.style.display = 'flex'
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'block'
  }else{
    navMenu.style.display = 'none'
    menuIcon.style.display = 'block'
    closeIcon.style.display = 'none'
  }
}

function clickItemMenu(){
  const itemMenu = document.querySelectorAll('.item-menu')
    itemMenu.forEach((item) => {
      item.addEventListener('click', toggleMenu)
  })
}

clickItemMenu()
renderSkillsSection()
renderProjects(highlightsProjectsContainer, hightLightProjects)
renderProjects(allProjectsContainer, allProjects)
const projectsBox = document.querySelectorAll('.card')
insertProjectAction()
modalClose.addEventListener('click', closeModal)