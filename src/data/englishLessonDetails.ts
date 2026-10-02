import { Grade, LessonActivity } from "../types";

export interface EnglishLessonDetail {
  lessonTitle: string;
  unitName: string;
  vocabulary: string[]; // Target vocabulary list with IPA
  rawWords: string[]; // Raw target English words
  sentencePatterns: string[]; // Target communicative sentence patterns
  phonicsSound?: string; // Target phonics sound
  gameName: string; // Consolidation game name
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

interface EnglishUnitData {
  unit: number;
  unitName: string;
  theme: string;
  vocabulary: { word: string; ipa: string; meaning: string }[];
  sentencePatterns: string[];
  phonics: string;
  game: string;
}

// ==============================================================
// OFFICIAL ENGLISH CURRICULUM DATABASE (PRIMARY EDUCATION 2018)
// 100% ENGLISH FORMAT FOR LESSON PLANS (GRADES 1 - 5)
// ==============================================================

export const GRADE_1_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: School Things",
    theme: "School Things",
    vocabulary: [
      { word: "book", ipa: "/bʊk/", meaning: "reading book" },
      { word: "pen", ipa: "/pen/", meaning: "ink pen" },
      { word: "pencil", ipa: "/ˈpensl/", meaning: "graphite pencil" },
      { word: "ruler", ipa: "/ˈruːlə/", meaning: "measuring ruler" },
      { word: "rubber", ipa: "/ˈrʌbə/", meaning: "eraser / rubber" }
    ],
    sentencePatterns: [
      "What is this? -> It's a [book / pen / pencil / ruler].",
      "Point to the [book / pen / pencil / ruler]."
    ],
    phonics: "Practice pronouncing the /b/ sound in 'book' and /p/ in 'pen', 'pencil'",
    game: "Slap the Board (Word Recognition)"
  },
  {
    unit: 2,
    unitName: "Unit 2: Colors",
    theme: "Colors Around Us",
    vocabulary: [
      { word: "red", ipa: "/red/", meaning: "red color" },
      { word: "blue", ipa: "/bluː/", meaning: "blue color" },
      { word: "yellow", ipa: "/ˈjeləʊ/", meaning: "yellow color" },
      { word: "green", ipa: "/ɡriːn/", meaning: "green color" },
      { word: "pink", ipa: "/pɪŋk/", meaning: "pink color" }
    ],
    sentencePatterns: [
      "What color is this? -> It's [red / blue / yellow / green].",
      "I like [red / blue / yellow]."
    ],
    phonics: "Practice pronouncing the /r/ sound in 'red' and /bl/ blend in 'blue'",
    game: "Color Hunting (Search and Find)"
  },
  {
    unit: 3,
    unitName: "Unit 3: Numbers 1-5",
    theme: "Counting Numbers 1 to 5",
    vocabulary: [
      { word: "one", ipa: "/wʌn/", meaning: "number 1" },
      { word: "two", ipa: "/tuː/", meaning: "number 2" },
      { word: "three", ipa: "/θriː/", meaning: "number 3 (soft th sound)" },
      { word: "four", ipa: "/fɔː/", meaning: "number 4" },
      { word: "five", ipa: "/faɪv/", meaning: "number 5 (ending /v/ sound)" }
    ],
    sentencePatterns: [
      "How many [books / pens]? -> [One / Two / Three / Four / Five].",
      "Show me [three] fingers."
    ],
    phonics: "Practice pronouncing the voiceless /θ/ sound in 'three' and /f/ in 'four', 'five'",
    game: "Number Bingo & Simon Says Numbers"
  },
  {
    unit: 4,
    unitName: "Unit 4: Family",
    theme: "My Loving Family",
    vocabulary: [
      { word: "father", ipa: "/ˈfɑːðə/", meaning: "father / dad" },
      { word: "mother", ipa: "/ˈmʌðə/", meaning: "mother / mom" },
      { word: "brother", ipa: "/ˈbrʌðə/", meaning: "brother" },
      { word: "sister", ipa: "/ˈsɪstə/", meaning: "sister" },
      { word: "baby", ipa: "/ˈbeɪbi/", meaning: "baby" }
    ],
    sentencePatterns: [
      "Who is this? -> This is my [father / mother / brother / sister].",
      "I love my [family / mother / father]."
    ],
    phonics: "Practice pronouncing the /f/ sound in 'father' and /m/ in 'mother'",
    game: "Family Photo Matching"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Body",
    theme: "Parts of the Body",
    vocabulary: [
      { word: "eye", ipa: "/aɪ/", meaning: "eye" },
      { word: "nose", ipa: "/nəʊz/", meaning: "nose (ending /z/ sound)" },
      { word: "mouth", ipa: "/maʊθ/", meaning: "mouth (ending /θ/ sound)" },
      { word: "ear", ipa: "/ɪə/", meaning: "ear" },
      { word: "head", ipa: "/hed/", meaning: "head" },
      { word: "hand", ipa: "/hænd/", meaning: "hand" }
    ],
    sentencePatterns: [
      "Touch your [nose / eye / ear / mouth / head]!",
      "This is my [nose / mouth / head]."
    ],
    phonics: "Practice pronouncing the /n/ sound in 'nose' and /h/ in 'head', 'hand'",
    game: "Simon Says: Touch Your Body!"
  },
  {
    unit: 6,
    unitName: "Unit 6: Animals",
    theme: "Familiar Animals",
    vocabulary: [
      { word: "cat", ipa: "/kæt/", meaning: "cat (ending /t/)" },
      { word: "dog", ipa: "/dɒɡ/", meaning: "dog (ending /g/)" },
      { word: "bird", ipa: "/bɜːd/", meaning: "bird" },
      { word: "duck", ipa: "/dʌk/", meaning: "duck (ending /k/)" },
      { word: "fish", ipa: "/fɪʃ/", meaning: "fish (ending /ʃ/)" }
    ],
    sentencePatterns: [
      "What animal is it? -> It's a [cat / dog / bird / duck / fish].",
      "I see a [cat / bird / dog]."
    ],
    phonics: "Practice pronouncing the /k/ sound in 'cat' and /d/ in 'dog', 'duck'",
    game: "Animal Miming & Sound Guessing"
  },
  {
    unit: 7,
    unitName: "Unit 7: Toys",
    theme: "My Favorite Toys",
    vocabulary: [
      { word: "ball", ipa: "/bɔːl/", meaning: "play ball" },
      { word: "doll", ipa: "/dɒl/", meaning: "doll" },
      { word: "car", ipa: "/kɑː/", meaning: "toy car" },
      { word: "robot", ipa: "/ˈrəʊbɒt/", meaning: "robot toy" },
      { word: "teddy bear", ipa: "/ˈtedi beə/", meaning: "fluffy teddy bear" }
    ],
    sentencePatterns: [
      "I have a [ball / doll / car / robot].",
      "Do you have a [car]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Practice pronouncing the /b/ sound in 'ball' and /d/ in 'doll'",
    game: "What's in the Magic Bag?"
  },
  {
    unit: 8,
    unitName: "Unit 8: Food & Drinks",
    theme: "Healthy Food and Drinks",
    vocabulary: [
      { word: "apple", ipa: "/ˈæpl/", meaning: "sweet apple" },
      { word: "banana", ipa: "/bəˈnɑːnə/", meaning: "yellow banana" },
      { word: "milk", ipa: "/mɪlk/", meaning: "fresh milk (ending /lk/)" },
      { word: "water", ipa: "/ˈwɔːtə/", meaning: "clean drinking water" },
      { word: "bread", ipa: "/bred/", meaning: "fresh bread" }
    ],
    sentencePatterns: [
      "I like [apples / bananas / milk / bread].",
      "Do you like [milk]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Practice pronouncing the short /æ/ in 'apple' and /m/ in 'milk'",
    game: "Menu Master: Food Market"
  }
];

export const GRADE_2_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: In the Classroom",
    theme: "In the Classroom",
    vocabulary: [
      { word: "board", ipa: "/bɔːd/", meaning: "chalkboard / whiteboard" },
      { word: "desk", ipa: "/desk/", meaning: "study desk (ending /sk/)" },
      { word: "chair", ipa: "/tʃeə/", meaning: "chair (initial /tʃ/)" },
      { word: "door", ipa: "/dɔː/", meaning: "classroom door" },
      { word: "window", ipa: "/ˈwɪndəʊ/", meaning: "window" }
    ],
    sentencePatterns: [
      "Open the [door / window / book], please!",
      "Close the [door / book], please!"
    ],
    phonics: "Practice pronouncing the /tʃ/ sound in 'chair' and /d/ in 'desk', 'door'",
    game: "Action Command: Open & Close"
  },
  {
    unit: 2,
    unitName: "Unit 2: My House",
    theme: "My Sweet Home",
    vocabulary: [
      { word: "living room", ipa: "/ˈlɪvɪŋ ruːm/", meaning: "living room" },
      { word: "bedroom", ipa: "/ˈbedruːm/", meaning: "bedroom" },
      { word: "kitchen", ipa: "/ˈkɪtʃɪn/", meaning: "kitchen" },
      { word: "bathroom", ipa: "/ˈbɑːθruːm/", meaning: "bathroom" },
      { word: "garden", ipa: "/ˈɡɑːdn/", meaning: "flower garden" }
    ],
    sentencePatterns: [
      "Where is mother? -> She is in the [kitchen / living room].",
      "This is our [house / garden]."
    ],
    phonics: "Practice pronouncing the /k/ sound in 'kitchen' and /b/ in 'bedroom'",
    game: "House Explorer: Rooms in the House"
  },
  {
    unit: 3,
    unitName: "Unit 3: At the Zoo",
    theme: "Visiting the Zoo",
    vocabulary: [
      { word: "monkey", ipa: "/ˈmʌŋki/", meaning: "playful monkey" },
      { word: "elephant", ipa: "/ˈelɪfənt/", meaning: "big elephant" },
      { word: "tiger", ipa: "/ˈtaɪɡə/", meaning: "wild tiger" },
      { word: "giraffe", ipa: "/dʒəˈrɑːf/", meaning: "tall giraffe" },
      { word: "zebra", ipa: "/ˈzebrə/", meaning: "striped zebra" }
    ],
    sentencePatterns: [
      "Look at the [monkey / elephant / tiger]!",
      "It is [big / tall / funny]."
    ],
    phonics: "Practice pronouncing the /m/ sound in 'monkey' and /t/ in 'tiger'",
    game: "Zoo Keeper Quiz"
  },
  {
    unit: 4,
    unitName: "Unit 4: Shapes & Numbers 6-10",
    theme: "Geometric Shapes & Counting 6-10",
    vocabulary: [
      { word: "circle", ipa: "/ˈsɜːkl/", meaning: "round circle" },
      { word: "square", ipa: "/skweə/", meaning: "four-sided square" },
      { word: "triangle", ipa: "/ˈtraɪæŋɡl/", meaning: "triangle" },
      { word: "six", ipa: "/sɪks/", meaning: "number 6" },
      { word: "seven", ipa: "/ˈsevn/", meaning: "number 7" },
      { word: "eight", ipa: "/eɪt/", meaning: "number 8" }
    ],
    sentencePatterns: [
      "It's a [circle / square / triangle].",
      "How many [circles]? -> There are [six / seven / eight] circles."
    ],
    phonics: "Practice pronouncing the /s/ sound in 'circle', 'six', 'seven'",
    game: "Shape Detective: Find and Count"
  },
  {
    unit: 5,
    unitName: "Unit 5: Clothes",
    theme: "Everyday Clothes",
    vocabulary: [
      { word: "shirt", ipa: "/ʃɜːt/", meaning: "formal shirt" },
      { word: "T-shirt", ipa: "/ˈtiː ʃɜːt/", meaning: "cotton T-shirt" },
      { word: "dress", ipa: "/dres/", meaning: "one-piece dress" },
      { word: "hat", ipa: "/hæt/", meaning: "sun hat" },
      { word: "shoes", ipa: "/ʃuːz/", meaning: "pair of shoes" }
    ],
    sentencePatterns: [
      "I'm wearing a [blue T-shirt / red hat / dress].",
      "He / She is wearing [shoes / a shirt]."
    ],
    phonics: "Practice pronouncing the /ʃ/ sound in 'shirt', 'shoes' and /dr/ blend in 'dress'",
    game: "Fashion Show: What Are You Wearing?"
  }
];

