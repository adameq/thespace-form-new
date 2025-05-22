import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const UserTypeSelection: React.FC = () => {
  // Na razie wartości są statyczne, w przyszłości będą zarządzane przez React Hook Form
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);

  const userTypes = [
    {
      id: 'firma',
      value: 'firma',
      label: 'Firma',
      description: 'Jednoosobowa Działalność Gospodarcza, Spółka z o. o., Spółka Osobowa, Stowarzyszenie, Spółdzielnia itd.',
    },
    {
      id: 'osobaPrywatnaVAT',
      value: 'osobaPrywatnaVAT',
      label: 'Konsument (Płatnik VAT)',
      description: 'Osoba prywatna, nie prowadząca działalności gospodarczej, ale rozliczająca podatek VAT (po zgłoszeniu VAT-R).',
    },
    {
      id: 'osobaPrywatna',
      value: 'osobaPrywatna',
      label: 'Konsument',
      description: 'Osoba prywatna, nie prowadząca działalności gospodarczej oraz nie rozliczająca podatku VAT z Urzędem Skarbowym.',
    },
  ];

  return (
    <section className="p-4 border rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">*Reprezentujesz firmę czy osobę prywatną?</h3>
      <RadioGroup
        value={selectedValue}
        onValueChange={setSelectedValue}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {userTypes.map((type) => (
          <Label
            key={type.id}
            htmlFor={type.id}
            className={`flex flex-col items-start justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground ${
              selectedValue === type.value ? 'bg-accent ring-2 ring-primary' : ''
            }`}
          >
            <div className="flex items-center w-full">
              <RadioGroupItem value={type.value} id={type.id} className="mr-3" />
              <span className="font-semibold text-base">{type.label}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 ml-7">{type.description}</p>
          </Label>
        ))}
      </RadioGroup>
      {/* W przyszłości tutaj można dodać obsługę błędów walidacji dla tej sekcji */}
    </section>
  );
};
