import { Mail, MapPin, Phone } from "lucide-react";

function Contactspage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Contact
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Let’s talk about your next project
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          If you want to discuss a portfolio, landing page, dashboard, or
          frontend feature, you can reach me through the form or directly by
          contact details below.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="font-medium">yourmail@example.com</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Phone</p>
                  <p className="font-medium">+7 (999) 000-00-00</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="font-medium">Moscow, Russia</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contactspage;