export const GRADE_3_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: Hello",
    theme: "Greetings & Introductions",
    vocabulary: [
      { word: "hello", ipa: "/həˈləʊ/", meaning: "friendly greeting" },
      { word: "hi", ipa: "/haɪ/", meaning: "informal greeting" },
      { word: "name", ipa: "/neɪm/", meaning: "person's name (ending /m/)" },
      { word: "goodbye", ipa: "/ˌɡʊdˈbaɪ/", meaning: "farewell greeting" },
      { word: "bye", ipa: "/baɪ/", meaning: "short farewell" }
    ],
    sentencePatterns: [
      "Hello, I'm [Nam / Mai / Mary].",
      "Hi, [Nam]. I'm [Hoa]. Nice to meet you!"
    ],
    phonics: "Practice pronouncing the /h/ sound in 'hello', 'hi' and /b/ in 'bye', 'goodbye'",
    game: "Passing the Ball: Meet and Greet"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Names",
    theme: "Our Names & Spelling",
    vocabulary: [
      { word: "how", ipa: "/haʊ/", meaning: "in what way" },
      { word: "fine", ipa: "/faɪn/", meaning: "in good health" },
      { word: "thank", ipa: "/θæŋk/", meaning: "express gratitude (/θ/ & /ŋk/)" },
      { word: "spell", ipa: "/spel/", meaning: "spell letter by letter" },
      { word: "friend", ipa: "/frend/", meaning: "classmate / friend" }
    ],
    sentencePatterns: [
      "What's your name? -> My name is [Peter / Linh].",
      "How do you spell your name? -> [L - I - N - H].",
      "How are you? -> I'm fine, thank you."
    ],
    phonics: "Practice pronouncing the /f/ sound in 'fine', 'friend' and voiceless /θ/ in 'thank'",
    game: "Spelling Bee Challenge"
  },
  {
    unit: 3,
    unitName: "Unit 3: Our Friends",
    theme: "Introducing Friends",
    vocabulary: [
      { word: "this", ipa: "/ðɪs/", meaning: "this person/thing here" },
      { word: "that", ipa: "/ðæt/", meaning: "that person/thing over there" },
      { word: "yes", ipa: "/jes/", meaning: "affirmative response" },
      { word: "no", ipa: "/nəʊ/", meaning: "negative response" },
      { word: "best friend", ipa: "/best frend/", meaning: "closest friend" }
    ],
    sentencePatterns: [
      "This is [Tony]. He is my friend.",
      "Is that [Linda]? -> Yes, it is. / No, it isn't. It's [Mary]."
    ],
    phonics: "Practice pronouncing the voiced /ð/ sound in 'this', 'that'",
    game: "Friend Introduction Relay"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Bodies",
    theme: "Our Bodies & Health",
    vocabulary: [
      { word: "touch", ipa: "/tʌtʃ/", meaning: "contact with hand (ending /tʃ/)" },
      { word: "open", ipa: "/ˈəʊpən/", meaning: "open up" },
      { word: "close", ipa: "/kləʊz/", meaning: "close shut (ending /z/)" },
      { word: "face", ipa: "/feɪs/", meaning: "human face (ending /s/)" },
      { word: "hair", ipa: "/heə/", meaning: "head hair" },
      { word: "mouth", ipa: "/maʊθ/", meaning: "mouth (ending /θ/)" }
    ],
    sentencePatterns: [
      "Touch your [face / hair / nose]!",
      "Open your [mouth / eyes]! / Close your [eyes]!"
    ],
    phonics: "Practice pronouncing the /tʃ/ sound in 'touch' and /s/ in 'face', 'close'",
    game: "Body Action Master"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Hobbies",
    theme: "Personal Hobbies",
    vocabulary: [
      { word: "singing", ipa: "/ˈsɪŋɪŋ/", meaning: "singing songs" },
      { word: "dancing", ipa: "/ˈdɑːnsɪŋ/", meaning: "dancing to music" },
      { word: "drawing", ipa: "/ˈdrɔːɪŋ/", meaning: "drawing pictures" },
      { word: "swimming", ipa: "/ˈswɪmɪŋ/", meaning: "swimming in the pool" },
      { word: "cooking", ipa: "/ˈkʊkɪŋ/", meaning: "cooking meals" },
      { word: "reading", ipa: "/ˈriːdɪŋ/", meaning: "reading books" }
    ],
    sentencePatterns: [
      "What's your hobby? -> It's [singing / drawing / swimming].",
      "I like [dancing / cooking / reading]."
    ],
    phonics: "Practice pronouncing the suffix /-ɪŋ/ in 'singing', 'drawing', 'swimming'",
    game: "Hobby Charades"
  },
  {
    unit: 6,
    unitName: "Unit 6: Our School",
    theme: "Our Beloved School",
    vocabulary: [
      { word: "classroom", ipa: "/ˈklɑːsruːm/", meaning: "study classroom" },
      { word: "library", ipa: "/ˈlaɪbrəri/", meaning: "book library" },
      { word: "computer room", ipa: "/kəmˈpjuːtə ruːm/", meaning: "computer lab" },
      { word: "art room", ipa: "/ɑːt ruːm/", meaning: "art workshop" },
      { word: "music room", ipa: "/ˈmjuːzɪk ruːm/", meaning: "music room" },
      { word: "playground", ipa: "/ˈpleɪɡraʊnd/", meaning: "school playground" }
    ],
    sentencePatterns: [
      "Is this our [library / classroom]? -> Yes, it is. / No, it isn't.",
      "Let's go to the [computer room / playground]!"
    ],
    phonics: "Practice pronouncing the consonant blend /kl/ in 'classroom' and /l/ in 'library'",
    game: "School Tour Guide"
  },
  {
    unit: 8,
    unitName: "Unit 8: My School Things",
    theme: "My School Stationery",
    vocabulary: [
      { word: "school bag", ipa: "/skuːl bæɡ/", meaning: "backpack / school bag" },
      { word: "pencil case", ipa: "/ˈpensl keɪs/", meaning: "pencil box" },
      { word: "notebook", ipa: "/ˈnəʊtbʊk/", meaning: "writing notebook" },
      { word: "pencil sharpener", ipa: "/ˈpensl ʃɑːpnə/", meaning: "pencil sharpener" },
      { word: "ruler", ipa: "/ˈruːlə/", meaning: "straight ruler" },
      { word: "rubber", ipa: "/ˈrʌbə/", meaning: "rubber eraser" }
    ],
    sentencePatterns: [
      "I have a [school bag / pencil case / notebook].",
      "Do you have a [ruler / rubber]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Practice pronouncing the /p/ sound in 'pencil', 'pencil case' and /r/ in 'ruler', 'rubber'",
    game: "What's in My School Bag?"
  }
];

