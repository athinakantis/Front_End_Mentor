const preview = document.querySelector('#preview');
const videoPreview = document.querySelector('#videoPreview');
const challenges = [
    'assets/previews/bentoGrid.png',
    'assets/previews/bdayCountdown.mp4',
    'assets/previews/multiStepForm.mp4',
];

function previewImg(e) {
    const clientRect = e.target.getBoundingClientRect();
    const clientX = clientRect.left;
    const clientY = clientRect.top;

    preview.style.opacity = 1;
    preview.style.transform = `translate(${e.clientX - clientX}px, ${e.clientY - clientY
        }px)`;
}

function previewVideo(src) {
    videoPreview.src = src;
    videoPreview.style.opacity = 1;
}

function animateVideo(event) {
    event.preventDefault();
    const clientRect = event.target.getBoundingClientRect();
    const clientX = clientRect.left;
    const clientY = clientRect.top;
    videoPreview.style.transform = `translate(${event.clientX - clientX}px, ${event.clientY - clientY
        }px)`;
}

const bentoGridBtn = document.querySelector('#bentoGrid');
bentoGridBtn.addEventListener('mousemove', (e) => previewImg(e));
bentoGridBtn.addEventListener('mouseout', () => {
    preview.style.opacity = 0;
});

const launchCountdown = document.querySelector('#launchCountdown');
launchCountdown.addEventListener('mouseenter', () =>
    previewVideo('assets/previews/bdayCountdown.mp4')
);
launchCountdown.addEventListener('mousemove', (e) => animateVideo(e));
launchCountdown.addEventListener('mouseout', () => {
    videoPreview.style.opacity = 0;
});


const multiStepForm = document.querySelector('#multiStepForm');
multiStepForm.addEventListener('mouseenter', () =>
    previewVideo('assets/previews/multiStepForm.mp4')
);
multiStepForm.addEventListener('mousemove', (e) => animateVideo(e));
multiStepForm.addEventListener('mouseout', () => {
    videoPreview.style.opacity = 0;
});
