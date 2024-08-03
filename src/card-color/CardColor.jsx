function CardColors ({colors}) {
    const card = []

    for (let i = 0; i < colors.length; i++) {
        let color = colors[i]
        card.push(<div key={ 'color-' + color + '-' + i }>{color}</div>)
    }

    return card
}

export default CardColors