export const GRADE_4_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: My Friends",
    theme: "Countries & Nationalities",
    vocabulary: [
      { word: "America", ipa: "/əˈmerɪkə/", meaning: "the United States" },
      { word: "American", ipa: "/əˈmerɪkən/", meaning: "American nationality" },
      { word: "Britain", ipa: "/ˈbrɪtn/", meaning: "the United Kingdom" },
      { word: "British", ipa: "/ˈbrɪtɪʃ/", meaning: "British nationality" },
      { word: "Japan", ipa: "/dʒəˈpæn/", meaning: "Japan" },
      { word: "Japanese", ipa: "/ˌdʒæpəˈniːz/", meaning: "Japanese nationality" },
      { word: "Vietnam", ipa: "/ˌvjetˈnæm/", meaning: "Vietnam" },
      { word: "Vietnamese", ipa: "/ˌvjetnəˈmiːz/", meaning: "Vietnamese nationality" }
    ],
    sentencePatterns: [
      "Where are you from? -> I'm from [Vietnam / America / Japan / Britain].",
      "What nationality are you? -> I'm [Vietnamese / American / Japanese / British]."
    ],
    phonics: "Practice word stress shift: Ja'pan -> Japa'nese; 'Vietnam -> Vietna'mese",
    game: "World Flag & Country Match"
  },
  {
    unit: 2,
    unitName: "Unit 2: Time and Daily Routines",
    theme: "Time and Daily Routines",
    vocabulary: [
      { word: "o'clock", ipa: "/əˈklɒk/", meaning: "exact hour" },
      { word: "get up", ipa: "/ɡet ʌp/", meaning: "wake up and rise" },
      { word: "have breakfast", ipa: "/hæv ˈbrekfəst/", meaning: "eat morning meal" },
      { word: "go to school", ipa: "/ɡəʊ tə skuːl/", meaning: "travel to school" },
      { word: "have lunch", ipa: "/hæv lʌntʃ/", meaning: "eat midday meal" },
      { word: "go to bed", ipa: "/ɡəʊ tə bed/", meaning: "retire to sleep" }
    ],
    sentencePatterns: [
      "What time is it? -> It's [seven o'clock / seven thirty].",
      "What time do you [get up / have breakfast / go to school]? -> I [get up] at [six o'clock]."
    ],
    phonics: "Practice linking consonants to vowels: get_up (/ɡet ʌp/), have_breakfast",
    game: "Clock Master: What Time Is It?"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Week",
    theme: "Days of the Week",
    vocabulary: [
      { word: "Monday", ipa: "/ˈmʌndeɪ/", meaning: "Monday" },
      { word: "Tuesday", ipa: "/ˈtjuːzdeɪ/", meaning: "Tuesday" },
      { word: "Wednesday", ipa: "/ˈwenzdeɪ/", meaning: "Wednesday" },
      { word: "Thursday", ipa: "/ˈθɜːzdeɪ/", meaning: "Thursday (/θ/ sound)" },
      { word: "Friday", ipa: "/ˈfraɪdeɪ/", meaning: "Friday" },
      { word: "Saturday", ipa: "/ˈsætədeɪ/", meaning: "Saturday" },
      { word: "Sunday", ipa: "/ˈsʌndeɪ/", meaning: "Sunday" }
    ],
    sentencePatterns: [
      "What day is it today? -> It's [Monday / Tuesday / Friday].",
      "What do you do on [Saturdays / Sundays]? -> I [help my parents / play football / go swimming]."
    ],
    phonics: "Practice pronouncing the ending /-deɪ/ and voiceless /θ/ in 'Thursday'",
    game: "Weekly Planner Bingo"
  },
  {
    unit: 4,
    unitName: "Unit 4: My Birthday Party",
    theme: "Birthday Celebrations & Months",
    vocabulary: [
      { word: "January", ipa: "/ˈdʒænjuəri/", meaning: "month 1" },
      { word: "February", ipa: "/ˈfebruəri/", meaning: "month 2" },
      { word: "March", ipa: "/mɑːtʃ/", meaning: "month 3" },
      { word: "April", ipa: "/ˈeɪprəl/", meaning: "month 4" },
      { word: "May", ipa: "/meɪ/", meaning: "month 5" },
      { word: "June", ipa: "/dʒuːn/", meaning: "month 6" },
      { word: "party", ipa: "/ˈpɑːti/", meaning: "birthday party" }
    ],
    sentencePatterns: [
      "When is your birthday? -> It's in [May / June / October].",
      "Would you like to come to my birthday party? -> Yes, I'd love to."
    ],
    phonics: "Practice pronouncing the voiced affricate /dʒ/ in 'January', 'June', 'July'",
    game: "Birthday Line-Up"
  },
  {
    unit: 5,
    unitName: "Unit 5: Things We Can Do",
    theme: "Abilities & Talents",
    vocabulary: [
      { word: "swim", ipa: "/swɪm/", meaning: "swim in water (/sw/)" },
      { word: "skate", ipa: "/skeɪt/", meaning: "roller skate (/sk/)" },
      { word: "cook", ipa: "/kʊk/", meaning: "cook food" },
      { word: "ride a bike", ipa: "/raɪd ə baɪk/", meaning: "ride a bicycle" },
      { word: "play the guitar", ipa: "/pleɪ ðə ɡɪˈtɑː/", meaning: "play the guitar" },
      { word: "play the piano", ipa: "/pleɪ ðə piˈænəʊ/", meaning: "play the piano" }
    ],
    sentencePatterns: [
      "What can you do? -> I can [swim / cook / play the guitar].",
      "Can you [ride a bike / skate]? -> Yes, I can. / No, I can't."
    ],
    phonics: "Practice pronouncing modal verb forms: affirmative /kən/ vs negative /kɑːnt/",
    game: "Talent Show Interview"
  }
];

