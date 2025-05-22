import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactDetailsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dane kontaktowe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">*Numer telefonu komórkowego:</Label>
          <Input type="tel" id="phone" name="phone" placeholder="Np. 500100200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">*Podaj swój adres e-mail do korespondencji:</Label>
          <Input type="email" id="email" name="email" placeholder="Np. jan.kowalski@example.com" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
