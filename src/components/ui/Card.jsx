export default function Card({
  children,
  className = ""
}) {
  return (
    <div
      className={`rounded-xl bg-white shadow-sm border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}