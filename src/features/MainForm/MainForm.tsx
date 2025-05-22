import { UserTypeSelection } from "@/features/UserType/UserTypeSelection";
import ContactDetailsSection from "@/features/ContactDetails/ContactDetailsSection";
import PersonalDataSection from "@/features/PersonalData/PersonalDataSection";

const MainForm = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Formularz</h1>
      <UserTypeSelection />
      <ContactDetailsSection />
      <PersonalDataSection />
      {/* Pozostałe sekcje formularza będą dodawane tutaj */}
    </div>
  );
};

export default MainForm;
