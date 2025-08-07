export default function Form({data, handleChange, completed}){
    const form = `flex flex-col items-center bg-neutral-50 p-4 
                  fixed top-0 bottom-0 left-0 right-0 m-auto w-11/12 h-5/12
                  rounded-lg md:w-[700px] md:mx-auto`
    const title = `font-bold text-xl mb-10`
    const input = `w-full border border-neutral-600 mb-4 py-2 px-4 text-neutral-600 focus:bg-neutral-100
                   focus:outline-none focus:ring-2 focus:ring-neutral-600 font-semibold`
    const btn = `hover:transform hover:scale-105 active:scale-95
                 bg-emerald-400 text-neutral-100 w-full py-2 rounded-md mt-6 font-semibold`
    return(
        <form className={form} onSubmit={completed}>
            <h3 className={title}>Enter card details</h3>
          <input 
            type="text" 
            placeholder="Enter card name" 
            aria-label="Enter your name" 
            value={data.name} 
            onChange={handleChange} 
            name="name" 
            className={input}
            required          />
          <input 
            type="text" 
            placeholder="Enter card number" 
            aria-label="Enter the credit card number"
            value={data.number}
            onChange={handleChange}
            name="cardNumber"
            className={input}
            required
          />
          <input 
            type="text" 
            placeholder="Enter CVV" 
            aria-label="Enter the CVV number"
            value={data.cvv}
            onChange={handleChange}
            name="cvv"
            className={input}
            required
          />
          <button className={btn}>Pay</button>
        </form>
    )
}