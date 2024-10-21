const countdownDate = new Date('November 03, 2024 00:00:00');
const now = new Date()
const randomPos = (min, max) => Math.random() * (max - min) + min;


// Returns if current date is same as birthday-date
function isBirthday() {
    return countdownDate.toJSON().slice(5, 10) === new Date().toJSON().slice(5, 10);
}

if (!isBirthday() && now > countdownDate) {
    countdownDate.setFullYear(now.getFullYear())
}

const daysUpper = document.querySelector('#daysUpper');
const daysLower = document.querySelector('#daysLower');
const daysPrevCount = document.querySelectorAll(
    '.daysPrevCount'
);
const daysNewCount = document.querySelectorAll(
    '.daysNewCount'
);

const hoursUpper = document.querySelector('#hoursFrontUpper');
const hoursLower = document.querySelector('#hoursFrontLower');
const hoursPrevCount = document.querySelectorAll(
    '.hoursPrevCount'
);
const hoursNewCount = document.querySelectorAll(
    '.hoursNewCount'
);

const minutesUpper = document.querySelector('#minutesUpper');
const minutesLower = document.querySelector('#minutesLower');
const minutesPrevCount = document.querySelectorAll(
    '.minutesPrevCount'
);
const minutesNewCount = document.querySelectorAll(
    '.minutesNewCount'
);

const secondsUpper = document.querySelector('#secondsUpper');
const secondsLower = document.querySelector('#secondsLower');
const secondsPrevCount = document.querySelectorAll(
    '.secondsPrevCount'
);
const secondsNewCount = document.querySelectorAll(
    '.secondsNewCount'
);

let interval;
let daysCount, hoursCount, minutesCount, secondsCount;
let daysUntil, hoursUntil, minutesUntil, secondsUntil;

function initiateTime() {
    calculateTime()

    daysCount = daysUntil;
    hoursCount = hoursUntil;
    minutesCount = minutesUntil;
    secondsCount = secondsUntil;

    daysPrevCount.forEach((p) => (p.textContent = daysCount));
    hoursPrevCount.forEach((p) => (p.textContent = hoursCount));
    minutesPrevCount.forEach((p) => (p.textContent = minutesCount));
    secondsPrevCount.forEach((p) => (p.textContent = secondsCount));
}

if (now.getTime() < countdownDate) {
    initiateTime()
    interval = setInterval(updateTime, 1000);
} else {
    daysPrevCount.forEach((p) => (p.textContent = 0));
    hoursPrevCount.forEach((p) => (p.textContent = 0));
    minutesPrevCount.forEach((p) => (p.textContent = 0));
    secondsPrevCount.forEach((p) => (p.textContent = 0));
    happyBirthday()
}

function updateTime() {
    calculateTime();

    if (isBirthday()) {
        return happyBirthday()
    }


    // if the calculated days left are less than the counter, update the counter.
    if (daysUntil < daysCount) {
        daysCount = daysUntil;
        animateTime(daysUpper, daysLower);
        daysNewCount.forEach((p) => (p.textContent = daysUntil));
        setTimeout(
            daysPrevCount.forEach((p) => (p.textContent = daysUntil)),
            150
        );
    }

    //if the calculated hours left are less than the counter,
    if (hoursUntil < hoursCount) {
        hoursCount = hoursUntil;
        hoursNewCount.forEach((p) => (p.textContent = hoursUntil));
        animateTime(hoursUpper, hoursLower);
        setTimeout(
            hoursPrevCount.forEach((p) => (p.textContent = hoursUntil)),
            150
        );
    }
    if (minutesUntil < minutesCount) {
        minutesCount = minutesUntil;
        minutesNewCount.forEach((p) => (p.textContent = minutesUntil));
        animateTime(minutesUpper, minutesLower);
        setTimeout(
            minutesPrevCount.forEach((p) => (p.textContent = minutesUntil)),
            150
        );
    }
    if (secondsUntil < secondsCount || secondsCount === 0) {
        secondsCount = secondsUntil;
        animateTime(secondsUpper, secondsLower);
        setTimeout(secondsNewCount.forEach((p) => p.textContent = secondsUntil), 500)
        setTimeout(
            secondsPrevCount.forEach((p) => (p.textContent = secondsUntil)),
            600
        );
    }
}

function calculateTime() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursUntil = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutesUntil = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsUntil = Math.floor((distance % (1000 * 60)) / 1000);
}

function animateTime(upper, lower) {
    upper.animate(
        {
            transform: 'rotateX(90deg)',
        },
        flipUpper
    );

    lower.animate(
        {
            transform: 'rotateX(0)',
        },
        flipLower
    );
}

const flipUpper = {
    duration: 200,
    easing: 'ease-in',
};

const flipLower = {
    duration: 200,
    easing: 'ease-out',
    delay: 200,
};

function happyBirthday() {
    document.querySelector('h1').textContent = `Happy Birthday Cassandra!!!`;

    setInterval(() => {
        for (let i = 0; i < 10; i++) {
            let firework = document.createElement('i');
            firework.style.top = window.innerHeight + 'px';
            firework.style.left = randomPos(0, window.innerWidth) + 'px';
            document.body.appendChild(firework);

            // Animate the firework upwards
            firework.animate({
                transform: `translate(${randomPos(-100, 100)}px, -${randomPos(200, (window.innerHeight - 200))}px)`,
                opacity: [1, 0]
            }, {
                duration: 2000,
                easing: 'ease-out',
                fill: 'forwards'
            });

            // After the firework reaches its endpoint, create sparks
            setTimeout(() => {
                createSparks(firework);
                firework.remove();
            }, 2000);
        }
    }, 2000);
}

function createSparks(firework) {
    for (let i = 0; i < 10; i++) {
        let spark = firework.cloneNode();
        spark.classList.add('spark');
        document.body.appendChild(spark);

        const fireworkRect = firework.getBoundingClientRect();
        spark.style.top = `${fireworkRect.top}px`;
        spark.style.left = `${fireworkRect.left}px`;

        spark.animate({
            transform: `translate(${randomPos(-100, 100)}px, ${randomPos(-100, 100)}px)`,
            opacity: [1, 0]
        }, {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}