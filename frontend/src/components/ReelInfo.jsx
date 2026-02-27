export default function ReelInfo({ food }) {
  return (
    <div className="absolute bottom-20 left-4 z-10">
      <h2 className="text-xl font-bold">{food.name}</h2>
      <p className="text-sm opacity-80">{food.partner?.name}</p>
      <p className="text-xs mt-1 opacity-70">
        {food.description}
      </p>
    </div>
  );
}
