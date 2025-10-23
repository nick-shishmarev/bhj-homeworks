const haveTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

haveTooltips.forEach(haveTooltip => {
    haveTooltip.style = 'position: "relative"'
    haveTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        items = Array.from(document.querySelectorAll('.tooltip'));
        items.map(item => item.classList.remove('tooltip_active'));
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = haveTooltip.title;
        haveTooltip.insertAdjacentElement("afterend", tooltip);
        tooltip.classList.add('tooltip_active');
        const position = haveTooltip.dataset.position; 
        const pos = getPosition(haveTooltip, tooltip, position);
        tooltip.style = pos;
    })
})

function getPosition(element, newElement, position) {
    const pos = element.getBoundingClientRect();
    const width = newElement.getBoundingClientRect().width;
    const height = newElement.getBoundingClientRect().height;

    let result = `left: ${pos.left}px; top: ${pos.bottom}px`; // default bottom

    switch (position) {
        case 'top':
            result = `left: ${pos.left}px; top: ${pos.top - height}px`;
            break;
        case 'left':
            result = `left: ${pos.left-width}px; top: ${pos.top}px`;
            break;
        case 'right':
            result = `left: ${pos.left + pos.width}px; top: ${pos.top}px`;
            break;
        default:
            break;
    }

    return result;
}