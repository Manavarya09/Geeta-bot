// Bhagavad Gita knowledge base
const gitaData = {
  "verses": [
    {
      "id": 1,
      "chapter": 2,
      "verse": 47,
      "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      "transliteration": "karmaṇy-evādhikāras te mā phaleṣhu kadāchana, mā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
      "english": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
      "theme": ["anxiety", "stress", "worry", "performance"],
      "emotion_tags": ["anxious", "worried", "stressed", "overwhelmed"],
      "therapeutic_explanation": "This verse teaches us to focus on our efforts rather than obsessing over outcomes. When you're feeling anxious about results, remember that you can only control your actions, not the consequences. This perspective brings peace and reduces anxiety about things beyond your control."
    },
    {
      "id": 2,
      "chapter": 2,
      "verse": 56,
      "sanskrit": "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥",
      "transliteration": "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ, vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate",
      "english": "One whose mind remains undisturbed amidst misery, who does not crave for pleasure, and who is free from attachment, fear, and anger, is called a sage of steady wisdom.",
      "theme": ["equanimity", "balance", "emotional_stability"],
      "emotion_tags": ["angry", "fearful", "unstable", "reactive"],
      "therapeutic_explanation": "True wisdom lies in maintaining inner peace regardless of external circumstances. This verse reminds us that emotional stability comes from within, not from changing external situations. Practice observing your emotions without being controlled by them."
    },
    {
      "id": 3,
      "chapter": 4,
      "verse": 10,
      "sanskrit": "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः। बहवो ज्ञानतपसा पूता मद्भावमागताः॥",
      "transliteration": "vīta-rāga-bhaya-krodhā man-mayā mām upāśritāḥ, bahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ",
      "english": "Being freed from attachment, fear and anger, becoming fully absorbed in Me, and taking refuge in Me, many persons in the past became purified by knowledge of Me, and thus attained My divine love.",
      "theme": ["fear", "anxiety", "surrender", "trust"],
      "emotion_tags": ["fearful", "anxious", "scared", "alone"],
      "therapeutic_explanation": "Fear often stems from feeling alone in our struggles. This verse teaches that true peace comes from surrendering our need to control everything and trusting in a higher power. You are not alone in your journey."
    },
    {
      "id": 4,
      "chapter": 12,
      "verse": 15,
      "sanskrit": "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
      "transliteration": "yasmān nodvijate loko lokān nodvijate cha yaḥ, harṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
      "english": "Those who are not a source of annoyance to anyone and who in turn are not agitated by anyone, who are equal in pleasure and pain, and free from fear and anxiety, such devotees are very dear to Me.",
      "theme": ["social_anxiety", "relationships", "peace"],
      "emotion_tags": ["socially anxious", "agitated", "irritated", "disturbed"],
      "therapeutic_explanation": "Social harmony comes from inner peace. When you're not reactive to others' actions and don't cause disturbance to others, you create a peaceful environment around you. This reduces social anxiety and improves relationships."
    },
    {
      "id": 5,
      "chapter": 2,
      "verse": 3,
      "sanskrit": "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
      "transliteration": "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate, kṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa",
      "english": "Yield not to unmanliness, O Partha, it does not become you. Shaking off this base faint-heartedness, stand up, O scorcher of enemies.",
      "theme": ["depression", "despair", "weakness", "motivation"],
      "emotion_tags": ["depressed", "hopeless", "weak", "defeated"],
      "therapeutic_explanation": "Sometimes we need a gentle push to overcome our inner weakness. This verse reminds you of your inner strength and potential. Depression and despair are temporary states - you have the power to rise above them and reclaim your strength."
    },
    {
      "id": 6,
      "chapter": 6,
      "verse": 5,
      "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
      "transliteration": "uddhared ātmanātmānaṁ nātmānam avasādayet, ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
      "english": "One must elevate oneself by one's own mind, not degrade oneself. The mind is the friend of the conditioned soul, and his enemy as well.",
      "theme": ["self_improvement", "mind_control", "self_help"],
      "emotion_tags": ["confused", "self-critical", "lost", "conflicted"],
      "therapeutic_explanation": "You are your own best friend and worst enemy. Your mind can either lift you up or bring you down. Take responsibility for your thoughts and choose to be kind to yourself. Self-compassion is the first step toward healing."
    },
    {
      "id": 7,
      "chapter": 18,
      "verse": 66,
      "sanskrit": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      "transliteration": "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja, ahaṁ tvā sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
      "english": "Abandon all varieties of dharma and surrender unto Me alone. I shall liberate you from all sinful reactions; do not fear.",
      "theme": ["surrender", "forgiveness", "guilt", "redemption"],
      "emotion_tags": ["guilty", "ashamed", "burdened", "regretful"],
      "therapeutic_explanation": "When guilt and shame weigh heavy on your heart, remember that redemption is always possible. Surrender your burdens and trust in forgiveness. Your past mistakes do not define your future potential."
    },
    {
      "id": 8,
      "chapter": 2,
      "verse": 62,
      "sanskrit": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
      "transliteration": "dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate, saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
      "english": "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
      "theme": ["anger", "attachment", "desire", "control"],
      "emotion_tags": ["angry", "frustrated", "attached", "craving"],
      "therapeutic_explanation": "Anger has a clear progression - it starts with excessive thinking about what we want, leading to attachment, then craving, and finally anger when we don't get it. Understanding this pattern helps you catch anger at its source - your thoughts."
    },
    {
      "id": 9,
      "chapter": 15,
      "verse": 7,
      "sanskrit": "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
      "transliteration": "mamaivāṁśho jīva-loke jīva-bhūtaḥ sanātanaḥ, manaḥ-ṣhaṣhṭhānīndriyāṇi prakṛiti-sthāni karṣhati",
      "english": "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.",
      "theme": ["identity", "purpose", "connection", "struggle"],
      "emotion_tags": ["lost", "disconnected", "purposeless", "struggling"],
      "therapeutic_explanation": "You are not separate or alone - you are a part of the divine consciousness. Your struggles are part of the human experience, but remember your true divine nature. This connection gives meaning to your challenges and purpose to your journey."
    },
    {
      "id": 10,
      "chapter": 2,
      "verse": 14,
      "sanskrit": "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
      "transliteration": "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ, āgamāpāyino 'nityās tāṁs titikṣhasva bhārata",
      "english": "O son of Kunti, the contact between the senses and sense objects gives rise to feelings of heat and cold, pleasure and pain. These feelings are temporary and fleeting, so you must learn to tolerate them, O Bharata.",
      "theme": ["impermanence", "acceptance", "endurance"],
      "emotion_tags": ["suffering", "in pain", "uncomfortable", "restless"],
      "therapeutic_explanation": "All experiences - both pleasant and unpleasant - are temporary. Just as winter is followed by spring, your current pain or discomfort will pass. Develop the patience to endure difficult times, knowing they are not permanent."
    }
  ],
  "daily_quotes": [
    {
      "id": 1,
      "verse": "2.47",
      "text": "Focus on your actions, not on results. Peace comes from letting go of outcomes."
    },
    {
      "id": 2,
      "verse": "2.56",
      "text": "A wise person remains calm in both joy and sorrow, free from attachment, fear, and anger."
    },
    {
      "id": 3,
      "verse": "18.66",
      "text": "Surrender your worries and trust in divine protection. You are never alone."
    }
  ]
};

