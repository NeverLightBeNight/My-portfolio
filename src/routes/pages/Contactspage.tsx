import PreTitle from "../../components/Contacts/PreTitle";
import Title from "../../components/Contacts/Title";
import InfoUnderTitle from "../../components/Contacts/InfoUnderTitle";
import Card1 from "../../components/Contacts/Card1";
import Card2 from "../../components/Contacts/Card2";
import Card3 from "../../components/Contacts/Card3";

function Contactspage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <PreTitle />
        <Title />
        <InfoUnderTitle />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contactspage;
