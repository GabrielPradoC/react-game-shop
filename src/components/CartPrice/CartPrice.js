function CartPrice(props){

    const subTotal = props.items.reduce((total, item)=>{
        return total += (item.price * item.quantity)
    }, 0);

    const cartItemCount = props.items.reduce((total, item)=>{
        return total += +item.quantity
    }, 0);

    function calculateShipping(){
        if(subTotal >= 250.00){
            return 0.00;
        }else{
            const shippingCost = cartItemCount * 10.00;
            return shippingCost;
        }
    }

    function calculateTotal(){
        const shippingCost = calculateShipping();
        return (subTotal + shippingCost).toFixed(2);
    }

    return (
        <div>
            <span>Subtotal: R${subTotal.toFixed(2)}</span>
            <br />
            <span>Frete: R${calculateShipping()}</span>
            <br />
            <span>Total: R${calculateTotal()}</span>
        </div>
    )
}

export default CartPrice;