export const GRADE_5_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: All About Me",
    theme: "Addresses & Living Places",
    vocabulary: [
      { word: "address", ipa: "/əˈdres/", meaning: "home address" },
      { word: "lane", ipa: "/leɪn/", meaning: "narrow lane / alley" },
      { word: "street", ipa: "/striːt/", meaning: "city street (/str/)" },
      { word: "tower", ipa: "/ˈtaʊə/", meaning: "high-rise tower" },
      { word: "floor", ipa: "/flɔː/", meaning: "building floor (/fl/)" },
      { word: "hometown", ipa: "/ˈhəʊmtaʊn/", meaning: "native hometown" },
      { word: "peaceful", ipa: "/ˈpiːsfl/", meaning: "quiet and peaceful" },
      { word: "crowded", ipa: "/ˈkraʊdɪd/", meaning: "busy and crowded" }
    ],
    sentencePatterns: [
      "What's your address? -> It's [81 Tran Hung Dao Street / Flat 8, Second Floor].",
      "What's the [city / village] like? -> It's [big and crowded / small and quiet]."
    ],
    phonics: "Practice triple cluster /str/ in 'street' and blend /fl/ in 'floor'",
    game: "Postman Delivery: Find the Address"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Homes",
    theme: "Homes & Living Accommodations",
    vocabulary: [
      { word: "flat", ipa: "/flæt/", meaning: "apartment / flat" },
      { word: "cottage", ipa: "/ˈkɒtɪdʒ/", meaning: "country cottage" },
      { word: "mountain", ipa: "/ˈmaʊntən/", meaning: "high mountain" },
      { word: "village", ipa: "/ˈvɪlɪdʒ/", meaning: "rural village" },
      { word: "city", ipa: "/ˈsɪti/", meaning: "metropolitan city" },
      { word: "modern", ipa: "/ˈmɒdn/", meaning: "modern and convenient" }
    ],
    sentencePatterns: [
      "Where do you live? -> I live in a [flat in the city / cottage in the village].",
      "Who do you live with? -> I live with my [parents / grandparents]."
    ],
    phonics: "Practice pronouncing the ending /-ɪdʒ/ in 'village', 'cottage'",
    game: "Dream House Architecture"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Foreign Friends",
    theme: "Friends & Personality Traits",
    vocabulary: [
      { word: "friendly", ipa: "/ˈfrendli/", meaning: "warm and approachable" },
      { word: "helpful", ipa: "/ˈhelpfl/", meaning: "ready to give help" },
      { word: "active", ipa: "/ˈæktɪv/", meaning: "energetic and lively" },
      { word: "kind", ipa: "/kaɪnd/", meaning: "generous and caring" },
      { word: "clever", ipa: "/ˈklevə/", meaning: "smart and quick-witted" },
      { word: "generous", ipa: "/ˈdʒenərəs/", meaning: "willing to give and share" }
    ],
    sentencePatterns: [
      "What is he/she like? -> He/She is very [friendly and helpful / kind and clever].",
      "They are always [active and polite]."
    ],
    phonics: "Practice adjective suffixes: /-li/ in 'friendly' and /-fl/ in 'helpful'",
    game: "Personality Trait Matching"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Free-Time Activities",
    theme: "Free-Time Activities & Hobbies",
    vocabulary: [
      { word: "surf the Internet", ipa: "/sɜːf ði ˈɪntənet/", meaning: "browse online websites" },
      { word: "do karate", ipa: "/duː kəˈrɑːti/", meaning: "practice martial arts" },
      { word: "clean the house", ipa: "/kliːn ðə haʊs/", meaning: "tidy up home" },
      { word: "go fishing", ipa: "/ɡəʊ ˈfɪʃɪŋ/", meaning: "catch fish outdoors" },
      { word: "ride a bicycle", ipa: "/raɪd ə ˈbaɪsɪkl/", meaning: "cycle a bike" }
    ],
    sentencePatterns: [
      "What do you do in your free time? -> I often [surf the Internet / ride a bicycle / clean the house].",
      "How often do you [go fishing]? -> Once a week / Twice a month."
    ],
    phonics: "Practice intonation in Wh-questions and frequency adverbs",
    game: "Free-Time Activity Survey"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Future Job",
    theme: "Future Occupations & Dreams",
    vocabulary: [
      { word: "pilot", ipa: "/ˈpaɪlət/", meaning: "airplane pilot" },
      { word: "architect", ipa: "/ˈɑːkɪtekt/", meaning: "building architect (/k/)" },
      { word: "writer", ipa: "/ˈraɪtə/", meaning: "book writer / author" },
      { word: "doctor", ipa: "/ˈdɒktə/", meaning: "medical doctor" },
      { word: "nurse", ipa: "/nɜːs/", meaning: "healthcare nurse" },
      { word: "engineer", ipa: "/ˌendʒɪˈnɪə/", meaning: "civil engineer" },
      { word: "astronaut", ipa: "/ˈæstrənɔːt/", meaning: "space astronaut" }
    ],
    sentencePatterns: [
      "What would you like to be in the future? -> I'd like to be a/an [pilot / architect / doctor / astronaut].",
      "Why would you like to be a [pilot]? -> Because I'd like to [fly planes and travel around the world]."
    ],
    phonics: "Practice pronunciation of 'architect' (/ˈɑːkɪtekt/) and linking in 'like to be a'",
    game: "Future Career Fair"
  }
];

