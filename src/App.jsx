import logo from './assets/voltara-logo.png';

const areas = [
  {
    title: 'Energy assessment and solution development',
    description:
      'Consumption profiles, peak demand, and continuity requirements shape a solar + storage architecture aligned with the facility.',
  },
  {
    title: 'Solar and BESS integration',
    description:
      'A future integration model would coordinate equipment specification and implementation with licensed installers and partner professionals through commissioning and performance verification.',
  },
  {
    title: 'Performance monitoring and operational support',
    description:
      'After systems enter operation, performance review would focus on generation and storage, deviation analysis, and optimization recommendations.',
  },
  {
    title: 'Energy resilience planning',
    description:
      'For new facilities and expansions, early planning can consider on-site generation feasibility, capacity, and energy architecture from the design phase.',
  },
];

const sectors = [
  {
    title: 'Data centers and AI computing',
    description:
      'Continuous 24/7 load, high sensitivity to interruptions, and growing exposure to peak pricing.',
  },
  {
    title: 'Advanced manufacturing',
    description:
      'Semiconductor and precision processes with demanding continuity and power-quality requirements.',
  },
  {
    title: 'Industrial and agribusiness',
    description:
      'Large electrical systems for processing, irrigation, storage, and automation.',
  },
  {
    title: 'New critical facilities',
    description:
      'Design-stage energy strategy, when integrating solar and storage can be simpler than a later retrofit.',
  },
];

const plants = [
  ['Porangatu', '5,028 × 695 Wp', '12 × 250 kW', '5,479 MWh/yr'],
  ['Goiás', '6,288 × 700 Wp', '6 × 300 kW', '4,072 MWh/yr'],
];

const credentials = [
  {
    label: "Bachelor's",
    title: 'Control and Automation Engineering (Mechatronics)',
    detail:
      'Universidade Paulista (UNIP), Brazil · U.S. equivalency: B.S. in Mechatronics Engineering',
  },
  {
    label: 'Graduate program',
    title: 'Electrical Power Systems',
    detail:
      'Centro Universitário Cambury (UniCambury), Brazil · graduate-level program equivalency',
  },
  {
    label: 'Graduate program',
    title: 'Occupational Safety Engineering',
    detail:
      'Faculdade Araguaia (FARA), Brazil · graduate-level program equivalency',
  },
  {
    label: 'In progress',
    title: 'Master of Engineering Management',
    detail: 'Trine University, United States',
  },
  {
    label: 'Registration',
    title: 'CREA-GO No. 21772/D-GO · IEEE Member',
    detail:
      'Credentials evaluated by SPANTRAN – The Evaluation Company (NACES member)',
  },
];

