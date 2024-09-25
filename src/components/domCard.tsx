"use client"
import { AscendingCard, DescendingCard, FlipCard, Kartu, RemoveDupSum, RemoveManually } from "<prefix>/type/util";
import { useState } from "react";


export default function DomCard() {
    const [cards, setCards] = useState(Kartu)
    const [asc, setAsc] = useState(false)
    const [desc, setDesc] = useState(false)
    const [flip, setFlip] = useState(false)
    const [removeDup, setRemoveDup] = useState(false)
    const [input, setInput] = useState(0)

    const HandleSort = () => {
        const CardsAsc = AscendingCard([...cards])
        setCards(CardsAsc)
        setAsc(true)
        setDesc(false)
        setFlip(false)
    }

    const HandleSortDesc = () => {
        const CardsDesc = DescendingCard([...cards])
        setCards(CardsDesc)
        setAsc(false)
        setDesc(true)
        setFlip(false)
    }

    const HandleFlip = () => {
        const CardsFlip = FlipCard([...cards])
        setCards(CardsFlip)
        setAsc(false)
        setDesc(false)
        setFlip(true)
    }

    const HandleRemoveDuplicate = () => {
        const { uniquesCard } = RemoveDupSum([...cards])
        setCards(uniquesCard)
        setRemoveDup(true)
    }

    const HandleRemoveSumInput = () => {
        const RemoveSumInput = RemoveManually([...cards], input)
        setCards(RemoveSumInput)
    }

    const HandleReset = () => {
        setCards(Kartu)
        setAsc(false)
        setDesc(false)
        setFlip(false)
        setRemoveDup(false)
        setInput(0)
    }

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-6 flex flex-wrap gap-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    onClick={HandleSort}
                    disabled={asc} // Disable sort button if already sorted
                >
                    {asc ? "Sorted!" : "Sort Ascending"} {/* Change text based on state */}
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    onClick={HandleSortDesc}
                    disabled={desc}
                >
                    {desc ? "Sorted!" : "Sort Descending"}
                </button>
                <button
                    className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 transition duration-200"
                    onClick={HandleFlip}
                    disabled={flip}
                >
                    {flip ? "The Card was Flipped" : "Flip"}
                </button>
                <button
                    className="px-4 py-2 bg-emerald-800 text-white rounded hover:bg-emerald-700 transition duration-200"
                    onClick={HandleRemoveDuplicate}
                    disabled={removeDup}
                >
                    Remove Duplicate
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                    onClick={HandleReset}
                    disabled={!asc && !desc && !flip && !removeDup && !input}
                >
                    Reset
                </button>
            </div>

            <div className="mb-6 flex items-center">
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(Number(e.target.value))}
                    placeholder="Enter sum to remove"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    className="ml-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
                    onClick={HandleRemoveSumInput}
                >
                    Remove by Sum
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {cards.map((SubArray, index) => (
                    <div
                        key={index}
                        className={`w-16 h-32 border-2 border-black rounded-lg relative shadow-lg flex flex-col items-center ${asc ? 'bg-green-100' : desc ? 'bg-red-400' : 'bg-white'}`} // Change background color based on sorted state
                    >
                        <div className="flex-1 w-full flex justify-center items-center text-xl font-bold text-gray-800">
                            {SubArray[0]}
                        </div>
                        <div className="h-[2px] w-4/5 bg-black absolute top-1/2"></div>
                        <div className="flex-1 w-full flex justify-center items-center text-xl font-bold text-gray-800">
                            {SubArray[1]}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}