// App state
let currentMood = null;
let bookmarkedVerses = [];
let chatHistory = [];
let isDarkMode = false;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Geetabot...');
    
    displayDailyQuote();
    setupEventListeners();
    detectSystemTheme();
    
    console.log('Geetabot initialized successfully');
}

function displayDailyQuote() {
    const dailyQuote = document.getElementById('daily-quote');
    const dailyVerse = document.getElementById('daily-verse');
    
    if (!dailyQuote || !dailyVerse) {
        console.error('Daily quote elements not found');
        return;
    }
    
    const today = new Date();
    const quoteIndex = today.getDate() % gitaData.daily_quotes.length;
    const quote = gitaData.daily_quotes[quoteIndex];
    
    dailyQuote.textContent = quote.text;
    dailyVerse.textContent = `— Bhagavad Gita ${quote.verse}`;
    
    console.log('Daily quote displayed');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation
    const beginBtn = document.getElementById('begin-btn');
    const backBtn = document.getElementById('back-btn');
    
    if (beginBtn) {
        beginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Begin conversation clicked');
            showChatInterface();
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back button clicked');
            showWelcomeScreen();
        });
    }
    
    // Chat functionality
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Send button clicked');
            sendMessage();
        });
    }
    
    if (userInput) {
        userInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                console.log('Enter key pressed');
                sendMessage();
            }
        });
        
        // Add focus event to ensure input is working
        userInput.addEventListener('focus', function() {
            console.log('Input focused');
        });
        
        userInput.addEventListener('input', function() {
            console.log('Input value changed:', this.value);
        });
    }
    
    // Mood selection
    const moodChips = document.querySelectorAll('.mood-chip');
    moodChips.forEach(chip => {
        chip.addEventListener('click', function(e) {
            const mood = e.target.getAttribute('data-mood');
            console.log('Mood selected:', mood);
            selectMood(mood);
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('toggle-theme');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Theme toggle clicked');
            toggleTheme();
        });
    }
    
    // Clear chat
    const clearChatBtn = document.getElementById('clear-chat');
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clear chat clicked');
            clearChat();
        });
    }
    
    console.log('Event listeners set up successfully');
}

