import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added Input import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"; // Import Dialog components when ready to implement

const PepDeclarationSection = () => {
  const pepInfoText =
    "Rozumie się przez to, z wyłączeniem grup stanowisk średniego i niższego szczebla, osoby zajmujące znaczące stanowiska publiczne lub pełniące znaczące funkcje publiczne, w tym: szefów państw, szefów rządów, ministrów, wiceministrów oraz sekretarzy stanu, członków parlamentu lub podobnych organów ustawodawczych, członków organów zarządzających partii politycznych, członków sądów najwyższych, trybunałów konstytucyjnych oraz innych organów sądowych wysokiego szczebla, których decyzje nie podlegają zaskarżeniu, z wyjątkiem trybów nadzwyczajnych, członków trybunałów obrachunkowych lub zarządów banków centralnych, ambasadorów, chargés d'affaires oraz wyższych oficerów sił zbrojnych, członków organów administracyjnych, zarządczych lub nadzorczych przedsiębiorstw państwowych, spółek z udziałem Skarbu Państwa, w których ponad połowa akcji albo udziałów należy do Skarbu Państwa lub innych państwowych osób prawnych, dyrektorów, zastępców dyrektorów oraz członków organów organizacji międzynarodowych lub osoby pełniące równoważne funkcje w tych organizacjach, dyrektorów generalnych w urzędach naczelnych i centralnych organów państwowych oraz dyrektorów generalnych urzędów wojewódzkich, inne osoby zajmujące stanowiska publiczne lub pełniące funkcje publiczne w organach państwa lub centralnych organach administracji rządowej.";

  const pepFamilyMemberInfoText =
    "Rozumie się przez to: małżonka lub osobę pozostającą we wspólnym pożyciu z osobą zajmującą eksponowane stanowisko polityczne, dziecko osoby zajmującej eksponowane stanowisko polityczne i jego małżonka lub osoby pozostającej we wspólnym pożyciu, rodziców osoby zajmującej eksponowane stanowisko polityczne.";

  const pepCoworkerInfoText =
    "Rozumie się przez to: osoby fizyczne będące beneficjentami rzeczywistymi osób prawnych, jednostek organizacyjnych nieposiadających osobowości prawnej lub trustów wspólnie z osobą zajmującą eksponowane stanowisko polityczne lub utrzymujące z taką osobą inne bliskie stosunki związane z prowadzoną działalnością gospodarczą, osoby fizyczne będące jedynym beneficjentem rzeczywistym osób prawnych, jednostek organizacyjnych nieposiadających osobowości prawnej lub trustu, o których wiadomo, że zostały utworzone w celu uzyskania faktycznej korzyści przez osobę zajmującą eksponowane stanowisko polityczne.";

  return (
    <div className="space-y-4 p-4 border rounded-md">
      <h2 className="text-xl font-semibold">
        *Oświadczenie sprawie zajmowania eksponowanego stanowiska politycznego:
      </h2>
      <p className="text-sm text-muted-foreground p-3 bg-blue-50 border border-blue-200 rounded-md">
        Będąc świadomy odpowiedzialności karnej za złożenie fałszywego
        oświadczenia, zgodnie z art. 46 Ustawy z dnia 1 marca 2018 r. o
        przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (Dz. U. z
        2022 r. poz. 593, zwana dalej: Ustawą) oświadczam, że:
      </p>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="notPEP" name="pepStatus" value="notPEP" />
            <Label htmlFor="notPEP" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                NIE
              </span>
              <span>
                jestem osobą zajmującą eksponowane stanowisko polityczne.
              </span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="isPEP" name="pepStatus" value="isPEP" />
            <Label htmlFor="isPEP" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                TAK
              </span>
              <span>
                jestem osobą zajmującą eksponowane stanowisko polityczne.
              </span>
            </Label>
          </div>
          {/* TODO: Add error message display for selection */}
        </div>
        <div className="flex justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
                Sprawdź kto jest osobą eksponowaną politycznie
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Informacje</DialogTitle>
                <DialogDescription>
                  Kto jest osobą zajmującą eksponowane stanowisko polityczne
                  (PEP)?
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm max-h-[60vh] overflow-y-auto">
                <p>{pepInfoText}</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Zamknij
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* TODO: Add conditional inputs for 'isPEP' selection */}
      {/* Placeholder for conditional PEP fields. Logic to show/hide will be added later. */}
      <div className="mt-4 space-y-4" id="isPEPInputs">
        {/* Assuming this div will be conditionally rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="positionOrFunction">
              Zajmowane stanowisko lub pełniona funkcja
            </Label>
            <Input
              type="text"
              id="positionOrFunction"
              name="positionOrFunction"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="institutionName">Nazwa instytucji</Label>
            <Input type="text" id="institutionName" name="institutionName" />
          </div>
        </div>
      </div>
      <hr />
      {/* Section for PEP Family Member Declaration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="notPEPFamily"
              name="pepFamilyStatus"
              value="notPEPFamily"
            />
            <Label htmlFor="notPEPFamily" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                NIE
              </span>
              <span>
                jestem członkiem rodziny osoby zajmującej eksponowane stanowisko
                polityczne.
              </span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isPEPFamily"
              name="pepFamilyStatus"
              value="isPEPFamily"
            />
            <Label htmlFor="isPEPFamily" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                TAK
              </span>
              <span>
                jestem członkiem rodziny osoby zajmującej eksponowane stanowisko
                polityczne.
              </span>
            </Label>
          </div>
          {/* TODO: Add error message display for selection */}
        </div>
        <div className="flex justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
                Sprawdź kto jest członkiem rodziny PEP
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Informacje</DialogTitle>
                <DialogDescription>
                  Kto jest członkiem rodziny osoby zajmującej eksponowane
                  stanowisko polityczne (PEP)?
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm max-h-[60vh] overflow-y-auto">
                <p>{pepFamilyMemberInfoText}</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Zamknij
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Placeholder for conditional PEP Family Member fields. Logic to show/hide will be added later. */}
      <div className="mt-4 space-y-4" id="isPEPFamilyMemberInput">
        {/* Assuming this div will be conditionally rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="familyMemberPoliticianName">
              Imię i nazwisko osoby zajmującej eksponowane stanowisko
              polityczne
            </Label>
            <Input
              type="text"
              id="familyMemberPoliticianName"
              name="familyMemberPoliticianName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="familyMemberPoliticianAffiliation">
              Powiązanie z osobą zajmującą eksponowane stanowisko polityczne
            </Label>
            <Input
              type="text"
              id="familyMemberPoliticianAffiliation"
              name="familyMemberPoliticianAffiliation"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="familyMemberPosition">
              Zajmowane stanowisko lub pełniona funkcja
            </Label>
            <Input
              type="text"
              id="familyMemberPosition"
              name="familyMemberPosition"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="familyMemberInstitution">Nazwa instytucji</Label>
            <Input
              type="text"
              id="familyMemberInstitution"
              name="familyMemberInstitution"
            />
          </div>
        </div>
      </div>
      <hr />
      {/* Section for PEP Co-worker Declaration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="notPEPCoworker"
              name="pepCoworkerStatus"
              value="notPEPCoworker"
            />
            <Label htmlFor="notPEPCoworker" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                NIE
              </span>
              <span>
                jestem osobą blisko współpracującą z osobą zajmującą
                eksponowane stanowisko polityczne.
              </span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isPEPCoworker"
              name="pepCoworkerStatus"
              value="isPEPCoworker"
            />
            <Label htmlFor="isPEPCoworker" className="font-normal">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-1 text-sm">
                TAK
              </span>
              <span>
                jestem osobą blisko współpracującą z osobą zajmującą
                eksponowane stanowisko polityczne.
              </span>
            </Label>
          </div>
          {/* TODO: Add error message display for selection */}
        </div>
        <div className="flex justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
                Sprawdź kto jest osobą współpracującą z PEP
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Informacje</DialogTitle>
                <DialogDescription>
                  Kto jest osobą blisko współpracującą z osobą zajmującą
                  eksponowane stanowisko polityczne (PEP)?
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm max-h-[60vh] overflow-y-auto">
                <p>{pepCoworkerInfoText}</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Zamknij
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Placeholder for conditional PEP Co-worker fields. Logic to show/hide will be added later. */}
      <div className="mt-4 space-y-4" id="isPEPCoworkerInput">
        {/* Assuming this div will be conditionally rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="coworkerPoliticianName">
              Imię i nazwisko osoby zajmującej eksponowane stanowisko
              polityczne
            </Label>
            <Input
              type="text"
              id="coworkerPoliticianName"
              name="coworkerPoliticianName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coworkerPoliticianAffiliation">
              Powiązanie z osobą zajmującą eksponowane stanowisko polityczne
            </Label>
            <Input
              type="text"
              id="coworkerPoliticianAffiliation"
              name="coworkerPoliticianAffiliation"
            />
          </div>
        </div>
        {/* TODO: Confirm these fields based on old form's intent, names/IDs might need adjustment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="coworkerPosition">
              Zajmowane stanowisko lub pełniona funkcja (osoby współpracującej)
            </Label>
            <Input
              type="text"
              id="coworkerPosition"
              name="coworkerPosition"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coworkerInstitution">
              Nazwa instytucji (osoby współpracującej)
            </Label>
            <Input
              type="text"
              id="coworkerInstitution"
              name="coworkerInstitution"
            />
          </div>
        </div>
      </div>
      {/* Koniec sekcji PEP */}
    </div>
  );
};

export default PepDeclarationSection;
