import { HiPlus } from "react-icons/hi";

export default function Item({data, addItem, isCompleted}){
    const {name, price, ingredients, emoji} = data
    //tailwind styles
    const container = `flex items-center border-b border-neutral-300 pb-8 font-bold text-neutral-800`
    const sec1 = `flex justify-center items-center gap-4 mr-auto`
    const ing = `text-sm font-semibold text-neutral-500`
    const btn = `flex justify-center items-center border rounded-full border-neutral-400 mr-2 p-2
                 hover:transform hover:scale-115 active:scale-95`
    //
    return(
        <section className={container}>
            <section className={sec1}>
                <span role="img" aria-label={name} className="text-5xl">{emoji}</span>
                <div className="flex flex-col gap-1">
                    <h2>{name}</h2>
                    <p className={ing}>{ingredients.join(", ")}</p>
                    <p>£{price}</p>
                </div>
            </section>
            <button className={btn} aria-label="add to cart" onClick={() => addItem(name, price)} disabled={isCompleted}>
                <HiPlus className="text-neutral-400 h-4 w-4" />
            </button>
        </section>
    )
}