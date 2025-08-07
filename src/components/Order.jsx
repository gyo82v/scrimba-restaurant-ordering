export default function Order({cart, total, removeItem, isVisible, handleForm}){
    //tailwind styles
    const container = `flex flex-col items-center w-full mt-8`
    const title = `font-bold text-xl mb-4`
    const section = `w-full`
    const arrayContainer = `border-b-2 border-neutral-800 pb-4 flex flex-col gap-2`
    const item = `flex `
    const totalContainer = `flex mt-3`
    const info = `flex mr-auto`
    const text = `font-semibold text-neutral-800 text-xl`
    const btnOrder = `hover:transform hover:scale-105 active:scale-95
                      text-neutral-100 w-full py-2 rounded-md mt-10 font-semibold
                      ${isVisible ? "bg-neutral-600" : "bg-emerald-400"}`
    const btnRemove = `text-neutral-400 text-xs ml-3 mb-1 hover:transform hover:scale-115 active:scale-95
                       flex items-end justify-center`
    //

    const itemsArray = cart.map((a, i) => (
        <div className={item} key={i}>
            <div className={info}> 
                <p className={text}>{a.name}</p>
                <button className={btnRemove} onClick={() => removeItem()}>remove</button>
            </div>
            <p className={text}>£{a.price}</p>
        </div>
    ))
    return(
        <section className={container}>
            <h2 className={title}>Your order</h2>
            <section className={section}>
                <div className={arrayContainer}>
                    {itemsArray}
                </div>
                <div className={totalContainer}>
                    <p className={`${text} mr-auto`}>Total price:</p>
                    <p className={text}>£{total}</p>
                </div>
            </section>
            <button className={btnOrder} onClick={handleForm} disabled={isVisible}>Complete Order</button>
        </section>
    )
}