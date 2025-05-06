function ProductComponent(props) {
    return (
        <div>
            <p>Produto: {props.name} - Descrição: {props.category}</p>
        </div>
    )
}

export default ProductComponent