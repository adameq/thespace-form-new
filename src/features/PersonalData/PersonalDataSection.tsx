import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const PersonalDataSection = () => {
  return (
    <section className="p-4 border rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Dane osobowe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2 max-w-full">
          <Label htmlFor="pesel">*Wprowadź swój numer PESEL</Label>
          <Input type="number" id="pesel" name="pesel" placeholder="Numer PESEL" className="w-full" />
          {/* TODO: Add maxlength validation if possible with shadcn/ui or use react-hook-form */}
        </div>
        <div className="space-y-2 md:pt-8 max-w-full"> {/* Adjusted padding for alignment */}
          <div className="flex items-center space-x-2">
            <Checkbox id="withoutPESEL" name="withoutPESEL" />
            <Label htmlFor="withoutPESEL" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">NIE</span>
              <span>mam nadanego numeru PESEL.</span>
            </Label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2 max-w-full">
          <Label htmlFor="firstName">*Podaj swoje imię:</Label>
          <Input type="text" id="firstName" name="firstName" placeholder="Imię" className="w-full" />
        </div>
        <div className="space-y-2 max-w-full">
          <Label htmlFor="lastName">*Podaj swoje Nazwisko:</Label>
          <Input type="text" id="lastName" name="lastName" placeholder="Nazwisko" className="w-full" />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="street" className="mb-2 block">*Adres do korespondencji:</Label>
        <Input type="text" id="street" name="street" placeholder="Ulica" className="mb-4 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 max-w-full">
          <Label htmlFor="houseNumber">*Nr domu:</Label>
          <Input type="text" id="houseNumber" name="houseNumber" placeholder="Nr domu" className="w-full" />
        </div>
        <div className="space-y-2 max-w-full">
          <Label htmlFor="apartmentNumber">Nr lokalu:</Label>
          <Input type="text" id="apartmentNumber" name="apartmentNumber" placeholder="Nr lokalu (opcjonalnie)" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2 max-w-full">
          <Label htmlFor="postalCode">*Kod pocztowy:</Label>
          <Input type="text" id="postalCode" name="postalCode" placeholder="00-000" className="w-full" />
          {/* TODO: Add pattern validation if possible with shadcn/ui or use react-hook-form */}
        </div>
        <div className="space-y-2 max-w-full">
          <Label htmlFor="city">*Miasto:</Label>
          <Input type="text" id="city" name="city" placeholder="Miasto" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default PersonalDataSection;
