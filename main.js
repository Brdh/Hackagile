window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('fade-out');
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
            initAnimations();
        }, 500);
    }, 1000);
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});


function createTechElements() {
    const container = document.getElementById('techElements');
    const elementCount = window.innerWidth < 800 ? 50 : 100;
    const techIcons = [
        '{}', '()', '[]', '</>', ';', '=>', '{}', '/*', '*/', 
        '⚡', '💻', '🚀', '🧠', '🔍', '🔄', '📊', '🤝', '🎯',
        '1', '0', '#', '{ }', '=>', '()', '[]', '<>', '++',
        '✏️', '📝', '🔧', '🛠️', '📱', '🌐', '📈', '📉', '🔗'
    ];
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.classList.add('tech-element');
        
        const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
        element.textContent = randomIcon;
        
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
        
        const duration = Math.random() * 15 + 15;
        element.style.animationDuration = `${duration}s`;
        
        element.style.animationDelay = `${Math.random() * 10}s`;
        
        const size = Math.random() * 1 + 0.8;
        element.style.fontSize = `${size}rem`;
        
        element.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        
        element.addEventListener('mouseenter', () => {
            element.style.opacity = '0.4';
            element.style.transform = `scale(1.3) rotate(${Math.random() * 20 - 10}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.opacity = Math.random() * 0.2 + 0.1;
            element.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        });
        
        container.appendChild(element);
    }
}


function setupParallax() {
    const parallaxBg = document.getElementById('parallaxBg');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateZ(-1px) scale(1.2) translateY(${scrollPosition * 0.4}px)`;
    });
}

function typeSubtitle() {
    const fullText = "Estamos descobrindo as melhores formas de criar soluções inovadoras em tempo recorde. Fazendo isso, valorizamos:";
    const subtitle = document.getElementById('typedSubtitle');
    let i = 0;
    
    function typeWriter() {
        if (i < fullText.length) {
            subtitle.innerHTML += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * 30 + 20);
        }
    }
    
    setTimeout(typeWriter, 1000);
}


function createModal(title, subtitle, content) {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => closeModal(modalOverlay));
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = title;
    
    const modalSubtitle = document.createElement('p');
    modalSubtitle.className = 'modal-subtitle';
    modalSubtitle.textContent = subtitle;
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalSubtitle);
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalOverlay.appendChild(modalContent);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });
    
    document.body.appendChild(modalOverlay);
    
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

