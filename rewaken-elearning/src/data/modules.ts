export interface Section {
  title: string;
  type: 'text' | 'video' | 'checklist' | 'table' | 'tips';
  content: string;
  videoPlaceholder?: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  slides: string[];
  sections: Section[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "GLP-1 Medications Explained",
    subtitle: "Understanding how GLP-1 agonists work with your body",
    icon: "💊",
    color: "#457B8D",
    slides: ["/slides/m1_0.jpg","/slides/m1_1.jpg","/slides/m1_2.jpg","/slides/m1_3.jpg","/slides/m1_4.jpg","/slides/m1_5.jpg","/slides/m1_6.jpg","/slides/m1_7.jpg"],
    sections: [
      {
        title: "What Are GLP-1 Agonists?",
        type: "text",
        content: `GLP-1 Receptor Agonists are medications that mimic the action of the body's natural hormone called Glucagon-like Peptide-1 (GLP-1). They were originally developed to treat Type 2 Diabetes Mellitus, and more recently many are used for weight management and metabolic wellness.

Think of them as a friendly coach inside your body — one that gently nudges your hunger down, keeps your blood sugar steady, and encourages your body to use energy more efficiently. They aren't stimulants, appetite suppressants, or magic fat burners — instead, they work with your body's own systems to make healthy, lasting weight loss possible.`
      },
      {
        title: "How GLP-1s Work",
        type: "video",
        content: `GLP-1s act on multiple parts of the body to create a "metabolic support system":

**Your Appetite – The Hunger Controller**
GLP-1s tell your brain: "You've had enough for now." Meals feel more satisfying, cravings reduce, and unnecessary snacking becomes easier to resist.

**Your Digestion – The Satiety Booster**
By slowing stomach emptying, GLP-1s make you feel full longer. You can eat smaller portions, feel satisfied, and avoid binge triggers.

**Your Blood Sugar – The Balancer**
GLP-1s stimulate your pancreas to release insulin when it's needed most and lower glucagon. The result: more stable energy levels and fewer sugar spikes.

**Your Metabolism – The Muscle Protector**
When paired with good nutrition and exercise, GLP-1s help your body focus on burning fat instead of muscle.`,
        videoPlaceholder: "GLP-1 Mechanism of Action"
      },
      {
        title: "Semaglutide vs. Tirzepatide",
        type: "table",
        content: `**Semaglutide** — A GLP-1 receptor agonist that primarily targets hunger signals and blood sugar control. Injected once per week, starting at 0.25 mg and gradually increased to 2.4 mg. Average weight loss: ~15% of body weight. Side effects include nausea, fatigue, constipation, or bloating — often temporary.

**Tirzepatide** — A dual agonist activating both GLP-1 and GIP hormones. GIP helps regulate insulin release and fat storage, giving it a slightly stronger effect. Starting dose: 2.5 mg, gradually increased to 15 mg. Average weight loss: 20% or more of body weight. Similar side effects but sometimes more pronounced early on.

Both are weekly injections requiring gradual dose increases. They work best paired with balanced nutrition, adequate protein, and consistent movement.`
      },
      {
        title: "Dosing Schedule Overview",
        type: "table",
        content: `**Semaglutide Typical Progression:**
• Weeks 1–4: 0.25 mg — Gentle introduction
• Weeks 5–8: 0.5 mg — Improved appetite regulation
• Weeks 9–12: 1 mg — Deeper appetite and glucose control
• Weeks 13–16: 1.7 mg — Near-target dose
• Week 17+: 2.4 mg — Maintenance dose

**Tirzepatide Typical Progression:**
• Weeks 1–4: 2.5 mg — Starting phase
• Weeks 5–8: 5 mg — Builds hunger control
• Weeks 9–12: 7.5 mg — Moderate dose
• Weeks 13–16: 10 mg — Strengthens results
• Week 17+: Up to 15 mg — Maintenance

Your provider may adjust, slow down, or pause increases based on how your body responds. There is no "one-size-fits-all" timeline.`
      },
      {
        title: "Injection Instructions",
        type: "text",
        content: `**Consistency Is Key:** Inject once per week on the same day and at the same time. Choose a day that's easy to remember — like "Wellness Wednesday" or "Self-Care Sunday."

**Injection Technique:** GLP-1 medications are given just under the skin (subcutaneous), not into the muscle or vein. Recommended areas: belly (2+ inches from navel), front of upper thighs, or outer back of upper arms.

**Rotate Injection Sites Weekly** to avoid irritation, bruising, or tenderness.

**Comfort Tips:** The needles are very small. Inject slowly and calmly, take a few deep breaths beforehand. Some clients prefer to let the medication warm to room temperature for a few minutes before injecting.

You don't need to "feel it working" right away. GLP-1s work gradually — first by adjusting digestion and appetite signals, then by improving blood sugar and metabolic balance.`
      },
      {
        title: "First Shot Checklist",
        type: "checklist",
        content: `**Before Your Shot:**
□ Review your physician's instructions — confirm prescribed dose and schedule
□ Gather supplies: GLP-1 Pen/Syringe, new pen needle, alcohol wipe, sharps container
□ Wash hands thoroughly with soap and warm water
□ Choose injection site: belly (2" from navel), upper thigh, or upper arm
□ Let medication sit at room temperature for 10–15 minutes if refrigerated
□ Take a few slow, deep breaths — you've got this!

**During Your Injection:**
□ Clean site with alcohol wipe — let it dry fully
□ Remove pen cap and attach a new needle
□ Dial your prescribed dose
□ Pinch the skin lightly and insert needle straight in
□ Press and hold injection button for 5–10 seconds
□ Remove needle, dispose safely in sharps container

**After Your Shot:**
□ Rotate injection sites weekly
□ Note the day and time you injected
□ Have a light, protein-rich snack if needed
□ Stay hydrated — aim for plenty of water or electrolytes
□ Monitor how you feel and jot down any questions for your provider`
      }
    ]
  },
  {
    id: 2,
    title: "Common Side Effects Explained",
    subtitle: "What to expect and why you're not alone",
    icon: "🩺",
    color: "#5A9AAF",
    slides: ["/slides/m2_0.jpg","/slides/m2_1.jpg","/slides/m2_2.jpg","/slides/m2_3.jpg","/slides/m2_4.jpg","/slides/m2_5.jpg"],
    sections: [
      {
        title: "You're Not Alone",
        type: "video",
        content: `If you're experiencing symptoms like nausea, fatigue, or digestive shifts — you're not doing anything wrong. These side effects are very common and often temporary. They are signs that your body is adjusting to the medication — and there are tools and strategies to manage every one of them.`,
        videoPlaceholder: "Common Side Effects Introduction"
      },
      {
        title: "Top 6 Most Common Side Effects",
        type: "text",
        content: `**Nausea** — A mild queasiness or a "too full" sensation. GLP-1s slow how quickly food leaves your stomach. Eat smaller, slower meals and stop when 70–80% full.

**Constipation** — Fewer or harder bowel movements. Because digestion slows, food moves through your intestines more gradually. Drink plenty of water and add fiber-rich foods gradually.

**Fatigue** — Low energy, brain fog, needing extra naps. When appetite decreases, you may unintentionally eat too few calories. Prioritize protein at every meal.

**Bloating** — Fullness, tightness, or gassiness. With slower digestion, food and gas remain longer. Eat slowly and chew food thoroughly to reduce swallowed air.

**Diarrhea** — Loose or more frequent stools. Your digestive system is adjusting to changes in motility. Stay hydrated with broths or electrolyte drinks.

**Appetite Changes** — Feeling full quickly, lack of interest in food, or aversions to certain textures or smells. GLP-1s directly act on appetite centers in your brain. Focus on high-protein, nutrient-dense meals.`
      },
      {
        title: "Why These Side Effects Happen",
        type: "video",
        content: `GLP-1 medications work by mimicking the hormones your body releases after eating — signaling fullness and slowing digestion. This process reduces hunger and supports steady weight loss, but your digestive system needs time to adjust.

**Digestive Changes:** Nausea, bloating, constipation or diarrhea, and temporary fatigue are often mild and short-lived as your body becomes accustomed to the medication.

**Appetite & Brain Signal Adjustments:** You might experience sudden appetite suppression, a disconnect between old eating habits and new hunger cues, or sensitivity to smells or richer foods. These are signs your body is rebalancing its relationship with food and fullness.`,
        videoPlaceholder: "Understanding Side Effects"
      },
      {
        title: "When Side Effects Typically Appear",
        type: "text",
        content: `**Weeks 1–2: The Introduction Phase**
Mild nausea, early fullness, fatigue, and reduced hunger as GLP-1s begin resetting hunger hormones.

**Weeks 3–4: The Digestive Adjustment Phase**
Constipation, bloating, and fluctuating appetite as the gut calibrates to slower motility.

**During Dose Increases: The Sensitivity Reset**
Side effects can briefly reappear — a short return of nausea, fullness, or fatigue. Usually resolves within days.

**After Dose Stabilization: The Balance Phase**
Improved energy, steadier appetite cues, comfortable portions. Your body has established a new balance.

Most clients find that side effects peak within the first few days after each dose increase and then taper off.`
      },
      {
        title: "What This Means for You",
        type: "text",
        content: `These symptoms are temporary. Your body is adapting to something new. You'll learn how to reduce and manage them in upcoming modules. You are not expected to just "push through."

This program is designed to give you clear, gentle, and effective tools to support your body through every phase.`
      }
    ]
  },
  {
    id: 3,
    title: "Nausea – Why It Happens + What Helps",
    subtitle: "Gentle strategies for your most common concern",
    icon: "🌿",
    color: "#6BAF8D",
    slides: ["/slides/m3_0.jpg","/slides/m3_1.jpg","/slides/m3_2.jpg","/slides/m3_3.jpg"],
    sections: [
      {
        title: "Why Nausea Happens on GLP-1s",
        type: "video",
        content: `Nausea is one of the most common early sensations — and while it's not pleasant, it's actually a sign that the medication is doing its job. Your body is learning to process food and hunger signals in a new way.

**Slower Stomach Emptying:** GLP-1s slow the rate at which food leaves your stomach. This helps you stay full longer — one of the key mechanisms behind weight loss.

**Extra Fullness = Temporary Discomfort:** Food remains in your stomach longer, so you may feel "overly full" even after eating a small meal.

**Changes in Food Preferences:** Some clients notice food aversions — particularly to rich, fried, or strongly scented foods. Many people find their tastes shift toward lighter, fresher foods over time.

For most people, nausea is temporary — it typically peaks during the first few weeks or after each dose increase, then gradually fades.`,
        videoPlaceholder: "Understanding Nausea on GLP-1s"
      },
      {
        title: "5 Proven Relief Strategies",
        type: "tips",
        content: `**1. Eat Smaller, Slower Meals**
Take small bites, chew thoroughly, pause between bites, and stop when satisfied — not stuffed. Even a few extra minutes can prevent nausea.

**2. Avoid Rich, Fried, or Spicy Foods**
Skip greasy, fried, or creamy meals. Choose gentle foods: eggs, toast, rice, bananas, broth-based soups.

**3. Use Peppermint, Ginger & Upright Posture**
Ginger tea, chews, or capsules settle nausea. Peppermint tea relaxes stomach muscles. Stay upright 30–60 minutes after eating.

**4. Hydrate Between Meals — Not With Meals**
Sip water or electrolytes throughout the day. Avoid large drinks during meals, which increase stomach volume.

**5. Rest When You Need To**
Take short naps if fatigued. Aim for 7–9 hours of quality sleep. Avoid overexertion during early adjustment weeks.`
      }
    ]
  },
  {
    id: 4,
    title: "Relieving Constipation Fast",
    subtitle: "Hydration, fiber, and movement strategies",
    icon: "💧",
    color: "#457B8D",
    slides: ["/slides/m4_0.jpg","/slides/m4_1.jpg","/slides/m4_2.jpg","/slides/m4_3.jpg","/slides/m4_4.jpg"],
    sections: [
      {
        title: "Why Constipation Happens",
        type: "video",
        content: `Constipation is one of the most common — and most frustrating — early side effects. It often shows up in the first few weeks or after each dose increase.

**Slower Gut Movement:** GLP-1s delay how quickly food leaves your stomach and travels through your intestines.

**Smaller Meals = Less Output:** Because you're eating smaller portions, there's less material moving through your GI tract.

**Dehydration and Low Fiber Intake:** When appetite drops, people often drink and eat less — especially fiber-rich foods. Without enough fluid and fiber, stools become dry and harder to pass.`,
        videoPlaceholder: "Constipation on GLP-1s Explained"
      },
      {
        title: "4 Effective Relief Strategies",
        type: "tips",
        content: `**1. Hydration Is Your #1 Hero (80–100 oz/day)**
Sip water consistently throughout the day. Try electrolyte powders (LMNT, Nuun, Ultima). Flavor water with lemon, cucumber, or mint.

**2. Add Magnesium — With Your Provider's Guidance**
Try magnesium citrate or glycinate (200–400 mg/day). Take it in the evening to support both digestion and restful sleep. Always check with your provider first.

**3. Gentle Daily Movement**
A 10–15 minute walk after meals, gentle yoga or stretching in the morning, and standing breaks during the day all stimulate peristalsis.

**4. Focus on Fiber-Rich Foods**
Chia seeds (try chia pudding!), berries, leafy greens, oats, apples & pears with skin, ground flaxseed, and avocado. Always pair fiber with water — it needs hydration to work.`
      },
      {
        title: "When to Call Your Provider",
        type: "text",
        content: `Reach out to your Rewakenlife physician if:
• You haven't had a bowel movement in 3+ days
• You're experiencing severe bloating, cramping, or pain
• Over-the-counter support doesn't help

You may need a personalized plan or medication adjustment — and that's completely okay.`
      }
    ]
  },
  {
    id: 5,
    title: "Fatigue – Boosting Your Energy",
    subtitle: "Natural energy support during adjustment",
    icon: "⚡",
    color: "#5A9AAF",
    slides: ["/slides/m5_0.jpg","/slides/m5_1.jpg","/slides/m5_2.jpg","/slides/m5_3.jpg"],
    sections: [
      {
        title: "Why Fatigue Happens",
        type: "video",
        content: `It's completely normal to experience a temporary drop in energy when starting GLP-1 medications.

**Eating Less = Fewer Calories** — Your reduced appetite means less fuel for daily activities.

**Dehydration** — Nausea, appetite changes, or simply not drinking enough water can leave you feeling drained.

**Electrolyte Imbalance** — Reduced food intake can drop key electrolytes like sodium, potassium, and magnesium.

**Poor Sleep Quality** — Adjusting to a new routine or medication can disrupt sleep.

**Body Adaptation** — Your metabolism is recalibrating as your body adjusts to changes in appetite, digestion, and nutrient intake.`,
        videoPlaceholder: "Understanding GLP-1 Fatigue"
      },
      {
        title: "4 Ways to Boost Energy Naturally",
        type: "tips",
        content: `**1. Fuel Up with Protein at Every Meal**
Aim for 20–30g per meal. Options: eggs, Greek yogurt, cottage cheese, protein shakes, chicken, turkey, tofu, beans. Spread protein evenly throughout the day.

**2. Move Gently, But Consistently**
10–20 minute walks after meals, yoga, stretching, gentle rebounding. 5-minute "mini-movements" during afternoon slumps. Movement also supports digestion and reduces nausea.

**3. Prioritize Sleep**
Keep your room cool (65–68°F). Avoid screens 1 hour before bed. Use a wind-down routine. Go to bed and wake up at consistent times. Consider magnesium glycinate before bed.

**4. Hydrate Strategically**
Aim for 80–100 oz/day. Drink between meals, not all at once. Include electrolytes daily — LMNT, Liquid IV, Ultima, or coconut water. DIY: pinch of sea salt + splash of juice + water.`
      }
    ]
  },
  {
    id: 6,
    title: "Diarrhea & Bloating – Soothing Tips",
    subtitle: "Calming your digestive system during adjustment",
    icon: "🫖",
    color: "#6BAF8D",
    slides: ["/slides/m6_0.jpg","/slides/m6_1.jpg","/slides/m6_2.jpg","/slides/m6_3.jpg","/slides/m6_4.jpg","/slides/m6_5.jpg"],
    sections: [
      {
        title: "Why Gut Discomfort Happens",
        type: "video",
        content: `GLP-1 medications slow down how quickly your stomach empties — a process called delayed gastric emptying. This helps you feel full longer but can temporarily change how your body handles food.

You may notice: harder-to-digest foods feel heavier, shifts in gut comfort as eating patterns adjust, and extra gas or bloating as gut bacteria change temporarily.`,
        videoPlaceholder: "Diarrhea & Bloating on GLP-1s"
      },
      {
        title: "Digestive Support Checklist",
        type: "checklist",
        content: `**Avoid These (At Least for Now):**
□ Carbonated drinks — gas expands and worsens bloating
□ Artificial sweeteners — sugar alcohols like xylitol, erythritol, sorbitol
□ Dairy — try lactose-free or plant-based alternatives
□ Greasy, fried, or overly rich foods

**Add Soothing Gut Helpers:**
□ Ginger tea — reduces cramping, nausea, and diarrhea
□ Peppermint tea — relaxes the digestive tract and eases gas
□ Warm fluids — use warm water, broth, or teas to aid digestion

**Stick to Bland, Easy-to-Digest Foods (BRAT Diet +):**
□ Bananas — gentle on gut, rich in potassium
□ Rice — plain white rice or congee
□ Applesauce — unsweetened, helps firm stools
□ Toast — dry or lightly buttered
□ Plain oatmeal, bone broth, boiled potatoes, scrambled eggs`
      },
      {
        title: "When to Call Your Provider",
        type: "text",
        content: `If you're experiencing:
• Watery diarrhea for more than 2–3 days
• Signs of dehydration (dizziness, dry mouth, no urine)
• Severe cramping or fever

Don't wait — your provider can help adjust your plan or recommend gentle medications.`
      }
    ]
  },
  {
    id: 7,
    title: "Appetite Suppression",
    subtitle: "Nourishing your body when hunger fades",
    icon: "🍽️",
    color: "#457B8D",
    slides: ["/slides/m7_0.jpg","/slides/m7_1.jpg","/slides/m7_2.jpg","/slides/m7_3.jpg","/slides/m7_4.jpg"],
    sections: [
      {
        title: "Why 'Not Hungry' Doesn't Mean 'Don't Eat'",
        type: "video",
        content: `One of the most noticeable effects of GLP-1 medications is how strongly they can suppress your appetite. You might feel completely uninterested in food, full after just a few bites, turned off by certain textures or smells, or skip meals entirely.

While it might feel like a "win" for weight loss, this appetite reduction can put your body at risk if you don't pay attention to nutrition. Eating smart preserves muscle mass, supports metabolism, maintains energy and focus, and promotes long-term success.`,
        videoPlaceholder: "Managing Appetite Suppression"
      },
      {
        title: "Key Nutrition Concepts",
        type: "tips",
        content: `**1. Nutrition Matters More Than Quantity**
Even small meals can be packed with nutrients. Ask yourself: "What does my body truly need?" Focus on protein, fiber, healthy fats, and vitamins in every bite.

**2. Liquids & Gentle Foods Can Fill the Gap**
Smoothies with protein powder, greens, fruit, and nut butter. Soups with chicken, lentils, beans, or collagen. Greek yogurt or cottage cheese with berries and seeds. Low-sugar protein shakes.

**3. Spread Meals Throughout the Day**
Try 4–6 smaller meals instead of three large ones. Prioritize protein first, then add fruits, veggies, healthy fats, or gentle carbs.

Sample Schedule:
• 9:00 am – Smoothie with protein & greens
• 12:00 pm – Light lunch (soft veggies + protein)
• 3:00 pm – Snack (nuts, Greek yogurt, or protein bar)
• 6:00 pm – Soup or small dinner
• 8:00 pm – Light snack if needed`
      },
      {
        title: "Journaling Prompt: True Hunger vs. Habit",
        type: "text",
        content: `GLP-1 medications can make it harder to distinguish physical hunger from emotional or social cues.

Ask yourself:
• Physical cues: "Do I feel low energy, light-headed, or weak?"
• Emotional cues: "Am I eating because I'm bored, stressed, or at a social event?"

Reflect on: What foods feel good and satisfying right now? What's one small way I can nourish myself today, even without appetite? How does my energy change when I eat something nutrient-dense?`
      }
    ]
  },
  {
    id: 8,
    title: "When to Call Your Provider",
    subtitle: "Red flags and when to seek help",
    icon: "🚨",
    color: "#C2544D",
    slides: ["/slides/m8_0.jpg","/slides/m8_1.jpg","/slides/m8_2.jpg","/slides/m8_3.jpg","/slides/m8_4.jpg"],
    sections: [
      {
        title: "Understanding Your Body's Signals",
        type: "video",
        content: `GLP-1 medications are powerful tools that influence digestion, appetite, and metabolism. Everyone responds differently. Most side effects are mild, temporary, and manageable — but your body sometimes gives red-flag signals that indicate something more serious.

Early recognition means safer treatment. When you track symptoms, your provider can adjust your dose, recommend changes, or intervene if needed. Understanding your body's responses helps reduce anxiety and lets you focus on progress.`,
        videoPlaceholder: "Recognizing Red Flags"
      },
      {
        title: "Red Flag Symptoms",
        type: "checklist",
        content: `**Call Your Provider Immediately If You Experience:**

❗ Severe Abdominal Pain
□ Sharp, persistent pain, especially if radiating to back or shoulder
□ Could indicate pancreatitis or gallbladder issue

❗ Vomiting for More Than 24 Hours
□ Ongoing vomiting is not normal
□ May lead to dehydration or medication intolerance

❗ Yellowing of Skin or Eyes (Jaundice)
□ Possible sign of liver or gallbladder issues
□ Watch for dark urine or pale stools

❗ Rapid Heartbeat, Dizziness, Fainting, or Confusion
□ Could signal dehydration, low blood sugar, or other complications

**Other Symptoms to Report:**
□ Diarrhea or constipation lasting more than 5 days
□ Inability to eat or drink enough to stay hydrated
□ Extreme fatigue or weakness
□ Noticeable muscle loss or rapid weight loss
□ New or worsening mood changes`
      },
      {
        title: "What to Write Down Before You Call",
        type: "text",
        content: `✔ Date and time symptoms started
✔ Your last GLP-1 injection (medication + dose)
✔ What you ate/drank recently
✔ Other medications or supplements
✔ Any home remedies you've tried

Remember: contacting your Rewakenlife physician is part of your program — not a failure. You are not burdening your doctor by asking questions. You are not failing the program if you need extra guidance. You are listening to your body and prioritizing your well-being.`
      }
    ]
  },
  {
    id: 9,
    title: "Knowledge & Side Effects Worksheet",
    subtitle: "Journaling for relief and mindfulness",
    icon: "📓",
    color: "#5A9AAF",
    slides: ["/slides/m9_0.jpg","/slides/m9_1.jpg","/slides/m9_2.jpg","/slides/m9_3.jpg","/slides/m9_4.jpg"],
    sections: [
      {
        title: "Why Journaling Matters",
        type: "video",
        content: `Weight loss and health transformation aren't just physical — they're deeply mental and emotional too. Journaling helps you track what's working and what isn't, see progress you may otherwise miss, understand your body's signals, reduce anxiety by naming what you feel, and connect patterns between food, symptoms, mood, and habits.

This is not about perfection — it's about progress and self-compassion.`,
        videoPlaceholder: "Journaling for Your GLP-1 Journey"
      },
      {
        title: "Daily Symptom Tracker",
        type: "checklist",
        content: `Use a 0–5 scale (0 = none, 5 = severe) to monitor daily:

□ Nausea — note what you ate before
□ Constipation — note what helped
□ Diarrhea
□ Bloating
□ Fatigue
□ Appetite Level
□ Energy Level
□ Sleep Quality

**Mood Check-In:** Happy, Neutral, Anxious, Sad, Overwhelmed, Grateful

**Self-Care Checklist:**
□ Hydrated
□ Took supplements/medications
□ Moved my body
□ Slept 7–8 hours
□ Ate enough protein
□ Practiced mindfulness`
      },
      {
        title: "Daily Mindfulness Prompts",
        type: "text",
        content: `Reflect on your day — answer briefly or journal fully:

• "What helped me feel better today?"
• "What symptom is improving?"
• "What am I learning about my body?"
• "What do I need more of tomorrow?"
• "What's one thing I'm proud of today?"

Fill out your Symptom Tracker first thing in the morning and/or evening. Complete the Mood & Self-Care Check-In mid-day or evening. Reflect with the Mindfulness Prompts before bed to build awareness, track patterns, and reinforce body trust.`
      }
    ]
  },
  {
    id: 10,
    title: "Track Habits, Build Progress",
    subtitle: "Daily & weekly habit tracking for lasting change",
    icon: "📊",
    color: "#6BAF8D",
    slides: ["/slides/m10_0.jpg","/slides/m10_1.jpg","/slides/m10_2.jpg","/slides/m10_3.jpg"],
    sections: [
      {
        title: "Your Daily & Weekly Habit Tracker",
        type: "video",
        content: `Consistency is key for lasting change — especially when managing new medications and lifestyle shifts. Tracking your habits helps you stay accountable without pressure, spot patterns and triggers, celebrate even small wins, and adjust your routine based on real feedback.`,
        videoPlaceholder: "Building Habits That Stick"
      },
      {
        title: "Daily Habits Checklist",
        type: "checklist",
        content: `Track your daily routines to stay consistent:

💉 Medication (Injection)
□ Took on schedule — note any side effects, injection site notes

💧 Water Intake
□ Aim for 80–100 oz/day — include electrolytes if needed

🚶 Movement / Activity
□ Walk, steps, yoga, or gentle exercise — note duration

🥗 Meals
□ Focus on nutrient-dense, protein-rich meals — note what you ate

🤒 Symptoms Check
□ Rate nausea, bloating, fatigue, constipation, appetite (0–5)`
      },
      {
        title: "Weekly Reflection",
        type: "text",
        content: `**What were your 3 wins this week?**
Celebrate any positive progress — consistency, small improvements, or mindset shifts all count.

**What habits felt easy or challenging?**
Which routines were effortless? Which required more energy? Understanding this helps you identify what works for your lifestyle.

**What will you focus on next week?**
Choose 1–3 realistic, actionable goals. Keep focus on consistency over perfection.

This isn't about judgment — it's about learning what supports your body and mind. Over time, these reflections help you track progress, spot patterns in symptoms, and build habits that stick.`
      }
    ]
  }
];