function showChatInterface() {
    console.log('Showing chat interface...');
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const chatInterface = document.getElementById('chat-interface');
    
    if (welcomeScreen && chatInterface) {
        welcomeScreen.style.display = 'none';
        chatInterface.style.display = 'flex';
        
        // Focus on input after transition
        const userInput = document.getElementById('user-input');
        if (userInput) {
            setTimeout(() => {
                userInput.focus();
                console.log('Input focused after transition');
            }, 100);
        }
        
        console.log('Chat interface shown');
    } else {
        console.error('Could not find welcome screen or chat interface elements');
    }
}

function showWelcomeScreen() {
    console.log('Showing welcome screen...');
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const chatInterface = document.getElementById('chat-interface');
    
    if (welcomeScreen && chatInterface) {
        chatInterface.style.display = 'none';
        welcomeScreen.style.display = 'flex';
        console.log('Welcome screen shown');
    }
}

function selectMood(mood) {
    console.log('Selecting mood:', mood);
    currentMood = mood;
    
    // Update UI
    document.querySelectorAll('.mood-chip').forEach(chip => {
        chip.classList.remove('selected');
    });
    
    const selectedChip = document.querySelector(`[data-mood="${mood}"]`);
    if (selectedChip) {
        selectedChip.classList.add('selected');
    }
    
    // Auto-hide mood selector after selection
    const moodSelector = document.getElementById('mood-selector');
    if (moodSelector) {
        setTimeout(() => {
            moodSelector.style.opacity = '0.5';
            moodSelector.style.pointerEvents = 'none';
        }, 1000);
        
        // Reset after 30 seconds
        setTimeout(() => {
            moodSelector.style.opacity = '1';
            moodSelector.style.pointerEvents = 'auto';
            document.querySelectorAll('.mood-chip').forEach(chip => {
                chip.classList.remove('selected');
            });
            currentMood = null;
        }, 30000);
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    if (!userInput) {
        console.error('User input element not found');
        return;
    }
    
    const message = userInput.value.trim();
    console.log('Sending message:', message);
    
    if (!message) {
        console.log('Empty message, not sending');
        return;
    }
    
    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate bot response after delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateBotResponse(message);
        addBotMessage(response);
    }, 1500 + Math.random() * 1000);
}

function addMessage(content, sender) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) {
        console.error('Chat messages container not found');
        return;
    }
    
    console.log('Adding message:', content, 'from:', sender);
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${escapeHtml(content)}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addBotMessage(response) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) {
        console.error('Chat messages container not found');
        return;
    }
    
    console.log('Adding bot message:', response);
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    let html = `<p>${escapeHtml(response.message)}</p>`;
    
    if (response.verse) {
        html += `
            <div class="sanskrit-verse">${escapeHtml(response.verse.sanskrit)}</div>
            <div class="english-translation">${escapeHtml(response.verse.english)}</div>
            <div class="therapeutic-explanation">${escapeHtml(response.verse.therapeutic_explanation)}</div>
            <button class="bookmark-btn" onclick="bookmarkVerse(${response.verse.id})">
                ⭐ Bookmark this verse
            </button>
        `;
    }
    
    contentDiv.innerHTML = html;
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function generateBotResponse(message) {
    console.log('Generating bot response for:', message);
    
    const emotions = detectEmotions(message.toLowerCase());
    const verse = findRelevantVerse(emotions, currentMood);
    
    let responseMessage = getTherapeuticResponse(emotions, currentMood);
    
    return {
        message: responseMessage,
        verse: verse
    };
}

