import PreTitle from "../../components/Contacts/PreTitle";
import Title from "../../components/Contacts/Title";
import InfoUnderTitle from "../../components/Contacts/InfoUnderTitle";
import Card1 from "../../components/Contacts/Card1";
import Card2 from "../../components/Contacts/Card2";
import Card3 from "../../components/Contacts/Card3";

function Contactspage() {
  return (
    <main className="min-h-screen bg-[#0c0b10] text-white pb-24 md:pb-0">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_35%,transparent_100%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20 xl:py-24">
          <div className="max-w-3xl">
            <PreTitle />
            <div className="mt-4">
              <Title />
            </div>
            <div className="mt-5 max-w-2xl text-white/70">
              <InfoUnderTitle />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] xl:gap-8">
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <Card1 />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <Card2 />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <Card3 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contactspage;
