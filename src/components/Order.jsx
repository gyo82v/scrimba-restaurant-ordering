export default function Order({cart}){
    //tailwind styles
    const container = ``
    const title = ``
    const section = ``
    const arrayContainer = ``
    const totalContainer = ``
    const text = ``
    const price = ``
    const btn = ``
    //
    return(
        <section className={container}>
            <h2 className={title}>Your order</h2>
            <section className={section}>
                <div className={arrayContainer}><p>array here</p></div>
                <div className={totalContainer}>
                    <p className={text}>Total price:</p>
                    <p className={price}>£0</p>
                </div>
            </section>
            <button className={btn}></button>
        </section>
    )
}