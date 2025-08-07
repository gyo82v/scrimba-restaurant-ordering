export default function OrderCompleted({newOrder}){
    const container = `bg-gradient-to-br from-emerald-200 to-emerald-100
                       rounded-lg px-2 py-6 text-center text-emerald-800`
    const span = `underline text-orange-500 font-bold mr-1 hover:cursor-pointer `

    return(
        <section className={container}>
            <h4 className="text-xl font-semibold mb-4">Thank you sir! Your order is on his way!</h4>
            <p><span className={span} onClick={newOrder}>Click here</span> to order again!</p>
        </section>
    )
}