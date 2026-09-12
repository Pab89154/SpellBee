// 100 spelling words per grade for SpellBee
const WORDS_BY_GRADE = {
  "PK": [
    {
      "word": "go",
      "sentence": "Let's go to the park."
    },
    {
      "word": "me",
      "sentence": "Can you help me?"
    },
    {
      "word": "we",
      "sentence": "We play together."
    },
    {
      "word": "up",
      "sentence": "Look up at the sky."
    },
    {
      "word": "in",
      "sentence": "The toy is in the box."
    },
    {
      "word": "at",
      "sentence": "I am at home."
    },
    {
      "word": "bus",
      "sentence": "We ride the bus to school."
    },
    {
      "word": "hat",
      "sentence": "I wear a red hat."
    },
    {
      "word": "egg",
      "sentence": "I had an egg for breakfast."
    },
    {
      "word": "pet",
      "sentence": "My pet is very cute."
    },
    {
      "word": "mom",
      "sentence": "I love my mom."
    },
    {
      "word": "dad",
      "sentence": "My dad can cook."
    },
    {
      "word": "yes",
      "sentence": "Yes, I can do it."
    },
    {
      "word": "no",
      "sentence": "No, thank you."
    },
    {
      "word": "hi",
      "sentence": "Hi, my name is Sam."
    },
    {
      "word": "bye",
      "sentence": "Bye, see you later."
    },
    {
      "word": "run",
      "sentence": "I can run fast."
    },
    {
      "word": "sit",
      "sentence": "Please sit down."
    },
    {
      "word": "big",
      "sentence": "That is a big ball."
    },
    {
      "word": "hot",
      "sentence": "The soup is hot."
    },
    {
      "word": "cold",
      "sentence": "Ice is cold."
    },
    {
      "word": "dog",
      "sentence": "The dog wags its tail."
    },
    {
      "word": "cat",
      "sentence": "The cat likes milk."
    },
    {
      "word": "sun",
      "sentence": "The sun is bright."
    },
    {
      "word": "fun",
      "sentence": "This game is fun."
    },
    {
      "word": "map",
      "sentence": "Look at the map."
    },
    {
      "word": "cup",
      "sentence": "Drink from the cup."
    },
    {
      "word": "pan",
      "sentence": "Mom uses a pan."
    },
    {
      "word": "bag",
      "sentence": "Pack your bag."
    },
    {
      "word": "box",
      "sentence": "Open the box."
    },
    {
      "word": "bed",
      "sentence": "Go to bed now."
    },
    {
      "word": "red",
      "sentence": "I like the red car."
    },
    {
      "word": "blue",
      "sentence": "The sky is blue."
    },
    {
      "word": "one",
      "sentence": "I have one cookie."
    },
    {
      "word": "two",
      "sentence": "I see two birds."
    },
    {
      "word": "ten",
      "sentence": "Count to ten."
    },
    {
      "word": "man",
      "sentence": "The man waves hello."
    },
    {
      "word": "kid",
      "sentence": "That kid is nice."
    },
    {
      "word": "boy",
      "sentence": "The boy runs."
    },
    {
      "word": "girl",
      "sentence": "The girl smiles."
    },
    {
      "word": "ball",
      "sentence": "Kick the ball."
    },
    {
      "word": "book",
      "sentence": "Read a book."
    },
    {
      "word": "fish",
      "sentence": "The fish swims."
    },
    {
      "word": "bird",
      "sentence": "A bird can fly."
    },
    {
      "word": "tree",
      "sentence": "Climb the tree."
    },
    {
      "word": "leaf",
      "sentence": "A green leaf fell."
    },
    {
      "word": "rain",
      "sentence": "I like the rain."
    },
    {
      "word": "snow",
      "sentence": "Snow is white."
    },
    {
      "word": "milk",
      "sentence": "Drink your milk."
    },
    {
      "word": "cake",
      "sentence": "Happy birthday cake!"
    },
    {
      "word": "sock",
      "sentence": "Put on your sock."
    },
    {
      "word": "shoe",
      "sentence": "Tie your shoe."
    },
    {
      "word": "door",
      "sentence": "Close the door."
    },
    {
      "word": "wall",
      "sentence": "Paint the wall."
    },
    {
      "word": "room",
      "sentence": "Clean your room."
    },
    {
      "word": "home",
      "sentence": "Welcome home."
    },
    {
      "word": "park",
      "sentence": "We play at the park."
    },
    {
      "word": "zoo",
      "sentence": "We saw lions at the zoo."
    },
    {
      "word": "bee",
      "sentence": "The bee makes honey."
    },
    {
      "word": "ant",
      "sentence": "An ant is small."
    },
    {
      "word": "pig",
      "sentence": "The pig says oink."
    },
    {
      "word": "cow",
      "sentence": "The cow eats grass."
    },
    {
      "word": "hen",
      "sentence": "The hen lays eggs."
    },
    {
      "word": "fox",
      "sentence": "The fox is clever."
    },
    {
      "word": "owl",
      "sentence": "The owl stays up late."
    },
    {
      "word": "bat",
      "sentence": "A bat flies at night."
    },
    {
      "word": "net",
      "sentence": "Catch fish with a net."
    },
    {
      "word": "jet",
      "sentence": "A jet flies high."
    },
    {
      "word": "van",
      "sentence": "Ride in the van."
    },
    {
      "word": "car",
      "sentence": "The car is fast."
    },
    {
      "word": "bike",
      "sentence": "Ride your bike."
    },
    {
      "word": "train",
      "sentence": "The train is long."
    },
    {
      "word": "boat",
      "sentence": "Sail the boat."
    },
    {
      "word": "ship",
      "sentence": "The ship is big."
    },
    {
      "word": "road",
      "sentence": "Cross the road."
    },
    {
      "word": "path",
      "sentence": "Follow the path."
    },
    {
      "word": "hill",
      "sentence": "Climb the hill."
    },
    {
      "word": "lake",
      "sentence": "Swim in the lake."
    },
    {
      "word": "pond",
      "sentence": "Frogs live in the pond."
    },
    {
      "word": "sand",
      "sentence": "Dig in the sand."
    },
    {
      "word": "rock",
      "sentence": "Skip a rock."
    },
    {
      "word": "star",
      "sentence": "Wish on a star."
    },
    {
      "word": "moon",
      "sentence": "The moon is round."
    },
    {
      "word": "day",
      "sentence": "Have a nice day."
    },
    {
      "word": "night",
      "sentence": "Good night!"
    },
    {
      "word": "week",
      "sentence": "See you next week."
    },
    {
      "word": "year",
      "sentence": "Happy new year!"
    },
    {
      "word": "time",
      "sentence": "What time is it?"
    },
    {
      "word": "play",
      "sentence": "Let's play now."
    },
    {
      "word": "sing",
      "sentence": "I like to sing."
    },
    {
      "word": "draw",
      "sentence": "Draw a picture."
    },
    {
      "word": "read",
      "sentence": "I can read."
    },
    {
      "word": "jump",
      "sentence": "Jump up high."
    },
    {
      "word": "clap",
      "sentence": "Clap your hands."
    },
    {
      "word": "wave",
      "sentence": "Wave hello."
    },
    {
      "word": "hug",
      "sentence": "Give a hug."
    },
    {
      "word": "love",
      "sentence": "I love you."
    },
    {
      "word": "kind",
      "sentence": "Be kind to others."
    },
    {
      "word": "brave",
      "sentence": "You are brave."
    },
    {
      "word": "soft",
      "sentence": "The pillow is soft."
    }
  ],
  "K": [
    {
      "word": "cat",
      "sentence": "The cat sat on the mat."
    },
    {
      "word": "dog",
      "sentence": "My dog likes to run."
    },
    {
      "word": "sun",
      "sentence": "The sun is bright today."
    },
    {
      "word": "run",
      "sentence": "I can run very fast."
    },
    {
      "word": "big",
      "sentence": "That is a big tree."
    },
    {
      "word": "red",
      "sentence": "She has a red ball."
    },
    {
      "word": "hop",
      "sentence": "Bunnies hop in the grass."
    },
    {
      "word": "sit",
      "sentence": "Please sit in your chair."
    },
    {
      "word": "cup",
      "sentence": "I drink milk from a cup."
    },
    {
      "word": "bed",
      "sentence": "I go to bed at eight."
    },
    {
      "word": "mat",
      "sentence": "Wipe your feet on the mat."
    },
    {
      "word": "pin",
      "sentence": "Use a pin carefully."
    },
    {
      "word": "pen",
      "sentence": "Write with a blue pen."
    },
    {
      "word": "pad",
      "sentence": "I draw on a pad."
    },
    {
      "word": "top",
      "sentence": "Spin the top."
    },
    {
      "word": "pop",
      "sentence": "Balloons can pop."
    },
    {
      "word": "mop",
      "sentence": "Mop the floor."
    },
    {
      "word": "map",
      "sentence": "Find it on the map."
    },
    {
      "word": "tap",
      "sentence": "Tap your foot."
    },
    {
      "word": "cap",
      "sentence": "Wear a warm cap."
    },
    {
      "word": "nap",
      "sentence": "Take a short nap."
    },
    {
      "word": "lap",
      "sentence": "Sit on my lap."
    },
    {
      "word": "lip",
      "sentence": "My lip is dry."
    },
    {
      "word": "zip",
      "sentence": "Zip your coat."
    },
    {
      "word": "dip",
      "sentence": "Dip the chip."
    },
    {
      "word": "tip",
      "sentence": "The tip of the pen."
    },
    {
      "word": "sip",
      "sentence": "Sip the juice."
    },
    {
      "word": "dig",
      "sentence": "Dig a hole."
    },
    {
      "word": "pig",
      "sentence": "The pig is pink."
    },
    {
      "word": "wig",
      "sentence": "She wears a wig."
    },
    {
      "word": "fig",
      "sentence": "I ate a sweet fig."
    },
    {
      "word": "fin",
      "sentence": "The fish has a fin."
    },
    {
      "word": "win",
      "sentence": "I hope we win."
    },
    {
      "word": "bin",
      "sentence": "Put trash in the bin."
    },
    {
      "word": "tin",
      "sentence": "Open the tin."
    },
    {
      "word": "kit",
      "sentence": "Open the art kit."
    },
    {
      "word": "bit",
      "sentence": "Just a little bit."
    },
    {
      "word": "hit",
      "sentence": "Hit the ball."
    },
    {
      "word": "fit",
      "sentence": "Does it fit?"
    },
    {
      "word": "pit",
      "sentence": "A peach has a pit."
    },
    {
      "word": "six",
      "sentence": "I am six years old."
    },
    {
      "word": "mix",
      "sentence": "Mix the paint."
    },
    {
      "word": "fix",
      "sentence": "Fix the toy."
    },
    {
      "word": "fox",
      "sentence": "The fox runs away."
    },
    {
      "word": "box",
      "sentence": "Open the gift box."
    },
    {
      "word": "ox",
      "sentence": "An ox is strong."
    },
    {
      "word": "on",
      "sentence": "The light is on."
    },
    {
      "word": "off",
      "sentence": "Turn it off."
    },
    {
      "word": "out",
      "sentence": "Go out and play."
    },
    {
      "word": "into",
      "sentence": "Jump into the pool."
    },
    {
      "word": "over",
      "sentence": "Jump over the rope."
    },
    {
      "word": "under",
      "sentence": "Look under the bed."
    },
    {
      "word": "with",
      "sentence": "Come with me."
    },
    {
      "word": "from",
      "sentence": "A gift from Mom."
    },
    {
      "word": "that",
      "sentence": "I like that song."
    },
    {
      "word": "this",
      "sentence": "This is my book."
    },
    {
      "word": "them",
      "sentence": "I see them."
    },
    {
      "word": "then",
      "sentence": "Then we went home."
    },
    {
      "word": "when",
      "sentence": "When do we eat?"
    },
    {
      "word": "what",
      "sentence": "What is that?"
    },
    {
      "word": "who",
      "sentence": "Who is there?"
    },
    {
      "word": "why",
      "sentence": "Why is it raining?"
    },
    {
      "word": "how",
      "sentence": "How are you?"
    },
    {
      "word": "yes",
      "sentence": "Yes, please."
    },
    {
      "word": "not",
      "sentence": "I am not tired."
    },
    {
      "word": "can",
      "sentence": "I can help."
    },
    {
      "word": "will",
      "sentence": "I will try."
    },
    {
      "word": "make",
      "sentence": "Make a card."
    },
    {
      "word": "take",
      "sentence": "Take your turn."
    },
    {
      "word": "give",
      "sentence": "Give me five."
    },
    {
      "word": "come",
      "sentence": "Come here now."
    },
    {
      "word": "look",
      "sentence": "Look at that!"
    },
    {
      "word": "see",
      "sentence": "I see a bird."
    },
    {
      "word": "hear",
      "sentence": "I hear music."
    },
    {
      "word": "feel",
      "sentence": "I feel happy."
    },
    {
      "word": "want",
      "sentence": "I want a snack."
    },
    {
      "word": "like",
      "sentence": "I like apples."
    },
    {
      "word": "love",
      "sentence": "I love school."
    },
    {
      "word": "good",
      "sentence": "Good job today!"
    },
    {
      "word": "best",
      "sentence": "Do your best."
    },
    {
      "word": "fast",
      "sentence": "Run fast!"
    },
    {
      "word": "slow",
      "sentence": "Go slow here."
    },
    {
      "word": "soft",
      "sentence": "The pillow is soft."
    },
    {
      "word": "hard",
      "sentence": "The rock is hard."
    },
    {
      "word": "loud",
      "sentence": "That sound is loud."
    },
    {
      "word": "quiet",
      "sentence": "Please be quiet."
    },
    {
      "word": "clean",
      "sentence": "Keep it clean."
    },
    {
      "word": "dirty",
      "sentence": "My shoes are dirty."
    },
    {
      "word": "happy",
      "sentence": "I feel happy."
    },
    {
      "word": "sad",
      "sentence": "She looks sad."
    },
    {
      "word": "funny",
      "sentence": "That joke is funny."
    },
    {
      "word": "silly",
      "sentence": "Don't be silly."
    },
    {
      "word": "smart",
      "sentence": "You are smart."
    },
    {
      "word": "strong",
      "sentence": "He is strong."
    },
    {
      "word": "small",
      "sentence": "A small ant."
    },
    {
      "word": "tall",
      "sentence": "A tall tree."
    },
    {
      "word": "short",
      "sentence": "A short walk."
    },
    {
      "word": "long",
      "sentence": "A long road."
    },
    {
      "word": "new",
      "sentence": "A new pencil."
    },
    {
      "word": "old",
      "sentence": "An old book."
    }
  ],
  "1": [
    {
      "word": "book",
      "sentence": "I read a book every night."
    },
    {
      "word": "tree",
      "sentence": "Birds live in the tree."
    },
    {
      "word": "fish",
      "sentence": "We saw a fish in the pond."
    },
    {
      "word": "moon",
      "sentence": "The moon shines at night."
    },
    {
      "word": "star",
      "sentence": "I saw a bright star."
    },
    {
      "word": "play",
      "sentence": "Let's play outside."
    },
    {
      "word": "stop",
      "sentence": "Stop at the red light."
    },
    {
      "word": "help",
      "sentence": "Can you help me, please?"
    },
    {
      "word": "hand",
      "sentence": "Raise your hand to answer."
    },
    {
      "word": "jump",
      "sentence": "We jump on the trampoline."
    },
    {
      "word": "cold",
      "sentence": "Please spell the word cold."
    },
    {
      "word": "warm",
      "sentence": "Please spell the word warm."
    },
    {
      "word": "rain",
      "sentence": "Please spell the word rain."
    },
    {
      "word": "snow",
      "sentence": "Please spell the word snow."
    },
    {
      "word": "wind",
      "sentence": "Please spell the word wind."
    },
    {
      "word": "cloud",
      "sentence": "Please spell the word cloud."
    },
    {
      "word": "grass",
      "sentence": "Please spell the word grass."
    },
    {
      "word": "flower",
      "sentence": "Please spell the word flower."
    },
    {
      "word": "plant",
      "sentence": "Please spell the word plant."
    },
    {
      "word": "stone",
      "sentence": "Please spell the word stone."
    },
    {
      "word": "river",
      "sentence": "Please spell the word river."
    },
    {
      "word": "beach",
      "sentence": "Please spell the word beach."
    },
    {
      "word": "wave",
      "sentence": "Please spell the word wave."
    },
    {
      "word": "shell",
      "sentence": "Please spell the word shell."
    },
    {
      "word": "truck",
      "sentence": "Please spell the word truck."
    },
    {
      "word": "plane",
      "sentence": "Please spell the word plane."
    },
    {
      "word": "train",
      "sentence": "Please spell the word train."
    },
    {
      "word": "house",
      "sentence": "Please spell the word house."
    },
    {
      "word": "room",
      "sentence": "Please spell the word room."
    },
    {
      "word": "table",
      "sentence": "Please spell the word table."
    },
    {
      "word": "chair",
      "sentence": "Please spell the word chair."
    },
    {
      "word": "window",
      "sentence": "Please spell the word window."
    },
    {
      "word": "floor",
      "sentence": "Please spell the word floor."
    },
    {
      "word": "clock",
      "sentence": "Please spell the word clock."
    },
    {
      "word": "phone",
      "sentence": "Please spell the word phone."
    },
    {
      "word": "music",
      "sentence": "Please spell the word music."
    },
    {
      "word": "dance",
      "sentence": "Please spell the word dance."
    },
    {
      "word": "smile",
      "sentence": "Please spell the word smile."
    },
    {
      "word": "laugh",
      "sentence": "Please spell the word laugh."
    },
    {
      "word": "cry",
      "sentence": "Please spell the word cry."
    },
    {
      "word": "sleep",
      "sentence": "Please spell the word sleep."
    },
    {
      "word": "dream",
      "sentence": "Please spell the word dream."
    },
    {
      "word": "wake",
      "sentence": "Please spell the word wake."
    },
    {
      "word": "brush",
      "sentence": "Please spell the word brush."
    },
    {
      "word": "wash",
      "sentence": "Please spell the word wash."
    },
    {
      "word": "dress",
      "sentence": "Please spell the word dress."
    },
    {
      "word": "shirt",
      "sentence": "Please spell the word shirt."
    },
    {
      "word": "pants",
      "sentence": "Please spell the word pants."
    },
    {
      "word": "coat",
      "sentence": "Please spell the word coat."
    },
    {
      "word": "glove",
      "sentence": "Please spell the word glove."
    },
    {
      "word": "scarf",
      "sentence": "Please spell the word scarf."
    },
    {
      "word": "lunch",
      "sentence": "Please spell the word lunch."
    },
    {
      "word": "dinner",
      "sentence": "Please spell the word dinner."
    },
    {
      "word": "snack",
      "sentence": "Please spell the word snack."
    },
    {
      "word": "fruit",
      "sentence": "Please spell the word fruit."
    },
    {
      "word": "apple",
      "sentence": "Please spell the word apple."
    },
    {
      "word": "grape",
      "sentence": "Please spell the word grape."
    },
    {
      "word": "bread",
      "sentence": "Please spell the word bread."
    },
    {
      "word": "cheese",
      "sentence": "Please spell the word cheese."
    },
    {
      "word": "pizza",
      "sentence": "Please spell the word pizza."
    },
    {
      "word": "candy",
      "sentence": "Please spell the word candy."
    },
    {
      "word": "cookie",
      "sentence": "Please spell the word cookie."
    },
    {
      "word": "water",
      "sentence": "Please spell the word water."
    },
    {
      "word": "juice",
      "sentence": "Please spell the word juice."
    },
    {
      "word": "class",
      "sentence": "Please spell the word class."
    },
    {
      "word": "teacher",
      "sentence": "Please spell the word teacher."
    },
    {
      "word": "friend",
      "sentence": "Please spell the word friend."
    },
    {
      "word": "family",
      "sentence": "Please spell the word family."
    },
    {
      "word": "sister",
      "sentence": "Please spell the word sister."
    },
    {
      "word": "brother",
      "sentence": "Please spell the word brother."
    },
    {
      "word": "baby",
      "sentence": "Please spell the word baby."
    },
    {
      "word": "people",
      "sentence": "Please spell the word people."
    },
    {
      "word": "city",
      "sentence": "Please spell the word city."
    },
    {
      "word": "town",
      "sentence": "Please spell the word town."
    },
    {
      "word": "farm",
      "sentence": "Please spell the word farm."
    },
    {
      "word": "field",
      "sentence": "Please spell the word field."
    },
    {
      "word": "game",
      "sentence": "Please spell the word game."
    },
    {
      "word": "team",
      "sentence": "Please spell the word team."
    },
    {
      "word": "score",
      "sentence": "Please spell the word score."
    },
    {
      "word": "win",
      "sentence": "Please spell the word win."
    },
    {
      "word": "lose",
      "sentence": "Please spell the word lose."
    },
    {
      "word": "fair",
      "sentence": "Please spell the word fair."
    },
    {
      "word": "share",
      "sentence": "Please spell the word share."
    },
    {
      "word": "care",
      "sentence": "Please spell the word care."
    },
    {
      "word": "safe",
      "sentence": "Please spell the word safe."
    },
    {
      "word": "rule",
      "sentence": "Please spell the word rule."
    },
    {
      "word": "line",
      "sentence": "Please spell the word line."
    },
    {
      "word": "turn",
      "sentence": "Please spell the word turn."
    },
    {
      "word": "ready",
      "sentence": "Please spell the word ready."
    },
    {
      "word": "start",
      "sentence": "Please spell the word start."
    },
    {
      "word": "finish",
      "sentence": "Please spell the word finish."
    },
    {
      "word": "again",
      "sentence": "Please spell the word again."
    },
    {
      "word": "never",
      "sentence": "Please spell the word never."
    },
    {
      "word": "always",
      "sentence": "Please spell the word always."
    },
    {
      "word": "often",
      "sentence": "Please spell the word often."
    },
    {
      "word": "soon",
      "sentence": "Please spell the word soon."
    },
    {
      "word": "today",
      "sentence": "Please spell the word today."
    },
    {
      "word": "tomorrow",
      "sentence": "Please spell the word tomorrow."
    },
    {
      "word": "yesterday",
      "sentence": "Please spell the word yesterday."
    },
    {
      "word": "morning",
      "sentence": "Please spell the word morning."
    }
  ],
  "2": [
    {
      "word": "friend",
      "sentence": "My best friend lives next door."
    },
    {
      "word": "school",
      "sentence": "I walk to school every day."
    },
    {
      "word": "happy",
      "sentence": "She felt happy on her birthday."
    },
    {
      "word": "water",
      "sentence": "Plants need water to grow."
    },
    {
      "word": "light",
      "sentence": "Turn on the light, please."
    },
    {
      "word": "green",
      "sentence": "Grass is green in spring."
    },
    {
      "word": "write",
      "sentence": "I write in my journal."
    },
    {
      "word": "laugh",
      "sentence": "The joke made us laugh."
    },
    {
      "word": "round",
      "sentence": "The ball is round."
    },
    {
      "word": "think",
      "sentence": "I think before I answer."
    },
    {
      "word": "know",
      "sentence": "Please spell the word know."
    },
    {
      "word": "learn",
      "sentence": "Please spell the word learn."
    },
    {
      "word": "teach",
      "sentence": "Please spell the word teach."
    },
    {
      "word": "study",
      "sentence": "Please spell the word study."
    },
    {
      "word": "spell",
      "sentence": "Please spell the word spell."
    },
    {
      "word": "sound",
      "sentence": "Please spell the word sound."
    },
    {
      "word": "quiet",
      "sentence": "Please spell the word quiet."
    },
    {
      "word": "noise",
      "sentence": "Please spell the word noise."
    },
    {
      "word": "voice",
      "sentence": "Please spell the word voice."
    },
    {
      "word": "story",
      "sentence": "Please spell the word story."
    },
    {
      "word": "page",
      "sentence": "Please spell the word page."
    },
    {
      "word": "chapter",
      "sentence": "Please spell the word chapter."
    },
    {
      "word": "title",
      "sentence": "Please spell the word title."
    },
    {
      "word": "author",
      "sentence": "Please spell the word author."
    },
    {
      "word": "poem",
      "sentence": "Please spell the word poem."
    },
    {
      "word": "letter",
      "sentence": "Please spell the word letter."
    },
    {
      "word": "number",
      "sentence": "Please spell the word number."
    },
    {
      "word": "count",
      "sentence": "Please spell the word count."
    },
    {
      "word": "add",
      "sentence": "Please spell the word add."
    },
    {
      "word": "minus",
      "sentence": "Please spell the word minus."
    },
    {
      "word": "equal",
      "sentence": "Please spell the word equal."
    },
    {
      "word": "shape",
      "sentence": "Please spell the word shape."
    },
    {
      "word": "circle",
      "sentence": "Please spell the word circle."
    },
    {
      "word": "square",
      "sentence": "Please spell the word square."
    },
    {
      "word": "triangle",
      "sentence": "Please spell the word triangle."
    },
    {
      "word": "color",
      "sentence": "Please spell the word color."
    },
    {
      "word": "bright",
      "sentence": "Please spell the word bright."
    },
    {
      "word": "dark",
      "sentence": "Please spell the word dark."
    },
    {
      "word": "shadow",
      "sentence": "Please spell the word shadow."
    },
    {
      "word": "mirror",
      "sentence": "Please spell the word mirror."
    },
    {
      "word": "picture",
      "sentence": "Please spell the word picture."
    },
    {
      "word": "camera",
      "sentence": "Please spell the word camera."
    },
    {
      "word": "movie",
      "sentence": "Please spell the word movie."
    },
    {
      "word": "song",
      "sentence": "Please spell the word song."
    },
    {
      "word": "guitar",
      "sentence": "Please spell the word guitar."
    },
    {
      "word": "piano",
      "sentence": "Please spell the word piano."
    },
    {
      "word": "drum",
      "sentence": "Please spell the word drum."
    },
    {
      "word": "sport",
      "sentence": "Please spell the word sport."
    },
    {
      "word": "soccer",
      "sentence": "Please spell the word soccer."
    },
    {
      "word": "baseball",
      "sentence": "Please spell the word baseball."
    },
    {
      "word": "basket",
      "sentence": "Please spell the word basket."
    },
    {
      "word": "swim",
      "sentence": "Please spell the word swim."
    },
    {
      "word": "skate",
      "sentence": "Please spell the word skate."
    },
    {
      "word": "climb",
      "sentence": "Please spell the word climb."
    },
    {
      "word": "throw",
      "sentence": "Please spell the word throw."
    },
    {
      "word": "catch",
      "sentence": "Please spell the word catch."
    },
    {
      "word": "kick",
      "sentence": "Please spell the word kick."
    },
    {
      "word": "race",
      "sentence": "Please spell the word race."
    },
    {
      "word": "prize",
      "sentence": "Please spell the word prize."
    },
    {
      "word": "medal",
      "sentence": "Please spell the word medal."
    },
    {
      "word": "party",
      "sentence": "Please spell the word party."
    },
    {
      "word": "gift",
      "sentence": "Please spell the word gift."
    },
    {
      "word": "card",
      "sentence": "Please spell the word card."
    },
    {
      "word": "candle",
      "sentence": "Please spell the word candle."
    },
    {
      "word": "balloon",
      "sentence": "Please spell the word balloon."
    },
    {
      "word": "holiday",
      "sentence": "Please spell the word holiday."
    },
    {
      "word": "summer",
      "sentence": "Please spell the word summer."
    },
    {
      "word": "winter",
      "sentence": "Please spell the word winter."
    },
    {
      "word": "spring",
      "sentence": "Please spell the word spring."
    },
    {
      "word": "autumn",
      "sentence": "Please spell the word autumn."
    },
    {
      "word": "season",
      "sentence": "Please spell the word season."
    },
    {
      "word": "weather",
      "sentence": "Please spell the word weather."
    },
    {
      "word": "storm",
      "sentence": "Please spell the word storm."
    },
    {
      "word": "thunder",
      "sentence": "Please spell the word thunder."
    },
    {
      "word": "lightning",
      "sentence": "Please spell the word lightning."
    },
    {
      "word": "rainbow",
      "sentence": "Please spell the word rainbow."
    },
    {
      "word": "mountain",
      "sentence": "Please spell the word mountain."
    },
    {
      "word": "forest",
      "sentence": "Please spell the word forest."
    },
    {
      "word": "desert",
      "sentence": "Please spell the word desert."
    },
    {
      "word": "island",
      "sentence": "Please spell the word island."
    },
    {
      "word": "ocean",
      "sentence": "Please spell the word ocean."
    },
    {
      "word": "animal",
      "sentence": "Please spell the word animal."
    },
    {
      "word": "insect",
      "sentence": "Please spell the word insect."
    },
    {
      "word": "spider",
      "sentence": "Please spell the word spider."
    },
    {
      "word": "butterfly",
      "sentence": "Please spell the word butterfly."
    },
    {
      "word": "rabbit",
      "sentence": "Please spell the word rabbit."
    },
    {
      "word": "turtle",
      "sentence": "Please spell the word turtle."
    },
    {
      "word": "lizard",
      "sentence": "Please spell the word lizard."
    },
    {
      "word": "snake",
      "sentence": "Please spell the word snake."
    },
    {
      "word": "horse",
      "sentence": "Please spell the word horse."
    },
    {
      "word": "sheep",
      "sentence": "Please spell the word sheep."
    },
    {
      "word": "chicken",
      "sentence": "Please spell the word chicken."
    },
    {
      "word": "duck",
      "sentence": "Please spell the word duck."
    },
    {
      "word": "goose",
      "sentence": "Please spell the word goose."
    },
    {
      "word": "eagle",
      "sentence": "Please spell the word eagle."
    },
    {
      "word": "whale",
      "sentence": "Please spell the word whale."
    },
    {
      "word": "dolphin",
      "sentence": "Please spell the word dolphin."
    },
    {
      "word": "shark",
      "sentence": "Please spell the word shark."
    },
    {
      "word": "crab",
      "sentence": "Please spell the word crab."
    },
    {
      "word": "frog",
      "sentence": "Please spell the word frog."
    }
  ],
  "3": [
    {
      "word": "about",
      "sentence": "Tell me about your day."
    },
    {
      "word": "great",
      "sentence": "You did a great job."
    },
    {
      "word": "every",
      "sentence": "I brush my teeth every day."
    },
    {
      "word": "found",
      "sentence": "I found my lost pencil."
    },
    {
      "word": "night",
      "sentence": "The stars come out at night."
    },
    {
      "word": "small",
      "sentence": "The mouse is very small."
    },
    {
      "word": "carry",
      "sentence": "Please carry your own bag."
    },
    {
      "word": "again",
      "sentence": "Let's read that book again."
    },
    {
      "word": "animal",
      "sentence": "A lion is a big animal."
    },
    {
      "word": "before",
      "sentence": "Wash your hands before lunch."
    },
    {
      "word": "after",
      "sentence": "Please spell the word after."
    },
    {
      "word": "around",
      "sentence": "Please spell the word around."
    },
    {
      "word": "between",
      "sentence": "Please spell the word between."
    },
    {
      "word": "during",
      "sentence": "Please spell the word during."
    },
    {
      "word": "through",
      "sentence": "Please spell the word through."
    },
    {
      "word": "across",
      "sentence": "Please spell the word across."
    },
    {
      "word": "against",
      "sentence": "Please spell the word against."
    },
    {
      "word": "almost",
      "sentence": "Please spell the word almost."
    },
    {
      "word": "already",
      "sentence": "Please spell the word already."
    },
    {
      "word": "also",
      "sentence": "Please spell the word also."
    },
    {
      "word": "always",
      "sentence": "Please spell the word always."
    },
    {
      "word": "another",
      "sentence": "Please spell the word another."
    },
    {
      "word": "anyone",
      "sentence": "Please spell the word anyone."
    },
    {
      "word": "anything",
      "sentence": "Please spell the word anything."
    },
    {
      "word": "anyway",
      "sentence": "Please spell the word anyway."
    },
    {
      "word": "began",
      "sentence": "Please spell the word began."
    },
    {
      "word": "being",
      "sentence": "Please spell the word being."
    },
    {
      "word": "below",
      "sentence": "Please spell the word below."
    },
    {
      "word": "beside",
      "sentence": "Please spell the word beside."
    },
    {
      "word": "better",
      "sentence": "Please spell the word better."
    },
    {
      "word": "both",
      "sentence": "Please spell the word both."
    },
    {
      "word": "brought",
      "sentence": "Please spell the word brought."
    },
    {
      "word": "change",
      "sentence": "Please spell the word change."
    },
    {
      "word": "children",
      "sentence": "Please spell the word children."
    },
    {
      "word": "complete",
      "sentence": "Please spell the word complete."
    },
    {
      "word": "country",
      "sentence": "Please spell the word country."
    },
    {
      "word": "course",
      "sentence": "Please spell the word course."
    },
    {
      "word": "didn't",
      "sentence": "Please spell the word didn't."
    },
    {
      "word": "doesn't",
      "sentence": "Please spell the word doesn't."
    },
    {
      "word": "early",
      "sentence": "Please spell the word early."
    },
    {
      "word": "earth",
      "sentence": "Please spell the word earth."
    },
    {
      "word": "easy",
      "sentence": "Please spell the word easy."
    },
    {
      "word": "enough",
      "sentence": "Please spell the word enough."
    },
    {
      "word": "example",
      "sentence": "Please spell the word example."
    },
    {
      "word": "except",
      "sentence": "Please spell the word except."
    },
    {
      "word": "explain",
      "sentence": "Please spell the word explain."
    },
    {
      "word": "family",
      "sentence": "Please spell the word family."
    },
    {
      "word": "father",
      "sentence": "Please spell the word father."
    },
    {
      "word": "follow",
      "sentence": "Please spell the word follow."
    },
    {
      "word": "forgot",
      "sentence": "Please spell the word forgot."
    },
    {
      "word": "group",
      "sentence": "Please spell the word group."
    },
    {
      "word": "happen",
      "sentence": "Please spell the word happen."
    },
    {
      "word": "heard",
      "sentence": "Please spell the word heard."
    },
    {
      "word": "high",
      "sentence": "Please spell the word high."
    },
    {
      "word": "however",
      "sentence": "Please spell the word however."
    },
    {
      "word": "idea",
      "sentence": "Please spell the word idea."
    },
    {
      "word": "instead",
      "sentence": "Please spell the word instead."
    },
    {
      "word": "knew",
      "sentence": "Please spell the word knew."
    },
    {
      "word": "later",
      "sentence": "Please spell the word later."
    },
    {
      "word": "leave",
      "sentence": "Please spell the word leave."
    },
    {
      "word": "listen",
      "sentence": "Please spell the word listen."
    },
    {
      "word": "little",
      "sentence": "Please spell the word little."
    },
    {
      "word": "might",
      "sentence": "Please spell the word might."
    },
    {
      "word": "money",
      "sentence": "Please spell the word money."
    },
    {
      "word": "mother",
      "sentence": "Please spell the word mother."
    },
    {
      "word": "move",
      "sentence": "Please spell the word move."
    },
    {
      "word": "near",
      "sentence": "Please spell the word near."
    },
    {
      "word": "never",
      "sentence": "Please spell the word never."
    },
    {
      "word": "next",
      "sentence": "Please spell the word next."
    },
    {
      "word": "often",
      "sentence": "Please spell the word often."
    },
    {
      "word": "once",
      "sentence": "Please spell the word once."
    },
    {
      "word": "only",
      "sentence": "Please spell the word only."
    },
    {
      "word": "order",
      "sentence": "Please spell the word order."
    },
    {
      "word": "other",
      "sentence": "Please spell the word other."
    },
    {
      "word": "paper",
      "sentence": "Please spell the word paper."
    },
    {
      "word": "person",
      "sentence": "Please spell the word person."
    },
    {
      "word": "piece",
      "sentence": "Please spell the word piece."
    },
    {
      "word": "place",
      "sentence": "Please spell the word place."
    },
    {
      "word": "point",
      "sentence": "Please spell the word point."
    },
    {
      "word": "problem",
      "sentence": "Please spell the word problem."
    },
    {
      "word": "question",
      "sentence": "Please spell the word question."
    },
    {
      "word": "really",
      "sentence": "Please spell the word really."
    },
    {
      "word": "right",
      "sentence": "Please spell the word right."
    },
    {
      "word": "second",
      "sentence": "Please spell the word second."
    },
    {
      "word": "should",
      "sentence": "Please spell the word should."
    },
    {
      "word": "since",
      "sentence": "Please spell the word since."
    },
    {
      "word": "something",
      "sentence": "Please spell the word something."
    },
    {
      "word": "sometimes",
      "sentence": "Please spell the word sometimes."
    },
    {
      "word": "soon",
      "sentence": "Please spell the word soon."
    },
    {
      "word": "sound",
      "sentence": "Please spell the word sound."
    },
    {
      "word": "still",
      "sentence": "Please spell the word still."
    },
    {
      "word": "such",
      "sentence": "Please spell the word such."
    },
    {
      "word": "sure",
      "sentence": "Please spell the word sure."
    },
    {
      "word": "though",
      "sentence": "Please spell the word though."
    },
    {
      "word": "together",
      "sentence": "Please spell the word together."
    },
    {
      "word": "toward",
      "sentence": "Please spell the word toward."
    },
    {
      "word": "until",
      "sentence": "Please spell the word until."
    },
    {
      "word": "usually",
      "sentence": "Please spell the word usually."
    },
    {
      "word": "watch",
      "sentence": "Please spell the word watch."
    },
    {
      "word": "while",
      "sentence": "Please spell the word while."
    }
  ],
  "4": [
    {
      "word": "answer",
      "sentence": "She knew the right answer."
    },
    {
      "word": "enough",
      "sentence": "Do we have enough time?"
    },
    {
      "word": "people",
      "sentence": "Many people came to the fair."
    },
    {
      "word": "special",
      "sentence": "Today is a special day."
    },
    {
      "word": "favorite",
      "sentence": "Blue is my favorite color."
    },
    {
      "word": "remember",
      "sentence": "I remember my first day."
    },
    {
      "word": "surprise",
      "sentence": "The party was a big surprise."
    },
    {
      "word": "believe",
      "sentence": "I believe in myself."
    },
    {
      "word": "pretty",
      "sentence": "The garden looks pretty."
    },
    {
      "word": "because",
      "sentence": "We stayed inside because it rained."
    },
    {
      "word": "address",
      "sentence": "Please spell the word address."
    },
    {
      "word": "against",
      "sentence": "Please spell the word against."
    },
    {
      "word": "almost",
      "sentence": "Please spell the word almost."
    },
    {
      "word": "although",
      "sentence": "Please spell the word although."
    },
    {
      "word": "among",
      "sentence": "Please spell the word among."
    },
    {
      "word": "appear",
      "sentence": "Please spell the word appear."
    },
    {
      "word": "arrive",
      "sentence": "Please spell the word arrive."
    },
    {
      "word": "attention",
      "sentence": "Please spell the word attention."
    },
    {
      "word": "beautiful",
      "sentence": "Please spell the word beautiful."
    },
    {
      "word": "become",
      "sentence": "Please spell the word become."
    },
    {
      "word": "beginning",
      "sentence": "Please spell the word beginning."
    },
    {
      "word": "behind",
      "sentence": "Please spell the word behind."
    },
    {
      "word": "below",
      "sentence": "Please spell the word below."
    },
    {
      "word": "between",
      "sentence": "Please spell the word between."
    },
    {
      "word": "bicycle",
      "sentence": "Please spell the word bicycle."
    },
    {
      "word": "birthday",
      "sentence": "Please spell the word birthday."
    },
    {
      "word": "bought",
      "sentence": "Please spell the word bought."
    },
    {
      "word": "breakfast",
      "sentence": "Please spell the word breakfast."
    },
    {
      "word": "breathe",
      "sentence": "Please spell the word breathe."
    },
    {
      "word": "bright",
      "sentence": "Please spell the word bright."
    },
    {
      "word": "brother",
      "sentence": "Please spell the word brother."
    },
    {
      "word": "building",
      "sentence": "Please spell the word building."
    },
    {
      "word": "business",
      "sentence": "Please spell the word business."
    },
    {
      "word": "caught",
      "sentence": "Please spell the word caught."
    },
    {
      "word": "certain",
      "sentence": "Please spell the word certain."
    },
    {
      "word": "children",
      "sentence": "Please spell the word children."
    },
    {
      "word": "choose",
      "sentence": "Please spell the word choose."
    },
    {
      "word": "circle",
      "sentence": "Please spell the word circle."
    },
    {
      "word": "clothes",
      "sentence": "Please spell the word clothes."
    },
    {
      "word": "college",
      "sentence": "Please spell the word college."
    },
    {
      "word": "common",
      "sentence": "Please spell the word common."
    },
    {
      "word": "complete",
      "sentence": "Please spell the word complete."
    },
    {
      "word": "continue",
      "sentence": "Please spell the word continue."
    },
    {
      "word": "correct",
      "sentence": "Please spell the word correct."
    },
    {
      "word": "couldn't",
      "sentence": "Please spell the word couldn't."
    },
    {
      "word": "country",
      "sentence": "Please spell the word country."
    },
    {
      "word": "course",
      "sentence": "Please spell the word course."
    },
    {
      "word": "cousin",
      "sentence": "Please spell the word cousin."
    },
    {
      "word": "cover",
      "sentence": "Please spell the word cover."
    },
    {
      "word": "didn't",
      "sentence": "Please spell the word didn't."
    },
    {
      "word": "different",
      "sentence": "Please spell the word different."
    },
    {
      "word": "doesn't",
      "sentence": "Please spell the word doesn't."
    },
    {
      "word": "dollar",
      "sentence": "Please spell the word dollar."
    },
    {
      "word": "during",
      "sentence": "Please spell the word during."
    },
    {
      "word": "early",
      "sentence": "Please spell the word early."
    },
    {
      "word": "earth",
      "sentence": "Please spell the word earth."
    },
    {
      "word": "either",
      "sentence": "Please spell the word either."
    },
    {
      "word": "else",
      "sentence": "Please spell the word else."
    },
    {
      "word": "empty",
      "sentence": "Please spell the word empty."
    },
    {
      "word": "engine",
      "sentence": "Please spell the word engine."
    },
    {
      "word": "English",
      "sentence": "Please spell the word English."
    },
    {
      "word": "evening",
      "sentence": "Please spell the word evening."
    },
    {
      "word": "everyone",
      "sentence": "Please spell the word everyone."
    },
    {
      "word": "everything",
      "sentence": "Please spell the word everything."
    },
    {
      "word": "example",
      "sentence": "Please spell the word example."
    },
    {
      "word": "except",
      "sentence": "Please spell the word except."
    },
    {
      "word": "excite",
      "sentence": "Please spell the word excite."
    },
    {
      "word": "excuse",
      "sentence": "Please spell the word excuse."
    },
    {
      "word": "expect",
      "sentence": "Please spell the word expect."
    },
    {
      "word": "explain",
      "sentence": "Please spell the word explain."
    },
    {
      "word": "family",
      "sentence": "Please spell the word family."
    },
    {
      "word": "famous",
      "sentence": "Please spell the word famous."
    },
    {
      "word": "father",
      "sentence": "Please spell the word father."
    },
    {
      "word": "finally",
      "sentence": "Please spell the word finally."
    },
    {
      "word": "finger",
      "sentence": "Please spell the word finger."
    },
    {
      "word": "finish",
      "sentence": "Please spell the word finish."
    },
    {
      "word": "follow",
      "sentence": "Please spell the word follow."
    },
    {
      "word": "forest",
      "sentence": "Please spell the word forest."
    },
    {
      "word": "forgot",
      "sentence": "Please spell the word forgot."
    },
    {
      "word": "forward",
      "sentence": "Please spell the word forward."
    },
    {
      "word": "friend",
      "sentence": "Please spell the word friend."
    },
    {
      "word": "front",
      "sentence": "Please spell the word front."
    },
    {
      "word": "garden",
      "sentence": "Please spell the word garden."
    },
    {
      "word": "general",
      "sentence": "Please spell the word general."
    },
    {
      "word": "gone",
      "sentence": "Please spell the word gone."
    },
    {
      "word": "great",
      "sentence": "Please spell the word great."
    },
    {
      "word": "group",
      "sentence": "Please spell the word group."
    },
    {
      "word": "guess",
      "sentence": "Please spell the word guess."
    },
    {
      "word": "happen",
      "sentence": "Please spell the word happen."
    },
    {
      "word": "happy",
      "sentence": "Please spell the word happy."
    },
    {
      "word": "heard",
      "sentence": "Please spell the word heard."
    },
    {
      "word": "heavy",
      "sentence": "Please spell the word heavy."
    },
    {
      "word": "himself",
      "sentence": "Please spell the word himself."
    },
    {
      "word": "history",
      "sentence": "Please spell the word history."
    },
    {
      "word": "however",
      "sentence": "Please spell the word however."
    },
    {
      "word": "hundred",
      "sentence": "Please spell the word hundred."
    },
    {
      "word": "hurry",
      "sentence": "Please spell the word hurry."
    },
    {
      "word": "important",
      "sentence": "Please spell the word important."
    },
    {
      "word": "instead",
      "sentence": "Please spell the word instead."
    },
    {
      "word": "island",
      "sentence": "Please spell the word island."
    }
  ],
  "5": [
    {
      "word": "different",
      "sentence": "Every snowflake looks different."
    },
    {
      "word": "important",
      "sentence": "Sleep is important for your brain."
    },
    {
      "word": "question",
      "sentence": "He raised his hand to ask a question."
    },
    {
      "word": "probably",
      "sentence": "It will probably rain tomorrow."
    },
    {
      "word": "business",
      "sentence": "They started a small business."
    },
    {
      "word": "decision",
      "sentence": "It was a hard decision to make."
    },
    {
      "word": "language",
      "sentence": "She speaks two languages."
    },
    {
      "word": "calendar",
      "sentence": "Mark the date on your calendar."
    },
    {
      "word": "beautiful",
      "sentence": "The sunset was beautiful."
    },
    {
      "word": "separate",
      "sentence": "Please separate the recycling."
    },
    {
      "word": "actually",
      "sentence": "Please spell the word actually."
    },
    {
      "word": "although",
      "sentence": "Please spell the word although."
    },
    {
      "word": "ancient",
      "sentence": "Please spell the word ancient."
    },
    {
      "word": "average",
      "sentence": "Please spell the word average."
    },
    {
      "word": "awkward",
      "sentence": "Please spell the word awkward."
    },
    {
      "word": "balance",
      "sentence": "Please spell the word balance."
    },
    {
      "word": "balloon",
      "sentence": "Please spell the word balloon."
    },
    {
      "word": "bargain",
      "sentence": "Please spell the word bargain."
    },
    {
      "word": "basement",
      "sentence": "Please spell the word basement."
    },
    {
      "word": "battery",
      "sentence": "Please spell the word battery."
    },
    {
      "word": "behavior",
      "sentence": "Please spell the word behavior."
    },
    {
      "word": "believe",
      "sentence": "Please spell the word believe."
    },
    {
      "word": "benefit",
      "sentence": "Please spell the word benefit."
    },
    {
      "word": "between",
      "sentence": "Please spell the word between."
    },
    {
      "word": "bicycle",
      "sentence": "Please spell the word bicycle."
    },
    {
      "word": "blanket",
      "sentence": "Please spell the word blanket."
    },
    {
      "word": "blizzard",
      "sentence": "Please spell the word blizzard."
    },
    {
      "word": "boulder",
      "sentence": "Please spell the word boulder."
    },
    {
      "word": "breakfast",
      "sentence": "Please spell the word breakfast."
    },
    {
      "word": "breathe",
      "sentence": "Please spell the word breathe."
    },
    {
      "word": "brilliant",
      "sentence": "Please spell the word brilliant."
    },
    {
      "word": "brother",
      "sentence": "Please spell the word brother."
    },
    {
      "word": "building",
      "sentence": "Please spell the word building."
    },
    {
      "word": "capture",
      "sentence": "Please spell the word capture."
    },
    {
      "word": "careful",
      "sentence": "Please spell the word careful."
    },
    {
      "word": "ceiling",
      "sentence": "Please spell the word ceiling."
    },
    {
      "word": "century",
      "sentence": "Please spell the word century."
    },
    {
      "word": "certain",
      "sentence": "Please spell the word certain."
    },
    {
      "word": "challenge",
      "sentence": "Please spell the word challenge."
    },
    {
      "word": "champion",
      "sentence": "Please spell the word champion."
    },
    {
      "word": "channel",
      "sentence": "Please spell the word channel."
    },
    {
      "word": "chapter",
      "sentence": "Please spell the word chapter."
    },
    {
      "word": "character",
      "sentence": "Please spell the word character."
    },
    {
      "word": "chemical",
      "sentence": "Please spell the word chemical."
    },
    {
      "word": "chicken",
      "sentence": "Please spell the word chicken."
    },
    {
      "word": "chocolate",
      "sentence": "Please spell the word chocolate."
    },
    {
      "word": "circuit",
      "sentence": "Please spell the word circuit."
    },
    {
      "word": "citizen",
      "sentence": "Please spell the word citizen."
    },
    {
      "word": "climate",
      "sentence": "Please spell the word climate."
    },
    {
      "word": "clothes",
      "sentence": "Please spell the word clothes."
    },
    {
      "word": "collect",
      "sentence": "Please spell the word collect."
    },
    {
      "word": "college",
      "sentence": "Please spell the word college."
    },
    {
      "word": "column",
      "sentence": "Please spell the word column."
    },
    {
      "word": "combine",
      "sentence": "Please spell the word combine."
    },
    {
      "word": "comfort",
      "sentence": "Please spell the word comfort."
    },
    {
      "word": "common",
      "sentence": "Please spell the word common."
    },
    {
      "word": "company",
      "sentence": "Please spell the word company."
    },
    {
      "word": "compare",
      "sentence": "Please spell the word compare."
    },
    {
      "word": "complete",
      "sentence": "Please spell the word complete."
    },
    {
      "word": "compose",
      "sentence": "Please spell the word compose."
    },
    {
      "word": "concern",
      "sentence": "Please spell the word concern."
    },
    {
      "word": "concert",
      "sentence": "Please spell the word concert."
    },
    {
      "word": "condition",
      "sentence": "Please spell the word condition."
    },
    {
      "word": "conduct",
      "sentence": "Please spell the word conduct."
    },
    {
      "word": "confess",
      "sentence": "Please spell the word confess."
    },
    {
      "word": "confirm",
      "sentence": "Please spell the word confirm."
    },
    {
      "word": "connect",
      "sentence": "Please spell the word connect."
    },
    {
      "word": "consider",
      "sentence": "Please spell the word consider."
    },
    {
      "word": "contain",
      "sentence": "Please spell the word contain."
    },
    {
      "word": "content",
      "sentence": "Please spell the word content."
    },
    {
      "word": "contest",
      "sentence": "Please spell the word contest."
    },
    {
      "word": "control",
      "sentence": "Please spell the word control."
    },
    {
      "word": "correct",
      "sentence": "Please spell the word correct."
    },
    {
      "word": "costume",
      "sentence": "Please spell the word costume."
    },
    {
      "word": "cottage",
      "sentence": "Please spell the word cottage."
    },
    {
      "word": "country",
      "sentence": "Please spell the word country."
    },
    {
      "word": "courage",
      "sentence": "Please spell the word courage."
    },
    {
      "word": "course",
      "sentence": "Please spell the word course."
    },
    {
      "word": "cousin",
      "sentence": "Please spell the word cousin."
    },
    {
      "word": "create",
      "sentence": "Please spell the word create."
    },
    {
      "word": "creature",
      "sentence": "Please spell the word creature."
    },
    {
      "word": "culture",
      "sentence": "Please spell the word culture."
    },
    {
      "word": "curious",
      "sentence": "Please spell the word curious."
    },
    {
      "word": "current",
      "sentence": "Please spell the word current."
    },
    {
      "word": "curtain",
      "sentence": "Please spell the word curtain."
    },
    {
      "word": "custom",
      "sentence": "Please spell the word custom."
    },
    {
      "word": "damage",
      "sentence": "Please spell the word damage."
    },
    {
      "word": "danger",
      "sentence": "Please spell the word danger."
    },
    {
      "word": "daughter",
      "sentence": "Please spell the word daughter."
    },
    {
      "word": "decide",
      "sentence": "Please spell the word decide."
    },
    {
      "word": "declare",
      "sentence": "Please spell the word declare."
    },
    {
      "word": "decorate",
      "sentence": "Please spell the word decorate."
    },
    {
      "word": "defense",
      "sentence": "Please spell the word defense."
    },
    {
      "word": "degree",
      "sentence": "Please spell the word degree."
    },
    {
      "word": "delight",
      "sentence": "Please spell the word delight."
    },
    {
      "word": "deliver",
      "sentence": "Please spell the word deliver."
    },
    {
      "word": "demand",
      "sentence": "Please spell the word demand."
    },
    {
      "word": "depend",
      "sentence": "Please spell the word depend."
    },
    {
      "word": "describe",
      "sentence": "Please spell the word describe."
    },
    {
      "word": "design",
      "sentence": "Please spell the word design."
    }
  ],
  "6": [
    {
      "word": "definitely",
      "sentence": "I will definitely be there."
    },
    {
      "word": "environment",
      "sentence": "We should protect the environment."
    },
    {
      "word": "necessary",
      "sentence": "Sleep is necessary for good health."
    },
    {
      "word": "rhythm",
      "sentence": "The drummer kept a steady rhythm."
    },
    {
      "word": "recommend",
      "sentence": "I recommend this book."
    },
    {
      "word": "temperature",
      "sentence": "The temperature dropped overnight."
    },
    {
      "word": "achievement",
      "sentence": "Graduating was a big achievement."
    },
    {
      "word": "embarrass",
      "sentence": "Don't embarrass your friend."
    },
    {
      "word": "guarantee",
      "sentence": "They guarantee the product works."
    },
    {
      "word": "privilege",
      "sentence": "Education is a privilege."
    },
    {
      "word": "absolute",
      "sentence": "Please spell the word absolute."
    },
    {
      "word": "absorb",
      "sentence": "Please spell the word absorb."
    },
    {
      "word": "abstract",
      "sentence": "Please spell the word abstract."
    },
    {
      "word": "abundant",
      "sentence": "Please spell the word abundant."
    },
    {
      "word": "academy",
      "sentence": "Please spell the word academy."
    },
    {
      "word": "accurate",
      "sentence": "Please spell the word accurate."
    },
    {
      "word": "achieve",
      "sentence": "Please spell the word achieve."
    },
    {
      "word": "acquire",
      "sentence": "Please spell the word acquire."
    },
    {
      "word": "adapt",
      "sentence": "Please spell the word adapt."
    },
    {
      "word": "addition",
      "sentence": "Please spell the word addition."
    },
    {
      "word": "adequate",
      "sentence": "Please spell the word adequate."
    },
    {
      "word": "adjust",
      "sentence": "Please spell the word adjust."
    },
    {
      "word": "admire",
      "sentence": "Please spell the word admire."
    },
    {
      "word": "advance",
      "sentence": "Please spell the word advance."
    },
    {
      "word": "adventure",
      "sentence": "Please spell the word adventure."
    },
    {
      "word": "advertise",
      "sentence": "Please spell the word advertise."
    },
    {
      "word": "advice",
      "sentence": "Please spell the word advice."
    },
    {
      "word": "affair",
      "sentence": "Please spell the word affair."
    },
    {
      "word": "affect",
      "sentence": "Please spell the word affect."
    },
    {
      "word": "afford",
      "sentence": "Please spell the word afford."
    },
    {
      "word": "agency",
      "sentence": "Please spell the word agency."
    },
    {
      "word": "agenda",
      "sentence": "Please spell the word agenda."
    },
    {
      "word": "aggressive",
      "sentence": "Please spell the word aggressive."
    },
    {
      "word": "aircraft",
      "sentence": "Please spell the word aircraft."
    },
    {
      "word": "alarm",
      "sentence": "Please spell the word alarm."
    },
    {
      "word": "album",
      "sentence": "Please spell the word album."
    },
    {
      "word": "alcohol",
      "sentence": "Please spell the word alcohol."
    },
    {
      "word": "alert",
      "sentence": "Please spell the word alert."
    },
    {
      "word": "alien",
      "sentence": "Please spell the word alien."
    },
    {
      "word": "alike",
      "sentence": "Please spell the word alike."
    },
    {
      "word": "alive",
      "sentence": "Please spell the word alive."
    },
    {
      "word": "alliance",
      "sentence": "Please spell the word alliance."
    },
    {
      "word": "allow",
      "sentence": "Please spell the word allow."
    },
    {
      "word": "almost",
      "sentence": "Please spell the word almost."
    },
    {
      "word": "alone",
      "sentence": "Please spell the word alone."
    },
    {
      "word": "along",
      "sentence": "Please spell the word along."
    },
    {
      "word": "already",
      "sentence": "Please spell the word already."
    },
    {
      "word": "alter",
      "sentence": "Please spell the word alter."
    },
    {
      "word": "although",
      "sentence": "Please spell the word although."
    },
    {
      "word": "altitude",
      "sentence": "Please spell the word altitude."
    },
    {
      "word": "altogether",
      "sentence": "Please spell the word altogether."
    },
    {
      "word": "always",
      "sentence": "Please spell the word always."
    },
    {
      "word": "amateur",
      "sentence": "Please spell the word amateur."
    },
    {
      "word": "amaze",
      "sentence": "Please spell the word amaze."
    },
    {
      "word": "ambition",
      "sentence": "Please spell the word ambition."
    },
    {
      "word": "amend",
      "sentence": "Please spell the word amend."
    },
    {
      "word": "among",
      "sentence": "Please spell the word among."
    },
    {
      "word": "amount",
      "sentence": "Please spell the word amount."
    },
    {
      "word": "amuse",
      "sentence": "Please spell the word amuse."
    },
    {
      "word": "analyze",
      "sentence": "Please spell the word analyze."
    },
    {
      "word": "ancestor",
      "sentence": "Please spell the word ancestor."
    },
    {
      "word": "anchor",
      "sentence": "Please spell the word anchor."
    },
    {
      "word": "ancient",
      "sentence": "Please spell the word ancient."
    },
    {
      "word": "angel",
      "sentence": "Please spell the word angel."
    },
    {
      "word": "anger",
      "sentence": "Please spell the word anger."
    },
    {
      "word": "angle",
      "sentence": "Please spell the word angle."
    },
    {
      "word": "angry",
      "sentence": "Please spell the word angry."
    },
    {
      "word": "animal",
      "sentence": "Please spell the word animal."
    },
    {
      "word": "announce",
      "sentence": "Please spell the word announce."
    },
    {
      "word": "annual",
      "sentence": "Please spell the word annual."
    },
    {
      "word": "another",
      "sentence": "Please spell the word another."
    },
    {
      "word": "answer",
      "sentence": "Please spell the word answer."
    },
    {
      "word": "antenna",
      "sentence": "Please spell the word antenna."
    },
    {
      "word": "anxiety",
      "sentence": "Please spell the word anxiety."
    },
    {
      "word": "anxious",
      "sentence": "Please spell the word anxious."
    },
    {
      "word": "anybody",
      "sentence": "Please spell the word anybody."
    },
    {
      "word": "anyone",
      "sentence": "Please spell the word anyone."
    },
    {
      "word": "anyway",
      "sentence": "Please spell the word anyway."
    },
    {
      "word": "anywhere",
      "sentence": "Please spell the word anywhere."
    },
    {
      "word": "apart",
      "sentence": "Please spell the word apart."
    },
    {
      "word": "apartment",
      "sentence": "Please spell the word apartment."
    },
    {
      "word": "apologize",
      "sentence": "Please spell the word apologize."
    },
    {
      "word": "appeal",
      "sentence": "Please spell the word appeal."
    },
    {
      "word": "appear",
      "sentence": "Please spell the word appear."
    },
    {
      "word": "appetite",
      "sentence": "Please spell the word appetite."
    },
    {
      "word": "applaud",
      "sentence": "Please spell the word applaud."
    },
    {
      "word": "apple",
      "sentence": "Please spell the word apple."
    },
    {
      "word": "apply",
      "sentence": "Please spell the word apply."
    },
    {
      "word": "appoint",
      "sentence": "Please spell the word appoint."
    },
    {
      "word": "appreciate",
      "sentence": "Please spell the word appreciate."
    },
    {
      "word": "approach",
      "sentence": "Please spell the word approach."
    },
    {
      "word": "approve",
      "sentence": "Please spell the word approve."
    },
    {
      "word": "april",
      "sentence": "Please spell the word april."
    },
    {
      "word": "area",
      "sentence": "Please spell the word area."
    },
    {
      "word": "argue",
      "sentence": "Please spell the word argue."
    },
    {
      "word": "arise",
      "sentence": "Please spell the word arise."
    },
    {
      "word": "army",
      "sentence": "Please spell the word army."
    },
    {
      "word": "around",
      "sentence": "Please spell the word around."
    },
    {
      "word": "arrange",
      "sentence": "Please spell the word arrange."
    },
    {
      "word": "arrest",
      "sentence": "Please spell the word arrest."
    }
  ],
  "7": [
    {
      "word": "address",
      "sentence": "What is your home address?"
    },
    {
      "word": "experience",
      "sentence": "Camp was a fun experience."
    },
    {
      "word": "conscious",
      "sentence": "Be conscious of how you treat others."
    },
    {
      "word": "maintenance",
      "sentence": "The car needs regular maintenance."
    },
    {
      "word": "occasionally",
      "sentence": "We occasionally eat out."
    },
    {
      "word": "absence",
      "sentence": "Her absence was noticed."
    },
    {
      "word": "colleague",
      "sentence": "She asked a colleague for help."
    },
    {
      "word": "exaggerate",
      "sentence": "Try not to exaggerate."
    },
    {
      "word": "parallel",
      "sentence": "Draw two parallel lines."
    },
    {
      "word": "yacht",
      "sentence": "They sailed on a small yacht."
    },
    {
      "word": "abandon",
      "sentence": "Please spell the word abandon."
    },
    {
      "word": "ability",
      "sentence": "Please spell the word ability."
    },
    {
      "word": "abolish",
      "sentence": "Please spell the word abolish."
    },
    {
      "word": "abroad",
      "sentence": "Please spell the word abroad."
    },
    {
      "word": "abrupt",
      "sentence": "Please spell the word abrupt."
    },
    {
      "word": "absolute",
      "sentence": "Please spell the word absolute."
    },
    {
      "word": "absorb",
      "sentence": "Please spell the word absorb."
    },
    {
      "word": "abstract",
      "sentence": "Please spell the word abstract."
    },
    {
      "word": "absurd",
      "sentence": "Please spell the word absurd."
    },
    {
      "word": "abundant",
      "sentence": "Please spell the word abundant."
    },
    {
      "word": "abuse",
      "sentence": "Please spell the word abuse."
    },
    {
      "word": "academic",
      "sentence": "Please spell the word academic."
    },
    {
      "word": "accelerate",
      "sentence": "Please spell the word accelerate."
    },
    {
      "word": "accent",
      "sentence": "Please spell the word accent."
    },
    {
      "word": "accept",
      "sentence": "Please spell the word accept."
    },
    {
      "word": "access",
      "sentence": "Please spell the word access."
    },
    {
      "word": "accident",
      "sentence": "Please spell the word accident."
    },
    {
      "word": "accommodate",
      "sentence": "Please spell the word accommodate."
    },
    {
      "word": "accompany",
      "sentence": "Please spell the word accompany."
    },
    {
      "word": "accomplish",
      "sentence": "Please spell the word accomplish."
    },
    {
      "word": "accord",
      "sentence": "Please spell the word accord."
    },
    {
      "word": "account",
      "sentence": "Please spell the word account."
    },
    {
      "word": "accumulate",
      "sentence": "Please spell the word accumulate."
    },
    {
      "word": "accurate",
      "sentence": "Please spell the word accurate."
    },
    {
      "word": "accuse",
      "sentence": "Please spell the word accuse."
    },
    {
      "word": "achieve",
      "sentence": "Please spell the word achieve."
    },
    {
      "word": "acknowledge",
      "sentence": "Please spell the word acknowledge."
    },
    {
      "word": "acquire",
      "sentence": "Please spell the word acquire."
    },
    {
      "word": "acre",
      "sentence": "Please spell the word acre."
    },
    {
      "word": "across",
      "sentence": "Please spell the word across."
    },
    {
      "word": "action",
      "sentence": "Please spell the word action."
    },
    {
      "word": "active",
      "sentence": "Please spell the word active."
    },
    {
      "word": "activity",
      "sentence": "Please spell the word activity."
    },
    {
      "word": "actor",
      "sentence": "Please spell the word actor."
    },
    {
      "word": "actual",
      "sentence": "Please spell the word actual."
    },
    {
      "word": "adapt",
      "sentence": "Please spell the word adapt."
    },
    {
      "word": "addict",
      "sentence": "Please spell the word addict."
    },
    {
      "word": "addition",
      "sentence": "Please spell the word addition."
    },
    {
      "word": "adequate",
      "sentence": "Please spell the word adequate."
    },
    {
      "word": "adjust",
      "sentence": "Please spell the word adjust."
    },
    {
      "word": "administer",
      "sentence": "Please spell the word administer."
    },
    {
      "word": "admire",
      "sentence": "Please spell the word admire."
    },
    {
      "word": "admission",
      "sentence": "Please spell the word admission."
    },
    {
      "word": "admit",
      "sentence": "Please spell the word admit."
    },
    {
      "word": "adolescent",
      "sentence": "Please spell the word adolescent."
    },
    {
      "word": "adopt",
      "sentence": "Please spell the word adopt."
    },
    {
      "word": "adult",
      "sentence": "Please spell the word adult."
    },
    {
      "word": "advance",
      "sentence": "Please spell the word advance."
    },
    {
      "word": "advantage",
      "sentence": "Please spell the word advantage."
    },
    {
      "word": "adventure",
      "sentence": "Please spell the word adventure."
    },
    {
      "word": "adverse",
      "sentence": "Please spell the word adverse."
    },
    {
      "word": "advertise",
      "sentence": "Please spell the word advertise."
    },
    {
      "word": "advice",
      "sentence": "Please spell the word advice."
    },
    {
      "word": "advise",
      "sentence": "Please spell the word advise."
    },
    {
      "word": "advocate",
      "sentence": "Please spell the word advocate."
    },
    {
      "word": "affair",
      "sentence": "Please spell the word affair."
    },
    {
      "word": "affect",
      "sentence": "Please spell the word affect."
    },
    {
      "word": "affection",
      "sentence": "Please spell the word affection."
    },
    {
      "word": "afford",
      "sentence": "Please spell the word afford."
    },
    {
      "word": "afraid",
      "sentence": "Please spell the word afraid."
    },
    {
      "word": "afterward",
      "sentence": "Please spell the word afterward."
    },
    {
      "word": "against",
      "sentence": "Please spell the word against."
    },
    {
      "word": "agency",
      "sentence": "Please spell the word agency."
    },
    {
      "word": "agenda",
      "sentence": "Please spell the word agenda."
    },
    {
      "word": "agent",
      "sentence": "Please spell the word agent."
    },
    {
      "word": "aggravate",
      "sentence": "Please spell the word aggravate."
    },
    {
      "word": "aggressive",
      "sentence": "Please spell the word aggressive."
    },
    {
      "word": "agile",
      "sentence": "Please spell the word agile."
    },
    {
      "word": "agitate",
      "sentence": "Please spell the word agitate."
    },
    {
      "word": "agree",
      "sentence": "Please spell the word agree."
    },
    {
      "word": "agriculture",
      "sentence": "Please spell the word agriculture."
    },
    {
      "word": "ahead",
      "sentence": "Please spell the word ahead."
    },
    {
      "word": "aid",
      "sentence": "Please spell the word aid."
    },
    {
      "word": "aim",
      "sentence": "Please spell the word aim."
    },
    {
      "word": "airborne",
      "sentence": "Please spell the word airborne."
    },
    {
      "word": "aircraft",
      "sentence": "Please spell the word aircraft."
    },
    {
      "word": "airline",
      "sentence": "Please spell the word airline."
    },
    {
      "word": "airport",
      "sentence": "Please spell the word airport."
    },
    {
      "word": "aisle",
      "sentence": "Please spell the word aisle."
    },
    {
      "word": "alarm",
      "sentence": "Please spell the word alarm."
    },
    {
      "word": "album",
      "sentence": "Please spell the word album."
    },
    {
      "word": "alcohol",
      "sentence": "Please spell the word alcohol."
    },
    {
      "word": "alert",
      "sentence": "Please spell the word alert."
    },
    {
      "word": "algebra",
      "sentence": "Please spell the word algebra."
    },
    {
      "word": "alien",
      "sentence": "Please spell the word alien."
    },
    {
      "word": "alike",
      "sentence": "Please spell the word alike."
    },
    {
      "word": "alive",
      "sentence": "Please spell the word alive."
    },
    {
      "word": "allegation",
      "sentence": "Please spell the word allegation."
    },
    {
      "word": "allege",
      "sentence": "Please spell the word allege."
    },
    {
      "word": "alliance",
      "sentence": "Please spell the word alliance."
    }
  ],
  "8": [
    {
      "word": "cemetery",
      "sentence": "They visited the old cemetery."
    },
    {
      "word": "occurrence",
      "sentence": "Snow is a rare occurrence here."
    },
    {
      "word": "fluorescent",
      "sentence": "The fluorescent lights buzzed."
    },
    {
      "word": "mischievous",
      "sentence": "The mischievous puppy chewed a shoe."
    },
    {
      "word": "questionnaire",
      "sentence": "Please fill out the questionnaire."
    },
    {
      "word": "abundant",
      "sentence": "Wildflowers were abundant."
    },
    {
      "word": "camouflage",
      "sentence": "The frog uses camouflage."
    },
    {
      "word": "deteriorate",
      "sentence": "Old paper can deteriorate."
    },
    {
      "word": "silhouette",
      "sentence": "We saw the silhouette of mountains."
    },
    {
      "word": "parliament",
      "sentence": "The parliament debated the law."
    },
    {
      "word": "abandon",
      "sentence": "Please spell the word abandon."
    },
    {
      "word": "abbreviate",
      "sentence": "Please spell the word abbreviate."
    },
    {
      "word": "abdicate",
      "sentence": "Please spell the word abdicate."
    },
    {
      "word": "aberration",
      "sentence": "Please spell the word aberration."
    },
    {
      "word": "abhor",
      "sentence": "Please spell the word abhor."
    },
    {
      "word": "abide",
      "sentence": "Please spell the word abide."
    },
    {
      "word": "ability",
      "sentence": "Please spell the word ability."
    },
    {
      "word": "ablaze",
      "sentence": "Please spell the word ablaze."
    },
    {
      "word": "abnormal",
      "sentence": "Please spell the word abnormal."
    },
    {
      "word": "abolish",
      "sentence": "Please spell the word abolish."
    },
    {
      "word": "aboriginal",
      "sentence": "Please spell the word aboriginal."
    },
    {
      "word": "abort",
      "sentence": "Please spell the word abort."
    },
    {
      "word": "abound",
      "sentence": "Please spell the word abound."
    },
    {
      "word": "abrasive",
      "sentence": "Please spell the word abrasive."
    },
    {
      "word": "abridge",
      "sentence": "Please spell the word abridge."
    },
    {
      "word": "abroad",
      "sentence": "Please spell the word abroad."
    },
    {
      "word": "abrupt",
      "sentence": "Please spell the word abrupt."
    },
    {
      "word": "abscess",
      "sentence": "Please spell the word abscess."
    },
    {
      "word": "abscond",
      "sentence": "Please spell the word abscond."
    },
    {
      "word": "absence",
      "sentence": "Please spell the word absence."
    },
    {
      "word": "absent",
      "sentence": "Please spell the word absent."
    },
    {
      "word": "absolute",
      "sentence": "Please spell the word absolute."
    },
    {
      "word": "absolve",
      "sentence": "Please spell the word absolve."
    },
    {
      "word": "absorb",
      "sentence": "Please spell the word absorb."
    },
    {
      "word": "abstain",
      "sentence": "Please spell the word abstain."
    },
    {
      "word": "abstract",
      "sentence": "Please spell the word abstract."
    },
    {
      "word": "absurd",
      "sentence": "Please spell the word absurd."
    },
    {
      "word": "abundance",
      "sentence": "Please spell the word abundance."
    },
    {
      "word": "abuse",
      "sentence": "Please spell the word abuse."
    },
    {
      "word": "abyss",
      "sentence": "Please spell the word abyss."
    },
    {
      "word": "academic",
      "sentence": "Please spell the word academic."
    },
    {
      "word": "accelerate",
      "sentence": "Please spell the word accelerate."
    },
    {
      "word": "accent",
      "sentence": "Please spell the word accent."
    },
    {
      "word": "accept",
      "sentence": "Please spell the word accept."
    },
    {
      "word": "access",
      "sentence": "Please spell the word access."
    },
    {
      "word": "accessory",
      "sentence": "Please spell the word accessory."
    },
    {
      "word": "accident",
      "sentence": "Please spell the word accident."
    },
    {
      "word": "acclaim",
      "sentence": "Please spell the word acclaim."
    },
    {
      "word": "acclimate",
      "sentence": "Please spell the word acclimate."
    },
    {
      "word": "accolade",
      "sentence": "Please spell the word accolade."
    },
    {
      "word": "accommodate",
      "sentence": "Please spell the word accommodate."
    },
    {
      "word": "accompany",
      "sentence": "Please spell the word accompany."
    },
    {
      "word": "accomplice",
      "sentence": "Please spell the word accomplice."
    },
    {
      "word": "accomplish",
      "sentence": "Please spell the word accomplish."
    },
    {
      "word": "accord",
      "sentence": "Please spell the word accord."
    },
    {
      "word": "accordion",
      "sentence": "Please spell the word accordion."
    },
    {
      "word": "account",
      "sentence": "Please spell the word account."
    },
    {
      "word": "accumulate",
      "sentence": "Please spell the word accumulate."
    },
    {
      "word": "accurate",
      "sentence": "Please spell the word accurate."
    },
    {
      "word": "accuse",
      "sentence": "Please spell the word accuse."
    },
    {
      "word": "accustom",
      "sentence": "Please spell the word accustom."
    },
    {
      "word": "acerbic",
      "sentence": "Please spell the word acerbic."
    },
    {
      "word": "achieve",
      "sentence": "Please spell the word achieve."
    },
    {
      "word": "acid",
      "sentence": "Please spell the word acid."
    },
    {
      "word": "acknowledge",
      "sentence": "Please spell the word acknowledge."
    },
    {
      "word": "acme",
      "sentence": "Please spell the word acme."
    },
    {
      "word": "acorn",
      "sentence": "Please spell the word acorn."
    },
    {
      "word": "acoustic",
      "sentence": "Please spell the word acoustic."
    },
    {
      "word": "acquaint",
      "sentence": "Please spell the word acquaint."
    },
    {
      "word": "acquire",
      "sentence": "Please spell the word acquire."
    },
    {
      "word": "acquit",
      "sentence": "Please spell the word acquit."
    },
    {
      "word": "acre",
      "sentence": "Please spell the word acre."
    },
    {
      "word": "acrid",
      "sentence": "Please spell the word acrid."
    },
    {
      "word": "acrobat",
      "sentence": "Please spell the word acrobat."
    },
    {
      "word": "acronym",
      "sentence": "Please spell the word acronym."
    },
    {
      "word": "across",
      "sentence": "Please spell the word across."
    },
    {
      "word": "act",
      "sentence": "Please spell the word act."
    },
    {
      "word": "action",
      "sentence": "Please spell the word action."
    },
    {
      "word": "activate",
      "sentence": "Please spell the word activate."
    },
    {
      "word": "active",
      "sentence": "Please spell the word active."
    },
    {
      "word": "activist",
      "sentence": "Please spell the word activist."
    },
    {
      "word": "activity",
      "sentence": "Please spell the word activity."
    },
    {
      "word": "actor",
      "sentence": "Please spell the word actor."
    },
    {
      "word": "actual",
      "sentence": "Please spell the word actual."
    },
    {
      "word": "acumen",
      "sentence": "Please spell the word acumen."
    },
    {
      "word": "acute",
      "sentence": "Please spell the word acute."
    },
    {
      "word": "adage",
      "sentence": "Please spell the word adage."
    },
    {
      "word": "adamant",
      "sentence": "Please spell the word adamant."
    },
    {
      "word": "adapt",
      "sentence": "Please spell the word adapt."
    },
    {
      "word": "add",
      "sentence": "Please spell the word add."
    },
    {
      "word": "addendum",
      "sentence": "Please spell the word addendum."
    },
    {
      "word": "addict",
      "sentence": "Please spell the word addict."
    },
    {
      "word": "addition",
      "sentence": "Please spell the word addition."
    },
    {
      "word": "additive",
      "sentence": "Please spell the word additive."
    },
    {
      "word": "address",
      "sentence": "Please spell the word address."
    },
    {
      "word": "adept",
      "sentence": "Please spell the word adept."
    },
    {
      "word": "adequate",
      "sentence": "Please spell the word adequate."
    },
    {
      "word": "adhere",
      "sentence": "Please spell the word adhere."
    },
    {
      "word": "adhesive",
      "sentence": "Please spell the word adhesive."
    },
    {
      "word": "adjacent",
      "sentence": "Please spell the word adjacent."
    }
  ],
  "9": [
    {
      "word": "conscientious",
      "sentence": "She is a conscientious student."
    },
    {
      "word": "exhilarating",
      "sentence": "The roller coaster was exhilarating."
    },
    {
      "word": "mnemonic",
      "sentence": "ROY G. BIV is a mnemonic for colors."
    },
    {
      "word": "supersede",
      "sentence": "New rules supersede the old ones."
    },
    {
      "word": "camaraderie",
      "sentence": "The team shared real camaraderie."
    },
    {
      "word": "ephemeral",
      "sentence": "Cherry blossoms are ephemeral."
    },
    {
      "word": "dichotomy",
      "sentence": "There is a dichotomy between theory and practice."
    },
    {
      "word": "chrysanthemum",
      "sentence": "She planted a chrysanthemum."
    },
    {
      "word": "sacrilegious",
      "sentence": "Vandalizing the statue was sacrilegious."
    },
    {
      "word": "bureaucracy",
      "sentence": "Paperwork can feel like bureaucracy."
    },
    {
      "word": "abate",
      "sentence": "Please spell the word abate."
    },
    {
      "word": "abdicate",
      "sentence": "Please spell the word abdicate."
    },
    {
      "word": "aberrant",
      "sentence": "Please spell the word aberrant."
    },
    {
      "word": "abhor",
      "sentence": "Please spell the word abhor."
    },
    {
      "word": "abject",
      "sentence": "Please spell the word abject."
    },
    {
      "word": "abrasive",
      "sentence": "Please spell the word abrasive."
    },
    {
      "word": "abrogate",
      "sentence": "Please spell the word abrogate."
    },
    {
      "word": "abscond",
      "sentence": "Please spell the word abscond."
    },
    {
      "word": "absolve",
      "sentence": "Please spell the word absolve."
    },
    {
      "word": "abstain",
      "sentence": "Please spell the word abstain."
    },
    {
      "word": "abstruse",
      "sentence": "Please spell the word abstruse."
    },
    {
      "word": "abut",
      "sentence": "Please spell the word abut."
    },
    {
      "word": "abysmal",
      "sentence": "Please spell the word abysmal."
    },
    {
      "word": "accede",
      "sentence": "Please spell the word accede."
    },
    {
      "word": "accentuate",
      "sentence": "Please spell the word accentuate."
    },
    {
      "word": "accolade",
      "sentence": "Please spell the word accolade."
    },
    {
      "word": "accord",
      "sentence": "Please spell the word accord."
    },
    {
      "word": "accost",
      "sentence": "Please spell the word accost."
    },
    {
      "word": "accretion",
      "sentence": "Please spell the word accretion."
    },
    {
      "word": "acerbic",
      "sentence": "Please spell the word acerbic."
    },
    {
      "word": "acquiesce",
      "sentence": "Please spell the word acquiesce."
    },
    {
      "word": "acrimony",
      "sentence": "Please spell the word acrimony."
    },
    {
      "word": "acumen",
      "sentence": "Please spell the word acumen."
    },
    {
      "word": "adamant",
      "sentence": "Please spell the word adamant."
    },
    {
      "word": "admonish",
      "sentence": "Please spell the word admonish."
    },
    {
      "word": "adroit",
      "sentence": "Please spell the word adroit."
    },
    {
      "word": "adulation",
      "sentence": "Please spell the word adulation."
    },
    {
      "word": "adversary",
      "sentence": "Please spell the word adversary."
    },
    {
      "word": "adverse",
      "sentence": "Please spell the word adverse."
    },
    {
      "word": "advocate",
      "sentence": "Please spell the word advocate."
    },
    {
      "word": "aesthetic",
      "sentence": "Please spell the word aesthetic."
    },
    {
      "word": "affable",
      "sentence": "Please spell the word affable."
    },
    {
      "word": "affinity",
      "sentence": "Please spell the word affinity."
    },
    {
      "word": "affluent",
      "sentence": "Please spell the word affluent."
    },
    {
      "word": "aggrandize",
      "sentence": "Please spell the word aggrandize."
    },
    {
      "word": "alacrity",
      "sentence": "Please spell the word alacrity."
    },
    {
      "word": "alias",
      "sentence": "Please spell the word alias."
    },
    {
      "word": "allay",
      "sentence": "Please spell the word allay."
    },
    {
      "word": "allege",
      "sentence": "Please spell the word allege."
    },
    {
      "word": "alleviate",
      "sentence": "Please spell the word alleviate."
    },
    {
      "word": "alloy",
      "sentence": "Please spell the word alloy."
    },
    {
      "word": "allude",
      "sentence": "Please spell the word allude."
    },
    {
      "word": "allure",
      "sentence": "Please spell the word allure."
    },
    {
      "word": "aloof",
      "sentence": "Please spell the word aloof."
    },
    {
      "word": "altercation",
      "sentence": "Please spell the word altercation."
    },
    {
      "word": "amalgamate",
      "sentence": "Please spell the word amalgamate."
    },
    {
      "word": "ambiguous",
      "sentence": "Please spell the word ambiguous."
    },
    {
      "word": "ambivalent",
      "sentence": "Please spell the word ambivalent."
    },
    {
      "word": "ameliorate",
      "sentence": "Please spell the word ameliorate."
    },
    {
      "word": "amenable",
      "sentence": "Please spell the word amenable."
    },
    {
      "word": "amiable",
      "sentence": "Please spell the word amiable."
    },
    {
      "word": "amicable",
      "sentence": "Please spell the word amicable."
    },
    {
      "word": "amorphous",
      "sentence": "Please spell the word amorphous."
    },
    {
      "word": "anachronism",
      "sentence": "Please spell the word anachronism."
    },
    {
      "word": "analogous",
      "sentence": "Please spell the word analogous."
    },
    {
      "word": "anarchy",
      "sentence": "Please spell the word anarchy."
    },
    {
      "word": "anathema",
      "sentence": "Please spell the word anathema."
    },
    {
      "word": "anecdote",
      "sentence": "Please spell the word anecdote."
    },
    {
      "word": "anomaly",
      "sentence": "Please spell the word anomaly."
    },
    {
      "word": "anonymous",
      "sentence": "Please spell the word anonymous."
    },
    {
      "word": "antagonize",
      "sentence": "Please spell the word antagonize."
    },
    {
      "word": "antecedent",
      "sentence": "Please spell the word antecedent."
    },
    {
      "word": "antediluvian",
      "sentence": "Please spell the word antediluvian."
    },
    {
      "word": "anthology",
      "sentence": "Please spell the word anthology."
    },
    {
      "word": "antipathy",
      "sentence": "Please spell the word antipathy."
    },
    {
      "word": "antiquated",
      "sentence": "Please spell the word antiquated."
    },
    {
      "word": "antithesis",
      "sentence": "Please spell the word antithesis."
    },
    {
      "word": "apathetic",
      "sentence": "Please spell the word apathetic."
    },
    {
      "word": "apocryphal",
      "sentence": "Please spell the word apocryphal."
    },
    {
      "word": "appease",
      "sentence": "Please spell the word appease."
    },
    {
      "word": "appraise",
      "sentence": "Please spell the word appraise."
    },
    {
      "word": "apprehend",
      "sentence": "Please spell the word apprehend."
    },
    {
      "word": "approbation",
      "sentence": "Please spell the word approbation."
    },
    {
      "word": "appropriate",
      "sentence": "Please spell the word appropriate."
    },
    {
      "word": "aquatic",
      "sentence": "Please spell the word aquatic."
    },
    {
      "word": "arable",
      "sentence": "Please spell the word arable."
    },
    {
      "word": "arbiter",
      "sentence": "Please spell the word arbiter."
    },
    {
      "word": "arbitrary",
      "sentence": "Please spell the word arbitrary."
    },
    {
      "word": "arcane",
      "sentence": "Please spell the word arcane."
    },
    {
      "word": "archaic",
      "sentence": "Please spell the word archaic."
    },
    {
      "word": "ardent",
      "sentence": "Please spell the word ardent."
    },
    {
      "word": "arduous",
      "sentence": "Please spell the word arduous."
    },
    {
      "word": "arid",
      "sentence": "Please spell the word arid."
    },
    {
      "word": "aroma",
      "sentence": "Please spell the word aroma."
    },
    {
      "word": "arrogate",
      "sentence": "Please spell the word arrogate."
    },
    {
      "word": "articulate",
      "sentence": "Please spell the word articulate."
    },
    {
      "word": "artifice",
      "sentence": "Please spell the word artifice."
    },
    {
      "word": "ascend",
      "sentence": "Please spell the word ascend."
    },
    {
      "word": "ascertain",
      "sentence": "Please spell the word ascertain."
    },
    {
      "word": "ascetic",
      "sentence": "Please spell the word ascetic."
    }
  ],
  "10": [
    {
      "word": "anachronism",
      "sentence": "A typewriter in a sci-fi film is an anachronism."
    },
    {
      "word": "bourgeois",
      "sentence": "The novel satirizes bourgeois values."
    },
    {
      "word": "dystopia",
      "sentence": "The novel describes a grim dystopia."
    },
    {
      "word": "sycophant",
      "sentence": "A sycophant flatters to gain favor."
    },
    {
      "word": "zeitgeist",
      "sentence": "The film captured the zeitgeist of the era."
    },
    {
      "word": "perspicacious",
      "sentence": "The perspicacious detective solved the case."
    },
    {
      "word": "quintessential",
      "sentence": "She is the quintessential team player."
    },
    {
      "word": "circumlocution",
      "sentence": "Avoid circumlocution and be direct."
    },
    {
      "word": "schadenfreude",
      "sentence": "He felt a twinge of schadenfreude."
    },
    {
      "word": "inchoate",
      "sentence": "The plan was still inchoate."
    },
    {
      "word": "aberration",
      "sentence": "Please spell the word aberration."
    },
    {
      "word": "abjure",
      "sentence": "Please spell the word abjure."
    },
    {
      "word": "abnegation",
      "sentence": "Please spell the word abnegation."
    },
    {
      "word": "abrogate",
      "sentence": "Please spell the word abrogate."
    },
    {
      "word": "abscond",
      "sentence": "Please spell the word abscond."
    },
    {
      "word": "abstruse",
      "sentence": "Please spell the word abstruse."
    },
    {
      "word": "accretion",
      "sentence": "Please spell the word accretion."
    },
    {
      "word": "acerbic",
      "sentence": "Please spell the word acerbic."
    },
    {
      "word": "acquiesce",
      "sentence": "Please spell the word acquiesce."
    },
    {
      "word": "acrimony",
      "sentence": "Please spell the word acrimony."
    },
    {
      "word": "acumen",
      "sentence": "Please spell the word acumen."
    },
    {
      "word": "adamant",
      "sentence": "Please spell the word adamant."
    },
    {
      "word": "admonish",
      "sentence": "Please spell the word admonish."
    },
    {
      "word": "adroit",
      "sentence": "Please spell the word adroit."
    },
    {
      "word": "adulation",
      "sentence": "Please spell the word adulation."
    },
    {
      "word": "adversary",
      "sentence": "Please spell the word adversary."
    },
    {
      "word": "affable",
      "sentence": "Please spell the word affable."
    },
    {
      "word": "affinity",
      "sentence": "Please spell the word affinity."
    },
    {
      "word": "aggrandize",
      "sentence": "Please spell the word aggrandize."
    },
    {
      "word": "alacrity",
      "sentence": "Please spell the word alacrity."
    },
    {
      "word": "allay",
      "sentence": "Please spell the word allay."
    },
    {
      "word": "allege",
      "sentence": "Please spell the word allege."
    },
    {
      "word": "alleviate",
      "sentence": "Please spell the word alleviate."
    },
    {
      "word": "allude",
      "sentence": "Please spell the word allude."
    },
    {
      "word": "aloof",
      "sentence": "Please spell the word aloof."
    },
    {
      "word": "altercation",
      "sentence": "Please spell the word altercation."
    },
    {
      "word": "amalgamate",
      "sentence": "Please spell the word amalgamate."
    },
    {
      "word": "ambiguous",
      "sentence": "Please spell the word ambiguous."
    },
    {
      "word": "ambivalent",
      "sentence": "Please spell the word ambivalent."
    },
    {
      "word": "ameliorate",
      "sentence": "Please spell the word ameliorate."
    },
    {
      "word": "amenable",
      "sentence": "Please spell the word amenable."
    },
    {
      "word": "amiable",
      "sentence": "Please spell the word amiable."
    },
    {
      "word": "amicable",
      "sentence": "Please spell the word amicable."
    },
    {
      "word": "amorphous",
      "sentence": "Please spell the word amorphous."
    },
    {
      "word": "anachronistic",
      "sentence": "Please spell the word anachronistic."
    },
    {
      "word": "analogous",
      "sentence": "Please spell the word analogous."
    },
    {
      "word": "anathema",
      "sentence": "Please spell the word anathema."
    },
    {
      "word": "anomaly",
      "sentence": "Please spell the word anomaly."
    },
    {
      "word": "antagonize",
      "sentence": "Please spell the word antagonize."
    },
    {
      "word": "antecedent",
      "sentence": "Please spell the word antecedent."
    },
    {
      "word": "antediluvian",
      "sentence": "Please spell the word antediluvian."
    },
    {
      "word": "antipathy",
      "sentence": "Please spell the word antipathy."
    },
    {
      "word": "antiquated",
      "sentence": "Please spell the word antiquated."
    },
    {
      "word": "antithesis",
      "sentence": "Please spell the word antithesis."
    },
    {
      "word": "apathetic",
      "sentence": "Please spell the word apathetic."
    },
    {
      "word": "apocryphal",
      "sentence": "Please spell the word apocryphal."
    },
    {
      "word": "appease",
      "sentence": "Please spell the word appease."
    },
    {
      "word": "apprise",
      "sentence": "Please spell the word apprise."
    },
    {
      "word": "approbation",
      "sentence": "Please spell the word approbation."
    },
    {
      "word": "arbitrary",
      "sentence": "Please spell the word arbitrary."
    },
    {
      "word": "arcane",
      "sentence": "Please spell the word arcane."
    },
    {
      "word": "archaic",
      "sentence": "Please spell the word archaic."
    },
    {
      "word": "ardent",
      "sentence": "Please spell the word ardent."
    },
    {
      "word": "arduous",
      "sentence": "Please spell the word arduous."
    },
    {
      "word": "arrogate",
      "sentence": "Please spell the word arrogate."
    },
    {
      "word": "artifice",
      "sentence": "Please spell the word artifice."
    },
    {
      "word": "ascetic",
      "sentence": "Please spell the word ascetic."
    },
    {
      "word": "ascribe",
      "sentence": "Please spell the word ascribe."
    },
    {
      "word": "asperity",
      "sentence": "Please spell the word asperity."
    },
    {
      "word": "aspersion",
      "sentence": "Please spell the word aspersion."
    },
    {
      "word": "assiduous",
      "sentence": "Please spell the word assiduous."
    },
    {
      "word": "assuage",
      "sentence": "Please spell the word assuage."
    },
    {
      "word": "astute",
      "sentence": "Please spell the word astute."
    },
    {
      "word": "atrophy",
      "sentence": "Please spell the word atrophy."
    },
    {
      "word": "attenuate",
      "sentence": "Please spell the word attenuate."
    },
    {
      "word": "audacious",
      "sentence": "Please spell the word audacious."
    },
    {
      "word": "augury",
      "sentence": "Please spell the word augury."
    },
    {
      "word": "auspicious",
      "sentence": "Please spell the word auspicious."
    },
    {
      "word": "austere",
      "sentence": "Please spell the word austere."
    },
    {
      "word": "avarice",
      "sentence": "Please spell the word avarice."
    },
    {
      "word": "aver",
      "sentence": "Please spell the word aver."
    },
    {
      "word": "avid",
      "sentence": "Please spell the word avid."
    },
    {
      "word": "azure",
      "sentence": "Please spell the word azure."
    },
    {
      "word": "baleful",
      "sentence": "Please spell the word baleful."
    },
    {
      "word": "banal",
      "sentence": "Please spell the word banal."
    },
    {
      "word": "bane",
      "sentence": "Please spell the word bane."
    },
    {
      "word": "beatific",
      "sentence": "Please spell the word beatific."
    },
    {
      "word": "behemoth",
      "sentence": "Please spell the word behemoth."
    },
    {
      "word": "belie",
      "sentence": "Please spell the word belie."
    },
    {
      "word": "bellicose",
      "sentence": "Please spell the word bellicose."
    },
    {
      "word": "belligerent",
      "sentence": "Please spell the word belligerent."
    },
    {
      "word": "benign",
      "sentence": "Please spell the word benign."
    },
    {
      "word": "bequeath",
      "sentence": "Please spell the word bequeath."
    },
    {
      "word": "berate",
      "sentence": "Please spell the word berate."
    },
    {
      "word": "bereft",
      "sentence": "Please spell the word bereft."
    },
    {
      "word": "beseech",
      "sentence": "Please spell the word beseech."
    },
    {
      "word": "bias",
      "sentence": "Please spell the word bias."
    },
    {
      "word": "bilk",
      "sentence": "Please spell the word bilk."
    },
    {
      "word": "blandishment",
      "sentence": "Please spell the word blandishment."
    },
    {
      "word": "blight",
      "sentence": "Please spell the word blight."
    }
  ],
  "11": [
    {
      "word": "accommodate",
      "sentence": "The hotel can accommodate our family."
    },
    {
      "word": "autochthonous",
      "sentence": "The tribe is autochthonous to the region."
    },
    {
      "word": "chauvinism",
      "sentence": "We reject chauvinism in all forms."
    },
    {
      "word": "ecclesiastical",
      "sentence": "The building has ecclesiastical architecture."
    },
    {
      "word": "eleemosynary",
      "sentence": "The eleemosynary fund helped families."
    },
    {
      "word": "proselytize",
      "sentence": "They did not proselytize their beliefs."
    },
    {
      "word": "vicissitude",
      "sentence": "Life has its vicissitudes."
    },
    {
      "word": "logomachy",
      "sentence": "The debate turned into logomachy."
    },
    {
      "word": "appoggiatura",
      "sentence": "The singer added an appoggiatura."
    },
    {
      "word": "guetapens",
      "sentence": "Guetapens means an ambush or trap."
    },
    {
      "word": "abstemious",
      "sentence": "Please spell the word abstemious."
    },
    {
      "word": "acumen",
      "sentence": "Please spell the word acumen."
    },
    {
      "word": "adamantine",
      "sentence": "Please spell the word adamantine."
    },
    {
      "word": "adumbrate",
      "sentence": "Please spell the word adumbrate."
    },
    {
      "word": "aegis",
      "sentence": "Please spell the word aegis."
    },
    {
      "word": "afflatus",
      "sentence": "Please spell the word afflatus."
    },
    {
      "word": "aggrandize",
      "sentence": "Please spell the word aggrandize."
    },
    {
      "word": "alacrity",
      "sentence": "Please spell the word alacrity."
    },
    {
      "word": "ameliorate",
      "sentence": "Please spell the word ameliorate."
    },
    {
      "word": "anathema",
      "sentence": "Please spell the word anathema."
    },
    {
      "word": "anodyne",
      "sentence": "Please spell the word anodyne."
    },
    {
      "word": "antipode",
      "sentence": "Please spell the word antipode."
    },
    {
      "word": "apotheosis",
      "sentence": "Please spell the word apotheosis."
    },
    {
      "word": "approbation",
      "sentence": "Please spell the word approbation."
    },
    {
      "word": "arabesque",
      "sentence": "Please spell the word arabesque."
    },
    {
      "word": "arcane",
      "sentence": "Please spell the word arcane."
    },
    {
      "word": "arrant",
      "sentence": "Please spell the word arrant."
    },
    {
      "word": "artifice",
      "sentence": "Please spell the word artifice."
    },
    {
      "word": "ascetic",
      "sentence": "Please spell the word ascetic."
    },
    {
      "word": "assiduous",
      "sentence": "Please spell the word assiduous."
    },
    {
      "word": "astringent",
      "sentence": "Please spell the word astringent."
    },
    {
      "word": "atavistic",
      "sentence": "Please spell the word atavistic."
    },
    {
      "word": "attenuate",
      "sentence": "Please spell the word attenuate."
    },
    {
      "word": "augury",
      "sentence": "Please spell the word augury."
    },
    {
      "word": "auspicious",
      "sentence": "Please spell the word auspicious."
    },
    {
      "word": "autocratic",
      "sentence": "Please spell the word autocratic."
    },
    {
      "word": "avaricious",
      "sentence": "Please spell the word avaricious."
    },
    {
      "word": "avuncular",
      "sentence": "Please spell the word avuncular."
    },
    {
      "word": "bacchanal",
      "sentence": "Please spell the word bacchanal."
    },
    {
      "word": "bailiwick",
      "sentence": "Please spell the word bailiwick."
    },
    {
      "word": "baleful",
      "sentence": "Please spell the word baleful."
    },
    {
      "word": "bathos",
      "sentence": "Please spell the word bathos."
    },
    {
      "word": "bellicose",
      "sentence": "Please spell the word bellicose."
    },
    {
      "word": "bellwether",
      "sentence": "Please spell the word bellwether."
    },
    {
      "word": "benighted",
      "sentence": "Please spell the word benighted."
    },
    {
      "word": "bespoke",
      "sentence": "Please spell the word bespoke."
    },
    {
      "word": "bifurcate",
      "sentence": "Please spell the word bifurcate."
    },
    {
      "word": "bilious",
      "sentence": "Please spell the word bilious."
    },
    {
      "word": "blandishment",
      "sentence": "Please spell the word blandishment."
    },
    {
      "word": "bombastic",
      "sentence": "Please spell the word bombastic."
    },
    {
      "word": "bonhomie",
      "sentence": "Please spell the word bonhomie."
    },
    {
      "word": "boondoggle",
      "sentence": "Please spell the word boondoggle."
    },
    {
      "word": "bowdlerize",
      "sentence": "Please spell the word bowdlerize."
    },
    {
      "word": "braggadocio",
      "sentence": "Please spell the word braggadocio."
    },
    {
      "word": "brevity",
      "sentence": "Please spell the word brevity."
    },
    {
      "word": "bromide",
      "sentence": "Please spell the word bromide."
    },
    {
      "word": "bucolic",
      "sentence": "Please spell the word bucolic."
    },
    {
      "word": "burgeon",
      "sentence": "Please spell the word burgeon."
    },
    {
      "word": "byzantine",
      "sentence": "Please spell the word byzantine."
    },
    {
      "word": "cabal",
      "sentence": "Please spell the word cabal."
    },
    {
      "word": "cachet",
      "sentence": "Please spell the word cachet."
    },
    {
      "word": "cacophony",
      "sentence": "Please spell the word cacophony."
    },
    {
      "word": "cadence",
      "sentence": "Please spell the word cadence."
    },
    {
      "word": "cajole",
      "sentence": "Please spell the word cajole."
    },
    {
      "word": "callow",
      "sentence": "Please spell the word callow."
    },
    {
      "word": "calumny",
      "sentence": "Please spell the word calumny."
    },
    {
      "word": "canard",
      "sentence": "Please spell the word canard."
    },
    {
      "word": "candor",
      "sentence": "Please spell the word candor."
    },
    {
      "word": "cantankerous",
      "sentence": "Please spell the word cantankerous."
    },
    {
      "word": "capacious",
      "sentence": "Please spell the word capacious."
    },
    {
      "word": "capitulate",
      "sentence": "Please spell the word capitulate."
    },
    {
      "word": "capricious",
      "sentence": "Please spell the word capricious."
    },
    {
      "word": "captious",
      "sentence": "Please spell the word captious."
    },
    {
      "word": "carapace",
      "sentence": "Please spell the word carapace."
    },
    {
      "word": "carcinogen",
      "sentence": "Please spell the word carcinogen."
    },
    {
      "word": "cardinal",
      "sentence": "Please spell the word cardinal."
    },
    {
      "word": "careen",
      "sentence": "Please spell the word careen."
    },
    {
      "word": "carouse",
      "sentence": "Please spell the word carouse."
    },
    {
      "word": "carp",
      "sentence": "Please spell the word carp."
    },
    {
      "word": "castigate",
      "sentence": "Please spell the word castigate."
    },
    {
      "word": "cataclysm",
      "sentence": "Please spell the word cataclysm."
    },
    {
      "word": "catalyst",
      "sentence": "Please spell the word catalyst."
    },
    {
      "word": "catharsis",
      "sentence": "Please spell the word catharsis."
    },
    {
      "word": "caustic",
      "sentence": "Please spell the word caustic."
    },
    {
      "word": "cavil",
      "sentence": "Please spell the word cavil."
    },
    {
      "word": "celerity",
      "sentence": "Please spell the word celerity."
    },
    {
      "word": "censorious",
      "sentence": "Please spell the word censorious."
    },
    {
      "word": "cerebral",
      "sentence": "Please spell the word cerebral."
    },
    {
      "word": "chagrin",
      "sentence": "Please spell the word chagrin."
    },
    {
      "word": "charlatan",
      "sentence": "Please spell the word charlatan."
    },
    {
      "word": "chary",
      "sentence": "Please spell the word chary."
    },
    {
      "word": "chicanery",
      "sentence": "Please spell the word chicanery."
    },
    {
      "word": "chimera",
      "sentence": "Please spell the word chimera."
    },
    {
      "word": "choleric",
      "sentence": "Please spell the word choleric."
    },
    {
      "word": "churlish",
      "sentence": "Please spell the word churlish."
    },
    {
      "word": "circuitous",
      "sentence": "Please spell the word circuitous."
    },
    {
      "word": "circumspect",
      "sentence": "Please spell the word circumspect."
    },
    {
      "word": "clairvoyant",
      "sentence": "Please spell the word clairvoyant."
    },
    {
      "word": "clamor",
      "sentence": "Please spell the word clamor."
    },
    {
      "word": "clandestine",
      "sentence": "Please spell the word clandestine."
    }
  ],
  "12": [
    {
      "word": "abstemious",
      "sentence": "He was abstemious at the feast."
    },
    {
      "word": "borborygmus",
      "sentence": "A borborygmus is a rumbling stomach sound."
    },
    {
      "word": "cynosure",
      "sentence": "She became the cynosure of the gala."
    },
    {
      "word": "dysthymia",
      "sentence": "Dysthymia is a long-lasting low mood."
    },
    {
      "word": "euonym",
      "sentence": "A euonym is a well-suited name."
    },
    {
      "word": "foudroyant",
      "sentence": "The foudroyant storm struck suddenly."
    },
    {
      "word": "marocain",
      "sentence": "Marocain is a type of dress fabric."
    },
    {
      "word": "nunatak",
      "sentence": "A nunatak is a peak above ice."
    },
    {
      "word": "pulchritude",
      "sentence": "Poets once praised her pulchritude."
    },
    {
      "word": "ursprache",
      "sentence": "Ursprache means an original language."
    },
    {
      "word": "absquatulate",
      "sentence": "Please spell the word absquatulate."
    },
    {
      "word": "accoutrements",
      "sentence": "Please spell the word accoutrements."
    },
    {
      "word": "acerbic",
      "sentence": "Please spell the word acerbic."
    },
    {
      "word": "acquiesce",
      "sentence": "Please spell the word acquiesce."
    },
    {
      "word": "adumbrate",
      "sentence": "Please spell the word adumbrate."
    },
    {
      "word": "afflatus",
      "sentence": "Please spell the word afflatus."
    },
    {
      "word": "aggrandizement",
      "sentence": "Please spell the word aggrandizement."
    },
    {
      "word": "alacrity",
      "sentence": "Please spell the word alacrity."
    },
    {
      "word": "amelioration",
      "sentence": "Please spell the word amelioration."
    },
    {
      "word": "anfractuous",
      "sentence": "Please spell the word anfractuous."
    },
    {
      "word": "antediluvian",
      "sentence": "Please spell the word antediluvian."
    },
    {
      "word": "apothegm",
      "sentence": "Please spell the word apothegm."
    },
    {
      "word": "approbation",
      "sentence": "Please spell the word approbation."
    },
    {
      "word": "arabesque",
      "sentence": "Please spell the word arabesque."
    },
    {
      "word": "arras",
      "sentence": "Please spell the word arras."
    },
    {
      "word": "asseverate",
      "sentence": "Please spell the word asseverate."
    },
    {
      "word": "assiduity",
      "sentence": "Please spell the word assiduity."
    },
    {
      "word": "ataraxia",
      "sentence": "Please spell the word ataraxia."
    },
    {
      "word": "athwart",
      "sentence": "Please spell the word athwart."
    },
    {
      "word": "attenuate",
      "sentence": "Please spell the word attenuate."
    },
    {
      "word": "augury",
      "sentence": "Please spell the word augury."
    },
    {
      "word": "auspice",
      "sentence": "Please spell the word auspice."
    },
    {
      "word": "autochthon",
      "sentence": "Please spell the word autochthon."
    },
    {
      "word": "avarice",
      "sentence": "Please spell the word avarice."
    },
    {
      "word": "avuncular",
      "sentence": "Please spell the word avuncular."
    },
    {
      "word": "bailiwick",
      "sentence": "Please spell the word bailiwick."
    },
    {
      "word": "balustrade",
      "sentence": "Please spell the word balustrade."
    },
    {
      "word": "bathos",
      "sentence": "Please spell the word bathos."
    },
    {
      "word": "bellwether",
      "sentence": "Please spell the word bellwether."
    },
    {
      "word": "benison",
      "sentence": "Please spell the word benison."
    },
    {
      "word": "bespoke",
      "sentence": "Please spell the word bespoke."
    },
    {
      "word": "bifurcation",
      "sentence": "Please spell the word bifurcation."
    },
    {
      "word": "bilious",
      "sentence": "Please spell the word bilious."
    },
    {
      "word": "blandishment",
      "sentence": "Please spell the word blandishment."
    },
    {
      "word": "bombast",
      "sentence": "Please spell the word bombast."
    },
    {
      "word": "bonhomie",
      "sentence": "Please spell the word bonhomie."
    },
    {
      "word": "boondoggle",
      "sentence": "Please spell the word boondoggle."
    },
    {
      "word": "bowdlerize",
      "sentence": "Please spell the word bowdlerize."
    },
    {
      "word": "braggadocio",
      "sentence": "Please spell the word braggadocio."
    },
    {
      "word": "breviary",
      "sentence": "Please spell the word breviary."
    },
    {
      "word": "bromide",
      "sentence": "Please spell the word bromide."
    },
    {
      "word": "bucolic",
      "sentence": "Please spell the word bucolic."
    },
    {
      "word": "burgeon",
      "sentence": "Please spell the word burgeon."
    },
    {
      "word": "byzantine",
      "sentence": "Please spell the word byzantine."
    },
    {
      "word": "cabal",
      "sentence": "Please spell the word cabal."
    },
    {
      "word": "cachet",
      "sentence": "Please spell the word cachet."
    },
    {
      "word": "cacophonous",
      "sentence": "Please spell the word cacophonous."
    },
    {
      "word": "cadence",
      "sentence": "Please spell the word cadence."
    },
    {
      "word": "cajolery",
      "sentence": "Please spell the word cajolery."
    },
    {
      "word": "callow",
      "sentence": "Please spell the word callow."
    },
    {
      "word": "calumny",
      "sentence": "Please spell the word calumny."
    },
    {
      "word": "canard",
      "sentence": "Please spell the word canard."
    },
    {
      "word": "candor",
      "sentence": "Please spell the word candor."
    },
    {
      "word": "canticle",
      "sentence": "Please spell the word canticle."
    },
    {
      "word": "capacious",
      "sentence": "Please spell the word capacious."
    },
    {
      "word": "capitulate",
      "sentence": "Please spell the word capitulate."
    },
    {
      "word": "capricious",
      "sentence": "Please spell the word capricious."
    },
    {
      "word": "captious",
      "sentence": "Please spell the word captious."
    },
    {
      "word": "carapace",
      "sentence": "Please spell the word carapace."
    },
    {
      "word": "carcinogen",
      "sentence": "Please spell the word carcinogen."
    },
    {
      "word": "cardinal",
      "sentence": "Please spell the word cardinal."
    },
    {
      "word": "careen",
      "sentence": "Please spell the word careen."
    },
    {
      "word": "carouse",
      "sentence": "Please spell the word carouse."
    },
    {
      "word": "carp",
      "sentence": "Please spell the word carp."
    },
    {
      "word": "castigate",
      "sentence": "Please spell the word castigate."
    },
    {
      "word": "cataclysm",
      "sentence": "Please spell the word cataclysm."
    },
    {
      "word": "catalyst",
      "sentence": "Please spell the word catalyst."
    },
    {
      "word": "catharsis",
      "sentence": "Please spell the word catharsis."
    },
    {
      "word": "caustic",
      "sentence": "Please spell the word caustic."
    },
    {
      "word": "cavil",
      "sentence": "Please spell the word cavil."
    },
    {
      "word": "celerity",
      "sentence": "Please spell the word celerity."
    },
    {
      "word": "censorious",
      "sentence": "Please spell the word censorious."
    },
    {
      "word": "cerebral",
      "sentence": "Please spell the word cerebral."
    },
    {
      "word": "chagrin",
      "sentence": "Please spell the word chagrin."
    },
    {
      "word": "charlatan",
      "sentence": "Please spell the word charlatan."
    },
    {
      "word": "chary",
      "sentence": "Please spell the word chary."
    },
    {
      "word": "chicanery",
      "sentence": "Please spell the word chicanery."
    },
    {
      "word": "chimera",
      "sentence": "Please spell the word chimera."
    },
    {
      "word": "choleric",
      "sentence": "Please spell the word choleric."
    },
    {
      "word": "churlish",
      "sentence": "Please spell the word churlish."
    },
    {
      "word": "circuitous",
      "sentence": "Please spell the word circuitous."
    },
    {
      "word": "circumspect",
      "sentence": "Please spell the word circumspect."
    },
    {
      "word": "clairvoyant",
      "sentence": "Please spell the word clairvoyant."
    },
    {
      "word": "clamorous",
      "sentence": "Please spell the word clamorous."
    },
    {
      "word": "clandestine",
      "sentence": "Please spell the word clandestine."
    },
    {
      "word": "clemency",
      "sentence": "Please spell the word clemency."
    },
    {
      "word": "cloister",
      "sentence": "Please spell the word cloister."
    },
    {
      "word": "coalesce",
      "sentence": "Please spell the word coalesce."
    },
    {
      "word": "coda",
      "sentence": "Please spell the word coda."
    },
    {
      "word": "cogent",
      "sentence": "Please spell the word cogent."
    }
  ]
};
