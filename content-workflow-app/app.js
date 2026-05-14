const hashtags = [
  "#gym",
  "#fitness",
  "#gymtok",
  "#gymmotivation",
  "#bodybuilding",
  "#transformation",
  "#workoutmotivation",
  "#bodybuilder",
  "#beforeandafter",
  "#fatloss",
  "#weightloss",
  "#fittok",
  "#naturalbodybuilding",
  "#fitnessjourney",
  "#firstcompetition",
];

const ideas = [
  ["hoodies-stage", "The guy who hid in hoodies is about to step on stage.", "Instagram Reels", "Posing check-in", "trust", "I feel invisible.", "Sparks", "The contrast between hiding and stage prep makes the story instantly emotional."],
  ["250-natural-prep", "250 to 180 to 205. Natural. First prep starts now.", "All platforms", "Transformation reveal", "reach", "I thought natural lifters couldn't look like that.", "Letter To My 13 Year Old Self - Instrumental", "The numbers create proof before the viewer has time to scroll."],
  ["stop-cutting", "Stop cutting like you hate muscle.", "TikTok", "Myth-busting", "save", "I keep losing muscle every cut.", "Runway", "A blunt correction gives people a reason to save and argue."],
  ["food-repeat", "I didn't need motivation. I needed meals I could repeat.", "Instagram Reels", "Full day of eating / FDOE", "save", "I don't know how to eat.", "What Did You Drive Before?", "Simple nutrition beats vague inspiration and drives saves."],
  ["fat-best-thing", "Hot take: being fat was the best thing that ever happened to my physique.", "TikTok", "Talking head hot take", "comment", "I was unattractive and I knew it.", "REDRED", "It reframes pain as leverage and invites conversation."],
  ["prep-gets-ugly", "This is what 205 looks like before natural prep gets ugly.", "Instagram Reels", "Prep diary / day in the life", "loyalty", "I never thought I could compete.", "Runway", "It opens a series people can follow week after week."],
  ["program-hop", "I wasted years chasing perfect programs. This boring setup worked.", "YouTube Shorts", "Proof breakdown", "save", "I program hop and waste years.", "What Did You Drive Before?", "The phrase boring setup signals practical value instead of hype."],
  ["peptides-basics", "Most guys want peptides before they can hit protein for 7 days.", "TikTok", "Peptide vs basics", "comment", "I want optimization before I've mastered the basics.", "REDRED", "It filters the audience and sparks debate without giving medical advice."],
  ["pro-peptide", "Being pro-peptide doesn't mean being anti-discipline.", "TikTok", "Peptide education / opinion", "trust", "I'm confused about peptides, steroids, TRT, supplements, and what actually matters.", "Sparks", "It states a clear, responsible position people can respond to."],
  ["natural-stage-ready", "I used to think natural lifters couldn't look stage-ready. I was wrong.", "YouTube Shorts", "Transformation reveal", "trust", "I thought natural lifters couldn't look like that.", "Letter To My 13 Year Old Self - Instrumental", "It attacks a limiting belief with personal proof."],
  ["first-cut", "What I wish I knew before my first real cut.", "All platforms", "What I wish I knew", "save", "Nothing I tried worked.", "What Did You Drive Before?", "A familiar format with a specific transformation promise is easy to watch."],
  ["invisible-build", "If you feel invisible, build something nobody can ignore.", "Instagram Reels", "Pain point storytelling", "share", "I feel invisible.", "Sparks", "It makes the viewer feel seen before asking them to change."],
  ["trash-program", "Optimization doesn't save a trash program.", "TikTok", "Talking head hot take", "comment", "I want optimization before I've mastered the basics.", "REDRED", "Short, quotable, and built for disagreement."],
  ["205-fdoe", "My full day of eating at 205 before prep starts cutting back.", "Instagram Reels", "Full day of eating / FDOE", "save", "I don't know how to eat.", "Runway", "The weight and prep context make the food content specific."],
  ["fat-kid-quads", "The fat kid who couldn't run a mile is checking quad feathering now.", "TikTok", "Transformation reveal", "reach", "I never thought I could compete.", "Letter To My 13 Year Old Self - Instrumental", "The body detail makes the transformation feel real."],
  ["sleep-food-bloodwork", "Before you ask about peptides, show me your sleep, food, training, and bloodwork.", "TikTok", "Peptide vs basics", "comment", "I want recovery help, but I don't know what is smart, legal, or responsible.", "REDRED", "Responsible and blunt is a strong trust-builder."],
  ["old-body-coach", "My old body taught me more than any coach ever could.", "Instagram Reels", "Pain point storytelling", "trust", "My confidence is gone.", "Sparks", "It turns the transformation into wisdom, not bragging."],
  ["natural-rule", "The first rule of natural bodybuilding: stop lying to yourself.", "TikTok", "Talking head hot take", "comment", "I want the physique but have no roadmap.", "Runway", "It creates tension without accusing anyone else."],
  ["hoodie-first-step", "If you're 250 and embarrassed, start here.", "YouTube Shorts", "What I wish I knew", "conversion", "I feel invisible.", "What Did You Drive Before?", "It speaks directly to the most qualified viewer."],
  ["same-meals-abs", "The most unsexy part of getting abs: eating the same meals again.", "Instagram Reels", "Full day of eating / FDOE", "save", "I don't know how to eat.", "Sparks", "It makes boring consistency feel like the secret."],
  ["no-more-hiding", "First prep update: 205 lbs and no more hiding.", "All platforms", "Prep diary / day in the life", "loyalty", "My confidence is gone.", "Runway", "A simple recurring title can anchor the prep journey."],
  ["peptides-not-same", "Peptides, TRT, steroids, supplements: stop pretending they're the same conversation.", "YouTube Shorts", "Myth-busting", "save", "I'm confused about peptides, steroids, TRT, supplements, and what actually matters.", "What Did You Drive Before?", "Searchable phrasing makes it useful beyond one trend cycle."],
  ["discipline-not-dose", "The dose doesn't matter if the discipline is fake.", "TikTok", "Peptide education / opinion", "comment", "I want optimization before I've mastered the basics.", "REDRED", "It is provocative while keeping the message centered on basics."],
  ["lean-exposed", "Nobody told me getting lean would expose my lack of structure.", "All platforms", "Pain point storytelling", "trust", "Nothing I tried worked.", "Letter To My 13 Year Old Self - Instrumental", "It names the hidden problem underneath failed diets."],
].map(([id, title, platform, format, funnel, pain, audio, why]) => ({
  id,
  title,
  platform,
  format,
  funnel,
  pain,
  audio,
  why,
}));

