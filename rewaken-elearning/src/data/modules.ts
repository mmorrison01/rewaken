export interface Section {
  title: string;
  type: 'text' | 'video' | 'checklist' | 'table' | 'tips';
  content: string;
  videoPlaceholder?: string;
  videoUrl?: string;
  slide: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  coverSlide: string;
  sections: Section[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "GLP-1 Medications Explained",
    subtitle: "Understanding how GLP-1 agonists work with your body",
    icon: "\u{1F48A}",
    color: "#457B8D",
    coverSlide: "/slides/m1_1.jpg",
    sections: [
      { title: "What Are GLP-1 Agonists?", type: "text", slide: "/slides/m1_3.jpg", videoUrl: "https://youtu.be/J7Jgu6XDlYI", content: "GLP-1 Receptor Agonists are medications that mimic the action of the body\u2019s natural hormone called Glucagon-like Peptide-1 (GLP-1). They were originally developed to treat Type 2 Diabetes Mellitus, and more recently many are used for weight management and metabolic wellness.\n\nThink of them as a friendly coach inside your body \u2014 one that gently nudges your hunger down, keeps your blood sugar steady, and encourages your body to use energy more efficiently. They aren\u2019t stimulants, appetite suppressants, or magic fat burners \u2014 instead, they work with your body\u2019s own systems to make healthy, lasting weight loss possible." },
      { title: "How GLP-1s Work", type: "video", slide: "/slides/m1_2.jpg", videoPlaceholder: "GLP-1 Mechanism of Action", videoUrl: "https://youtu.be/sW0eoiPsaUg", content: "GLP-1s act on multiple parts of the body to create a \u201cmetabolic support system\u201d:\n\n**Your Appetite \u2013 The Hunger Controller**\nGLP-1s tell your brain: \u201cYou\u2019ve had enough for now.\u201d Meals feel more satisfying, cravings reduce, and unnecessary snacking becomes easier to resist.\n\n**Your Digestion \u2013 The Satiety Booster**\nBy slowing stomach emptying, GLP-1s make you feel full longer. You can eat smaller portions, feel satisfied, and avoid binge triggers.\n\n**Your Blood Sugar \u2013 The Balancer**\nGLP-1s stimulate your pancreas to release insulin when it\u2019s needed most and lower glucagon. The result: more stable energy levels and fewer sugar spikes.\n\n**Your Metabolism \u2013 The Muscle Protector**\nWhen paired with good nutrition and exercise, GLP-1s help your body focus on burning fat instead of muscle." },
      { title: "Semaglutide vs. Tirzepatide", type: "table", slide: "/slides/m1_4.jpg", videoUrl: "https://youtu.be/aKt9FUHjoAo", content: "**Semaglutide** \u2014 A GLP-1 receptor agonist that primarily targets hunger signals and blood sugar control. Injected once per week, starting at 0.25 mg and gradually increased to 2.4 mg. Average weight loss: ~15% of body weight. Side effects include nausea, fatigue, constipation, or bloating \u2014 often temporary.\n\n**Tirzepatide** \u2014 A dual agonist activating both GLP-1 and GIP hormones. GIP helps regulate insulin release and fat storage, giving it a slightly stronger effect. Starting dose: 2.5 mg, gradually increased to 15 mg. Average weight loss: 20% or more of body weight. Similar side effects but sometimes more pronounced early on.\n\nBoth are weekly injections requiring gradual dose increases. They work best paired with balanced nutrition, adequate protein, and consistent movement." },
      { title: "Dosing Schedule Overview", type: "table", slide: "/slides/m1_5.jpg", videoUrl: "https://youtu.be/AIGpg34Ad0A", content: "**Semaglutide Typical Progression:**\n\u2022 Weeks 1\u20134: 0.25 mg \u2014 Gentle introduction\n\u2022 Weeks 5\u20138: 0.5 mg \u2014 Improved appetite regulation\n\u2022 Weeks 9\u201312: 1 mg \u2014 Deeper appetite and glucose control\n\u2022 Weeks 13\u201316: 1.7 mg \u2014 Near-target dose\n\u2022 Week 17+: 2.4 mg \u2014 Maintenance dose\n\n**Tirzepatide Typical Progression:**\n\u2022 Weeks 1\u20134: 2.5 mg \u2014 Starting phase\n\u2022 Weeks 5\u20138: 5 mg \u2014 Builds hunger control\n\u2022 Weeks 9\u201312: 7.5 mg \u2014 Moderate dose\n\u2022 Weeks 13\u201316: 10 mg \u2014 Strengthens results\n\u2022 Week 17+: Up to 15 mg \u2014 Maintenance\n\nYour provider may adjust, slow down, or pause increases based on how your body responds. There is no \u201cone-size-fits-all\u201d timeline." },
      { title: "Injection Instructions", type: "text", slide: "/slides/m1_6.jpg", videoUrl: "https://youtu.be/6maLGnykEek", content: "**Consistency Is Key:** Inject once per week on the same day and at the same time. Choose a day that\u2019s easy to remember \u2014 like \u201cWellness Wednesday\u201d or \u201cSelf-Care Sunday.\u201d\n\n**Injection Technique:** GLP-1 medications are given just under the skin (subcutaneous), not into the muscle or vein. Recommended areas: belly (2+ inches from navel), front of upper thighs, or outer back of upper arms.\n\n**Rotate Injection Sites Weekly** to avoid irritation, bruising, or tenderness.\n\n**Comfort Tips:** The needles are very small. Inject slowly and calmly, take a few deep breaths beforehand. Some clients prefer to let the medication warm to room temperature for a few minutes before injecting.\n\nYou don\u2019t need to \u201cfeel it working\u201d right away. GLP-1s work gradually \u2014 first by adjusting digestion and appetite signals, then by improving blood sugar and metabolic balance." },
      { title: "First Shot Checklist", type: "checklist", slide: "/slides/m1_7.jpg", videoUrl: "https://youtu.be/cHN0Bmgm-aE", content: "**Before Your Shot:**\n\u25a1 Review your physician\u2019s instructions \u2014 confirm prescribed dose and schedule\n\u25a1 Gather supplies: GLP-1 Pen/Syringe, new pen needle, alcohol wipe, sharps container\n\u25a1 Wash hands thoroughly with soap and warm water\n\u25a1 Choose injection site: belly (2\u201d from navel), upper thigh, or upper arm\n\u25a1 Let medication sit at room temperature for 10\u201315 minutes if refrigerated\n\u25a1 Take a few slow, deep breaths \u2014 you\u2019ve got this!\n\n**During Your Injection:**\n\u25a1 Clean site with alcohol wipe \u2014 let it dry fully\n\u25a1 Remove pen cap and attach a new needle\n\u25a1 Dial your prescribed dose\n\u25a1 Pinch the skin lightly and insert needle straight in\n\u25a1 Press and hold injection button for 5\u201310 seconds\n\u25a1 Remove needle, dispose safely in sharps container\n\n**After Your Shot:**\n\u25a1 Rotate injection sites weekly\n\u25a1 Note the day and time you injected\n\u25a1 Have a light, protein-rich snack if needed\n\u25a1 Stay hydrated \u2014 aim for plenty of water or electrolytes\n\u25a1 Monitor how you feel and jot down any questions for your provider" }
    ]
  },
  {
    id: 2,
    title: "Common Side Effects Explained",
    subtitle: "What to expect and why you\u2019re not alone",
    icon: "\u{1FA7A}",
    color: "#5A9AAF",
    coverSlide: "/slides/m2_1.jpg",
    sections: [
      { title: "You\u2019re Not Alone", type: "video", slide: "/slides/m2_2.jpg", videoPlaceholder: "Common Side Effects Introduction", videoUrl: "https://youtu.be/iAY5idmBj68", content: "If you\u2019re experiencing symptoms like nausea, fatigue, or digestive shifts \u2014 you\u2019re not doing anything wrong. These side effects are very common and often temporary. They are signs that your body is adjusting to the medication \u2014 and there are tools and strategies to manage every one of them." },
      { title: "Top 6 Most Common Side Effects", type: "text", slide: "/slides/m2_3.jpg", videoUrl: "https://youtu.be/dV9_Mlk9MXo", content: "**Nausea** \u2014 A mild queasiness or a \u201ctoo full\u201d sensation. GLP-1s slow how quickly food leaves your stomach. Eat smaller, slower meals and stop when 70\u201380% full.\n\n**Constipation** \u2014 Fewer or harder bowel movements. Because digestion slows, food moves through your intestines more gradually. Drink plenty of water and add fiber-rich foods gradually.\n\n**Fatigue** \u2014 Low energy, brain fog, needing extra naps. When appetite decreases, you may unintentionally eat too few calories. Prioritize protein at every meal.\n\n**Bloating** \u2014 Fullness, tightness, or gassiness. With slower digestion, food and gas remain longer. Eat slowly and chew food thoroughly to reduce swallowed air.\n\n**Diarrhea** \u2014 Loose or more frequent stools. Your digestive system is adjusting to changes in motility. Stay hydrated with broths or electrolyte drinks.\n\n**Appetite Changes** \u2014 Feeling full quickly, lack of interest in food, or aversions to certain textures or smells. GLP-1s directly act on appetite centers in your brain. Focus on high-protein, nutrient-dense meals." },
      { title: "Why These Side Effects Happen", type: "video", slide: "/slides/m2_4.jpg", videoPlaceholder: "Understanding Side Effects", videoUrl: "https://youtu.be/x30wBEpG9hw", content: "GLP-1 medications work by mimicking the hormones your body releases after eating \u2014 signaling fullness and slowing digestion. This process reduces hunger and supports steady weight loss, but your digestive system needs time to adjust.\n\n**Digestive Changes:** Nausea, bloating, constipation or diarrhea, and temporary fatigue are often mild and short-lived as your body becomes accustomed to the medication.\n\n**Appetite & Brain Signal Adjustments:** You might experience sudden appetite suppression, a disconnect between old eating habits and new hunger cues, or sensitivity to smells or richer foods. These are signs your body is rebalancing its relationship with food and fullness." },
      { title: "When Side Effects Typically Appear", type: "text", slide: "/slides/m2_5.jpg", videoUrl: "https://youtu.be/eW8XrVyxH5w", content: "**Weeks 1\u20132: The Introduction Phase**\nMild nausea, early fullness, fatigue, and reduced hunger as GLP-1s begin resetting hunger hormones.\n\n**Weeks 3\u20134: The Digestive Adjustment Phase**\nConstipation, bloating, and fluctuating appetite as the gut calibrates to slower motility.\n\n**During Dose Increases: The Sensitivity Reset**\nSide effects can briefly reappear \u2014 a short return of nausea, fullness, or fatigue. Usually resolves within days.\n\n**After Dose Stabilization: The Balance Phase**\nImproved energy, steadier appetite cues, comfortable portions. Your body has established a new balance.\n\nMost clients find that side effects peak within the first few days after each dose increase and then taper off." },
      { title: "What This Means for You", type: "text", slide: "/slides/m2_5.jpg", videoUrl: "https://youtu.be/dz3k8oB5D4w", content: "These symptoms are temporary. Your body is adapting to something new. You\u2019ll learn how to reduce and manage them in upcoming modules. You are not expected to just \u201cpush through.\u201d\n\nThis program is designed to give you clear, gentle, and effective tools to support your body through every phase." }
    ]
  },
  {
    id: 3,
    title: "Nausea \u2013 Why It Happens + What Helps",
    subtitle: "Gentle strategies for your most common concern",
    icon: "\u{1F33F}",
    color: "#6BAF8D",
    coverSlide: "/slides/m3_1.jpg",
    sections: [
      { title: "Why Nausea Happens on GLP-1s", type: "video", slide: "/slides/m3_2.jpg", videoPlaceholder: "Understanding Nausea on GLP-1s", videoUrl: "https://youtu.be/I4D13L6gGI4", content: "Nausea is one of the most common early sensations \u2014 and while it\u2019s not pleasant, it\u2019s actually a sign that the medication is doing its job. Your body is learning to process food and hunger signals in a new way.\n\n**Slower Stomach Emptying:** GLP-1s slow the rate at which food leaves your stomach. This helps you stay full longer \u2014 one of the key mechanisms behind weight loss.\n\n**Extra Fullness = Temporary Discomfort:** Food remains in your stomach longer, so you may feel \u201coverly full\u201d even after eating a small meal.\n\n**Changes in Food Preferences:** Some clients notice food aversions \u2014 particularly to rich, fried, or strongly scented foods. Many people find their tastes shift toward lighter, fresher foods over time.\n\nFor most people, nausea is temporary \u2014 it typically peaks during the first few weeks or after each dose increase, then gradually fades." },
      { title: "5 Proven Relief Strategies", type: "tips", slide: "/slides/m3_3.jpg", videoUrl: "https://youtu.be/PlnoOgd8DXo", content: "**1. Eat Smaller, Slower Meals**\nTake small bites, chew thoroughly, pause between bites, and stop when satisfied \u2014 not stuffed. Even a few extra minutes can prevent nausea.\n\n**2. Avoid Rich, Fried, or Spicy Foods**\nSkip greasy, fried, or creamy meals. Choose gentle foods: eggs, toast, rice, bananas, broth-based soups.\n\n**3. Use Peppermint, Ginger & Upright Posture**\nGinger tea, chews, or capsules settle nausea. Peppermint tea relaxes stomach muscles. Stay upright 30\u201360 minutes after eating.\n\n**4. Hydrate Between Meals \u2014 Not With Meals**\nSip water or electrolytes throughout the day. Avoid large drinks during meals, which increase stomach volume.\n\n**5. Rest When You Need To**\nTake short naps if fatigued. Aim for 7\u20139 hours of quality sleep. Avoid overexertion during early adjustment weeks." }
    ]
  },
  {
    id: 4,
    title: "Relieving Constipation Fast",
    subtitle: "Hydration, fiber, and movement strategies",
    icon: "\u{1F4A7}",
    color: "#457B8D",
    coverSlide: "/slides/m4_1.jpg",
    sections: [
      { title: "Why Constipation Happens", type: "video", slide: "/slides/m4_2.jpg", videoPlaceholder: "Constipation on GLP-1s Explained", videoUrl: "https://youtu.be/SiehXBJRxzc", content: "Constipation is one of the most common \u2014 and most frustrating \u2014 early side effects. It often shows up in the first few weeks or after each dose increase.\n\n**Slower Gut Movement:** GLP-1s delay how quickly food leaves your stomach and travels through your intestines.\n\n**Smaller Meals = Less Output:** Because you\u2019re eating smaller portions, there\u2019s less material moving through your GI tract.\n\n**Dehydration and Low Fiber Intake:** When appetite drops, people often drink and eat less \u2014 especially fiber-rich foods. Without enough fluid and fiber, stools become dry and harder to pass." },
      { title: "4 Effective Relief Strategies", type: "tips", slide: "/slides/m4_3.jpg", videoUrl: "https://youtu.be/U1Q8lwF6uNk", content: "**1. Hydration Is Your #1 Hero (80\u2013100 oz/day)**\nSip water consistently throughout the day. Try electrolyte powders (LMNT, Nuun, Ultima). Flavor water with lemon, cucumber, or mint.\n\n**2. Add Magnesium \u2014 With Your Provider\u2019s Guidance**\nTry magnesium citrate or glycinate (200\u2013400 mg/day). Take it in the evening to support both digestion and restful sleep. Always check with your provider first.\n\n**3. Gentle Daily Movement**\nA 10\u201315 minute walk after meals, gentle yoga or stretching in the morning, and standing breaks during the day all stimulate peristalsis.\n\n**4. Focus on Fiber-Rich Foods**\nChia seeds (try chia pudding!), berries, leafy greens, oats, apples & pears with skin, ground flaxseed, and avocado. Always pair fiber with water \u2014 it needs hydration to work." },
      { title: "When to Call Your Provider", type: "text", slide: "/slides/m4_4.jpg", videoUrl: "https://youtu.be/_51SkcGIduI", content: "Reach out to your Rewakenlife physician if:\n\u2022 You haven\u2019t had a bowel movement in 3+ days\n\u2022 You\u2019re experiencing severe bloating, cramping, or pain\n\u2022 Over-the-counter support doesn\u2019t help\n\nYou may need a personalized plan or medication adjustment \u2014 and that\u2019s completely okay." }
    ]
  },
  {
    id: 5,
    title: "Fatigue \u2013 Boosting Your Energy",
    subtitle: "Natural energy support during adjustment",
    icon: "\u26A1",
    color: "#5A9AAF",
    coverSlide: "/slides/m5_1.jpg",
    sections: [
      { title: "Why Fatigue Happens", type: "video", slide: "/slides/m5_2.jpg", videoPlaceholder: "Understanding GLP-1 Fatigue", videoUrl: "https://youtu.be/PlnoOgd8DXo", content: "It\u2019s completely normal to experience a temporary drop in energy when starting GLP-1 medications.\n\n**Eating Less = Fewer Calories** \u2014 Your reduced appetite means less fuel for daily activities.\n\n**Dehydration** \u2014 Nausea, appetite changes, or simply not drinking enough water can leave you feeling drained.\n\n**Electrolyte Imbalance** \u2014 Reduced food intake can drop key electrolytes like sodium, potassium, and magnesium.\n\n**Poor Sleep Quality** \u2014 Adjusting to a new routine or medication can disrupt sleep.\n\n**Body Adaptation** \u2014 Your metabolism is recalibrating as your body adjusts to changes in appetite, digestion, and nutrient intake." },
      { title: "4 Ways to Boost Energy Naturally", type: "tips", slide: "/slides/m5_3.jpg", videoUrl: "https://youtu.be/987IDkjf6e8", content: "**1. Fuel Up with Protein at Every Meal**\nAim for 20\u201330g per meal. Options: eggs, Greek yogurt, cottage cheese, protein shakes, chicken, turkey, tofu, beans. Spread protein evenly throughout the day.\n\n**2. Move Gently, But Consistently**\n10\u201320 minute walks after meals, yoga, stretching, gentle rebounding. 5-minute \u201cmini-movements\u201d during afternoon slumps. Movement also supports digestion and reduces nausea.\n\n**3. Prioritize Sleep**\nKeep your room cool (65\u201368\u00b0F). Avoid screens 1 hour before bed. Use a wind-down routine. Go to bed and wake up at consistent times. Consider magnesium glycinate before bed.\n\n**4. Hydrate Strategically**\nAim for 80\u2013100 oz/day. Drink between meals, not all at once. Include electrolytes daily \u2014 LMNT, Liquid IV, Ultima, or coconut water. DIY: pinch of sea salt + splash of juice + water." }
    ]
  },
  {
    id: 6,
    title: "Diarrhea & Bloating \u2013 Soothing Tips",
    subtitle: "Calming your digestive system during adjustment",
    icon: "\u{1FAD6}",
    color: "#6BAF8D",
    coverSlide: "/slides/m6_1.jpg",
    sections: [
      { title: "Why Gut Discomfort Happens", type: "video", slide: "/slides/m6_2.jpg", videoPlaceholder: "Diarrhea & Bloating on GLP-1s", videoUrl: "https://youtu.be/D6pHXT4AaO8", content: "GLP-1 medications slow down how quickly your stomach empties \u2014 a process called delayed gastric emptying. This helps you feel full longer but can temporarily change how your body handles food.\n\nYou may notice: harder-to-digest foods feel heavier, shifts in gut comfort as eating patterns adjust, and extra gas or bloating as gut bacteria change temporarily." },
      { title: "How GLP-1s Affect Digestion", type: "text", slide: "/slides/m6_3.jpg", videoUrl: "https://youtu.be/v-LX7GMfKYs", content: "GLP-1 medications slow down how quickly your stomach empties \u2014 a process called delayed gastric emptying. This helps you feel full longer but can temporarily change how your body handles food.\n\nSome effects you might notice:\n\u2022 Harder-to-digest foods: Greasy, rich, dairy-heavy, or highly processed foods may feel heavier on your stomach.\n\u2022 Shifts in gut comfort: As your eating patterns adjust, your gut bacteria may change too, which can lead to extra gas or bloating for a short time.\n\nThese changes are normal while your body adapts. Choosing gentler, whole-food options and spacing out meals can help your digestion stay smooth." },
      { title: "Digestive Support Checklist", type: "checklist", slide: "/slides/m6_4.jpg", videoUrl: "https://youtu.be/gbicUOMFaVU", content: "**Avoid These (At Least for Now):**\n\u25a1 Carbonated drinks \u2014 gas expands and worsens bloating\n\u25a1 Artificial sweeteners \u2014 sugar alcohols like xylitol, erythritol, sorbitol\n\u25a1 Dairy \u2014 try lactose-free or plant-based alternatives\n\u25a1 Greasy, fried, or overly rich foods\n\n**Add Soothing Gut Helpers:**\n\u25a1 Ginger tea \u2014 reduces cramping, nausea, and diarrhea\n\u25a1 Peppermint tea \u2014 relaxes the digestive tract and eases gas\n\u25a1 Warm fluids \u2014 use warm water, broth, or teas to aid digestion\n\n**Stick to Bland, Easy-to-Digest Foods (BRAT Diet +):**\n\u25a1 Bananas \u2014 gentle on gut, rich in potassium\n\u25a1 Rice \u2014 plain white rice or congee\n\u25a1 Applesauce \u2014 unsweetened, helps firm stools\n\u25a1 Toast \u2014 dry or lightly buttered\n\u25a1 Plain oatmeal, bone broth, boiled potatoes, scrambled eggs" },
      { title: "When to Call Your Provider", type: "text", slide: "/slides/m6_5.jpg", videoUrl: "https://youtu.be/NetGLD8GSi4", content: "If you\u2019re experiencing:\n\u2022 Watery diarrhea for more than 2\u20133 days\n\u2022 Signs of dehydration (dizziness, dry mouth, no urine)\n\u2022 Severe cramping or fever\n\nDon\u2019t wait \u2014 your provider can help adjust your plan or recommend gentle medications." }
    ]
  },
  {
    id: 7,
    title: "Appetite Suppression",
    subtitle: "Nourishing your body when hunger fades",
    icon: "\u{1F37D}\uFE0F",
    color: "#457B8D",
    coverSlide: "/slides/m7_1.jpg",
    sections: [
      { title: "Why \u2018Not Hungry\u2019 Doesn\u2019t Mean \u2018Don\u2019t Eat\u2019", type: "video", slide: "/slides/m7_2.jpg", videoPlaceholder: "Managing Appetite Suppression", videoUrl: "https://youtu.be/bPrgqzDj_as", content: "One of the most noticeable effects of GLP-1 medications is how strongly they can suppress your appetite. You might feel completely uninterested in food, full after just a few bites, turned off by certain textures or smells, or skip meals entirely.\n\nWhile it might feel like a \u201cwin\u201d for weight loss, this appetite reduction can put your body at risk if you don\u2019t pay attention to nutrition. Eating smart preserves muscle mass, supports metabolism, maintains energy and focus, and promotes long-term success." },
      { title: "Key Nutrition Concepts", type: "tips", slide: "/slides/m7_3.jpg", videoUrl: "https://youtu.be/LqwnEV5u3SE", content: "**1. Nutrition Matters More Than Quantity**\nEven small meals can be packed with nutrients. Ask yourself: \u201cWhat does my body truly need?\u201d Focus on protein, fiber, healthy fats, and vitamins in every bite.\n\n**2. Liquids & Gentle Foods Can Fill the Gap**\nSmoothies with protein powder, greens, fruit, and nut butter. Soups with chicken, lentils, beans, or collagen. Greek yogurt or cottage cheese with berries and seeds. Low-sugar protein shakes.\n\n**3. Spread Meals Throughout the Day**\nTry 4\u20136 smaller meals instead of three large ones. Prioritize protein first, then add fruits, veggies, healthy fats, or gentle carbs.\n\nSample Schedule:\n\u2022 9:00 am \u2013 Smoothie with protein & greens\n\u2022 12:00 pm \u2013 Light lunch (soft veggies + protein)\n\u2022 3:00 pm \u2013 Snack (nuts, Greek yogurt, or protein bar)\n\u2022 6:00 pm \u2013 Soup or small dinner\n\u2022 8:00 pm \u2013 Light snack if needed" },
      { title: "Journaling Prompt: True Hunger vs. Habit", type: "text", slide: "/slides/m7_4.jpg", content: "GLP-1 medications can make it harder to distinguish physical hunger from emotional or social cues.\n\nAsk yourself:\n\u2022 Physical cues: \u201cDo I feel low energy, light-headed, or weak?\u201d\n\u2022 Emotional cues: \u201cAm I eating because I\u2019m bored, stressed, or at a social event?\u201d\n\nReflect on: What foods feel good and satisfying right now? What\u2019s one small way I can nourish myself today, even without appetite? How does my energy change when I eat something nutrient-dense?" }
    ]
  },
  {
    id: 8,
    title: "When to Call Your Provider",
    subtitle: "Red flags and when to seek help",
    icon: "\u{1F6A8}",
    color: "#C2544D",
    coverSlide: "/slides/m8_1.jpg",
    sections: [
      { title: "Understanding Your Body\u2019s Signals", type: "video", slide: "/slides/m8_2.jpg", videoPlaceholder: "Recognizing Red Flags", videoUrl: "https://youtu.be/IC1UaFU_dAI", content: "GLP-1 medications are powerful tools that influence digestion, appetite, and metabolism. Everyone responds differently. Most side effects are mild, temporary, and manageable \u2014 but your body sometimes gives red-flag signals that indicate something more serious.\n\nEarly recognition means safer treatment. When you track symptoms, your provider can adjust your dose, recommend changes, or intervene if needed. Understanding your body\u2019s responses helps reduce anxiety and lets you focus on progress." },
      { title: "Red Flag Symptoms", type: "checklist", slide: "/slides/m8_3.jpg", videoUrl: "https://youtu.be/-7tkNQ9Zihc", content: "**Call Your Provider Immediately If You Experience:**\n\n\u2757 Severe Abdominal Pain\n\u25a1 Sharp, persistent pain, especially if radiating to back or shoulder\n\u25a1 Could indicate pancreatitis or gallbladder issue\n\n\u2757 Vomiting for More Than 24 Hours\n\u25a1 Ongoing vomiting is not normal\n\u25a1 May lead to dehydration or medication intolerance\n\n\u2757 Yellowing of Skin or Eyes (Jaundice)\n\u25a1 Possible sign of liver or gallbladder issues\n\u25a1 Watch for dark urine or pale stools\n\n\u2757 Rapid Heartbeat, Dizziness, Fainting, or Confusion\n\u25a1 Could signal dehydration, low blood sugar, or other complications\n\n**Other Symptoms to Report:**\n\u25a1 Diarrhea or constipation lasting more than 5 days\n\u25a1 Inability to eat or drink enough to stay hydrated\n\u25a1 Extreme fatigue or weakness\n\u25a1 Noticeable muscle loss or rapid weight loss\n\u25a1 New or worsening mood changes" },
      { title: "What to Write Down Before You Call", type: "text", slide: "/slides/m8_4.jpg", videoUrl: "https://youtu.be/F1Rb3Ve--eI", content: "\u2714 Date and time symptoms started\n\u2714 Your last GLP-1 injection (medication + dose)\n\u2714 What you ate/drank recently\n\u2714 Other medications or supplements\n\u2714 Any home remedies you\u2019ve tried\n\nRemember: contacting your Rewakenlife physician is part of your program \u2014 not a failure. You are not burdening your doctor by asking questions. You are not failing the program if you need extra guidance. You are listening to your body and prioritizing your well-being." }
    ]
  },
  {
    id: 9,
    title: "Knowledge & Side Effects Worksheet",
    subtitle: "Journaling for relief and mindfulness",
    icon: "\u{1F4D3}",
    color: "#5A9AAF",
    coverSlide: "/slides/m9_1.jpg",
    sections: [
      { title: "Why Journaling Matters", type: "video", slide: "/slides/m9_2.jpg", videoPlaceholder: "Journaling for Your GLP-1 Journey", videoUrl: "https://youtu.be/gIqbdImUyk4", content: "Weight loss and health transformation aren\u2019t just physical \u2014 they\u2019re deeply mental and emotional too. Journaling helps you track what\u2019s working and what isn\u2019t, see progress you may otherwise miss, understand your body\u2019s signals, reduce anxiety by naming what you feel, and connect patterns between food, symptoms, mood, and habits.\n\nThis is not about perfection \u2014 it\u2019s about progress and self-compassion." },
      { title: "Daily Symptom Tracker", type: "checklist", slide: "/slides/m9_3.jpg", videoUrl: "https://youtu.be/rcoBmQiCKrA", content: "Use a 0\u20135 scale (0 = none, 5 = severe) to monitor daily:\n\n\u25a1 Nausea \u2014 note what you ate before\n\u25a1 Constipation \u2014 note what helped\n\u25a1 Diarrhea\n\u25a1 Bloating\n\u25a1 Fatigue\n\u25a1 Appetite Level\n\u25a1 Energy Level\n\u25a1 Sleep Quality\n\n**Mood Check-In:** Happy, Neutral, Anxious, Sad, Overwhelmed, Grateful\n\n**Self-Care Checklist:**\n\u25a1 Hydrated\n\u25a1 Took supplements/medications\n\u25a1 Moved my body\n\u25a1 Slept 7\u20138 hours\n\u25a1 Ate enough protein\n\u25a1 Practiced mindfulness" },
      { title: "Daily Mindfulness Prompts", type: "text", slide: "/slides/m9_4.jpg", videoUrl: "https://youtu.be/14aZmZD9K3s", content: "Reflect on your day \u2014 answer briefly or journal fully:\n\n\u2022 \u201cWhat helped me feel better today?\u201d\n\u2022 \u201cWhat symptom is improving?\u201d\n\u2022 \u201cWhat am I learning about my body?\u201d\n\u2022 \u201cWhat do I need more of tomorrow?\u201d\n\u2022 \u201cWhat\u2019s one thing I\u2019m proud of today?\u201d\n\nFill out your Symptom Tracker first thing in the morning and/or evening. Complete the Mood & Self-Care Check-In mid-day or evening. Reflect with the Mindfulness Prompts before bed to build awareness, track patterns, and reinforce body trust." }
    ]
  },
  {
    id: 10,
    title: "Track Habits, Build Progress",
    subtitle: "Daily & weekly habit tracking for lasting change",
    icon: "\u{1F4CA}",
    color: "#6BAF8D",
    coverSlide: "/slides/m10_1.jpg",
    sections: [
      { title: "Your Daily & Weekly Habit Tracker", type: "video", slide: "/slides/m10_2.jpg", videoPlaceholder: "Building Habits That Stick", videoUrl: "https://youtu.be/wuXcE9_Jvx8", content: "Consistency is key for lasting change \u2014 especially when managing new medications and lifestyle shifts. Tracking your habits helps you stay accountable without pressure, spot patterns and triggers, celebrate even small wins, and adjust your routine based on real feedback." },
      { title: "Daily Habits Checklist", type: "checklist", slide: "/slides/m10_3.jpg", videoUrl: "https://youtu.be/PetFlISHrzc", content: "Track your daily routines to stay consistent:\n\n\u{1F489} Medication (Injection)\n\u25a1 Took on schedule \u2014 note any side effects, injection site notes\n\n\u{1F4A7} Water Intake\n\u25a1 Aim for 80\u2013100 oz/day \u2014 include electrolytes if needed\n\n\u{1F6B6} Movement / Activity\n\u25a1 Walk, steps, yoga, or gentle exercise \u2014 note duration\n\n\u{1F957} Meals\n\u25a1 Focus on nutrient-dense, protein-rich meals \u2014 note what you ate\n\n\u{1F912} Symptoms Check\n\u25a1 Rate nausea, bloating, fatigue, constipation, appetite (0\u20135)" },
      { title: "Weekly Reflection", type: "text", slide: "/slides/m10_3.jpg", videoUrl: "https://youtu.be/Kg5WBdPpxNw", content: "**What were your 3 wins this week?**\nCelebrate any positive progress \u2014 consistency, small improvements, or mindset shifts all count.\n\n**What habits felt easy or challenging?**\nWhich routines were effortless? Which required more energy? Understanding this helps you identify what works for your lifestyle.\n\n**What will you focus on next week?**\nChoose 1\u20133 realistic, actionable goals. Keep focus on consistency over perfection.\n\nThis isn\u2019t about judgment \u2014 it\u2019s about learning what supports your body and mind. Over time, these reflections help you track progress, spot patterns in symptoms, and build habits that stick." }
    ]
  }
];