// Master Database by Grade
const GRADE_ENGLISH_MAP: Record<number, EnglishUnitData[]> = {
  1: GRADE_1_ENGLISH_UNITS,
  2: GRADE_2_ENGLISH_UNITS,
  3: GRADE_3_ENGLISH_UNITS,
  4: GRADE_4_ENGLISH_UNITS,
  5: GRADE_5_ENGLISH_UNITS
};

/**
 * Returns complete English lesson detail: 100% pure English lesson plan (KHBD),
 * target vocabulary, sentence patterns, phonics, and detailed pedagogical procedures.
 */
export function getDetailedEnglishLesson(
  grade: Grade,
  week: number,
  customLessonTitle?: string,
  periodInWeek: number = 1
): EnglishLessonDetail {
  const units = GRADE_ENGLISH_MAP[grade] || GRADE_3_ENGLISH_UNITS;

  // Match unit by title if provided
  let matchedUnit: EnglishUnitData | undefined;
  if (customLessonTitle) {
    const titleLower = customLessonTitle.toLowerCase();
    matchedUnit = units.find(
      (u) =>
        titleLower.includes(u.theme.toLowerCase()) ||
        titleLower.includes(u.unitName.toLowerCase().split(":")[1]?.trim()?.toLowerCase() || "___") ||
        u.vocabulary.some((v) => titleLower.includes(v.word.toLowerCase()))
    );
  }

  if (!matchedUnit) {
    const unitIndex = Math.max(0, (week - 1) % units.length);
    matchedUnit = units[unitIndex];
  }

  const lessonPart = ((periodInWeek - 1) % 2) + 1;
  const lessonTitle = customLessonTitle || `${matchedUnit.unitName} - Lesson ${lessonPart}`;

  // Formatted vocabulary strings with word and IPA transcription in 100% English
  const formattedVocab = matchedUnit.vocabulary.map(
    (v) => `${v.word} (${v.ipa})`
  );
  const rawWords = matchedUnit.vocabulary.map((v) => v.word);
  const rawWordsList = rawWords.join(", ");

  // Competencies in 100% English following MOET Primary English Curriculum
  const specificCompetencies = [
    `Pupils will recognize, memorize, and accurately pronounce target vocabulary related to "${matchedUnit.theme}": ${rawWordsList}.`,
    `Pupils will proficiently apply the target vocabulary in communicative sentence patterns: "${matchedUnit.sentencePatterns[0] || ""}".`,
    `Pupils will synchronously develop 4 English macro-skills (Listening, Speaking, Reading, Writing) appropriate for Grade ${grade}; build communicative confidence in English with teachers and peers.`,
    `Pupils will master target phonics sounds (${matchedUnit.phonics}) and pronounce ending sounds and word stress accurately.`
  ];

  const teacherMaterials = [
    `Teacher's visual aids: Flashcards and digital slide pictures of target vocabulary: ${rawWordsList}.`,
    `Authentic native audio recordings and interactive digital slides (PowerPoint/Canva).`,
    `Interactive smart TV / projector, wireless speaker, realia and posters related to "${matchedUnit.theme}".`
  ];

  const studentMaterials = [
    `Pupils' materials: English Student Book, workbook, personal mini-flashcards for matching games and pair work, notebooks, pens, and colored pencils.`
  ];

  const integrationNotes = `Integration of Digital Competence (Circular 3456/BGDĐT): Utilizing digital flashcards, interactive audio tracks, and educational language games; Play-based learning through the game "${matchedUnit.game}".`;

  // ==============================================================
  // 4 STAGES OF TEACHING AND LEARNING PROCEDURES (100% ENGLISH)
  // Compliant with MOET Circular 2345/BGDĐT (Warm-up, Presentation, Practice, Production)
  // ==============================================================

  const activities: LessonActivity[] = [
    // 1. WARM-UP
    {
      name: "1. Warm-up",
      objective: `Create a friendly, active learning atmosphere, energize students, and introduce the target topic: "${matchedUnit.theme}".`,
      teacherActivity: `- Greet the class warmly and organize a lively warm-up chant or song related to the theme "${matchedUnit.theme}" (or play 'Simon Says' / 'Hello Chant').
- Ask guiding questions to lead into the new lesson:
  + Teacher: "Today, we are going to explore wonderful new words about '${matchedUnit.theme}'. Are you ready?"
- Write the lesson title "${lessonTitle}" on the board and project it on the digital screen.`,
      studentActivity: `- Stand up, sing along, and perform body actions cheerfully with the teacher.
- Listen to guiding questions, observe pictures on the screen, and get ready for the lesson.
- Repeat the lesson title in chorus and open the Student's Book to the lesson page.`
    },

    // 2. KNOWLEDGE DISCOVERY / PRESENTATION
    {
      name: "2. Knowledge Discovery / Presentation",
      objective: `Pupils will recognize word forms, understand meanings, and accurately pronounce target vocabulary: ${rawWordsList}; grasp the core sentence pattern: ${matchedUnit.sentencePatterns[0] || ""}.`,
      teacherActivity: `- TEACHING AND DEVELOPING TARGET VOCABULARY:
  * TARGET VOCABULARY LIST:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa}) - [Phonics: ${matchedUnit.phonics}]`).join("\n")}
  * TEACHER'S PEDAGOGICAL STEPS:
    + Step 1 - Visual Presentation: Present each flashcard or interactive slide on screen; ask guiding questions to elicit word meanings through visual prompts.
    + Step 2 - Model Pronunciation: Model each word clearly 3 times with authentic pronunciation and intonation (focus on word stress, initial, and ending sounds: ${matchedUnit.phonics}). Play native audio tracks for pupils to listen.
    + Step 3 - Pronunciation Guidance: Guide pupils on mouth shapes, tongue positions for difficult sounds, and ending sounds.
    + Step 4 - Concept Checking Questions (CCQs): Ask quick checking questions to verify 100% comprehension of word meanings and communicative contexts.
    + Step 5 - Guided Practice Drills: Conduct choral repetition, group reading, and individual checks; correct pronunciation and ending sounds immediately.

- TEACHING TARGET SENTENCE PATTERNS:
  * CORE COMMUNICATIVE SENTENCE PATTERNS:
${matchedUnit.sentencePatterns.map((p) => `    + ${p}`).join("\n")}
  * Teacher models the dialogue with a pupil, substituting target words into sentence slots to demonstrate natural communication.`,
      studentActivity: `- RECEPTIVE LEARNING AND VOCABULARY PRACTICE:
  * TARGET VOCABULARY TO MASTER:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa})`).join("\n")}
  * PUPILS' LEARNING ACTIONS:
    + Step 1 - Visual Observation: Observe flashcards and slide illustrations carefully; predict word meanings from visual cues.
    + Step 2 - Active Listening: Listen attentively to teacher's model pronunciation and audio recordings; observe teacher's lips and mouth shape.
    + Step 3 - Three-tier Guided Reading Practice:
      . Choral reading: Entire class pronounces each target word aloud 2-3 times.
      . Group reading: Groups of 4 take turns reading words competitively.
      . Individual reading: Stand up and read aloud; listen to teacher's feedback on ending sounds and word stress.
    + Step 4 - Point and Say: Point to pictures and words in the textbook and pronounce aloud clearly.
    + Step 5 - Note-taking: Write down target words, phonetic transcriptions, and sample sentences neatly in English notebooks.

- PRACTICING SENTENCE PATTERNS:
  * Listen to teacher's model dialogue; repeat patterns chorally with target words; memorize the structure for practice.`
    },

    // 3. PRACTICE
    {
      name: "3. Practice",
      objective: `Consolidate word recognition, pronunciation reflexes, and communicative fluency using target vocabulary (${rawWordsList}) in interactive games and pair work.`,
      teacherActivity: `- ORGANIZING CONSOLIDATION GAME:
  * GAME: "${matchedUnit.game}"
  * TARGET WORDS PRACTICED IN THE GAME:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa})`).join("\n")}
  * GAME PROCEDURE:
    + Post flashcards or word cards on the board (or launch digital interactive quiz game on screen).
    + Divide the class into two competitive teams (Team A & Team B).
    + Explain game rules: Teacher calls out a word or shows a picture clue; representatives from both teams race to touch the correct card and say the word aloud (or play 'Slap the board' / matching game).
    + Act as referee, keep time, award points to the team with fastest response and clearest pronunciation.

