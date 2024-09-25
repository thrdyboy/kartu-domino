import DomCard from "<prefix>/components/domCard";
import DupNumber from "<prefix>/components/dupNumber";

export default function Home() {
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <main className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
    <h1 className="text-3xl font-bold text-center text-emerald-600 mb-6">
      This is Dominoes Card, or as Indonesian people call it Kartu Gaplek
    </h1>
    
    <div className="rounded-md bg-emerald-500 mb-4 p-4 shadow">
      <DomCard />
    </div>
    
    <div className="rounded-md bg-emerald-500 mb-4 p-4 shadow">
      <p className="text-white font-semibold">Double Number:</p>
      <DupNumber />
    </div>
    
    <div className="rounded-md bg-emerald-200 p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">About The Facilities:</h2>
      <p className="mb-2">There&apos;s about this one:</p>
      <ul className="list-disc list-inside">
        <li>Descending</li>
        <li>Ascending</li>
        <li>Flip</li>
        <li>Multiple</li>
      </ul>
    </div>
  </main>
</div>
  )
}
