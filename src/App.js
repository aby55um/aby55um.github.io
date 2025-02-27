import './App.css';
//import { Router, Link } from "@react/router"
import { Link } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      </header>
      <body>

        <nav id="sidebar">
          <ul>
            <li><Link to="/">News</Link></li>
            <li><Link to="/Resources.js">Resources</Link></li>
              {/* <ul>
                  <li>https://www.activecountermeasures.com </li>
                  <li>https://newandroidbook.com/TOC.html </li>
                  <li>https://guyinatuxedo.github.io/ </li>
                  <li>https://alice.climent-pommeret.red/posts/a-syscall-journey-in-the-windows-kernel/ </li>
                  <li>https://www.hoppersroppers.org/roadmap/training/pwning.html </li>
                  <li>https://github.com/SkyPenguinLabs/REplay </li>
                  <li>https://github.com/RPISEC/MBE </li>
                  <li>https://0x0539.net/ </li>
                  <li>https://github.com/angrave/SystemProgramming  </li>
                  <li>https://0xax.gitbooks.io/linux-insides/content/ </li>
                  <li>https://www.classcentral.com/report/best-reverse-engineering-courses/ </li>
                  <li>https://www.learnvulnerabilityresearch.com/resources  </li>
                  <li>https://crackmes.one/ </li>
                  <li>https://github.com/D4lj337/Awesome-Malware-and-Reversing  </li>
                  <li>https://godbolt.org/  </li>
                  <li>https://pwn.college/  </li>
                  <li>https://cryptohack.org/ </li>
                  <li>https://github.com/VirtualAlllocEx/DEFCON-31-Syscalls-Workshop  </li>
                  <li>https://github.com/aptnotes </li>
                  <li>https://malware-traffic-analysis.net/ </li>
                  <li>https://github.com/Th1ru-M/Windows-Threat-Hunting </li>
                  <li>https://vx-underground.org/ </li>
                  <li>https://class.malware.re/2021/01/24/malware-research-online.html  </li>
                  <li>https://github.com/Psmths/windows-forensic-artifacts  </li>
                  <li>https://mohammedalhumaid.com/wp-content/uploads/2022/01/windows-forensics-analysis-v-1.0-4.pdf  </li>
                  <li>https://github.com/Yara-Rules </li>
              </ul> */}
            <li><Link to="/Ecosystem.js">Ecosystem</Link></li>
            <li><Link to="/Tools.js">Tools</Link></li>
            <li><Link to="/Artifacts.js">Artifacts</Link></li>
            <li><Link to="/Protocls.js">Protocols</Link></li>
            <li><Link to="/Malware.js">Malware</Link></li>
          </ul>
        </nav>

        <main>
          <div className="container">
            <h1>Leaked Black Basta Ransomware chat logs.</h1>
            <p>Source: https://thehackernews.com/2025/02/leaked-black-basta-chat-logs-reveal.html</p>
            <p>Feb 26, 2025</p>
          </div>
          <div className="container">
            <h1>'Silver Fox' APT Skirts Windows Blocklist in BYOVD Attack</h1>
            <p>Source: https://www.darkreading.com/cyber-risk/silver-fox-byovd-attack-windows-blocklist</p>
            <p>Feb 26, 2025</p>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
