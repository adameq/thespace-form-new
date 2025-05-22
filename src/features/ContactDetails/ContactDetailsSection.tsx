import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactDetailsSection = () => {
  return (
    <section className="p-4 border rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Dane kontaktowe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-2 max-w-full">
          <Label htmlFor="phone">*Numer telefonu komórkowego:</Label>
          <Input type="tel" id="phone" name="phone" placeholder="Np. 500100200" className="w-full" />
        </div>
        <div className="space-y-2 max-w-full">
          <Label htmlFor="email">*Podaj swój adres e-mail do korespondencji:</Label>
          <Input type="email" id="email" name="email" placeholder="Np. jan.kowalski@example.com" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
