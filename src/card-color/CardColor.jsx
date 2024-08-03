function CardColors ({colors}) {
    const card = []

    for (let i = 0; i < colors.length; i++) {
        card.push(<div>{colors[i]}</div>)
    }

    return card
}

export default CardColors