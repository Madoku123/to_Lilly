const messages = [
    "Өөртөө итгэлтэй байна уу ?",
    "Үнэхээр итгэлтэй байна уу ?",
    "ЭЭ БОЛИОШДЭЭ",
    "Lilly гуйж байна шдэ",
    "Hee zaazaazazzzazzz",
    "Зөвшөөркү бол айн",
    "Миний ховорхон гардаг нулимсыг урсгахыг хүсээ юу????",
    "Zza boliydoo zowshoorkv bol yaay gehew dee🥹",
    "Odoo guihaa boliidoo",
    "Зааза тоглосын. Энхжээээн гуйж байна шүү дээ гууууяя гууууяяяя гуууяяя.🥲"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
