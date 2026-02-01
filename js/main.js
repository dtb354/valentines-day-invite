// javascript
document.addEventListener("DOMContentLoaded", () => {
    let noClicks = 0;
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1;
    const gifElement = document.getElementById("tandemaus-gif");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.getElementById("button-container");
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    const gifs = [
        "tandemaus_gifs/tandemaus-scream.gif",
        "tandemaus_gifs/tandemaus-run.gif",
        "tandemaus_gifs/maushold-tandemaus.gif",
        "tandemaus_gifs/tandemaus-pokemon.gif"
    ];

    const buttonMessages = [
        "WHYYYY NOOOO",
        "please? 🥺",
        "BABY PLEASE",
        "i love you...",
        "I will kiss you :3",
        "I will buy you lego!",
        "I WILL BUY YOU POKEMON CARDS",
        "Im gonna go cry now bye",
        "bruh..."
    ];

    noButton.addEventListener("click", () => {
        // cycle gifs using modulo
        gifElement.src = gifs[noClicks % gifs.length];

        // cycle messages independently
        noButton.textContent = buttonMessages[noClicks % buttonMessages.length];

        // Adjust button width to fit text
        noButton.style.width = 'auto';
        noButton.style.width = `${noButton.scrollWidth}px`;

        // decrease the size of the no button
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Calculate the scaled width of the yesButton
        const baseWidth = parseFloat(yesButtonStyle.width);
        const scaledWidth = baseWidth * yesScale;
        console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

        if (scaledWidth < maxYesWidth) {
            yesScale += 0.5;
            yesButton.style.transform = `scale(${yesScale})`;

            const rootStyles = getComputedStyle(document.documentElement);
            const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

            const currentGap = parseFloat(buttonContainer.style.gap) || 20;
            const newGap = Math.sqrt(currentGap * gapScaleFactor);
            buttonContainer.style.gap = `${newGap}px`;
        }

        noClicks++;
    });
});
