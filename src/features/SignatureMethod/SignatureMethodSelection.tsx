import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const SignatureMethodSelection = () => {
  const mSzafirInfoText = (
    <>
      <p>
        Kwalifikowany podpis elektroniczny mSzafir to bezpieczny sposób na
        podpisywanie dokumentów online. Dzięki niemu możesz podpisać umowę bez
        wychodzenia z domu. Wystarczy, że posiadasz konto w jednym z banków: PKO
        BP, mBank, Pekao S.A., Bank ING lub Inteligo.
      </p>
      <p>
        Kwalifikowany podpis elektroniczny złożony w ramach mSzafir jest zgodny z
        wymaganiami eIDAS i ma moc prawną równoważną podpisowi własnoręcznemu.
      </p>
      <a
        href="https://www.mszafir.pl/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Więcej informacji o Kwalifikowanym Podpisie mSzafir
      </a>
      <br />
      <a
        href="https://www.mszafir.pl/gfx/mszafir/userfiles/_public/tutoriale/kir_mszafir_tutorial_zakupu_podpisu_jednorazowego.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Instrukcja podpisu jednorazowego
      </a>
      <br />
      <a
        href="https://www.youtube.com/watch?v=z2uDm1VGcjQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Informacje o Kwalifikowanym Podpisie mSzafir w serwisie Youtube
      </a>
    </>
  );

  const qualifiedSignatureInfoText = (
    <>
      <p>
        Kwalifikowany podpis elektroniczny to bezpieczny sposób na podpisywanie
        dokumentów online. Dzięki niemu możesz podpisać umowę bez wychodzenia z
        domu, ponadto jest zgodny z wymaganiami eIDAS i ma moc prawną równoważną
        podpisowi własnoręcznemu.
      </p>
      <p>
        Zgodnie z zapisami Ustawy o Gospodarce Nieruchomościami (art. 180a
        Ustawy z dnia 21 sierpnia 1997 r. z późniejszymi zmianami), umowa
        pośrednictwa wymaga zabezpieczenia w formie kwalifikowanego podpisu
        elektronicznego, aby była prawnie wiążąca.
      </p>
      <p>
        <b>Kwalifikowany Podpis Elektroniczny: </b>Jest to cyfrowy odpowiednik
        ręcznego podpisu, który zapewnia najwyższy poziom bezpieczeństwa i jest
        uznawany za równoważny podpisowi odręcznemu w transakcjach prawnych.
        Kwalifikowany podpis elektroniczny wydawany jest przez zaufanych
        dostawców usług certyfikacyjnych i wymaga spełnienia określonych
        wymogów prawnych.
      </p>
      <p>
        Przykładowe <span className="text-green-600">dopuszczone</span>{" "}
        Kwalifikowane podpisy elektroniczne dostępne są pod adresem:{" "}
        <a
          href="https://autenti.com/pl/podpisy-kwalifikowane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          autenti.com
        </a>
      </p>
      <ul className="list-disc list-inside">
        <li className="text-green-600">Podpisy kwalifikowane InfoCert</li>
        <li className="text-green-600">Podpisy kwalifikowane SimplySign</li>
        <li className="text-green-600">Podpisy kwalifikowane CenCert</li>
        <li className="text-green-600">Podpisy kwalifikowane EuroCert</li>
        <li className="text-green-600">Podpisy kwalifikowane Sigillum</li>
      </ul>
      <p>
        Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) Nr
        910/2014 z dnia 23 lipca 2014 r. w sprawie identyfikacji
        elektronicznej i usług zaufania,{" "}
        <span className="text-red-600">nie są dopuszczalne</span> następujące
        formy podpisu:
      </p>
      <ul className="list-disc list-inside">
        <li className="text-red-600">Profil Zaufany ePUAP</li>
        <li className="text-red-600">Zwykły e-podpis</li>
        <li className="text-red-600">Zaawansowany e-podpis</li>
        <li className="text-red-600">Użycie aplikacji mObywatel</li>
      </ul>
    </>
  );

  return (
    <div className="space-y-4 p-4 border rounded-md">
      <h2 className="text-xl font-semibold">
        *W jaki sposób chcesz podpisać umowę pośrednictwa?
      </h2>
      <RadioGroup defaultValue="osobiscie" className="space-y-3">
        {/* Option 1: Osobiście */}
        <div className="flex items-start p-4 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors max-w-full overflow-hidden">
          <RadioGroupItem value="osobiscie" id="osobiscie" className="mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <Label htmlFor="osobiscie" className="font-semibold text-base">
              Osobiście
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              Przygotowana Umowa Pośrednictwa zostanie wysłana na adres e-mail
              (wersja ostateczna), a następnie nasz pracownik umówi się w
              dogodnym dla Państwa terminie na jej podpisanie.
            </p>
          </div>
        </div>

        {/* Option 2: Korespondencyjnie */}
        <div className="flex items-start p-4 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors max-w-full overflow-hidden">
          <RadioGroupItem value="korespondencyjnie" id="korespondencyjnie" className="mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <Label htmlFor="korespondencyjnie" className="font-semibold text-base">
              Korespondencyjnie
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              Umowa zostanie wysłana na podany poniżej adres korespondencyjny,
              lub do najbliższego względem podanego adresu, paczkomatu Inpost.
              Po wydrukowaniu i podpisaniu umowy, poprosimy o odesłanie jej do
              nas na adres zawarty w przesyłce, lub poprzez przesyłkę zwrotną
              Inpost.
            </p>
          </div>
        </div>

        {/* Option 3: Przez aplikację mSzafir */}
        <div className="flex items-start p-4 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors max-w-full overflow-hidden">
          <RadioGroupItem value="mszafir" id="mszafir" className="mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <Label htmlFor="mszafir" className="font-semibold text-base">
              Przez aplikację mSzafir
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              Weryfikacja tożsamości odbywa się poprzez logowanie do bankowości
              online PKO BP, mBank, Pekao S.A., Bank ING lub Inteligo (upewnij
              się, że POSIADASZ KONTO W JEDNYM Z TYCH BANKÓW).
            </p>
            <div className="mt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex flex-wrap items-center text-xs sm:text-sm text-left break-words max-w-full">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <span>Sprawdź informacje o Kwalifikowanym Podpisie mSzafir</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Informacje o mSzafir</DialogTitle>
                    <DialogDescription>
                      Szczegółowe informacje dotyczące podpisu mSzafir.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="prose prose-sm max-h-[60vh] overflow-y-auto p-4">
                    {mSzafirInfoText}
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
        </div>

        {/* Option 4: Kwalifikowany podpis elektroniczny */}
        <div className="flex items-start p-4 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors max-w-full overflow-hidden">
          <RadioGroupItem value="kwalifikowany" id="kwalifikowany" className="mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <Label htmlFor="kwalifikowany" className="font-semibold text-base">
              Kwalifikowany podpis elektroniczny
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              Weryfikacja tożsamości odbywa się przez podpisanie umowy
              kwalifikowanym podpisem elektronicznym (upewnij sie, że POSIADASZ
              KWALIFIKOWANY PODPIS ELEKTRONICZNY).
            </p>
            <div className="mt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex flex-wrap items-center text-xs sm:text-sm text-left break-words max-w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <span>Sprawdź informacje o Kwalifikowanym Podpisie Elektronicznym</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>
                      Informacje o Kwalifikowanym Podpisie Elektronicznym
                    </DialogTitle>
                    <DialogDescription>
                      Szczegółowe informacje dotyczące kwalifikowanego podpisu
                      elektronicznego.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="prose prose-sm max-h-[60vh] overflow-y-auto p-4">
                    {qualifiedSignatureInfoText}
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
        </div>
      </RadioGroup>
    </div>
  );
};

export default SignatureMethodSelection;
