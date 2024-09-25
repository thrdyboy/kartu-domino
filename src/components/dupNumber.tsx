import { FindDuplicates, Kartu } from "<prefix>/type/util";

export default function DupNumber() {
    const duplicatesCard = FindDuplicates(Kartu)
    return (
        <div>
            <p>{duplicatesCard} Card</p>
        </div>
    )
}