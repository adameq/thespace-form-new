import { UserTypeSelection } from "@/features/UserType/UserTypeSelection";
import ContactDetailsSection from "@/features/ContactDetails/ContactDetailsSection";
import PersonalDataSection from "@/features/PersonalData/PersonalDataSection";
import PepDeclarationSection from "@/features/PepDeclaration/PepDeclarationSection";
import CompanyDataSection from "@/features/CompanyData/CompanyDataSection";
import { Button } from "@/components/ui/button"; // Added Button import

const MainForm = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Formularz</h1>
      <UserTypeSelection />
      <ContactDetailsSection />
      <PersonalDataSection />
      <PepDeclarationSection />
      <CompanyDataSection /> {/* This will be conditionally rendered later */}
      {/* Pozostałe sekcje formularza będą dodawane tutaj */}
      <Button type="submit" className="w-full" disabled>Wyślij (TODO: Implement form submission)</Button>
    </div>
  );
};

export default MainForm;
