import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

export default function Reservation() {
  const [settings, bookedDates] = Promise.all([
    getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]);
  return (
    <div className="grid grid-cols-[5fr_3fr] border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}