- COMMUNICATIVE PAIR WORK & GROUP PRACTICE:
  * PAIR WORK GUIDANCE:
    + Have pupils work in pairs, taking turns asking and answering using sentence patterns:
${matchedUnit.sentencePatterns.map((p) => `      > ${p}`).join("\n")}
    + Model briefly with an advanced pupil so the class understands the interaction.
    + Circulate around the classroom, monitor pair practice, provide timely support for struggling pupils.
    + Invite several pairs to come to the front to perform their dialogue; praise confidence and pronunciation.`,
      studentActivity: `- PARTICIPATING IN CONSOLIDATION GAME:
  * TARGET VOCABULARY FOR QUICK REFLEXES:
${matchedUnit.vocabulary.map((v) => `    • ${v.word} (${v.ipa})`).join("\n")}
  * PUPILS' ACTIONS IN "${matchedUnit.game}":
    + Listen carefully to teacher's cues and observe visual prompts attentively.
    + Team representatives move quickly to identify word cards and pronounce words clearly in front of the class.
    + Other team members cheer enthusiastically and repeat words to reinforce memory.

- COMMUNICATIVE PAIR WORK PRACTICE:
  * PAIR WORK STEPS:
    + Pupil A: Point to pictures/words in the book and ask questions using the target pattern.
    + Pupil B: Look at pictures, respond promptly and naturally using the correct target vocabulary (${rawWordsList}).
    + Swap roles so both partners practice asking and answering with ALL target words.
    + Peer assessment: Listen to partner's pronunciation, help correct ending sounds and intonation.
    + Volunteer confidently to present dialogue in front of the whole class when invited.`
    },

    // 4. PRODUCTION & APPLICATION
    {
      name: "4. Production & Application",
      objective: `Apply learned vocabulary and sentence patterns to real-life communicative situations; foster creative thinking and presentation confidence in English.`,
      teacherActivity: `- CREATIVE APPLICATION & COMMUNICATIVE TASK:
  * Task: Give pupils a mini-project challenge using target vocabulary (${rawWordsList}):
    + Ask pupils to draw an item or show a classroom object and introduce it in 2-3 simple English sentences.
    + Guide pupils to use: ${matchedUnit.sentencePatterns[0] || "This is my..."}.
  * Invite 3-4 pupils to the front of the class to present their drawings/items.
  * Give encouraging feedback and assessment according to Circular 27/2020/TT-BGDĐT.
  * Lesson Wrap-up: Review target vocabulary (${rawWordsList}) and sentence patterns with the whole class.
  * Homework: Instruct pupils to practice pronouncing words at home, write each word in study notebook, and prepare for the next lesson.`,
      studentActivity: `- COMMUNICATIVE PRODUCTION & PRESENTATION:
  * Use target vocabulary (${rawWordsList}) to draw a quick illustration or pick an object from their school bag.
  * Stand in front of the class confidently and present 2-3 English sentences describing their product.
  * Listen to feedback from the teacher and classmates to improve communication skills.
  * Note down homework: practice pronunciation and write words in notebook.`
    }
  ];

  return {
    lessonTitle,
    unitName: matchedUnit.unitName,
    vocabulary: formattedVocab,
    rawWords,
    sentencePatterns: matchedUnit.sentencePatterns,
    phonicsSound: matchedUnit.phonics,
    gameName: matchedUnit.game,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    integrationNotes,
    activities
  };
}
