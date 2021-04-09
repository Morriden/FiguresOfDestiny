export function dragStart(e) {
    const target = e.target;
        e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
}

export function dragOver(e) {
    e.stopPropagation()
}