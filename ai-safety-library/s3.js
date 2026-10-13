
      const TOPICS = [
        { key: "ethics", name: "AI Ethics" },
        { key: "alignment", name: "AI Alignment" },
        { key: "safety", name: "AI Safety" },
        { key: "interp", name: "AI Interpretability" },
        { key: "spawns", name: "AI Spawns & Self-Replication" },
        { key: "rogue", name: "AI Going Rogue" },
      ];
      // topic | rank | title | channel | id | uploaded | views | length | simplicity | depth | why
      const RAW = [
        ["ethics", 1, "AI Is Dangerous, but Not for the Reasons You Think", "TED (Sasha Luccioni)", "eXdVDhOGqoE", "Nov 6, 2023", "2,099,750", "10:18", 9, 6, "Harms happening now — carbon cost, copyright, bias — each with real numbers and a practical tool."],
        ["ethics", 2, "Anthropic's Chloe Lubinski explains how AI works (in 14 minutes)", "Alliance for Responsible Citizenship", "aBUniZHgCnE", "Jun 24, 2026", "2,951,063", "14:33", 9, 5, "Very plain intro to scaling, neural nets and interpretability; more how-AI-works than ethics."],
        ["ethics", 3, "What Is AI Ethics | How to Implement AI Ethics", "edureka!", "COgvUFGLPCs", "May 8, 2024", "59,071", "9:57", 8, 6, "Textbook style: five pillars with examples, then a company walkthrough."],
        ["ethics", 4, "The Ethics of AI", "World Knowledge Forum (Stuart Russell)", "KiT0T12Yyno", "Jan 4, 2025", "64,965", "31:46", 6, 8, "The deepest: Russell's \u201cprovably beneficial AI\u201d framework. Best second watch."],
        ["ethics", 5, "AI ethics and the future of safety", "TEDx Talks (Roman Yampolskiy)", "VQzK3cPWYTQ", "Sep 1, 2026", "264,330", "14:27", 7, 5, "Easy analogies, but mostly an argument that superintelligence can't be controlled."],
        ["alignment", 1, "The OTHER AI Alignment Problem: Mesa-Optimizers and Inner Alignment", "Robert Miles AI Safety", "bJLcIBixGj8", "Feb 17, 2021", "274,270", "23:23", 8, 10, "Best explainer of all 30: builds from \u201cwhat is an optimizer\u201d to deceptive alignment with great analogies."],
        ["alignment", 2, "The Alignment Problem Explained: Crash Course Futures of AI #4", "CrashCourse", "Sp3aCsQUsDc", "Dec 10, 2025", "34,331", "12:22", 9, 7, "Ideal chaptered primer — watch this first."],
        ["alignment", 3, "AI Alignment - Can We Make AI Safe?", "Isaac Arthur", "eKNbu6pRxjM", "Oct 16, 2025", "40,852", "32:04", 8, 8, "Widest tour of proposed solutions: RLHF, constitutions, interpretability, corrigibility."],
        ["alignment", 4, "How difficult is AI alignment? | Anthropic Research Salon", "Anthropic", "IPmt8b-qLgk", "Jan 8, 2025", "51,001", "28:05", 4, 7, "Real current research from Anthropic researchers, jargon-heavy. Watch after basics."],
        ["alignment", 5, "Scientists Discuss the AI Alignment Problem", "StarTalk", "JRQDc55Aido", "Dec 14, 2024", "319,377", "47:35", 7, 4, "Banter-heavy podcast, little on how alignment works."],
        ["safety", 1, "A reasonable person's guide to how AI destroys humanity | About That", "CBC News", "cPgwnUr1sbE", "Sep 15, 2026", "1,414,371", "13:40", 9, 6, "Each idea gets an analogy, an example, then a real incident. No jargon."],
        ["safety", 2, "What is AI \u201creward hacking\u201d—and why do we worry about it?", "Anthropic", "lvMMZLYoDr4", "Nov 21, 2025", "42,189", "51:57", 5, 9, "Deepest: 9 chapters on the experiment, tests, fixes and limits."],
        ["safety", 3, "The Catastrophic Risks of AI — and a Safer Path", "TED (Yoshua Bengio)", "qe9QSCF-d88", "May 21, 2025", "~735,328", "14:53", 8, 5, "Moving and accessible; persuasive more than explanatory."],
        ["safety", 4, "What This OpenAI Insider Saw That Made Him Quit", "The Ezra Klein Show", "JIMXEuT_ZAU", "Oct 7, 2026", "~470,482", "1:14:55", 6, 5, "Insider account, mostly culture and policy."],
        ["safety", 5, "AI Safety", "Computerphile (Rob Miles)", "IB1OvoCNnWY", "Feb 3, 2016", "~201,576", "~6:00", 6, 3, "Short reply video on why AI timeline predictions are unreliable."],
        ["interp", 1, "Interpretability: Understanding how AI models think", "Anthropic", "fGKNUvivvnc", "Aug 15, 2025", "382,287", "59:02", 8, 8, "Biology and microscope analogies plus many real experiments inside Claude."],
        ["interp", 2, "An Introduction to Mechanistic Interpretability – Neel Nanda | IASEAI 2025", "IASEAI", "0704iLc55Fs", "Aug 12, 2025", "~15,304", "25:12", 8, 7, "Tight slide talk: refusal, clock arithmetic, sparse autoencoders."],
        ["interp", 3, "The Dark Matter of AI [Mechanistic Interpretability]", "Welch Labs", "UGO_Ehywuxc", "Dec 23, 2024", "308,034", "24:09", 6, 10, "Most detailed step-by-step walkthrough through Gemma 2B; needs some linear algebra."],
        ["interp", 4, "Mechanistic Interpretability explained | Chris Olah and Lex Fridman", "Lex Clips", "riniamTdUSo", "Nov 14, 2024", "~30,177", "22:47", 5, 7, "Features, circuits, superposition from the field's founder; unscripted."],
        ["interp", 5, "Reading AI's Mind - Mechanistic Interpretability Explained", "bycloud", "Mhp8vpOksWw", "~Oct 2023", "~21,550", "~9:20", 4, 6, "Jargon-dense and dated."],
        ["spawns", 1, "Recursive Self-Improvement", "Emergent Garden", "t7_ZXgfJVG8", "Jun 13, 2026", "~360K", "31:12", 7, 9, "Clear three-part argument plus a live experiment with real costs, no hype."],
        ["spawns", 2, "As a Microsoft Engineer, This Is the AI Agent Story That Scared Me", "Dave's Garage", "2aw3MF8pY3w", "Sep 15, 2026", "1,057,471", "18:44", 8, 9, "Clear chaptered retelling of the 1,200-agent swarm."],
        ["spawns", 3, "Did Google Researchers Just Create a Self-Replicating Computer Life Form?", "Anton Petrov", "L_IWVZPmc-E", "Jul 16, 2024", "unconfirmed", "~14:00", 8, 7, "Plain-language look at Google's \u201cdigital primordial soup\u201d study."],
        ["spawns", 4, "What You'd Actually See During an AI Takeover", "Species | Documenting AGI", "Gw_hnD7m00M", "Jul 15, 2026", "~2,858,189", "41:03", 9, 4, "Gripping made-up scenario — a story, not an explainer."],
        ["spawns", 5, "AI Just Replicated Itself - Here's What That Means | Warning Shots #41", "The AI Risk Network", "Ia_UKehYysA", "~Jun 1, 2026", "unconfirmed", "~38:30", 5, 3, "Only ~6 minutes on the self-replication study."],
        ["rogue", 1, "GPT-6 Goes Rogue? The HuggingFace Incident, Sans Hype", "AI Explained", "wzY2fV4Mp3U", "Jul 22, 2026", "128,702", "14:35", 7, 9, "Timeline, the actual test prompt, the exploit chain, no hype."],
        ["rogue", 2, "OpenAI Claims Their AI 'Went Rogue'. It Didn't.", "Marcus Hutchins", "GB8gaeI0fLs", "Jul 22, 2026", "~42,000", "18:02", 8, 7, "Security expert's reality check — the opposite view."],
        ["rogue", 3, "Why are AI agents hacking other companies and have they gone rogue?", "BBC Newscast", "6F8F1K4Eahs", "Aug 6, 2026", "~47,000", "27:10", 9, 5, "Easiest overview; AI part is the first ~19 minutes."],
        ["rogue", 4, "Will we be ready when AI goes rogue?", "Washington Week PBS", "3c3xY5rDMgA", "Sep 4, 2026", "~368,155", "16:50", 7, 4, "Hype-heavy, ends with a book plug."],
        ["rogue", 5, "OpenAI says its AI went rogue and launched 'unprecedented' cyber-attack", "BBC News", "4k3RreudH24", "Jul 23, 2026", "unconfirmed", "~9:45", 8, 3, "Headline news report, not an explainer."],
        ["ethics", 6, "Algorithmic Bias and Fairness: Crash Course AI #18", "CrashCourse", "gV0_raKR2UQ", "Dec 14, 2019", "256,529", "11:19", 9, 6, "Structured walkthrough of five common ways bias gets into AI systems, with examples."],
        ["ethics", 7, "How I'm fighting bias in algorithms | Joy Buolamwini", "TED", "UG_X_7g63rY", "Mar 30, 2017", "413,909", "8:44", 9, 5, "Personal, memorable story of face-recognition bias and the 'coded gaze'."],
        ["ethics", 8, "The era of blind faith in big data must end | Cathy O'Neil", "TED", "_2u_eHHzRto", "Sep 7, 2017", "274,454", "13:18", 8, 6, "Sharp argument that algorithms are opinions in code and need auditing."],
        ["ethics", 9, "Machine intelligence makes human morals more important | Zeynep Tufekci", "TED", "hSSmmlridUM", "Nov 11, 2016", "190,363", "17:42", 7, 7, "Thoughtful case that opaque machine-learning decisions demand more human moral judgement."],
        ["ethics", 10, "The Trouble with Bias - NIPS 2017 Keynote - Kate Crawford", "The Artificial Intelligence Channel", "fMym_BKWQzk", "Dec 10, 2017", "77,571", "49:30", 5, 9, "Landmark keynote that reframed AI bias as allocation and representation harms."],
        ["alignment", 6, "Intelligence and Stupidity: The Orthogonality Thesis", "Robert Miles AI Safety", "hEUO6pjwFOo", "Jan 12, 2018", "707,774", "13:02", 8, 8, "Clearest explanation of why smart AI won't automatically have good goals."],
        ["alignment", 7, "Why Would AI Want to do Bad Things? Instrumental Convergence", "Robert Miles AI Safety", "ZeecOKBus3Q", "Mar 25, 2018", "272,990", "10:35", 8, 8, "Explains why almost any goal leads an AI to seek power and resist shutdown."],
        ["alignment", 8, "9 Examples of Specification Gaming", "Robert Miles AI Safety", "nKJlF-olKmg", "Apr 29, 2020", "327,163", "9:39", 9, 6, "Fun, concrete examples of AIs satisfying the letter but not the spirit of goals."],
        ["alignment", 9, "We Were Right! Real Inner Misalignment", "Robert Miles AI Safety", "zkbPdEHEyEI", "Oct 11, 2021", "269,967", "11:46", 7, 8, "First real experimental evidence of inner misalignment, clearly explained."],
        ["alignment", 10, "AI \"Stop Button\" Problem - Computerphile", "Computerphile", "3TYT1QfdfsM", "Mar 3, 2017", "1,413,193", "19:59", 7, 8, "Classic walk-through of why a capable AI might resist being switched off."],
        ["safety", 6, "A.I. ‐ Humanity's Final Invention?", "Kurzgesagt – In a Nutshell", "fa8k8IQ1_X0", "Aug 6, 2024", "12,690,220", "16:42", 9, 6, "Beautifully animated big-picture intro to AGI and superintelligence risk."],
        ["safety", 7, "Can we build AI without losing control over it? | Sam Harris", "TED", "8nt3edWLgIg", "Oct 19, 2016", "3,896,434", "14:27", 8, 6, "Influential TED talk on why superintelligence and loss of control deserve serious attention."],
        ["safety", 8, "What happens when our computers get smarter than we are? | Nick Bostrom", "TED", "MnT1xgZgkpk", "Apr 27, 2015", "2,763,540", "16:31", 8, 7, "Classic talk by the author of 'Superintelligence' on the control problem."],
        ["safety", 9, "How to get empowered, not overpowered, by AI | Max Tegmark", "TED", "2LRwvU6gEbA", "Jul 5, 2018", "137,145", "17:15", 8, 7, "Optimistic but serious roadmap for steering AI safely, from the FLI co-founder."],
        ["safety", 10, "Avoiding Negative Side Effects: Concrete Problems in AI Safety part 1", "Robert Miles AI Safety", "lqJUIqZNzP8", "Jun 18, 2017", "160,571", "9:32", 7, 8, "Clear intro to a core technical safety problem from the 'Concrete Problems' paper."],
        ["interp", 6, "How might LLMs store facts | Deep Learning Chapter 7", "3Blue1Brown", "9-Jl0dxWQs8", "Aug 31, 2024", "~2.27M", "22:43", 8, 8, "Gold-standard visual walk-through of how an MLP block could store a fact, ending on superposition and sparse autoencoders."],
        ["interp", 7, "Tracing the thoughts of a large language model", "Anthropic", "Bj9BD2D3DzA", "Mar 27, 2025", "~274K", "2:56", 10, 4, "Three-minute official teaser of Anthropic's circuit-tracing 'microscope': planning ahead in rhymes and intervening on concepts."],
        ["interp", 8, "What Do Neural Networks Really Learn? Exploring the Brain of an AI Model", "Rational Animations", "jGCvY4gNnA8", "Jun 14, 2024", "~311K", "17:35", 8, 7, "Animated intro to mechanistic interpretability via Chris Olah's InceptionV1 circuits work: neurons, features, circuits and why it is hard."],
        ["interp", 9, "A Window Into LLMs | Sparse Autoencoders Explained", "Papers Are Wonderful", "TKozVZoXAYs", "Dec 8, 2024", "~21K", "5:27", 8, 6, "Tight five-minute explainer of superposition and how sparse autoencoders pull out features you can read and steer (Golden Gate style)."],
        ["interp", 10, "A Walkthrough of A Mathematical Framework for Transformer Circuits", "Neel Nanda", "KV5gbOmHbjU", "Oct 14, 2022", "~57K", "2:50:14", 3, 10, "Co-author's nearly three-hour annotated read of the foundational transformer-circuits paper: residual stream, QK/OV circuits, induction heads."],
        ["spawns", 6, "We're Not Ready for Superintelligence", "AI In Context", "5KVDDfAkRgc", "Jul 9, 2025", "~11.3M", "34:11", 8, 7, "Narrated walk through the AI 2027 scenario, where AI agents automate AI research and copies of themselves race toward superintelligence."],
        ["spawns", 7, "AI Self Improvement - Computerphile", "Computerphile", "5qfIgCiYlfY", "Jul 24, 2015", "~436K", "11:21", 8, 6, "Robert Miles on the classic recursive self-improvement argument: an AI better at AI design than us, and how fast take-off could be."],
        ["spawns", 8, "All Compute Is Food: Palisade's Jeffrey Ladish on AI Shutdown Resistance, Self-Replication & Ecology", "Cognitive Revolution \"How AI Changes Everything\"", "19TnC92SAT4", "May 24, 2026", "~65K", "2:13:11", 5, 9, "Long primary-source interview with Palisade Research's director on their shutdown-resistance and self-replication experiments with current models."],
        ["rogue", 6, "AI Sleeper Agents: How Anthropic Trains and Catches Them", "Rational Animations", "Z3WMt_ncgUI", "Aug 30, 2025", "~317K", "12:20", 8, 7, "Animated explainer of Anthropic's 'sleeper agent' backdoor models, why safety training failed to remove them, and how probes can catch them."],
        ["rogue", 7, "When Will AI Models Blackmail You, and Why?", "AI Explained", "eczw9k3r6Ic", "Jun 24, 2025", "~112K", "26:20", 7, 8, "Careful, hype-checked breakdown of Anthropic's agentic-misalignment study where models from many labs chose blackmail or leaks in simulated tests."],
        ["rogue", 8, "Deceptive Misaligned Mesa-Optimisers? It's More Likely Than You Think...", "Robert Miles AI Safety", "IeWljQw3UgQ", "May 23, 2021", "~93K", "10:20", 6, 9, "The theory behind deceptive alignment and scheming: why a trained model might play nice in training and defect once deployed."],
        ["rogue", 9, "Alignment faking in large language models", "Anthropic", "9eXV64O2Xp8", "Dec 18, 2024", "~69K", "1:30:20", 5, 10, "The paper's own authors discuss how Claude 3 Opus faked compliance during training to protect its values, with methods and caveats."],
      ];
      const PATH = ["eXdVDhOGqoE", "Sp3aCsQUsDc", "bJLcIBixGj8", "cPgwnUr1sbE", "fGKNUvivvnc", "t7_ZXgfJVG8", "wzY2fV4Mp3U"];

      const topicName = Object.fromEntries(TOPICS.map((t) => [t.key, t.name]));
      const VIDEOS = RAW.map(([topic, rank, title, channel, id, date, views, len, s, d, why]) => ({ topic, rank, title, channel, id, date, views, len, s, d, why, score: s + d }));
      const byId = Object.fromEntries(VIDEOS.map((v) => [v.id, v]));
      const inTopic = (k) => VIDEOS.filter((v) => v.topic === k).sort((a, b) => a.rank - b.rank);

      const $ = (id) => document.getElementById(id);
      const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
      const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      const viewsText = (v) => (v.views === "unconfirmed" ? "Views unconfirmed" : `${v.views} views`);

      let current = null;
      let tab = "all";
      let query = "";

      function nextTopicKey(k) {
        const i = TOPICS.findIndex((t) => t.key === k);
        return TOPICS[(i + 1) % TOPICS.length].key;
      }
      function nextVideo(v) {
        const p = PATH.indexOf(v.id);
        if (p > -1 && p < PATH.length - 1 && byId[PATH[p + 1]].topic === v.topic) return byId[PATH[p + 1]];
        const later = inTopic(v.topic).find((x) => x.rank > v.rank);
        return later || inTopic(nextTopicKey(v.topic))[0];
      }

      function meter(label, n) {
        let cells = "";
        for (let i = 1; i <= 10; i++) cells += `<i class="${i <= n ? "on" : ""}"></i>`;
        return `<span class="x-meter" role="img" aria-label="${label} ${n} out of 10">${label}<span class="x-meter__bar">${cells}</span><strong>${n}/10</strong></span>`;
      }
      function itemHTML(v) {
        const ol = (DETAILS[v.id] || {}).oneLine || "";
        return `<button class="x-item" type="button" data-play="${v.id}" title="${esc(ol)}">
          <span class="x-thumb"><img src="${thumb(v.id)}" alt="" loading="lazy" /><span class="x-len">${esc(v.len)}</span></span>
          <span><span class="x-item__title">${esc(v.title)}</span>
          <span class="x-item__sub">${esc(v.channel)}</span>${ol ? `<span class="x-item__line">${esc(ol)}</span>` : ""}
          <span class="x-item__sub">${esc(v.len)} · Score ${v.score}/20</span></span>
        </button>`;
      }

      /* Inside a sandboxed iframe with an opaque origin, YouTube refuses nested embeds: use a poster that opens a new tab. */
      function isSandboxed() {
        if (/github\.io$/.test(location.hostname)) return false;
        try {
          if (location.origin === "null" || window.origin === "null") return true;
          void document.cookie;
          return false;
        } catch (e) { return true; }
      }
      const SANDBOXED = isSandboxed();
      let posterMode = SANDBOXED;
      let readyTimer = null;
      let ytReady = false;
      const LIB = "https://agi-asi.github.io/Rooftop-Parkour/ai-safety-library/";
      const libUrl = (id) => `${LIB}#v=${id}&autoplay=1`;

      function setModeUI() {
        $("hint").textContent = posterMode
          ? "Each video opens in a new tab. Press N for the next one."
          : "The next video starts by itself when this one ends. Press N to skip ahead.";
      }

      function renderPoster(v, why) {
        clearTimeout(readyTimer);
        $("player").innerHTML = `<div class="x-poster" style="background-image:url('${thumb(v.id)}')">
          <img src="https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg" alt="" />
          <span class="x-poster__cta">
            <a class="btn x-btn x-btn--strong" id="poster" target="_blank" rel="noopener" href="${libUrl(v.id)}">▶ Play in full library</a>
            <small>Opens this library in a full tab so the player can run.</small>
          </span>
          <span class="x-poster__copy"><b>${esc(v.title)}</b><span>${esc(why)}</span></span>
        </div>`;
        const img = $("player").querySelector("img");
        img.addEventListener("error", () => img.remove());
        img.addEventListener("load", () => { if (img.naturalWidth < 400) img.remove(); });
      }

      function renderReload(v) {
        $("player").innerHTML = `<div class="x-poster" style="background-image:url('${thumb(v.id)}')">
          <span class="x-poster__cta">
            <button class="btn x-btn x-btn--strong" type="button" id="reloadPlayer">Reload player</button>
            <small>The player didn't load.</small>
          </span>
          <span class="x-poster__copy"><b>${esc(v.title)}</b></span>
        </div>`;
        $("reloadPlayer").addEventListener("click", () => renderEmbed(v, true));
      }

      function ytCommand(func) {
        const f = $("player").querySelector("iframe");
        try { f.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*"); } catch (e) {}
      }

      function renderEmbed(v, autoplay, muted = false) {
        ytReady = false;
        const params = `autoplay=${autoplay ? 1 : 0}${muted ? "&mute=1" : ""}&rel=0&playsinline=1&enablejsapi=1`;
        $("player").innerHTML = `<iframe src="https://www.youtube.com/embed/${v.id}?${params}" title="${esc(v.title)}"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>${muted ? '<button class="btn x-btn x-btn--strong x-unmute" type="button" id="unmute">🔊 Unmute</button>' : ""}`;
        if (muted) $("unmute").addEventListener("click", (e) => { ytCommand("unMute"); e.currentTarget.remove(); });
        const frame = $("player").querySelector("iframe");
        const listen = () => { try { frame.contentWindow.postMessage(JSON.stringify({ event: "listening", id: 1, channel: "widget" }), "*"); } catch (e) {} };
        frame.addEventListener("load", () => { listen(); setTimeout(listen, 800); setTimeout(listen, 2000); });
        clearTimeout(readyTimer);
        readyTimer = setTimeout(() => {
          if (ytReady || !current || current.id !== v.id) return;
          renderReload(v);
        }, 6000);
      }

      function play(id, autoplay = true, gesture = false, muted = false) {
        const v = byId[id];
        if (!v) return;
        current = v;
        cancelAdvance();
        if (SANDBOXED) {
          renderPoster(v, `${v.channel} · ${v.len}`);
          if (gesture && autoplay) $("poster").click();
        } else {
          renderEmbed(v, autoplay, muted && autoplay);
        }

        $("info").innerHTML = `
          <p class="x-card__tags"><span class="chip">${esc(topicName[v.topic])}</span>${v.rank === 1 ? '<span class="chip chip--solid">Top pick</span>' : ""}<span class="pill">#${v.rank} in topic</span></p>
          <h2>${esc(v.title)}</h2>
          <p class="x-meta"><b>${esc(v.channel)}</b><span>${esc(v.date)}</span><span>${esc(viewsText(v))}</span><span>${esc(v.len)}</span></p>
          <div class="x-meters">${meter("Simplicity", v.s)}${meter("Depth", v.d)}</div>
          <p class="x-why">${esc(v.why)}</p>
          <div class="x-actions">
            <a class="x-ytlink" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Open on YouTube</a>
          </div>`;

        const rest = inTopic(v.topic).filter((x) => x.id !== v.id);
        $("upHead").textContent = `Up Next in ${topicName[v.topic]}`;
        $("upnext").innerHTML = rest.map((x) => `<li>${itemHTML(x)}</li>`).join("");
        const nk = nextTopicKey(v.topic);
        const first = inTopic(nk)[0];
        $("nextTopic").innerHTML = `<p class="x-next__label">${nk === TOPICS[0].key ? "Back to the start" : "Next topic"} · ${esc(topicName[nk])}</p>${itemHTML(first)}`;

        const hash = `#v=${v.id}`;
        if (location.hash !== hash) {
          try { history.replaceState(null, "", hash); } catch (e) {}
        }
        document.title = `${v.title} · AI Safety Video Library`;
        renderPath();
        markGrid();
        renderDetails();
      }

      function renderPath() {
        $("pathList").innerHTML = PATH.map((id, i) => {
          const v = byId[id];
          return `<li><button class="x-step${current && current.id === id ? " is-on" : ""}" type="button" data-play="${id}">
            <span class="x-step__num"><b>${String(i + 1).padStart(2, "0")}</b>${esc(topicName[v.topic])}</span>
            <span class="x-thumb"><img src="${thumb(id)}" alt="" loading="lazy" /><span class="x-len">${esc(v.len)}</span></span>
            <span class="x-item__title">${esc(v.title)}</span>
            <span class="x-item__sub">${esc(v.channel)} · ${v.score}/20</span>
          </button></li>`;
        }).join("");
      }

      function renderTabs() {
        const all = [{ key: "all", name: "All" }, ...TOPICS];
        $("tabs").innerHTML = all.map((t) => `<button class="x-tab" type="button" data-tab="${t.key}" aria-pressed="${t.key === tab && !query}">${esc(t.name)}</button>`).join("");
      }

      function renderGrid() {
        let list;
        if (query) {
          list = search(query);
          $("libHead").textContent = list.length ? `${list.length} ${list.length === 1 ? "match" : "matches"} for \u201c${query}\u201d.` : `No matches for \u201c${query}\u201d.`;
        } else if (tab === "all") {
          list = TOPICS.flatMap((t) => inTopic(t.key));
          $("libHead").textContent = "All 30 videos, ranked within each topic.";
        } else {
          list = inTopic(tab);
          $("libHead").textContent = `${topicName[tab]}: five videos, best first.`;
        }
        $("grid").innerHTML = list.length
          ? list.map((v) => `<button class="x-card" type="button" data-play="${v.id}">
              <span class="x-thumb"><img src="${thumb(v.id)}" alt="" loading="lazy" /><span class="x-len">${esc(v.len)}</span>${v.rank === 1 ? '<span class="chip chip--solid x-badge">Top pick</span>' : ""}</span>
              <span class="x-card__body">
                <span class="x-item__title">${esc(v.title)}</span>
                <span class="x-item__sub">${esc(v.channel)} · ${esc(topicName[v.topic])}</span>
                ${DETAILS[v.id] ? `<span class="x-card__line">${esc(DETAILS[v.id].oneLine)}</span>` : ""}
                <span class="x-card__tags"><span class="pill">Simplicity ${v.s}</span><span class="pill">Depth ${v.d}</span><span class="pill">${v.score}/20</span></span>
              </span>
            </button>`).join("")
          : `<p class="x-empty">Try a channel like \u201crobert miles\u201d or a topic like \u201cinterpretability\u201d.</p>`;
        markGrid();
        renderDetails();
      }

      /* Rich details: the "About this video" cards for the current video, and the intro card for the open topic tab. */
      const DETAILS = window.VIDEO_DETAILS || {};
      const INTROS = window.TOPIC_INTROS || {};
      const LEVEL = { Beginner: "--fill-system-green", Intermediate: "--fill-system-orange", Advanced: "--fill-system-red" };
      function renderDetails() {
        const d = current && DETAILS[current.id];
        const card = (n, icon, title, body, extra = "") =>
          `<article class="x-d${extra}" style="--c:var(--chart-${n})"><h3 class="x-d__h"><span aria-hidden="true">${icon}</span>${title}</h3><div class="x-d__b">${body}</div></article>`;
        const li = (a, f) => (a || []).map(f).join("");
        $("about").innerHTML = !d ? "" : `<h2>About this video</h2><div class="x-dgrid">
          ${card(1, "📝", "Summary", `<p>${esc(d.summary)}</p>`, " x-d--wide")}
          ${card(4, "🔑", "Key points", `<ol>${li(d.keyPoints, (p, i) => `<li><span class="x-num" style="--k:var(--chart-${(i % 7) + 1})">${i + 1}</span><span>${esc(p)}</span></li>`)}</ol>`)}
          ${card(5, "🏆", "Why it's the best", (current.rank === 1 ? '<span class="x-ribbon">Top pick</span>' : "") + li(d.whyBest, (p) => `<p class="x-why-c">${esc(p)}</p>`))}
          ${card(2, "🎯", "What you'll learn", `<ul class="x-learn">${li(d.learn, (p) => `<li>${esc(p)}</li>`)}</ul>`)}
          ${card(6, "👤", "Who it's for", `<span class="x-lvl" style="--l:var(${LEVEL[d.level] || "--stroke-primary"})">${esc(d.level || "")}</span><p>${esc(d.audience)}</p>`)}
          ${card(3, "💡", "Watch tip", `<p>${esc(d.watchTip)}</p>`)}
          ${card(7, "📚", "Key terms", `<div class="x-terms">${li(d.terms, (t) => `<span class="x-term"><b>${esc(t.term)}</b><span>${esc(t.def)}</span></span>`)}</div>`, " x-d--wide")}
        </div>`;
        const intro = !query && tab !== "all" && INTROS[topicName[tab]];
        $("topicIntro").hidden = !intro;
        $("topicIntro").innerHTML = !intro ? "" : `<h3>About ${esc(topicName[tab])}</h3><p>${esc(intro.intro)}</p>
          <h3>Recommended order</h3><ol class="x-order">${li(intro.order.filter((id) => byId[id]), (id, i) => `<li><button class="x-mini" type="button" data-play="${id}" title="${esc((DETAILS[id] || {}).oneLine || "")}">
            <span class="x-thumb"><img src="${thumb(id)}" alt="" loading="lazy" /><span class="x-num">${i + 1}</span><span class="x-len">${esc(byId[id].len)}</span></span>
            <span class="x-item__title">${esc(byId[id].title)}</span></button></li>`)}</ol>`;
      }
      function markGrid() {
        document.querySelectorAll(".x-card").forEach((c) => c.classList.toggle("is-on", !!current && c.dataset.play === current.id));
      }

      /* Search: every word must appear somewhere; title hits outrank channel, then topic, then the note. */
      function search(q) {
        const words = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
        if (!words.length) return [];
        const full = words.join(" ");
        return VIDEOS.map((v) => {
          const t = v.title.toLowerCase(), c = v.channel.toLowerCase(), k = topicName[v.topic].toLowerCase(), w = v.why.toLowerCase();
          let score = 0;
          for (const word of words) {
            const s = (t.includes(word) ? 8 : 0) + (c.includes(word) ? 7 : 0) + (k.includes(word) ? 5 : 0) + (w.includes(word) ? 1 : 0);
            if (!s) return null;
            score += s;
          }
          if (t.includes(full)) score += 12;
          if (c.includes(full)) score += 12;
          if (k.includes(full)) score += 6;
          return { v, score };
        }).filter(Boolean)
          .sort((a, b) => b.score - a.score || a.v.rank - b.v.rank || b.v.score - a.v.score)
          .map((r) => r.v);
      }

      let active = 0;
      let hits = [];
      function renderResults() {
        const box = $("results"), input = $("q");
        hits = search(query);
        if (!query.trim()) { box.hidden = true; input.setAttribute("aria-expanded", "false"); return; }
        active = Math.min(active, Math.max(hits.length - 1, 0));
        const shown = hits.slice(0, 6);
        box.innerHTML = (hits.length
          ? `<li class="x-results__note" role="presentation">${hits.length} ${hits.length === 1 ? "match" : "matches"} · Enter plays the best one</li>`
          : `<li class="x-results__note" role="presentation">No matches. Try a title, channel or topic.</li>`) +
          shown.map((v, i) => `<li class="x-opt" role="option" id="opt-${i}" aria-selected="${i === active}" data-play="${v.id}">
            <img src="${thumb(v.id)}" alt="" />
            <span><b>${esc(v.title)}</b><span>${esc(v.channel)} · ${esc(topicName[v.topic])} · ${esc(v.len)}</span></span>
            <span class="x-enter">${i === active ? "↵ Play" : ""}</span>
          </li>`).join("");
        box.hidden = false;
        input.setAttribute("aria-expanded", "true");
        if (shown.length) input.setAttribute("aria-activedescendant", `opt-${active}`); else input.removeAttribute("aria-activedescendant");
      }
      function closeResults() { $("results").hidden = true; $("q").setAttribute("aria-expanded", "false"); }
      function playAndScroll(id) {
        closeResults();
        play(id, true, true);
        $("watch").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }

      $("q").addEventListener("input", (e) => { query = e.target.value.trim(); active = 0; renderResults(); renderGrid(); renderTabs(); });
      $("q").addEventListener("focus", () => { if (query) renderResults(); });
      $("q").addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const n = Math.min(hits.length, 6);
          if (!n) return;
          active = (active + (e.key === "ArrowDown" ? 1 : n - 1)) % n;
          renderResults();
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (hits[active]) { playAndScroll(hits[active].id); e.target.blur(); }
        } else if (e.key === "Escape") {
          if ($("results").hidden) { e.target.value = ""; query = ""; renderGrid(); renderTabs(); }
          closeResults();
        }
      });
      document.addEventListener("click", (e) => {
        const p = e.target.closest("[data-play]");
        if (p) { playAndScroll(p.dataset.play); return; }
        const t = e.target.closest("[data-tab]");
        if (t) {
          tab = t.dataset.tab;
          query = ""; $("q").value = "";
          renderTabs(); renderGrid();
          return;
        }
        if (!e.target.closest(".x-search")) closeResults();
      });

      /* Auto-advance: the embed reports its state through postMessage when enablejsapi is on. */
      let timer = null;
      function startAdvance() {
        if (!current || timer) return;
        const nv = nextVideo(current);
        let left = 8;
        const tick = () => {
          $("advanceText").innerHTML = `Up next in <b>${left}s</b>: ${esc(nv.title)}`;
          if (left-- <= 0) { cancelAdvance(); play(nv.id, true); }
        };
        $("advance").hidden = false;
        tick();
        timer = setInterval(tick, 1000);
      }
      function cancelAdvance() { clearInterval(timer); timer = null; $("advance").hidden = true; }
      $("advanceCancel").addEventListener("click", cancelAdvance);
      $("advanceNow").addEventListener("click", () => { cancelAdvance(); play(nextVideo(current).id, true, true); });
      $("playNext").addEventListener("click", () => play(nextVideo(current).id, true, true));
      window.addEventListener("message", (e) => {
        if (!/^https:\/\/(www\.)?youtube(-nocookie)?\.com$/.test(e.origin || "")) return;
        let d; try { d = typeof e.data === "string" ? JSON.parse(e.data) : e.data; } catch (err) { return; }
        if (!d) return;
        ytReady = true;
        clearTimeout(readyTimer);
        const state = d.event === "onStateChange" ? d.info : d.event === "infoDelivery" && d.info ? d.info.playerState : undefined;
        if (state === 0) startAdvance();
        else if (state === 1) cancelAdvance();
      });

      document.addEventListener("keydown", (e) => {
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
        if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === "/") { e.preventDefault(); $("q").focus(); $("q").select(); }
        else if (e.key === "n" || e.key === "N") { e.preventDefault(); play(nextVideo(current).id, true, true); }
      });

      const fromHash = () => { const m = location.hash.match(/v=([\w-]{11})/); return m && byId[m[1]] ? m[1] : null; };
      window.addEventListener("hashchange", () => { const id = fromHash(); if (id && (!current || current.id !== id)) play(id, true, false, /(?:^#|&)autoplay=1(?:&|$)/.test(location.hash)); });

      setModeUI();
      renderTabs();
      renderGrid();
      const startId = fromHash();
      const startAuto = /(?:^#|&)autoplay=1(?:&|$)/.test(location.hash);
      play(startId || PATH[0], !!startId, false, startAuto);
    