const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");
const statusText = document.getElementById("generation-status");
const workspace = document.getElementById("workspace");
const ideaList = document.getElementById("idea-list");
const ideaCount = document.getElementById("idea-count");
const formatFilter = document.getElementById("format-filter");
const packageEmpty = document.getElementById("package-empty");
const packageContent = document.getElementById("package-content");
const tagBank = document.getElementById("tag-bank");
const briefTitle = document.getElementById("brief-title");
const briefCopy = document.getElementById("brief-copy");
const toast = document.getElementById("toast");

let generated = false;
let selectedId = "";

function renderTags() {
  tagBank.innerHTML = hashtags.map((tag) => `<span>${tag}</span>`).join("");
}

function getVisibleIdeas() {
  const filter = formatFilter.value;
  return filter === "all" ? ideas : ideas.filter((idea) => idea.format === filter);
}

function renderIdeas() {
  const visibleIdeas = getVisibleIdeas();
  ideaCount.textContent = String(visibleIdeas.length);
  ideaList.innerHTML = visibleIdeas.map((idea, index) => {
    const active = idea.id === selectedId ? "active" : "";
    return `
      <button class="idea-card ${active}" type="button" data-id="${idea.id}">
        <span class="idea-number">${String(index + 1).padStart(2, "0")}</span>
        <strong>${idea.title}</strong>
        <small>${idea.platform} / ${idea.format}</small>
        <span class="idea-meta"><span>${idea.funnel}</span><span>${idea.audio}</span></span>
      </button>
    `;
  }).join("");
}

function generateIdeas() {
  generated = true;
  selectedId = ideas[0].id;
  workspace.hidden = false;
  statusText.textContent = `Generated ${ideas.length} ideas`;
  generateButton.textContent = "Regenerate Ideas";
  briefTitle.textContent = "Sample content pack ready.";
  briefCopy.textContent =
    "This prototype shows the full workflow. The live version can connect this button to trend research and your Codex content-generation skill.";
  renderIdeas();
  renderPackage(ideas[0]);
}

function resetApp() {
  generated = false;
  selectedId = "";
  workspace.hidden = true;
  statusText.textContent = "Waiting to generate";
  generateButton.textContent = "Generate 24 Ideas";
  briefTitle.textContent = "Ready when you are.";
  briefCopy.textContent =
    "This static prototype loads a complete sample workflow. A backend can later connect this button to live research and the Codex skill.";
  packageEmpty.hidden = false;
  packageContent.hidden = true;
  formatFilter.value = "all";
}

function selectIdea(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea) return;
  selectedId = id;
  renderIdeas();
  renderPackage(idea);
}

