/* Ask Candidates — content configuration. All user-facing copy lives here. */

const MESSAGE_TEMPLATES = [
  {
    angle: "voter",
    body: "I'm a voter in [your state or district], and Ukraine is one of the issues I care about this year.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on continued U.S. support for Ukraine and pressure on Russia? Please make Ukraine part of what you talk about during this campaign."
  },
  {
    angle: "campaign",
    body: "You are asking for votes this year. I'm asking where you stand on Ukraine.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Do you support continued U.S. help for Ukraine and stronger pressure on Russia? Please make your position clear publicly during the campaign."
  },
  {
    angle: "air-defense",
    body: "Russia keeps attacking Ukrainian cities and civilians. Ukraine needs air defense and reliable U.S. help to protect its people.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on helping Ukraine defend its civilians and keeping pressure on Russia? Please make your position clear during this campaign."
  },
  {
    angle: "specific",
    body: "I want candidates in this race to be clear about Ukraine.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Do you support strong U.S. support for Ukraine, sanctions on Russia, and using frozen Russian assets to help Ukraine? Please say where you stand in your campaign materials, public comments, or candidate forums."
  },
  {
    angle: "children",
    body: "Russia must return the children taken from Ukraine. This should not be treated like a normal political issue.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on U.S. support for Ukraine and accountability for Russia? Please say clearly where you stand during this campaign."
  },
  {
    angle: "accountability",
    body: "Candidates are running for office this year. I'm a voter who wants to know where you stand on Ukraine.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Do you support strong, reliable U.S. help for Ukraine and real pressure on Russia? Please be clear about this while voters are deciding who to support."
  },
  {
    angle: "still-happening",
    body: "Russia is still attacking Ukraine. I want to know where you stand.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Do you support continued U.S. help for Ukraine? Please make your position clear during this campaign."
  },
  {
    angle: "conversation",
    body: "I want Ukraine to be part of the campaign conversation this year.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on U.S. support for Ukraine and pressure on Russia? Please make Ukraine part of what you talk about during this campaign."
  },
  {
    angle: "security",
    body: "Supporting Ukraine is in America's interest, and it does not require sending U.S. troops.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on strong U.S. support for Ukraine as it defends itself against Russia? Please make your position clear during this campaign."
  },
  {
    angle: "civilians",
    body: "Russia has been attacking Ukrainian civilians for years. I want to know where you stand.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Do you support continued U.S. help for Ukraine and holding Russia accountable? Please say so publicly during this campaign."
  },
  {
    angle: "momentum",
    body: "Ukraine has shown it can stop Russia and hit back. U.S. support needs to be clear, strong, and reliable.",
    personalize: "[Type one sentence in your own words.]",
    ask: "Where do you stand on helping Ukraine keep fighting and keeping pressure on Russia? Please make your position clear during this campaign."
  },
];

const SIGNOFF = "Thank you,\n[Your name]\n[Your city or region]";

const SHARE_COMMENTS = [
  "I used this to ask my 2026 House and Senate candidates where they stand on supporting Ukraine. Took a few minutes:",
  "Candidates are asking for votes. I asked mine where they stand on supporting Ukraine:",
  "This makes it easy to ask 2026 candidates where they stand on Ukraine. I sent mine:",
  "If you care about Ukraine but haven't known what to do, this is one easy first step:",
  "The next few months are a chance to make Ukraine part of the campaign conversation. I used this to ask my candidates where they stand:",
];

const SITE_URL = "https://still-watching-ukraine.netlify.app/";
