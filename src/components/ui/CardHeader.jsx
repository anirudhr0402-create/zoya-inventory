export default function CardHeader({
  title,
  subtitle,
  action
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-5">
      <div>
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}