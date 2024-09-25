export const Kartu = [
    [6,1], [4,3],
    [5,1], [3,4],
    [1,1], [3,4],
    [1,2]
]

export const FindDuplicates = (hasil: number[][]) => {
    let duplicates = 0
    for (let i = 0; i < hasil.length; i++) {
        for (let j = i + 1; j < hasil.length; j++) {
            if (hasil[i][0] == hasil[j][0] && hasil[i][1] == hasil[j][1]) {
                duplicates++
            }
        }
    }
    return duplicates
}

export const AscendingCard = (hasil: number[][]): number[][] => {
    hasil.sort((a, b) => {
        const A = a.reduce((acc, val) => acc + val, 0)
        const B = b.reduce((acc, val) => acc + val, 0)

        if (A === B) {
            return a[0] - b[0]
        }

        return A-B
    })

    return hasil
}

export const DescendingCard = (hasil: number[][]): number[][] => {
    hasil.sort((a, b) => {
        const A = a.reduce((acc, val) => acc + val, 0)
        const B = b.reduce((acc, val) => acc + val, 0)

        if (A === B) {
            return b[0] - a[0]
        }

        return B-A
    })

    return hasil
}

export const FlipCard = (hasil: number[][]): number[][] => {
    for (let i = 0; i < hasil.length; i++) {
        const temp = hasil[i][0]
        hasil[i][0] = hasil[i][1]
        hasil[i][1] = temp
    }
    return hasil
}

export const RemoveDupSum = (hasil: number[][]) => {
    let totalRemovedSum = 0
    for (let i = 0; i < hasil.length; i++) {
        const cardI = [...hasil[i]].sort((a, b) => a - b)
        const sumI = cardI.reduce((acc, num) => acc + num, 0)
        for (let j = i + 1; j < hasil.length; j++) {
            const cardJ = [...hasil[j]].sort((a, b) => a - b)

            const isDuplicate = cardI[0] === cardJ[0] && cardI[1] === cardJ[1]

            if (isDuplicate) {
                totalRemovedSum += sumI
                hasil.splice(j, 1)
                j--
            }
        }
    }

    return {uniquesCard: hasil, totalRemovedSum}
}


export const RemoveManually = (hasil: number[][], masukkan: number): number[][] => {
    for (let i = 0; i < hasil.length; i++){
        const sum = hasil[i].reduce((acc, num) => acc + num, 0)

        if (sum === masukkan) {
            hasil.splice(i, 1)
            i--
        }
    }

    return hasil
}