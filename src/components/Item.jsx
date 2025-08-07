import { HiPlus } from "react-icons/hi";


export default function Item({data, addItem}){
    const {name, price, ingredients, emoji} = data
    //tailwind styles
    const container = `flex items-center border-b border-neutral-300 pb-8`
    const sec1 = `flex justify-center items-center gap-4 mr-auto`
    const span = `text-5xl`
    const info = `flex flex-col gap-1`
    const title = `font-bold text-neutral-800`
    const ing = `text-sm font-demibold  text-neutral-400`
    const prc = `font-bold text-neutral-800`
    const btn = `flex justify-center items-center border rounded-full border-neutral-400 mr-2 p-2
                 hover:transform hover:scale-115 active:scale-95`
    const icon = `text-neutral-400 h-4 w-4`
    //
    return(
        <section className={container}>
            <section className={sec1}>
                <span role="img" aria-label={name} className={span}>{emoji}</span>
                <div className={info}>
                    <h3 className={title}>{name}</h3>
                    <p className={ing}>{ingredients.join(", ")}</p>
                    <p className={prc}>£{price}</p>
                </div>
            </section>
            <button className={btn} aria-label="add to cart" onClick={() => addItem(name, price)}><HiPlus className={icon} /></button>
        </section>
    )
}