const modalContents = {
    pesquisa: `
        <div class="modal-section">
            <p>Entendimento profundo da dor real.</p>
            <div class="modal-quote">"Ação sem pesquisa é improviso cego."</div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-search"></i> O que acontece aqui:</h3>
            <p>A equipe mergulha no problema. Escuta ativa, observação, dados reais e hipóteses testáveis substituem achismos. Pode ser por pesquisas de fontes confiáveis, entrevistas, benchmarks, formulários e outros.</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-check-circle"></i> Aplicamos os princípios de:</h3>
            <div class="modal-principles">
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Pesquisa:</strong> "Decidimos com dados reais, não achismos."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Viabilidade:</strong> "Focamos em dores reais que valem ser resolvidas."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Equipe:</strong> "Toda voz importa. Ideias surgem do coletivo, não de cargos."</p>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-example">
                <p>"Encontramos dados do governo falando sobre o problema e entrevistamos 5 pessoas que sofrem dele. Todos relatam dificuldade real com essa questão. Percebemos que o problema era comum e causava frustração."</p>
            </div>
        </div>
        
        <div class="modal-question">
            Já entendemos bem o problema — com evidências, não apenas suposições?
        </div>
    `,
    
    ideação: `
        <div class="modal-section">
            <p>Geração de soluções com foco no que importa.</p>
            <div class="modal-quote">"Inovar é resolver com simplicidade."</div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-lightbulb"></i> O que acontece aqui:</h3>
            <p>O time gera ideias alinhadas com a dor identificada. O objetivo é encontrar o máximo de impacto com o mínimo de complexidade. Solução boa não é a mais sofisticada - é a que resolve.</p>
        </div>
        
        <div class="modal-section">
            <h3  Aplicamos os princípios de:</h3>
            <div class="modal-principles">
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Inovação:</strong> "Não basta parecer incrível - tem que resolver de verdade."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Impacto:</strong> "Transformar vidas é o objetivo."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Pesquisa:</strong> "Hipóteses existem para serem testadas."</p>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-example">
                <p>"Tínhamos uma ideia robusta, mas simplificamos, queremos focar em uma funcionalidade específica que, se funcionar, resolveria o problema. Menos recursos, mais utilidade."</p>
            </div>
        </div>
        
        <div class="modal-question">
            Nossa ideia resolve mesmo a dor  com simplicidade e propósito?
        </div>
    `,
    
    prototipação: `
        <div class="modal-section">
            <p>Transformar ideia em solução funcional, o mais rápido possível.</p>
            <div class="modal-quote">"Feito validado vale mais que perfeito não testado."</div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-code"></i> O que acontece aqui:</h3>
            <p>A equipe materializa a solução. Pode ser um MVP com código, um protótipo navegável ou um fluxo no Figma. O foco é entregar valor real em tempo recorde.</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-check-circle"></i> Aplicamos os princípios de:</h3>
            <div class="modal-principles">
                <div class="modal-principle">
                    
                    <p><strong>Agilidade:</strong> "Testamos cedo, erramos rápido, corrigimos logo."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Inovação:</strong> "Soluções boas funcionam na prática."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Equipe:</strong> "Colaboramos mais do que controlamos."</p>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-example">
                <p>"Criamos um sistema simples, quase sem front-end, usamos API para simplificar ainda mais, e conseguimos resolver esse problema!"</p>
            </div>
        </div>
        
        <div class="modal-question">
            Já temos algo concreto que mostra como a solução funciona?
        </div>
    `,
    
    validação: `
        <div class="modal-section">
            <p>Teste realista com quem for possível.</p>
            <div class="modal-quote">"Validar com alguém é sempre melhor do que não validar."</div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-chart-line"></i> O que acontece aqui:</h3>
            <p>Mesmo sem o usuário final, testamos com mentores, colegas ou simulações. O objetivo é sair da bolha da equipe e enxergar como a solução é percebida por outras pessoas.</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-check-circle"></i> Aplicamos os princípios de:</h3>
            <div class="modal-principles">
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Pesquisa:</strong> "Pouco tempo exige boas perguntas."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Apresentação:</strong> "Conectamos com emoção, validação e protótipo."</p>
                </div>
                <div class="modal-principle">
                    <i class="fas fa-circle"></i>
                    <p><strong>Impacto:</strong> "Medimos sucesso pelo bem que causamos."</p>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-example">
                <p>"Mostramos o MVP para uma das pessoas que sofre com o problema. Ele entendeu rápido e disse que aquilo faria sentido na vida dela. Isso nos deu confiança no caminho."</p>
            </div>
        </div>
        
        <div class="modal-question">
            Conseguimos mostrar o valor real da solução — mesmo sem estar totalmente pronta?
        </div>
    `
};

function setupWorkflowInteractions() {
    const steps = document.querySelectorAll('.workflow-step');
    
    steps.forEach(step => {
        step.addEventListener('click', () => {
            const stepType = step.querySelector('h3').textContent.toLowerCase();
            const title = step.querySelector('h3').textContent;
            const subtitle = step.querySelector('p').textContent;
            
            createModal(title, subtitle, modalContents[stepType]);
        });
    });
}


document.getElementById('nextButton').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
});


function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
   
    gsap.to(".title-line", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });
    
 
    gsap.to(".title-highlight", {
        scaleX: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)"
    });


    gsap.to("#typedSubtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    

    const cards = document.querySelectorAll('.manifesto-card');
    cards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
  
    gsap.to("#workflowSection", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#workflowSection",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
   
    gsap.utils.toArray(".workflow-step").forEach((step, i) => {
        gsap.from(step, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: "#workflowSection",
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });
    });
    
  
    gsap.from(".workflow-insight", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
            trigger: "#workflowSection",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
    

    gsap.from(".workflow-conclusion", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
            trigger: "#workflowSection",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
    

    gsap.to("#footerText", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.to("#nextButton", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function init() {
    createTechElements();
    setupParallax();
    typeSubtitle();
    setupWorkflowInteractions();
}

document.addEventListener('DOMContentLoaded', function() {
    init();

document.getElementById('nextButton').addEventListener('click', function() {
    // Mostra o modal
    const modal = document.getElementById('principiosModal');
    modal.classList.add('active');
    
  
    document.querySelector('.modal-close').addEventListener('click', function() {
        modal.classList.remove('active');
    });
    

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});





























































});