function EnergyDiagram() {
  return (
    <figure className="diagram-figure">
      <div className="diagram-frame">
        <svg
          className="energy-diagram"
          viewBox="0 0 520 300"
          role="img"
          aria-labelledby="diagram-title diagram-description"
        >
          <title id="diagram-title">Solar and storage system overview</title>
          <desc id="diagram-description">
            A photovoltaic array and battery storage system connect through
            inverters to a facility bus, alongside the ERCOT grid and critical
            load.
          </desc>
          <g
            className="diagram-labels"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="11"
            letterSpacing="0.6"
          >
            <rect x="200" y="14" width="120" height="44" className="diagram-box" />
            <text x="260" y="34" textAnchor="middle" className="diagram-text">
              ERCOT GRID
            </text>
            <text x="260" y="49" textAnchor="middle" className="diagram-muted">
              utility service
            </text>
            <line x1="260" y1="58" x2="260" y2="128" className="diagram-grid-line" />
            <line x1="60" y1="138" x2="460" y2="138" className="diagram-bus" />
            <text x="466" y="142" className="diagram-text">
              BUS
            </text>
            <rect x="252" y="120" width="16" height="12" className="diagram-breaker" />

            <rect x="24" y="214" width="120" height="58" className="diagram-box" />
            <g className="panel-lines">
              <rect x="36" y="224" width="22" height="14" />
              <rect x="62" y="224" width="22" height="14" />
              <rect x="88" y="224" width="22" height="14" />
              <rect x="114" y="224" width="22" height="14" />
            </g>
            <text x="84" y="258" textAnchor="middle" className="diagram-text">
              PV ARRAY
            </text>
            <line x1="84" y1="214" x2="84" y2="190" className="diagram-flow" />
            <rect x="64" y="166" width="40" height="24" className="diagram-converter" />
            <text x="84" y="182" textAnchor="middle" className="diagram-acronym">
              DC/AC
            </text>
            <line x1="84" y1="166" x2="84" y2="138" className="diagram-flow diagram-pulse" />

            <rect x="200" y="214" width="120" height="58" className="diagram-box" />
            <g className="battery-cells">
              <rect x="214" y="226" width="10" height="18" />
              <rect x="230" y="226" width="10" height="18" />
              <rect x="246" y="226" width="10" height="18" />
              <rect x="262" y="226" width="10" height="18" opacity=".55" />
              <rect x="278" y="226" width="10" height="18" opacity=".3" />
            </g>
            <text x="260" y="262" textAnchor="middle" className="diagram-text">
              BESS
            </text>
            <line x1="260" y1="214" x2="260" y2="190" className="diagram-flow" />
            <rect x="240" y="166" width="40" height="24" className="diagram-converter" />
            <text x="260" y="182" textAnchor="middle" className="diagram-acronym">
              PCS
            </text>
            <line x1="260" y1="166" x2="260" y2="138" className="diagram-flow diagram-pulse" />

            <line x1="436" y1="138" x2="436" y2="214" className="diagram-grid-line" />
            <rect x="376" y="214" width="120" height="58" className="diagram-box" />
            <text x="436" y="240" textAnchor="middle" className="diagram-text">
              CRITICAL
            </text>
            <text x="436" y="256" textAnchor="middle" className="diagram-text">
              LOAD
            </text>
          </g>
        </svg>
      </div>
      <figcaption>
        Simplified one-line diagram · solar + storage serving a facility bus
      </figcaption>
    </figure>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="site-header-inner shell">
          <a className="brand" href="#top" aria-label="JT Voltara home">
            <img src={logo} alt="JT Voltara — Solar, Storage, Critical Power" />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#challenge">Grid context</a>
            <a href="#approach">Approach</a>
            <a href="#sectors">Facilities</a>
            <a href="#founder">Founder</a>
            <a href="#contact">Company details</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner shell">
            <div className="hero-copy">
              <h1 id="hero-title">
                Energy resilience for Texas’ <em>critical infrastructure</em>
              </h1>
              <p className="hero-lede">
                JT Voltara LLC is a Texas company focused on solar photovoltaic
                generation and battery energy storage for data centers, advanced
                manufacturing, and industrial facilities.
              </p>
              <dl className="hero-meta">
                <div>
                  <dt>Focus</dt>
                  <dd>Solar PV + BESS</dd>
                </div>
                <div>
                  <dt>Scale</dt>
                  <dd>Hundreds of kW to several MW</dd>
                </div>
                <div>
                  <dt>Region</dt>
                  <dd>Austin · Dallas · Houston</dd>
                </div>
              </dl>
            </div>
            <EnergyDiagram />
          </div>
        </section>

        <section className="content-section challenge-section" id="challenge" aria-labelledby="challenge-title">
          <div className="shell">
            <h2 id="challenge-title">
              Texas demand is growing faster than any grid was planned for
            </h2>
            <p className="section-intro">
              The ERCOT grid serves most of Texas and has limited connections to
              neighboring grids. Data centers, semiconductor plants, and other
              continuous loads are arriving at a pace that puts reliability and
              energy cost at the center of every new facility decision.
            </p>

            <div className="figures" aria-label="Texas energy context">
              <article className="figure-item">
                <p className="figure-value">438<small>GW</small></p>
                <p>
                  Large-load interconnection requests tracked by ERCOT, roughly
                  89% of them data centers.
                </p>
                <cite>
                  <a
                    href="https://modoenergy.com/research/en/ercot-battery-storage-2026-things-to-watch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Modo Energy, Jul 2026
                  </a>
                </cite>
              </article>
              <article className="figure-item">
                <p className="figure-value">~35<small>GW</small></p>
                <p>
                  Projected data-center peak demand in ERCOT by 2035, close to
                  half of today’s system peak.
                </p>
                <cite>
                  <a
                    href="https://modoenergy.com/research/en/ercot-battery-storage-2026-things-to-watch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Modo Energy, Jul 2026
                  </a>
                </cite>
              </article>
              <article className="figure-item">
                <p className="figure-value">15,712<small>MW</small></p>
                <p>
                  Battery storage installed and operating in Texas, which at
                  times supplies about 10% of the state’s power.
                </p>
                <cite>
                  <a
                    href="https://www.ercot.com/files/docs/2026/02/02/4-Understanding-Battery-Energy-Storage-Systems-Current-and-Future.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TSSA presentation to ERCOT, Feb 2026
                  </a>
                </cite>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="shell">
            <div className="approach-heading">
              <h2 id="approach-title">
                Start with the facility’s problem, then size the solution
              </h2>
              <p className="section-intro">
                The planning framework centers on facility load profiles,
                reliability requirements, and exposure to ERCOT price
                volatility, then considers the right balance of on-site solar
                and storage.
              </p>
            </div>

            <div className="approach-list">
              {areas.map((area) => (
                <article className="approach-row" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>

            <p className="licensure-note">
              Activities that require professional engineering licensure in
              Texas would be performed by Texas-licensed Professional Engineers
              engaged for each project.
            </p>
          </div>
        </section>

        <section className="content-section sectors-section" id="sectors" aria-labelledby="sectors-title">
          <div className="shell sectors-layout">
            <div className="sectors-heading">
              <h2 id="sectors-title">
                Facilities where an outage is measured in dollars per minute
              </h2>
            </div>
            <ul className="sector-list">
              {sectors.map((sector) => (
                <li key={sector.title}>
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section founder-section" id="founder" aria-labelledby="founder-title">
          <div className="shell founder-layout">
            <div className="founder-profile">
              <h2 id="founder-title">Founder</h2>
              <h3>Juliano Tosta Fernandes</h3>
              <p className="founder-role">Founder · JT Voltara LLC</p>
              <div className="founder-bio">
                <p>
                  Engineer with professional responsibility recorded with the
                  Regional Council of Engineering of Goiás (CREA-GO), Brazil,
                  since 2017. His background includes electrical diagnostics,
                  power-quality analysis, grounding and lightning protection,
                  infrared thermography, and distributed solar generation.
                </p>
                <p>
                  His work on distributed-generation solar plants in Brazil
                  included electrical installation verification, grounding,
                  field-crew safety, and thermographic inspection at
                  commissioning, from project conception to delivery.
                </p>
              </div>

              <div className="plant-table-wrap" role="region" aria-label="Solar plant records in Goiás, Brazil" tabIndex="0">
                <table>
                  <caption>Distributed-generation solar plants, Goiás, Brazil</caption>
                  <thead>
                    <tr>
                      <th scope="col">Plant</th>
                      <th scope="col">Modules</th>
                      <th scope="col">Inverters</th>
                      <th scope="col">Generation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plants.map((plant) => (
                      <tr key={plant[0]}>
                        {plant.map((detail, index) => (
                          <td className={index > 0 ? 'numeric-cell' : undefined} key={detail}>
                            {detail}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <dl className="credentials">
              {credentials.map((credential) => (
                <div className="credential-row" key={credential.title}>
                  <dt>{credential.label}</dt>
                  <dd>
                    <strong>{credential.title}</strong>
                    <span>{credential.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <div>
              <h2 id="contact-title">General information</h2>
              <p className="section-intro">For general inquiries about JT Voltara LLC.</p>
              <a className="email-link" href="mailto:jtosta.eng@gmail.com">
                jtosta.eng@gmail.com
              </a>
            </div>
            <address>
              <strong>JT Voltara LLC</strong>
              <span>Texas limited liability company</span>
              <span>Austin, Texas, United States</span>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© 2026 JT Voltara LLC</span>
          <span>Austin, Texas</span>
        </div>
      </footer>
    </>
  );
}

export default App;
