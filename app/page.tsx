export default function MorskaPolana() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block rounded-xl bg-emerald-600 px-2 py-1 text-white">MP</span>
            <span className="text-slate-900">Morska Polana</span>
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            <li><a href="#domki" className="hover:text-emerald-700">Domki</a></li>
            <li><a href="#galeria" className="hover:text-emerald-700">Galeria</a></li>
            <li><a href="#cennik" className="hover:text-emerald-700">Cennik</a></li>
            <li><a href="#kontakt" className="hover:text-emerald-700">Kontakt</a></li>
          </ul>
          <a
            href="https://booking.hotres.pl/v4_step1?lang=pl&oid=4689"
            target="_blank"
            rel="noopener"
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
          >
            Rezerwuj online
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-80" aria-hidden>
          <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="1200" height="400" fill="url(#g)" />
            <g opacity="0.15">
              <circle cx="200" cy="120" r="180" fill="white" />
              <circle cx="1000" cy="260" r="220" fill="white" />
            </g>
          </svg>
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Morska Polana — domki całoroczne w Mielnie
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Morska Polana to zespół komfortowych, całorocznych domków w cichej części Mielna — ok. 15 minut spacerem od szerokiej plaży, tuż przy jeziorze Jamno. 2 hektary zieleni, plac zabaw, boisko do siatkówki na piasku, trampolina i strefy grillowe — idealnie dla rodzin i przyjaciół.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#domki" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800">Zobacz domki</a>
              <a
                href="https://booking.hotres.pl/v4_step1?lang=pl&oid=4689"
                target="_blank"
                rel="noopener"
                className="rounded-2xl border border-slate-300 px-5 py-2.5 hover:border-slate-400"
              >
                Rezerwuj online
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=1200&auto=format&fit=crop"
                alt="Drewniany domek letniskowy w otoczeniu drzew"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATUTY */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Dlaczego warto?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "2 ha zieleni", desc: "Duży, ogrodzony teren z infrastrukturą." },
            { title: "Blisko plaży", desc: "Ok. 15 min spacerem." },
            { title: "Domki całoroczne", desc: "Ogrzewanie, taras, aneks i łazienka." },
            { title: "Plac zabaw", desc: "Rozbudowana strefa dla dzieci." },
            { title: "Boisko & trampolina", desc: "Siatkówka na piasku i trampolina 5 m." },
            { title: "Miejsce na grilla", desc: "Prywatne stanowiska przy domkach." },
            { title: "Wi-Fi i TV", desc: "W każdym domku." },
            { title: "Bezpłatny parking", desc: "Na terenie ośrodka." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-medium text-slate-900">{f.title}</div>
              <p className="mt-1 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMKI */}
      <section id="domki" className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Nasze domki</h2>
          <a href="#kontakt" className="text-sm underline decoration-emerald-600 underline-offset-4 hover:text-emerald-700">Zapytaj o termin</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[{
            name: "Domek 6-osobowy Rodzinny",
            img: "https://images.unsplash.com/photo-1523419409543-a9d1cfabf5a9?q=80&w=1200&auto=format&fit=crop",
            features: ["Salon z aneksem", "Sypialnia zamykana", "Łazienka z prysznicem", "Zadaszony taras"],
            price: "od 400 zł / doba"
          }, {
            name: "Domki 6-osobowe (2 sypialnie)",
            img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
            features: ["Salon z aneksem", "2 zamykane sypialnie", "Łazienka", "Zadaszony taras"],
            price: "wg sezonu (sprawdź online)"
          }, {
            name: "Domki VIP 10-osobowe (3 sypialnie)",
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
            features: ["Salon", "3 sypialnie", "2 łazienki", "2 zadaszone tarasy"],
            price: "od 800 zł / doba"
          }].map((domek) => (
            <article key={domek.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full">
                <img src={domek.img} alt={domek.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{domek.name}</h3>
                <ul className="grid list-disc gap-1 pl-5 text-slate-700">
                  {domek.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-600">Wyposażenie: w pełni wyposażony aneks • stół i krzesła • TV • Wi-Fi • grill przy domku</p>
                  <a href="#kontakt" className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Sprawdź termin</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Galeria</h2>
        <p className="mt-2 text-slate-600">Kilka ujęć z ośrodka i okolicy.</p>
        <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {[
            { src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop", alt: "Plaża o zachodzie słońca" },
            { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", alt: "Leśna ścieżka" },
            { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop", alt: "Drewniany pomost nad jeziorem" },
            { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop", alt: "Sosnowy las" },
            { src: "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1200&auto=format&fit=crop", alt: "Domki wśród zieleni" },
            { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", alt: "Wydmy i morze" },
          ].map(i => (
            <div key={i.src} className="mb-4 overflow-hidden rounded-2xl">
              <img className="h-auto w-full object-cover" src={i.src} alt={i.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Cennik</h2>
        <p className="mt-2 text-slate-600">Ceny zależą od sezonu i długości pobytu — najszybciej sprawdzisz w panelu rezerwacji.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Typ domku</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Przykładowa cena</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 text-slate-800">Domek 6-osobowy Rodzinny</td>
                <td className="px-6 py-4">od 400 zł / doba</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-6 py-4 text-slate-800">Domki 6-osobowe (2 sypialnie)</td>
                <td className="px-6 py-4">wg sezonu — sprawdź w rezerwacji</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-800">Domki VIP 10-osobowe (3 sypialnie)</td>
                <td className="px-6 py-4">od 800 zł / doba</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
          <li>W lipcu–sierpniu turnusy 7 lub 14 dni (sobota–sobota).</li>
          <li>Poza sezonem min. 3 noce.</li>
          <li>Sprzątanie: 100 zł / pobyt. Kaucja zwrotna: 100 zł / osoba.</li>
          <li>Opłata miejscowa wg stawek gminy (2025: 3,30 zł / os.).</li>
          <li>Poza sezonem prąd 1,00 zł/kWh wg licznika.</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://booking.hotres.pl/v4_step1?lang=pl&oid=4689"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-xl bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700"
          >
            Sprawdź dostępność i ceny
          </a>
        </div>
      </section>

      {/* LOKALIZACJA */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Lokalizacja</h2>
            <p className="mt-2 text-slate-600">Nasz adres:</p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-medium text-slate-900">ul. Wisławy Szymborskiej 5, 76-032 Mielno</p>
              <p className="text-slate-600">Polska</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="#" className="rounded-xl border border-slate-300 px-3 py-1.5 hover:border-slate-400">Otwórz w Google Maps</a>
                <a href="#kontakt" className="rounded-xl bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700">Zapytaj o dojazd</a>
              </div>
            </div>
            <ul className="mt-6 grid gap-2 text-slate-700">
              <li>• Plaża – 10 min spacerem</li>
              <li>• Sklep spożywczy – 5 min</li>
              <li>• Mielno – 10 km</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Mapa dojazdu"
              src="https://maps.google.com/maps?q=Wis%C5%82awy%20Szymborskiej%205%2C%2076-032%20Mielno&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Rezerwacje i kontakt</h2>
            <p className="mt-2 text-slate-600">Napisz do nas lub zadzwoń – odpowiemy tego samego dnia.</p>
            <div className="mt-4 space-y-2">
              <p className="text-slate-700">
                Tel.: <a className="font-medium text-slate-900 hover:underline" href="tel:+48607607058">+48 607 607 058</a>
              </p>
              <p className="text-slate-700">
                E-mail: <a className="font-medium text-slate-900 hover:underline" href="mailto:morskapolana@wp.pl">morskapolana@wp.pl</a>
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              Tip: formularz poniżej wysyła wiadomość przez domyślnego klienta poczty. Możemy podpiąć dowolny system rezerwacji (np. Hotres, Profitroom) lub prosty panel w kolejnej iteracji.
            </div>
          </div>
          <form
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            action="mailto:morskapolana@wp.pl"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium">Imię i nazwisko</label>
                <input className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="name" required />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium">Telefon</label>
                <input className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="phone" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input type="email" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="email" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Przyjazd</label>
                <input type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="arrival" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Wyjazd</label>
                <input type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="departure" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium">Wiadomość</label>
                <textarea rows={4} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" name="message" placeholder="Liczba osób, preferowany domek, inne pytania…"></textarea>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" />
                Akceptuję politykę prywatności
              </label>
              <button type="submit" className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700">Wyślij zapytanie</button>
            </div>
          </form>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-block rounded-xl bg-emerald-600 px-2 py-1 text-white">MP</span>
              <span className="text-slate-900">Morska Polana</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Domki letniskowe nad morzem. Spokojna okolica, dużo zieleni i bliskość plaży.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Szybkie linki</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a href="#domki" className="hover:underline">Domki</a></li>
              <li><a href="#galeria" className="hover:underline">Galeria</a></li>
              <li><a href="#cennik" className="hover:underline">Cennik</a></li>
              <li><a href="#kontakt" className="hover:underline">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>ul. Leśna 12, 76-032 Mielno (przykład)</li>
              <li><a className="hover:underline" href="tel:+48500900100">+48 500 900 100</a></li>
              <li><a className="hover:underline" href="mailto:biuro@morskapolana.pl">biuro@morskapolana.pl</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Morska Polana. Wszelkie prawa zastrzeżone. Projekt: propozycja startowa.
        </div>
      </footer>
    </div>
  );
}
