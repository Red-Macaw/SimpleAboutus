function openPopup(role) {
    const popup = document.getElementById('popup');
    const popupBody = document.getElementById('popup-body');
    const container = document.querySelector('.container');

    // Set content based on role
    if (role === 'secretary') {
        popupBody.innerHTML = `
            <h2>Our Secretary</h2>
            <img src="svg/profile1.svg" alt="">
            <div class="name">Shri. Vikas Arya CA, MBA</div>
            <div class="desig">Secretary</div>
            <div class="about">
                <p>At DAV, we aim to provide our children holistic education, focusing on the four Cs - Communication, Collaboration, Creativity, and Critical thinking. Known for our academic rigour, we are deeply conscious about ensuring that our children grow up as ardent patriots, develop a strong spiritual framework, are service-oriented, and learn to enjoy sports.</p>
            </div>
        `;
    } else if (role === 'director') {
        popupBody.innerHTML = `
            <h2>Our Director</h2>
            <img src="svg/profile2.svg" alt="">
            <div class="name">Smt. Shanthy Asokan, M.Sc, B.Ed</div>
            <div class="desig">Director</div>
            <div class="about">
                <p>Education is a mission to reset the standard of society. At DAV, we strive to create an environment where students can grow intellectually, emotionally, and socially.</p>
            </div>
        `;
    } else if (role === 'principal') {
        popupBody.innerHTML = `
            <h2>Our Principal</h2>
            <img src="svg/profile3.svg" alt="">
            <div class="name">Smt. Swarna Karpagavalli S M.Sc., B.Ed., P.G.D.C.A.</div>
            <div class="desig">Principal</div>
            <div class="about">
                <p>Learning is not attained by chance; it must be sought for with ardor and attended to with diligence. At DAV, we ensure that every student receives the guidance and support they need to excel.</p>
            </div>
        `;
    }

    // Show popup and blur the background
    popup.style.display = 'flex';
    container.classList.add('blur');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const container = document.querySelector('.container');

    // Hide popup and remove blur
    popup.style.display = 'none';
    container.classList.remove('blur');
}

// Close popup when clicking outside of it
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');

    if (event.target === popup) {
        closePopup();
    }
});