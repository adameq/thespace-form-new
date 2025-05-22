import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const PersonalDataSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dane osobowe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2">
          <Label htmlFor="pesel">*Wprowadź swój numer PESEL</Label>
          <Input type="number" id="pesel" name="pesel" placeholder="Numer PESEL" />
          {/* TODO: Add maxlength validation if possible with shadcn/ui or use react-hook-form */}
        </div>
        <div className="space-y-2 md:pt-8"> {/* Adjusted padding for alignment */}
          <div className="flex items-center space-x-2">
            <Checkbox id="withoutPESEL" name="withoutPESEL" />
            <Label htmlFor="withoutPESEL" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">NIE</span>
              <span>mam nadanego numeru PESEL.</span>
            </Label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">*Podaj swoje imię:</Label>
          <Input type="text" id="firstName" name="firstName" placeholder="Imię" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">*Podaj swoje Nazwisko:</Label>
          <Input type="text" id="lastName" name="lastName" placeholder="Nazwisko" />
        </div>
      </div>
      <div>
        <Label htmlFor="street" className="mb-2 block">*Adres do korespondencji:</Label>
        <Input type="text" id="street" name="street" placeholder="Ulica" className="mb-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="houseNumber">*Nr domu:</Label>
          <Input type="text" id="houseNumber" name="houseNumber" placeholder="Nr domu" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="apartmentNumber">Nr lokalu:</Label>
          <Input type="text" id="apartmentNumber" name="apartmentNumber" placeholder="Nr lokalu (opcjonalnie)" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postalCode">*Kod pocztowy:</Label>
          <Input type="text" id="postalCode" name="postalCode" placeholder="00-000" />
          {/* TODO: Add pattern validation if possible with shadcn/ui or use react-hook-form */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">*Miasto:</Label>
          <Input type="text" id="city" name="city" placeholder="Miasto" />
        </div>
      </div>
    </div>
  );
};

export default PersonalDataSection;
