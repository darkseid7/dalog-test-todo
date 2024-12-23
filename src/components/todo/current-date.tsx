export function CurrentDate() {
  const today: Date = new Date();

  const dayName: string = today.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day: string = String(today.getDate()).padStart(2, "0");
  const month: string = String(today.getMonth() + 1).padStart(2, "0");
  const year: number = today.getFullYear();

  return (
    <div className="text-start text-lg">
      <div>{dayName}</div>
      <div>{`${month}-${day}-${year}`}</div>
    </div>
  );
}
