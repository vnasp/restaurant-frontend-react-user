
const CartEmpty = () => {
    return (
        <>
            <div className="mb-3">
                <div className="text-center">
                    <h1>Tu Carrito está vacío</h1>
                    <h3>Falta pizza en tu vida</h3>
                </div>
            </div>
            <div className="border rounded bg-white text-center m-2">
                <div>
                    <p className="pt-2">Usa el cupón 🏷️ <span className="text-primary fw-bolder">TENGOHAMBRE</span> y obtén un 10% de descuento en tu compra.</p>
                </div>
            </div>
        </>
    )
}

export default CartEmpty