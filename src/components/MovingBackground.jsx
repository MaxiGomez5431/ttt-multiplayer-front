export default function MovingBackground({children}) {
  return (
    <div className="w-full min-h-lvh flex justify-center items-center flex-col bg-[url('/patron-cuadricula.png')] bg-repeat bg-[length:300px_300px] animate-diagonal">
      {children}
    </div>
  )
}