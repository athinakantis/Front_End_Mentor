const preview = document.querySelector('#preview')
const challenges = [
    'assets/previews/desktopView_Athina_Kantis.png'
]


const centerX = 556;
const centerY = 664;


function previewChallenge(challenge, e) {
    e.preventDefault()
    const clientRect = e.target.getBoundingClientRect()
    const clientX = clientRect.left;
    const clientY = clientRect.top;

    preview.src = challenges[challenge];
    preview.style.opacity = 1;
    preview.style.transform = `translate(${e.clientX - clientX}px, ${e.clientY - clientY}px)`
}


const bentoGridBtn = document.querySelector('#bentoGrid')
bentoGridBtn.addEventListener('mousemove', (e) => previewChallenge(0, e))
bentoGridBtn.addEventListener('mouseout', () => {
    preview.style.opacity = 0;
})