function detectEmotions(message) {
    const emotionKeywords = {
        anxious: ['anxious', 'worried', 'nervous', 'stressed', 'fear', 'scared', 'panic', 'anxiety', 'worry', 'interview', 'exam', 'test', 'work'],
        angry: ['angry', 'mad', 'furious', 'annoyed', 'irritated', 'rage', 'hate', 'frustrated', 'upset'],
        sad: ['sad', 'depressed', 'down', 'hopeless', 'lonely', 'empty', 'crying', 'tears', 'grief', 'loss'],
        confused: ['confused', 'lost', 'don\'t know', 'unclear', 'uncertain', 'doubt', 'purpose', 'direction'],
        calm: ['calm', 'peaceful', 'serene', 'meditation', 'quiet', 'still', 'balance']
    };
    
    const detectedEmotions = [];
    
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(keyword => message.includes(keyword))) {
            detectedEmotions.push(emotion);
        }
    }
    
    console.log('Detected emotions:', detectedEmotions);
    return detectedEmotions.length > 0 ? detectedEmotions : ['general'];
}

function findRelevantVerse(emotions, mood) {
    let relevantVerses = gitaData.verses;
    
    // Filter by mood if selected
    if (mood) {
        relevantVerses = relevantVerses.filter(verse => 
            verse.emotion_tags.includes(mood)
        );
    }
    
    // Filter by detected emotions
    if (emotions.length > 0 && emotions[0] !== 'general') {
        relevantVerses = relevantVerses.filter(verse => 
            emotions.some(emotion => verse.emotion_tags.includes(emotion))
        );
    }
    
    // Return random relevant verse or fallback
    if (relevantVerses.length > 0) {
        return relevantVerses[Math.floor(Math.random() * relevantVerses.length)];
    }
    
    return gitaData.verses[Math.floor(Math.random() * gitaData.verses.length)];
}

function getTherapeuticResponse(emotions, mood) {
    const responses = {
        anxious: [
            "I understand your anxiety, dear soul. Let me share some timeless wisdom that can bring you peace.",
            "Anxiety is natural, but remember that you are stronger than your worries. Here's guidance from the Gita:",
            "When anxiety clouds your mind, turn to this ancient wisdom for clarity and comfort:"
        ],
        angry: [
            "I sense your anger, and I want you to know that it's okay to feel this way. Let's find peace together:",
            "Anger is a powerful emotion, but it need not control you. Here's wisdom to help you find balance:",
            "Your anger shows your passion for life. Let's channel that energy positively with this teaching:"
        ],
        sad: [
            "I feel your sadness, and my heart goes out to you. You are not alone in this darkness. Here's light from the Gita:",
            "Sadness is part of the human journey, but it's not where your story ends. Let me share some hope:",
            "Your sorrow is heard and understood. May this ancient wisdom bring comfort to your heart:"
        ],
        confused: [
            "Confusion is often the beginning of wisdom. Let me share guidance that can illuminate your path:",
            "When life feels unclear, sometimes we need to step back and gain perspective. Here's wisdom to guide you:",
            "It's natural to feel lost sometimes. Let this teaching help you find your inner compass:"
        ],
        calm: [
            "Your peaceful energy is beautiful. Let's deepen this serenity with some profound wisdom:",
            "In your calmness, you're ready to receive deeper truths. Here's a verse to enhance your inner peace:",
            "Your tranquil state opens the door to wisdom. May this teaching resonate with your peaceful heart:"
        ]
    };
    
    const emotionKey = emotions.length > 0 ? emotions[0] : (mood || 'calm');
    const responseArray = responses[emotionKey] || responses.calm;
    
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function bookmarkVerse(verseId) {
    console.log('Bookmarking verse:', verseId);
    
    const verse = gitaData.verses.find(v => v.id === verseId);
    if (verse && !bookmarkedVerses.find(b => b.id === verseId)) {
        bookmarkedVerses.push(verse);
        
        // Update button state
        const button = event.target;
        button.textContent = '⭐ Bookmarked!';
        button.classList.add('bookmarked');
        button.disabled = true;
        
        // Show confirmation
        setTimeout(() => {
            button.textContent = '⭐ Bookmarked';
        }, 2000);
        
        console.log('Verse bookmarked successfully');
    }
}

function showTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.classList.remove('hidden');
        scrollToBottom();
    }
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.classList.add('hidden');
    }
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function clearChat() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                <p>Namaste 🙏 I am Geetabot, your spiritual guide based on Bhagavad Gita's timeless wisdom.</p>
                <p>How are you feeling today?</p>
            </div>
        </div>
    `;
    chatHistory = [];
    console.log('Chat cleared');
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode = true;
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        console.log('Dark mode detected');
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
    
    // Animate the toggle button
    const themeToggle = document.getElementById('toggle-theme');
    if (themeToggle) {
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    }
    
    console.log('Theme toggled to:', isDarkMode ? 'dark' : 'light');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Global function for bookmark functionality
window.bookmarkVerse = bookmarkVerse;