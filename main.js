const preview = document.querySelector('#preview')
const videoPreview = document.querySelector('#videoPreview')
const challenges = [
    'assets/previews/desktopView_Athina_Kantis.png',
    'assets/previews/Launch_Countdown_Preview.mp4'
]


function previewChallenge(challenge, event) {
    event.preventDefault()
    const clientRect = event.target.getBoundingClientRect()
    const clientX = clientRect.left;
    const clientY = clientRect.top;

    preview.src = challenges[challenge];
    preview.style.opacity = 1;
    preview.style.transform = `translate(${event.clientX - clientX}px, ${event.clientY - clientY}px)`
}

function previewVideo(video) {
    videoPreview.src = video
    videoPreview.style.opacity = 1;
}

function animateVideo(event) {
    event.preventDefault()
    const clientRect = event.target.getBoundingClientRect()
    const clientX = clientRect.left;
    const clientY = clientRect.top;
    videoPreview.style.transform = `translate(${event.clientX - clientX}px, ${event.clientY - clientY}px)`;
}

const bentoGridBtn = document.querySelector('#bentoGrid')
bentoGridBtn.addEventListener('mousemove', (e) => previewChallenge(0, e))
bentoGridBtn.addEventListener('mouseout', () => {
    preview.style.opacity = 0;
})

const launchCountdown = document.querySelector('#launchCountdown');
launchCountdown.addEventListener('mouseenter', () => previewVideo('assets/previews/Launch_Countdown_Preview.mp4'))
launchCountdown.addEventListener('mousemove', (e) => animateVideo(e));
launchCountdown.addEventListener('mouseout', () => {
    videoPreview.style.opacity = 0
})