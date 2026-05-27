type AppointmentFormProps = {
  compact?: boolean;
};

export function AppointmentForm({ compact = false }: AppointmentFormProps) {
  return (
    <form className="space-y-4" aria-label="Appointment form">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : ""}`}>
        <input className="form-field" placeholder="Your Name" aria-label="Your name" />
        <input className="form-field" placeholder="Your Phone" aria-label="Your phone" />
      </div>
      <input className="form-field" placeholder="Your Email *" aria-label="Your email" />
      <textarea
        className="form-field min-h-[155px] resize-none pt-4"
        placeholder="Tell us about Patient"
        aria-label="Tell us about patient"
      />
      <button type="submit" className="btn-primary">
        Submit Query
      </button>
    </form>
  );
}