function renderPackage(idea) {
  const peptide = idea.format.toLowerCase().includes("peptide") || idea.title.toLowerCase().includes("peptide");
  const caption = buildCaption(idea);
  packageEmpty.hidden = true;
  packageContent.hidden = false;
  packageContent.innerHTML = `
    <div class="package-title">
      <span class="format-chip">${idea.format}</span>
      <h2>${idea.title}</h2>
      <p>${idea.why}</p>
    </div>

    <div class="detail-grid">
      <article class="detail-card"><span>Platform</span><strong>${idea.platform}</strong></article>
      <article class="detail-card"><span>Funnel</span><strong>${idea.funnel}</strong></article>
      <article class="detail-card"><span>Audio</span><strong>${idea.audio}</strong></article>
    </div>

    <article class="script-card">
      <h3>Hook, 0-3 Seconds</h3>
      <p>${buildHook(idea)}</p>
    </article>

    <article class="script-card">
      <h3>On-Screen Text</h3>
      <p>${buildOverlay(idea)}</p>
    </article>

    <article class="script-card">
      <h3>Body Script</h3>
      <p>${buildScript(peptide)}</p>
    </article>

    <div class="two-column">
      <article class="script-card">
        <h3>Shot List</h3>
        <p>Open with old hoodie photo or current physique proof. Cut to training, food prep, check-in clips, and logbook details. Overlay 250, 180, 205, and first natural prep. End with direct eye contact or a clean posing check-in.</p>
      </article>
      <article class="script-card">
        <h3>Editing Notes</h3>
        <p>Show proof inside the first second. Use fast cuts until the insight, then slow down the last line. Keep bold subtitles on every sentence. Let ${idea.audio} sit under the voiceover.</p>
      </article>
    </div>

    <article class="script-card">
      <h3>Website Segue</h3>
      <p>${buildSegue(idea, peptide)}</p>
    </article>

    <article class="script-card">
      <h3>Caption</h3>
      <p class="caption-text">${caption}</p>
      <button class="copy-button" type="button" data-copy="${encodeURIComponent(caption)}">Copy Caption</button>
    </article>

    <div class="two-column">
      <article class="script-card">
        <h3>Pinned Comment</h3>
        <p>${buildPinnedComment(peptide)}</p>
      </article>
      <article class="script-card">
        <h3>Reply Comment Strategy</h3>
        <ol class="reply-list">
          <li>What did you actually do first?</li>
          <li>How long did the transformation take?</li>
          <li>Can you break down the full plan?</li>
        </ol>
      </article>
    </div>
  `;
}

function buildHook(idea) {
  if (idea.id === "hoodies-stage") {
    return "I used to hide my body in hoodies, and now I'm prepping to stand on stage half-naked.";
  }
  return idea.title;
}

function buildOverlay(idea) {
  if (idea.funnel === "save") return "Stop guessing. Start structuring.";
  if (idea.funnel === "comment") return "Hot take. Most people skip the boring part.";
  if (idea.funnel === "conversion") return "250 lbs and embarrassed? Start here.";
  return "250 lbs invisible. Now first natural prep.";
}

function buildScript(peptide) {
  if (peptide) {
    return "I support education. I support transparency. I support bloodwork, legal compliance, and talking to a qualified medical professional. What I do not support is guys using optimization as a way to avoid the basics. If your food is random, your sleep is trash, and your training changes every week, peptides are not the conversation yet. Build the foundation first. Then have the responsible conversation.";
  }
  return "I was 250 lbs and invisible. I picked clothes to hide in, avoided mirrors, and thought the problem was motivation. It wasn't. I had no structure. Cutting to 180 taught me food. Building to 205 taught me training. Now prep is going to expose everything. This is not a fitness phase anymore. This is the version I built after I got tired of hiding.";
}

function buildSegue(idea, peptide) {
  if (peptide) return "I broke down my full stance on optimization, bloodwork, and the basics on my site.";
  if (idea.funnel === "save") return "Full plan and macros are on my website.";
  if (idea.funnel === "conversion") return "I made a guide for people exactly where I was. Link in bio.";
  if (idea.format === "Transformation reveal") return "The exact program that did this is on my site.";
  return "I made the full breakdown available on my site.";
}

function buildCaption(idea) {
  return [
    "This is the part most people miss.",
    "",
    idea.title,
    `Built for the person thinking: ${idea.pain}`,
    "Structure first. Hype later.",
    "",
    "The full breakdown is on my website.",
    "",
    hashtags.join(" "),
  ].join("\n");
}

function buildPinnedComment(peptide) {
  if (peptide) {
    return "Full stance is on my site: optimization, bloodwork, legality, medical supervision, and why the basics still come first.";
  }
  return "If this is where you are right now, I put the full structure I wish I had at 250 on my site.";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

generateButton.addEventListener("click", generateIdeas);
resetButton.addEventListener("click", resetApp);
formatFilter.addEventListener("change", () => {
  if (!generated) return;
  const visibleIdeas = getVisibleIdeas();
  selectedId = visibleIdeas[0]?.id || "";
  renderIdeas();
  if (visibleIdeas[0]) renderPackage(visibleIdeas[0]);
});

ideaList.addEventListener("click", (event) => {
  const card = event.target.closest(".idea-card");
  if (!card) return;
  selectIdea(card.dataset.id);
});

packageContent.addEventListener("click", (event) => {
  const copyButton = event.target.closest("[data-copy]");
  if (!copyButton) return;
  const text = decodeURIComponent(copyButton.dataset.copy);
  navigator.clipboard?.writeText(text).then(() => showToast("Caption copied."));
});

renderTags();
