import StatsCard from "./StatsCard";

export default function StatsCards({
  cards
}) {
  return (
    <div className="mb-6 grid gap-6 md:grid-cols-3">

      {cards.map(card => (

        <StatsCard
          key={card.title}
          title={card.title}
          value={card.value}
          color={card.color}
        />

      ))}

    </div>
  );
}