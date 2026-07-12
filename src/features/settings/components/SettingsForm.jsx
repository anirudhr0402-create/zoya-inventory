import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SettingsForm({
  settings,
  onSave
}) {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  useEffect(() => {
    reset(settings);
  }, [settings, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      <div>
        <label>Company Name</label>

        <input
          {...register("companyName")}
          className="mt-1 w-full rounded border p-2"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          {...register("email")}
          className="mt-1 w-full rounded border p-2"
        />
      </div>

      <div>
        <label>Phone</label>

        <input
          {...register("phone")}
          className="mt-1 w-full rounded border p-2"
        />
      </div>

      <div>
        <label>Address</label>

        <textarea
          {...register("address")}
          className="mt-1 w-full rounded border p-2"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label>Currency</label>

          <input
            {...register("currency")}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label>Tax (%)</label>

          <input
            type="number"
            {...register("tax")}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
      </div>

      <div>
        <label>Low Stock Limit</label>

        <input
          type="number"
          {...register("lowStockLimit")}
          className="mt-1 w-full rounded border p-2"
        />
      </div>

      <button
        className="rounded bg-blue-600 px-5 py-2 text-white"
      >
        Save Settings
      </button>
    </form>
  );
}