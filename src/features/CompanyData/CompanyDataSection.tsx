import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; // For potential 'Fetch Data' button

const CompanyDataSection = () => {
  return (
    <div className="space-y-4 p-4 border rounded-md">
      <h2 className="text-xl font-semibold">*Dane podatkowe / firmowe:</h2>
      <div className="space-y-2">
        <Label htmlFor="nip">*Podaj numer NIP:</Label>
        <div className="flex items-center space-x-2">
          <Input type="text" id="nip" name="nip" placeholder="Numer NIP" className="max-w-xs" />
          {/* 
            Button to trigger NIP lookup. 
            Actual API call and data display will be implemented later.
          */}
          <Button type="button" variant="outline" disabled> {/* TODO: Enable and implement NIP lookup */}
            Pobierz dane firmy (TODO)
          </Button>
        </div>
        {/* TODO: Add maxlength validation (10 digits) and numeric input handling via react-hook-form */}
      </div>

      {/* Placeholder for displaying company details fetched based on NIP */}
      <div id="companyDetails" className="mt-4 p-4 border rounded-md bg-slate-50 min-h-[100px]">
        <p className="text-sm text-muted-foreground">Dane firmy pojawią się tutaj po wyszukaniu NIP...</p>
        {/* TODO: This area will be populated dynamically */}
      </div>
    </div>
  );
};

export default CompanyDataSection;
