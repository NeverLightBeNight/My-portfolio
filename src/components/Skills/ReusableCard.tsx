function ReusableCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm text-white/50">01</p>
      <p className="mt-2 font-medium">Reusable components</p>
      <p className="mt-2 text-sm text-white/70">
        I split UI into small pieces so the code is easier to reuse and
        maintain.
      </p>
    </div>
  );
}

export default ReusableCard;
